"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { Github, ArrowLeft, Loader2, GitCommit, User, Briefcase, Award } from "lucide-react";
import ReportFooter from "@/components/ReportFooter";
import RoleCard from "@/components/RoleCard";
import ProjectCard from "@/components/ProjectCard";
import StrengthWeakness from "@/components/StrengthWeakness";
import CommitChart from "@/components/CommitChart";

function AnalyzeContent() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!username) return;

        const fetchData = async () => {
            try {
                const res = await fetch("/api/analyze", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username }),
                });

                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.error || "Failed to analyze profile");
                }

                const result = await res.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    if (!username) {
        return (
            <div className="flex min-h-screen items-center justify-center p-8 bg-[#f5f5f4]">
                <p className="text-red-500">No username provided.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center p-8 bg-[#f5f5f4]">
                <div className="space-y-4 text-center flex flex-col items-center">
                    <Loader2 className="h-12 w-12 text-black animate-spin" />
                    <p className="text-zinc-500 animate-pulse font-mono text-xs uppercase tracking-widest">
                        Auditing GitHub Profile...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center p-8 gap-4 bg-[#f5f5f4]">
                <div className="text-red-500 text-lg font-medium">{error}</div>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-zinc-500 hover:text-black hover:underline"
                >
                    <ArrowLeft className="w-4 h-4" /> Try another username
                </Link>
            </div>
        );
    }

    // Safely access data with fallbacks
    const aiData = data?.aiData || {};
    const topRoles = aiData.topRoles || [];
    const strengths = aiData.strengths || [];
    const weaknesses = aiData.weaknesses || [];
    const summary = aiData.summary || data?.insights || "No summary available.";

    return (
        <div className="min-h-screen bg-[#f5f5f4] text-black font-sans selection:bg-zinc-200">
            <nav className="border-b border-zinc-200 py-6 px-8 md:px-12 flex justify-between items-center sticky top-0 bg-[#f5f5f4]/90 backdrop-blur-md z-10 transition-all">
                <Link href="/" className="font-semibold text-sm tracking-[0.1em] uppercase text-black hover:opacity-70">
                    Technical Audit Report
                </Link>
                <div className="flex gap-4 text-xs font-mono text-zinc-500 uppercase tracking-tight">
                    <span>Ref: GPA-{new Date().toISOString().slice(0, 10)}</span>
                </div>
            </nav>

            <main className="max-w-[800px] mx-auto px-8 py-20 md:py-24">
                {/* Header Section */}
                <header className="mb-24 flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex flex-col items-start">
                        <h1 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Portfolio Analysis
                        </h1>
                        <div className="text-8xl md:text-9xl font-semibold tracking-tighter text-black">
                            {data?.score?.total || 0}
                        </div>
                        <div className="text-zinc-500 text-xl tracking-tight mt-1">
                            overall portfolio score
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        {data?.profile?.avatar_url ? (
                            <img
                                alt="User Profile"
                                className="w-32 h-32 md:w-32 md:h-32 object-cover rounded-full border-2 border-zinc-200 shadow-sm"
                                src={data.profile.avatar_url}
                            />
                        ) : (
                            <div className="w-32 h-32 bg-zinc-200 rounded-full border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-400">
                                <Github className="w-12 h-12 opacity-20" />
                            </div>
                        )}
                        <div className="mt-4 text-center">
                            <h2 className="font-bold text-2xl">{data?.profile?.name || username}</h2>
                            <p className="text-zinc-500 text-base">@{username}</p>
                        </div>
                    </div>
                </header>

                {/* Suggested Roles */}
                {topRoles.length > 0 && (
                    <section className="mb-20">
                        <div className="flex items-center gap-2 mb-6">
                            <User className="w-4 h-4 text-zinc-400" />
                            <h2 className="text-sm font-bold text-black uppercase tracking-[0.1em]">
                                Recommended Roles
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {topRoles.map((role: string, i: number) => (
                                <RoleCard key={i} role={role} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <section>
                        <h2 className="text-sm font-bold text-black uppercase tracking-[0.1em] border-b border-zinc-200 pb-4 mb-4">
                            Commit Activity
                        </h2>
                        {data?.commitChart ? (
                            <CommitChart data={data.commitChart} />
                        ) : (
                            <div className="h-64 flex items-center justify-center text-zinc-400 text-sm italic">
                                No activity data available
                            </div>
                        )}
                        <p className="text-zinc-400 text-[10px] uppercase tracking-wider mt-2 text-right">
                            Recent Public Push Activity
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-black uppercase tracking-[0.05em] border-b border-zinc-200 pb-4 mb-8">
                            Key Signals
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <span className="text-black text-lg font-medium">
                                        Documentation Quality
                                    </span>
                                    <span className="text-black font-mono text-lg">
                                        {Math.round(((data?.score?.breakdown?.documentation || 0) / 20) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                                    <div
                                        className="bg-black h-full rounded-full"
                                        style={{ width: `${Math.round(((data?.score?.breakdown?.documentation || 0) / 20) * 100)}%` }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-black text-lg font-medium">
                                        Impact & Activity
                                    </span>
                                    <span className="text-black font-mono text-lg">
                                        {Math.round(((data?.score?.breakdown?.impact || 0) / 15) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                                    <div
                                        className="bg-black h-full rounded-full"
                                        style={{ width: `${Math.round(((data?.score?.breakdown?.impact || 0) / 15) * 100)}%` }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-black text-lg font-medium">
                                        Best Practices
                                    </span>
                                    <span className="text-black font-mono text-lg">
                                        {Math.round(((data?.score?.breakdown?.bestPractices || 0) / 30) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                                    <div
                                        className="bg-black h-full rounded-full"
                                        style={{ width: `${Math.round(((data?.score?.breakdown?.bestPractices || 0) / 30) * 100)}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Recruiter Analysis */}
                <section className="mb-20">
                    <div className="flex items-center gap-2 mb-8">
                        <Briefcase className="w-4 h-4 text-zinc-400" />
                        <h2 className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">
                            Recruiter Analysis
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                            Recruiter Summary
                        </h3>
                        <div className="bg-white border border-zinc-200 rounded-lg p-8 font-mono text-base leading-relaxed text-zinc-800 shadow-sm">
                            {summary}
                        </div>
                    </div>

                    <StrengthWeakness strengths={strengths} weaknesses={weaknesses} />
                </section>

                {/* Top Projects */}
                {data?.topProjects && data.topProjects.length > 0 && (
                    <section className="mb-20">
                        <div className="flex items-center gap-2 mb-8">
                            <Award className="w-4 h-4 text-zinc-400" />
                            <h2 className="text-sm font-bold text-black uppercase tracking-[0.1em]">
                                Top Ranked Projects
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {data.topProjects.map((repo: any) => (
                                <ProjectCard key={repo.id} repo={repo} />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <ReportFooter />
        </div >
    );
}

export default function AnalyzePage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center p-8 bg-[#f5f5f4]">
                    <div className="space-y-4 text-center flex flex-col items-center">
                        <Loader2 className="h-12 w-12 text-black animate-spin" />
                    </div>
                </div>
            }
        >
            <AnalyzeContent />
        </Suspense>
    );
}

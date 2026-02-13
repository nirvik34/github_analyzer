"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Terminal from "@/components/Terminal";
import Footer from "@/components/Footer";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleAnalyze = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!username.trim()) return;
    router.push(`/analyze?username=${username}`);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 relative pt-32 pb-24 min-h-screen bg-white text-black">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="w-full max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <div className="space-y-8 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 mb-2 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-800"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black leading-[1.1]">
              Understand how recruiters
              <br />
              see your GitHub.
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
              Enter a username to generate a comprehensive portfolio analysis and
              discover what your code says about you.
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto mt-8">
            <form className="relative group" onSubmit={handleAnalyze}>
              <div className="relative flex items-center">
                <input
                  className="w-full h-14 pl-5 pr-32 bg-white border border-zinc-200 rounded-lg text-lg text-black placeholder:text-zinc-400 outline-none focus:border-black focus:ring-0 transition-all shadow-sm group-hover:border-zinc-300"
                  placeholder="github-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button
                  className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center shadow-sm"
                  type="submit"
                >
                  Analyze
                </button>
              </div>
            </form>
            <div className="mt-6 flex justify-center gap-3 text-xs text-zinc-400">
              <span>Try:</span>
              <button
                onClick={() => setUsername("shadcn")}
                className="hover:text-zinc-800 transition-colors"
              >
                shadcn
              </button>
              <span className="text-zinc-300">/</span>
              <button
                onClick={() => setUsername("torvalds")}
                className="hover:text-zinc-800 transition-colors"
              >
                torvalds
              </button>
              <span className="text-zinc-300">/</span>
              <button
                onClick={() => setUsername("leerob")}
                className="hover:text-zinc-800 transition-colors"
              >
                leerob
              </button>
            </div>
          </div>
        </div>
        <section className="w-full max-w-5xl mx-auto py-32 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
                Analyze your GitHub like a recruiter
              </h2>
              <p className="text-lg text-zinc-500">
                Transparent scoring. Clear signals. Actionable insights.
              </p>
              <div className="inline-flex items-center bg-zinc-100 px-3 py-1.5 rounded-md border border-zinc-200">
                <span className="font-mono text-sm text-zinc-600">
                  analyze nirvik
                </span>
              </div>
            </div>
            <div className="relative">
              <Terminal username="nirvik" score={78} />
              <div className="absolute -z-0 -bottom-6 -right-6 w-full h-full border border-dashed border-zinc-200 rounded-xl"></div>
            </div>
          </div>
        </section>
        <section className="w-full max-w-5xl mx-auto py-24 px-4 md:px-8 border-t border-zinc-100">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black">
              We analyze what actually matters
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Technical benchmarks designed to mirror professional screening
              workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Activity"
              description="Commit consistency and contribution streaks across diverse repositories."
              weight="20%"
            />
            <FeatureCard
              title="Project Depth"
              description="Evaluation of complexity through codebase size, architecture, and feature set."
              weight="25%"
            />
            <FeatureCard
              title="Documentation"
              description="Assessment of README clarity, installation guides, and inline code comments."
              weight="15%"
            />
            <FeatureCard
              title="Impact"
              description="Star counts, fork rates, and real-world utility of public contributions."
              weight="15%"
            />
            <FeatureCard
              title="Tech Diversity"
              description="Breadth of languages, frameworks, and tooling proficiency shown in history."
              weight="10%"
            />
            <FeatureCard
              title="Professionalism"
              description="Semantic commit messages, branch hygiene, and issue management."
              weight="15%"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FeatureCard({
  title,
  description,
  weight,
}: {
  title: string;
  description: string;
  weight: string;
}) {
  return (
    <div className="p-8 rounded-xl border border-zinc-200 bg-white flex flex-col justify-between h-full space-y-4 shadow-sm hover:border-zinc-300 transition-colors">
      <div className="space-y-2">
        <h3 className="font-semibold text-black">{title}</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
        Weight: {weight}
      </div>
    </div>
  );
}

"use client";

import { CheckCircle, AlertOctagon, HelpCircle } from "lucide-react";

export default function RecruiterConfidence({ score, reason }: { score: number, reason: string }) {
    let color = "text-zinc-500";
    let bg = "bg-zinc-100";
    let icon = <HelpCircle className="w-5 h-5" />;

    if (score >= 80) {
        color = "text-emerald-600";
        bg = "bg-emerald-50";
        icon = <CheckCircle className="w-5 h-5" />;
    } else if (score >= 50) {
        color = "text-amber-600";
        bg = "bg-amber-50";
        icon = <AlertOctagon className="w-5 h-5" />;
    } else {
        color = "text-rose-600";
        bg = "bg-rose-50";
        icon = <AlertOctagon className="w-5 h-5" />;
    }

    return (
        <div className={`rounded-xl p-6 ${bg} border border-transparent flex flex-col items-center text-center gap-4 shadow-sm`}>
            <div className="flex flex-col items-center">
                <span className={`text-xs font-bold uppercase tracking-widest ${color} mb-2`}>
                    Recruiter Confidence
                </span>
                <div className={`text-5xl font-bold tracking-tight ${color}`}>
                    {score}%
                </div>
            </div>

            <p className="text-sm text-zinc-600 font-medium max-w-xs leading-relaxed">
                {reason}
            </p>

            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${color} bg-white/50 px-3 py-1.5 rounded-full`}>
                {icon}
                {score >= 80 ? "Highly Recommended" : score >= 50 ? "Consider for Interview" : "Needs Improvement"}
            </div>
        </div>
    );
}

export default function ScoreBreakdown({ breakdown }: { breakdown: any }) {
    const items = [
        { label: "Documentation", score: breakdown.documentation, max: 15 },
        { label: "Impact & Reach", score: breakdown.impact, max: 15 },
        { label: "Consistency", score: breakdown.activity, max: 15 },
        { label: "Technical Depth", score: breakdown.depth, max: 15 },
        { label: "Repository Completion", score: breakdown.completion, max: 10 },
        { label: "Collaboration", score: breakdown.collaboration, max: 10 },
        { label: "Code Hygiene", score: breakdown.hygiene, max: 10 },
        { label: "Portfolio Signal", score: breakdown.portfolio, max: 10 }
    ];

    return (
        <div className="space-y-6">
            {items.map((item, i) => (
                <div key={i}>
                    <div className="flex justify-between items-baseline mb-2">
                        <span className="text-zinc-700 text-sm font-medium">
                            {item.label}
                        </span>
                        <span className="text-black font-mono text-sm">
                            {Math.round((item.score / item.max) * 100)}%
                        </span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                        <div
                            className={`h-full rounded-full ${(item.score / item.max) > 0.8 ? 'bg-green-500' :
                                    (item.score / item.max) > 0.5 ? 'bg-black' : 'bg-red-500'
                                }`}
                            style={{ width: `${Math.round((item.score / item.max) * 100)}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">
                        <span>{Math.round(item.score)} pts</span>
                        <span>Max {item.max}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

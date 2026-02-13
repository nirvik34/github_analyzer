"use client";

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip
} from "recharts";

export default function ScoreRadar({ breakdown }: { breakdown: any }) {
    const data = [
        { subject: "Docs", A: breakdown.documentation, fullMark: 15 },
        { subject: "Impact", A: breakdown.impact, fullMark: 15 },
        { subject: "Consistency", A: breakdown.activity, fullMark: 15 },
        { subject: "Depth", A: breakdown.depth, fullMark: 15 },
        { subject: "Completion", A: breakdown.completion, fullMark: 10 },
        { subject: "Collab", A: breakdown.collaboration, fullMark: 10 },
        { subject: "Hygiene", A: breakdown.hygiene, fullMark: 10 },
        { subject: "Portfolio", A: breakdown.portfolio, fullMark: 10 }
    ];

    // Prepare normalized data for the chart so all axes look relatively equal (0-100 scale visually)
    // Or just plot raw points if the max varies?
    // Let's normalize it to 100% for the chart to look balanced?
    // Docs: 15 max. So value/15 * 100.
    // Actually, user wants to see the score contribute to total?
    // No, a radar chart usually shows proficiency. Proficiency is usually 0-100%.
    // So normalized is better.

    const normalizedData = data.map(d => ({
        ...d,
        value: (d.A / d.fullMark) * 100
    }));

    return (
        <div className="w-full h-[300px] flex items-center justify-center font-sans text-xs">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={normalizedData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#52525b", fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name="Score"
                        dataKey="value"
                        stroke="#18181b"
                        strokeWidth={2}
                        fill="#18181b"
                        fillOpacity={0.1}
                    />
                    <Tooltip
                        formatter={(value?: number) => value ? Math.round(value) + "%" : ""}
                        contentStyle={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            border: "1px solid #e4e4e7",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                        }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

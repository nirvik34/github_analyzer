"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

export default function CommitChart({ data }: { data: { date: string; commits: number }[] }) {
    if (!data || data.length === 0) {
        return (
            <div className="flex h-64 items-center justify-center border border-dashed border-zinc-200 rounded-lg bg-zinc-50 text-zinc-400 text-sm">
                No recent activity data available
            </div>
        );
    }

    return (
        <div className="w-full h-64 font-sans text-xs">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#71717a", fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#71717a", fontSize: 12 }}
                        dx={-10}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#fff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
                        }}
                        itemStyle={{ color: "#000", fontSize: "14px", fontWeight: "500" }}
                        labelStyle={{ color: "#71717a", marginBottom: "4px", fontSize: "12px" }}
                        cursor={{ stroke: "#d4d4d8", strokeWidth: 1 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="commits"
                        stroke="#2563eb"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, strokeWidth: 0 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

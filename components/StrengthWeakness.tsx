import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

export default function StrengthWeakness({ strengths, weaknesses }: any) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-50 border border-zinc-200 rounded-lg p-8">
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-widest text-zinc-500">
                        Key Strengths
                    </h3>
                </div>
                <ul className="space-y-4">
                    {strengths.map((s: string, i: number) => (
                        <li key={i} className="flex gap-3 text-base text-zinc-700 leading-relaxed">
                            <span className="text-green-500 mt-1">•</span>
                            {s}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6 md:border-l md:border-zinc-200 md:pl-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-red-600">
                        <AlertTriangle className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-widest text-zinc-500">
                        Red Flags
                    </h3>
                </div>
                <ul className="space-y-4">
                    {weaknesses.map((w: string, i: number) => (
                        <li key={i} className="flex gap-3 text-base text-zinc-700 leading-relaxed">
                            <span className="text-red-500 mt-1">•</span>
                            {w}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

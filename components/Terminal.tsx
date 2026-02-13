export default function Terminal({ username, score }: { username: string; score: number }) {
    return (
        <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-2xl relative z-10 w-full">
            <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex-grow text-center">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                        Terminal
                    </span>
                </div>
            </div>
            <div className="p-6 font-mono text-[13px] leading-relaxed text-zinc-700">
                <div className="flex gap-2 mb-2">
                    <span className="text-zinc-400">$</span>
                    <span className="text-black">analyze {username}</span>
                </div>
                <div className="text-zinc-400 mb-1">&gt; Fetching repositories...</div>
                <div className="text-zinc-400 mb-1">&gt; Evaluating commit activity...</div>
                <div className="text-zinc-400 mb-4">&gt; Scoring documentation quality...</div>
                <div className="pt-4 border-t border-zinc-100">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-medium text-black text-lg">
                            Overall Score: {score}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-green-50 text-green-600 font-bold uppercase">
                            Pass
                        </span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-zinc-500">
                            <span>Project Depth</span>
                            <span className="text-black">72</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden">
                            <div
                                className="bg-black h-full"
                                style={{ width: "72%" }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-zinc-500 pt-2">
                            <span>Maintenance Intensity</span>
                            <span className="text-black">84</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden">
                            <div
                                className="bg-black h-full"
                                style={{ width: "84%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

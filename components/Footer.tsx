export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 md:px-12 flex justify-between items-end border-t border-zinc-50 dark:border-zinc-900 bg-white dark:bg-[#191919] mt-auto">
            <div className="text-[10px] md:text-xs text-zinc-400 dark:text-zinc-600 space-x-4">
                <a
                    className="hover:text-black dark:hover:text-zinc-300 transition-colors"
                    href="#"
                >
                    Privacy
                </a>
                <a
                    className="hover:text-black dark:hover:text-zinc-300 transition-colors"
                    href="#"
                >
                    Terms
                </a>
            </div>
            <div className="text-[10px] md:text-xs text-zinc-300 dark:text-zinc-700 flex items-center gap-2">
                <span>Powered by LLM Analysis</span>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
        </footer>
    );
}

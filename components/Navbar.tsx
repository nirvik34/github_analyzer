export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 bg-white/60 dark:bg-[#191919]/60 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-300">
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium tracking-tight text-zinc-900 dark:text-white font-mono">GPA</span>
            </div>
            <div className="flex items-center gap-6">
                <a
                    className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                    href="#"
                >
                    Docs
                </a>
                <a
                    className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                    href="#"
                >
                    Sign In
                </a>
            </div>
        </nav>
    );
}

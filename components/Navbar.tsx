export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-white/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium tracking-tight text-zinc-900 font-mono">GPA</span>
            </div>
            <div className="flex items-center gap-6">
                <a
                    className="text-sm text-zinc-500 hover:text-black transition-colors"
                    href="#"
                >
                    Docs
                </a>
                <a
                    className="text-sm text-zinc-500 hover:text-black transition-colors"
                    href="#"
                >
                    Sign In
                </a>
            </div>
        </nav>
    );
}

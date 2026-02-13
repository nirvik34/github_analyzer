import { Star, GitFork, AlertCircle } from "lucide-react";

export default function ProjectCard({ repo }: any) {
    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col bg-white border border-zinc-200 rounded-lg p-5 hover:border-black transition-colors shadow-sm group"
        >
            <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-black group-hover:underline truncate pr-2">
                    {repo.name}
                </h3>
                <div className="flex items-center gap-1 text-sm font-mono bg-zinc-100 px-2 py-1 rounded text-zinc-600">
                    <Star className="w-3 h-3" /> {repo.stargazers_count}
                </div>
            </div>

            <p className="text-zinc-500 text-base mb-4 line-clamp-2 flex-grow">
                {repo.description || "No description provided."}
            </p>

            <div className="flex items-center justify-between text-sm text-zinc-400 mt-auto pt-4 border-t border-zinc-50 border-dashed">
                <div className="flex gap-3">
                    <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" /> {repo.forks_count}
                    </span>
                    <span className="flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {repo.open_issues_count}
                    </span>
                </div>
                {repo.language && (
                    <span className="font-mono text-xs uppercase tracking-wider">
                        {repo.language}
                    </span>
                )}
            </div>
        </a>
    );
}

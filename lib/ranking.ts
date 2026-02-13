export interface RankedRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    open_issues_count: number;
    updated_at: string;
    score: number;
}

export function rankTopProjects(repos: any[]): RankedRepo[] {
    return repos
        .map(repo => ({
            ...repo,
            score:
                repo.stargazers_count * 3 +
                repo.forks_count * 2 +
                (repo.open_issues_count === 0 ? 5 : 0) +
                (repo.description ? 5 : 0) +
                (repo.language ? 3 : 0)
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}

export function extractLanguages(repos: any[]): string[] {
    return [...new Set(repos.map(r => r.language).filter(Boolean))];
}

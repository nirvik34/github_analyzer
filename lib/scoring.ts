export function calculateScore(repos: any[]) {
    const totalRepos = repos.length;
    if (totalRepos === 0) {
        return {
            total: 0,
            breakdown: {
                documentation: 0,
                impact: 0
            }
        };
    }

    const withReadme = repos.filter(r => r.description).length;
    const scoreDocumentation = (withReadme / totalRepos) * 20;

    const activeRepos = repos.filter(r => r.stargazers_count > 0).length;
    const impactScore = (activeRepos / totalRepos) * 15;

    const finalScore = scoreDocumentation + impactScore;

    return {
        total: Math.min(Math.round(finalScore), 100),
        breakdown: {
            documentation: scoreDocumentation,
            impact: impactScore
        }
    };
}

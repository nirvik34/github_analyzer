export function calculateScore(repos: any[], events: any[] = [], profile: any = {}) {
    if (!repos || repos.length === 0) {
        return {
            total: 0,
            breakdown: {
                documentation: 0,
                impact: 0,
                activity: 0,
                depth: 0,
                completion: 0,
                collaboration: 0,
                hygiene: 0,
                portfolio: 0
            }
        };
    }

    // 1. Documentation (15%)
    const reposWithReadme = repos.filter(r => r.description && r.length > 20).length; // Crude proxy, assuming description length implies effort
    const docScore = (reposWithReadme / Math.max(repos.length, 1)) * 15;

    // 2. Impact (15%)
    const stars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
    const forks = repos.reduce((acc, r) => acc + r.forks_count, 0);
    const impactRaw = (stars * 2) + forks + (profile.followers || 0);
    const impactScore = Math.min(impactRaw, 150) / 10; // Cap at 15 points

    // 3. Activity Consistency (15%)
    // Check events in last 30/60/90 days. events usually returns last 90 days or 300 events.
    const recentActivity = events.length;
    const activityScore = Math.min(recentActivity, 30) / 2; // 30 events = 15 points (max)

    // 4. Technical Depth (15%)
    const languages = new Set(repos.map(r => r.language).filter(Boolean));
    const depthScore = Math.min(languages.size * 3, 15); // 5 languages = max points

    // 5. Repository Completion (10%)
    const hasHomepage = repos.filter(r => r.homepage).length;
    const hasTopics = repos.filter(r => r.topics && r.topics.length > 0).length;
    const completionScore = (Math.min(hasHomepage, 5) + Math.min(hasTopics, 5)); // Max 10

    // 6. Collaboration (10%)
    // Crude proxy using forks (outgoing) isn't available in standard repo object easily unless we check `fork` boolean.
    // We can check PullRequestEvent in events.
    const prEvents = events.filter(e => e.type === 'PullRequestEvent').length;
    const collabScore = Math.min(prEvents * 2, 10);

    // 7. Code Hygiene (10%)
    // Proxy: Has License, Has Description, Updated Recently (last 30 days)
    const hasLicense = repos.filter(r => r.license).length;
    const recentlyUpdated = repos.filter(r => {
        const updated = new Date(r.updated_at);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - updated.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30;
    }).length;
    const hygieneScore = (Math.min(hasLicense, 5) + Math.min(recentlyUpdated, 5));

    // 8. Portfolio Signal (10%)
    // Check for high star count repos ("Pinned" proxy)
    const significantRepos = repos.filter(r => r.stargazers_count >= 5).length;
    const portfolioScore = Math.min(significantRepos * 2, 10);

    const total =
        docScore +
        impactScore +
        activityScore +
        depthScore +
        completionScore +
        collabScore +
        hygieneScore +
        portfolioScore;

    return {
        total: Math.min(Math.round(total), 100),
        breakdown: {
            documentation: Math.round(docScore),
            impact: Math.round(impactScore),
            activity: Math.round(activityScore),
            depth: Math.round(depthScore),
            completion: Math.round(completionScore),
            collaboration: Math.round(collabScore),
            hygiene: Math.round(hygieneScore),
            portfolio: Math.round(portfolioScore)
        }
    };
}

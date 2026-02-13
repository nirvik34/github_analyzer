export function recruiterPrompt(summary: any) {
    return `
You are a senior technical recruiter.

Analyze this GitHub profile summary:

${JSON.stringify(summary)}

Return:
1. Top strengths
2. Key red flags
3. 3 actionable improvements
Be concise.
`;
}

export function fullRecruiterPrompt(data: {
    profile: any;
    topProjects: any[];
    languages: string[];
    repoCount: number;
    score: any;
}) {
    return `You are a senior technical recruiter analyzing a GitHub profile.

Profile Info:
- Username: ${data.profile.login}
- Bio: ${data.profile.bio || "No bio"}
- Public Repos: ${data.repoCount}
- Followers: ${data.profile.followers}
- Following: ${data.profile.following}

Top 3 Projects:
${JSON.stringify(data.topProjects.map(p => ({
        name: p.name,
        description: p.description,
        stars: p.stargazers_count,
        forks: p.forks_count,
        language: p.language
    })), null, 2)}

Languages Used: ${data.languages.join(", ")}

Portfolio Score: ${data.score.total}/100

IMPORTANT: Return ONLY valid JSON in this EXACT format (no markdown, no code blocks):

{
  "topRoles": ["role1", "role2", "role3"],
  "strengths": ["strength1", "strength2", "strength3"],
  "weaknesses": ["weakness1", "weakness2"],
  "summary": "2-3 sentence recruiter summary highlighting key selling points and concerns"
}`;
}

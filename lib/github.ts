const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
    ...(GITHUB_TOKEN && { 'Authorization': `Bearer ${GITHUB_TOKEN}` })
};

export async function fetchUserRepos(username: string) {
    const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        { headers }
    );

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const rateLimitRemaining = res.headers.get('x-ratelimit-remaining');
        const rateLimitReset = res.headers.get('x-ratelimit-reset');

        console.error('GitHub API Error:', {
            status: res.status,
            statusText: res.statusText,
            rateLimitRemaining,
            rateLimitReset: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toISOString() : null,
            error: errorData
        });

        if (res.status === 404) {
            throw new Error("User not found");
        }
        if (res.status === 403 && rateLimitRemaining === '0') {
            throw new Error(`GitHub API rate limit exceeded. Resets at ${rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toLocaleString() : 'unknown'}`);
        }
        throw new Error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export async function fetchUserProfile(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}`, { headers });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const rateLimitRemaining = res.headers.get('x-ratelimit-remaining');
        const rateLimitReset = res.headers.get('x-ratelimit-reset');

        console.error('GitHub API Error:', {
            status: res.status,
            statusText: res.statusText,
            rateLimitRemaining,
            rateLimitReset: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toISOString() : null,
            error: errorData
        });

        if (res.status === 404) {
            throw new Error("User not found");
        }
        if (res.status === 403 && rateLimitRemaining === '0') {
            throw new Error(`GitHub API rate limit exceeded. Resets at ${rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toLocaleString() : 'unknown'}`);
        }
        throw new Error(`Failed to fetch user profile: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export async function fetchCommitActivity(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`, { headers });

    if (!res.ok) {
        return [];
    }

    return res.json();
}

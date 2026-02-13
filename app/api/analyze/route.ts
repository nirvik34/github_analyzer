import { fetchUserRepos, fetchUserProfile, fetchCommitActivity } from "@/lib/github";
import { calculateScore } from "@/lib/scoring";
import { model } from "@/lib/ai";
import { fullRecruiterPrompt } from "@/lib/prompts";
import { rankTopProjects, extractLanguages } from "@/lib/ranking";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { username } = await req.json();

        if (!username) {
            return NextResponse.json({ error: "Username is required" }, { status: 400 });
        }

        const [repos, profile, events] = await Promise.all([
            fetchUserRepos(username),
            fetchUserProfile(username),
            fetchCommitActivity(username)
        ]);

        const score = calculateScore(repos);
        const topProjects = rankTopProjects(repos);
        const languages = extractLanguages(repos);

        // Process events for commit chart
        const commitCounts: { [key: string]: number } = {};
        events.forEach((event: any) => {
            if (event.type === 'PushEvent') {
                const date = new Date(event.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                commitCounts[date] = (commitCounts[date] || 0) + (event.payload.commits ? event.payload.commits.length : 1);
            }
        });

        // Convert to array and sort by date (though events come sorted descending usually)
        // For simplicity, we just take the processed map and make it an array
        // Ideally we'd fill in missing dates, but for now just showing activity points
        const commitChart = Object.keys(commitCounts).map(date => ({
            date,
            commits: commitCounts[date]
        })).reverse(); // Events are usually newest first, so reverse for chart (oldest -> newest)

        const prompt = fullRecruiterPrompt({
            profile,
            topProjects,
            languages,
            repoCount: repos.length,
            score
        });

        const result = await model.generateContent(prompt);
        let text = result.response.text();

        // Clean up the response - remove markdown code blocks if present
        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        let aiData;
        try {
            aiData = JSON.parse(text);
        } catch (parseError) {
            console.error("Failed to parse AI response:", text);
            // Fallback to basic insights if JSON parsing fails
            aiData = {
                topRoles: ["Software Engineer", "Full Stack Developer", "Backend Developer"],
                strengths: ["Active contributor", "Diverse tech stack"],
                weaknesses: ["Limited documentation"],
                summary: text.substring(0, 200)
            };
        }

        return NextResponse.json({
            score,
            profile,
            topProjects,
            languages,
            aiData,
            commitChart,
            insights: text // Keep original for backward compatibility
        });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
    }
}

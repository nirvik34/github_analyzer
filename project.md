# AI-Powered GitHub Portfolio Analyzer & Enhancer

## 🚀 Project Name

**GitSignal AI** – Turn Repositories into Recruiter-Ready Proof

---

## 📌 Problem Context

As defined in the official challenge brief , students struggle to:

* Understand how recruiters evaluate GitHub profiles
* Signal technical depth and real-world impact
* Maintain structured repositories and documentation
* Interpret commit consistency and contribution patterns
* Receive objective, actionable feedback

Most GitHub profiles fail not because of lack of skill — but lack of presentation.

---

## 🎯 Objective

Build a full-stack AI-powered platform that:

1. Accepts a GitHub profile URL
2. Fetches public repositories and activity data
3. Computes a structured **GitHub Portfolio Score**
4. Highlights strengths and red flags
5. Provides actionable, recruiter-style recommendations
6. Suggests README and documentation improvements using Gemini AI

---

# 🧠 System Architecture

## Tech Stack

### Frontend

* Next.js 14 (App Router)
* TypeScript
* TailwindCSS
* ShadCN UI (optional)
* Recharts (for scoring visualization)

### Backend (Inside Next.js)

* Next.js Route Handlers (`/app/api/*`)
* GitHub REST API (public endpoints)
* Server-side scoring engine
* Gemini AI via npm SDK (NOT direct REST API calls)

### AI Service

* `@google/generative-ai` npm package
* Server-side usage only
* Environment-based API key
* Prompt-engineered recruiter persona

---

# 📂 Folder Structure (Next.js Fullstack)

```
github-portfolio-analyzer/
│
├── app/
│   ├── page.tsx                     # Landing page
│   ├── analyze/
│   │   └── page.tsx                 # Results dashboard
│   │
│   ├── api/
│   │   ├── analyze/route.ts         # Main analysis endpoint
│   │   ├── github/route.ts          # GitHub data fetcher
│   │   └── ai/route.ts              # Gemini insights endpoint
│
├── components/
│   ├── ScoreCard.tsx
│   ├── RepoCard.tsx
│   ├── RadarChart.tsx
│   ├── StrengthsSection.tsx
│   ├── RedFlagsSection.tsx
│   └── SuggestionsSection.tsx
│
├── lib/
│   ├── github.ts                    # GitHub API logic
│   ├── scoring.ts                   # Portfolio scoring logic
│   ├── ai.ts                        # Gemini configuration
│   ├── prompts.ts                   # Recruiter-based prompt templates
│   └── utils.ts
│
├── types/
│   ├── github.ts
│   ├── scoring.ts
│   └── ai.ts
│
├── styles/
│   └── globals.css
│
├── public/
│   └── assets/
│
├── .env.local                       # API keys (not committed)
├── next.config.js
├── package.json
├── README.md
└── project.md
```

---

# 🔄 Application Flow

### Step 1 – User Input

User pastes GitHub Profile URL.

### Step 2 – GitHub Data Fetch

Backend extracts:

* Public repos
* Pinned repos
* Commit frequency
* Languages used
* README presence
* Stars/Forks
* Issues/PR activity

### Step 3 – Scoring Engine

Custom weighted scoring:

| Metric                | Weight |
| --------------------- | ------ |
| Documentation Quality | 20%    |
| Code Structure        | 20%    |
| Activity Consistency  | 15%    |
| Repo Organization     | 15%    |
| Technical Depth       | 15%    |
| Impact Signaling      | 15%    |

Final Score = Weighted aggregate (0–100)

---

# 🧠 AI Integration (Gemini via NPM)

## Installation

```bash
npm install @google/generative-ai
```

---

## Gemini Config (lib/ai.ts)

```ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
});
```

---

## AI Responsibilities

Gemini generates:

* Recruiter-style strengths
* Red flags
* README improvement suggestions
* Repository storytelling upgrades
* Resume bullet suggestions from repos

---

## Example Prompt Template

```ts
export const recruiterPrompt = (data) => `
You are a senior technical recruiter at Google.
Analyze the following GitHub profile summary:

${JSON.stringify(data)}

Provide:
1. Top strengths
2. Key red flags
3. 3 actionable improvements
4. Which repo to improve first and why
Keep feedback precise and professional.
`;
```

---

# 📊 Output UI Structure

## Dashboard Sections

* Overall GitHub Portfolio Score (Big Visual Card)
* Radar Chart of dimensions
* Strengths (Green highlights)
* Red Flags (Orange/Red warnings)
* Actionable Improvements (Step-based suggestions)
* Repository Priority List
* AI-Enhanced README Suggestions

---

# 🏆 MVP Compliance Checklist

✅ Accept GitHub URL
✅ Fetch public GitHub data
✅ Generate structured score
✅ Provide 3+ actionable suggestions
✅ Clean, interactive UI
✅ Working prototype (not mock)

---

# 🧪 Advanced Features (Bonus)

* 📈 Commit Heatmap Visualization
* 📊 Recruiter Mode vs Peer Mode
* 📄 Auto-Generated README Template
* 📑 Resume Bullet Generator
* 🧠 “Interview Readiness Score”
* 🚀 One-click README enhancement draft

---

# 🔐 Security Considerations

* Gemini API key stored in `.env.local`
* No client-side exposure of AI calls
* Rate limit GitHub API calls
* Cache profile results for 10 minutes

---

# 🎬 Demo Plan (5-Minute Presentation)

1. Problem Explanation (1 min)
2. Live Profile Analysis (2 min)
3. Score Breakdown (1 min)
4. AI Suggestions & Improvements (1 min)

---

# 📦 Deployment

Recommended:

* Vercel (for Next.js hosting)
* Environment variables in Vercel dashboard
* Public GitHub repo (mandatory per rules )

---

# 🧩 Why This Wins

* Objective recruiter-style scoring
* AI-enhanced actionable guidance
* Clean UX
* Fast analysis (<2 min user effort)
* Real-world relevance

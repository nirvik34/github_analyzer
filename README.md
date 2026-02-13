
# GitSignal AI


## AI-Powered GitHub Portfolio Analyzer & Enhancer


Turn repositories into recruiter-ready proof.


---


## Problem Statement

 For many students and early-career developers, GitHub is their primary portfolio.
 Yet most profiles fail to clearly communicate skill, consistency, and real-world impact to recruiters.

 Common issues include:


* Incomplete or weak README files
* Poor skill signaling
* Inconsistent commit patterns
* Lack of objective evaluation
* No structured improvement guidance

 A strong GitHub profile opens doors.
 A weak one silently closes them.


---


## Our Solution

 **GitSignal AI** is a recruiter-grade GitHub evaluation engine that:

 * Accepts a GitHub profile URL
 * Fetches public repository data
 * Analyzes technical depth & activity
 * Generates a structured Portfolio Score
 * Provides AI-powered strengths & weaknesses
 * Suggests actionable improvements
 * Identifies top 3 suitable job roles
 * Highlights top 3 impactful projects

 Instead of generic advice, we provide **data-driven and AI-enhanced insights.**

 ---


# Key Features


## 1. GitHub Portfolio Score (0–100)

 A structured scoring system based on:


* Documentation Quality
* Activity Consistency
* Technical Depth
* Repository Completion
* Collaboration Signals
* Code Hygiene & Best Practices
* Impact & Real-World Relevance
* Portfolio Signal Strength
* Recruiter Confidence Score (AI-generated)


---


## 2. Top 3 Suitable Roles (AI Generated)

 Based on:


* Languages used
* Project domains
* Technical depth
* Repository complexity


Example:


* Full Stack Developer
* Backend Engineer
* AI/ML Developer


---


## 3. AI-Generated Strengths & Weaknesses

 Recruiter-style evaluation:


* What stands out
* What needs improvement
* Which repositories to prioritize
* Specific next steps


---


## 4. Top 3 Ranked Projects

 Projects are ranked based on:


* Stars
* Forks
* Documentation presence
* Issue resolution
* Structural quality


---


## 5. Commit Activity Graph

 Visual representation of:


* Push frequency
* Consistency
* Activity trends

Helps users understand their contribution pattern.


---


## 6. AI Recruiter Simulation


We simulate a senior technical recruiter using Gemini AI.

 Output includes:


* Recruiter confidence score
* Shortlisting probability
* Actionable improvements


---
https://drive.google.com/file/d/1IApSphkXTxpsJufibv3PTksnnck9phGr/view?usp=sharing

# Tech Stack


## Frontend


* Next.js 16 (App Router)
* TypeScript
* TailwindCSS
* Recharts (Data Visualization)
* Lottie (Animation)


## Backend


* Next.js Route Handlers
* GitHub REST API
* Custom Scoring Engine


## AI Integration


* Gemini API via `@google/generative-ai` (npm SDK)
* Strict JSON prompt engineering
* Server-side secure API calls


## Deployment


* Vercel (Recommended)
* Environment Variables for API security


---


# Architecture Overview

 ```
 User Input → GitHub API Fetch → Scoring Engine →
 AI Recruiter Analysis → Structured JSON →
 Dashboard Visualization
 ```

 All processing completes in under 2 minutes.

 ---


# Folder Structure

 ```
 src/
 │
 ├── app/
 │   ├── page.tsx
 │   ├── analyze/page.tsx
 │   └── api/
 │       └── analyze/route.ts
 │
 ├── components/
 │   ├── RoleCard.tsx
 │   ├── ProjectCard.tsx
 │   ├── CommitChart.tsx
 │   ├── StrengthWeakness.tsx
 │   └── ScoreBreakdown.tsx
 │
 ├── lib/
 │   ├── github.ts
 │   ├── scoring.ts
 │   ├── ranking.ts
 │   ├── ai.ts
 │   └── prompts.ts
 ```

 ---


# Scoring Dimensions

 | Dimension             | Weight |
 | --------------------- | ------ |
 | Documentation         | 12%    |
 | Activity Consistency  | 12%    |
 | Technical Depth       | 15%    |
 | Impact & Relevance    | 15%    |
 | Repository Completion | 10%    |
 | Collaboration         | 10%    |
 | Code Hygiene          | 10%    |
 | Portfolio Signal      | 8%     |
 | Recruiter Confidence  | 8%     |

 Total: 100%

 ---


# Demo Video

🔗 Demo Walkthrough: [Watch the demo video](https://drive.google.com/file/d/1IApSphkXTxpsJufibv3PTksnnck9phGr/view?usp=sharing)

 The demo includes:

 * Problem overview
 * Live profile analysis
 * Score breakdown
 * AI insights
 * Technical explanation

 ---


# How to Run Locally

 ## 1. Clone Repository

 ```bash
 git clone <your-repo-link>
 cd github-portfolio-analyzer
 ```

 ## 2. Install Dependencies

 ```bash
 npm install
 ```

 ## 3. Add Environment Variables

 Create `.env.local`

 ```
 GEMINI_API_KEY=your_key_here
 ```

 ## 4. Start Development Server

 ```bash
 npm run dev
 ```

 Visit:

 ```
 http://localhost:3000
 ```

 ---


# Alignment with Hackathon Requirements

 | Requirement              | Status |
 | ------------------------ | ------ |
 | Accept GitHub URL        | ✅      |
 | Fetch Public Data        | ✅      |
 | Generate Portfolio Score | ✅      |
 | Provide 3+ Suggestions   | ✅      |
 | Clean UI                 | ✅      |
 | Working Prototype        | ✅      |
 | AI Integration           | ✅      |
 | Public Repository        | ✅      |
 | Demo Video               | ✅      |

 ---


# Impact

 GitSignal AI empowers students to:

 * Understand how recruiters evaluate GitHub
 * Improve technical storytelling
 * Identify weak repositories
 * Build a structured portfolio
 * Become interview-ready

 We are not just analyzing code.
 We are reducing silent rejection.

 ---


# Future Enhancements

 * Resume bullet auto-generation
 * Interview question prediction
 * GitHub README auto-enhancer
 * Peer comparison mode
 * Recruiter dashboard view

 ---


# Built By

 Nirvik Goswami
 CSE (AI & Robotics)
 VIT Chennai

 ---

 If you want, I can now:

 * 🔥 Upgrade this into a visually stunning README (badges + animations)
 * 💎 Add shields.io badges
 * 🎯 Optimize for judges’ first 30 seconds impression
 * 🧠 Add a “Why This Wins” section

 Tell me how aggressive you want the presentation to be.

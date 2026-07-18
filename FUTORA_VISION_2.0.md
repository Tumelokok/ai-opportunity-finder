# FUTORA VISION 2.0
## South Africa's AI-Powered Career Intelligence Platform

**Version**: 2.0 (Master Vision)  
**Status**: Blueprint for Production Implementation  
**Last Updated**: 18 July 2026  
**Scope**: Complete Platform Specification

---

## 🎯 THE MISSION

**Transform education into employment by giving every student a personalized roadmap to career success.**

Futora is NOT just another career platform. It is the **operating system for career growth**—continuously learning from student data to predict what employers want, guide users toward employability, and reduce South Africa's graduate unemployment crisis.

### The Problem

South Africa faces **one of the highest youth unemployment rates globally**. Thousands of graduates exit university with degrees but:
- ❌ Don't understand employer expectations
- ❌ Have weak portfolios and GitHub profiles
- ❌ Miss critical skills that are in-demand
- ❌ Lack structured mentorship
- ❌ Apply blindly without strategy
- ❌ Don't know where opportunities exist
- ❌ Can't measure their competitiveness

### The Unique Solution

| Platform | Tells You |
|----------|-----------|
| **LinkedIn** | Who you know |
| **Indeed** | What jobs exist |
| **GitHub** | What you've built |
| **Coursera** | What you can learn |
| **Glassdoor** | What companies are like |
| **Futora** | **What you should do next** |

**Futora combines all of these into one intelligent AI platform.**

Instead of asking users to search for information, **Futora analyzes their complete career profile and tells them exactly what they should do next.**

---

## 🧠 THE NORTH STAR

When someone logs into Futora, they should immediately think:

> "This platform understands my career better than I do."
>
> "I finally know what I need to do next."

Every recommendation is **personalized.**  
Every page answers one question: **"What action should this user take today to become more employable?"**

---

## 🎨 DESIGN PHILOSOPHY

### What We Are NOT
- ❌ Not copying LinkedIn (use as inspiration only)
- ❌ Not overwhelming users with information dumps
- ❌ Not another social network
- ❌ Not generic job board recommendations
- ❌ Not a resume builder
- ❌ Not another LinkedIn clone

### What We ARE
- ✅ **Intelligent**: Every recommendation is AI-powered
- ✅ **Personalized**: Unique to each user's career profile
- ✅ **Actionable**: Clear next steps, not generic advice
- ✅ **Beautiful**: Inspired by Apple, Stripe, Linear, Notion, Vercel
- ✅ **Premium**: Feels like a $50/month SaaS, not a student project
- ✅ **Calm**: Whitespace, clarity, focus
- ✅ **South African**: Built for SA context, SA opportunities, SA growth

### Design Principles

| Principle | Implementation |
|-----------|-----------------|
| **Analyze → Predict → Recommend → Guide** | Never dump raw data |
| **One question per page** | Focus on single user goal |
| **Zero cognitive overload** | Whitespace > clutter |
| **Premium feel** | High contrast, beautiful typography |
| **Smooth interactions** | Framer Motion for UX elegance |
| **Intelligent defaults** | Users shouldn't have to think |

---

## 🎭 DESIGN TOKENS

### Colors
```
Primary Background:  Pure White (#FFFFFF)
Primary Accent:      Deep Modern Red (#DC2626)
Light Gray:          #F3F4F6
Dark Gray:           #6B7280
Soft Black:          #1F2937
Success:             #10B981
Warning:             #F59E0B
Error:               #EF4444
```

### Typography
- **Font Family**: Inter (system-ui fallback)
- **Headlines**: Bold, 28px-32px, tracking -0.02em
- **Body**: Regular, 14px-16px, line-height 1.5
- **Labels**: Medium, 12px, all-caps

### Spacing & Layout
- **Base Unit**: 8px grid
- **Spacing Scale**: 8, 12, 16, 24, 32, 40, 48, 64px
- **Border Radius**: 8px (corners), 24px (cards)
- **Shadows**: Minimal (only on hover/focus)

### Interaction
- **Transitions**: 150ms ease-out (default), 300ms for modals
- **Animations**: Framer Motion (stagger, spring)
- **Hover States**: Subtle background shift, never harsh
- **Focus States**: Clear outline, 2px stroke

---

## 🏗️ APPLICATION ARCHITECTURE

### Layout (3-Column Grid)

```
┌─────────────────┬──────────────────────┬─────────────────┐
│   LEFT SIDEBAR  │   CENTER AI FEED     │  RIGHT SIDEBAR  │
│  (320px fixed)  │  (1fr flexible)      │  (320px fixed)  │
└─────────────────┴──────────────────────┴─────────────────┘
```

### LEFT SIDEBAR (Profile & Navigation)

**Profile Card** (top)
- Avatar + Name
- Current Role / Target Role
- University + Graduation Year
- Edit Profile CTA

**Employability Index** (always visible)
- Overall Score (0-100%)
- Risk Level (Low/Medium/High)
- Trend Arrow (↑ +4% this month)
- View Breakdown button

**Career Goal**
- Current Focus
- Target Milestone
- Progress bar
- Days until graduation

**Weekly Progress**
- Tasks completed
- GitHub commits
- LinkedIn profile views
- Applications sent
- Learning hours

**Learning Streak**
- Current streak (days)
- Longest streak

**Achievements**
- Badges (portfolio milestone, GitHub star, etc.)
- Scroll to see all

**Navigation Menu**
- 🏠 Dashboard
- 📡 Opportunity Radar
- 📊 Market Intelligence
- 👥 Career Twin
- 📁 Projects
- 🏢 Companies
- 💬 Community
- 📚 Learning
- 🤖 AI Coach
- ⚙️ Settings

**Quick Actions** (bottom)
- 💾 Save for later
- 📤 Share profile
- 🙋 Get help

### CENTER CONTENT (AI Career Feed)

No traditional social feed. Instead: **Personalized Intelligence Feed**

Each card is AI-generated based on user profile:

**Card Types:**

1. **Achievement Card** (Green)
   ```
   ✅ Your Employability Score increased by 4%
   2 new projects on GitHub pushed your score up
   [View breakdown]
   ```

2. **Opportunity Card** (Blue)
   ```
   🎯 Discovery Graduate Programme opens tomorrow
   Match: 87%
   Closes: 5 Aug 2026
   You have: Python ✓, React ✗, Docker ✗
   [Apply now] [Learn more]
   ```

3. **Market Card** (Purple)
   ```
   📈 Node.js demand increased by 12% this month
   Companies: 45+ new job listings
   Salary: R65k-R95k (up from R58k)
   [Learn Node.js] [See jobs]
   ```

4. **Risk Card** (Orange)
   ```
   ⚠️ You haven't committed to GitHub in 12 days
   Impact: Breaks your 89-day streak
   Suggestion: Build the recommended project
   [Start project] [Remind me later]
   ```

5. **Certification Card** (Yellow)
   ```
   🎓 IBM released AI for Business certification
   Completion: 20 hours
   Impact: +5% employability
   Salary increase: R2-5k/month
   [Enroll for free]
   ```

6. **Company Card** (Slate)
   ```
   🏢 Entelect is now looking for graduates
   Match: 91%
   They want: Python, React, AWS
   You have: Python ✓, React ✓, AWS ✗
   [View company] [Start prep]
   ```

7. **Recommendation Card** (Red - Action Required)
   ```
   💡 Complete Docker to increase employability by 8%
   Time: 40 hours
   Used by: 312+ companies
   Salary impact: +R3k/month
   [Start learning] [See projects]
   ```

8. **Interview Card** (Green - Good News)
   ```
   💼 Interview invitation from Naspers!
   Match: 95%
   Position: Junior Software Engineer
   Interview date: 22 Aug 2026
   [View prep] [Confirm attendance]
   ```

9. **Community Card** (Cyan)
   ```
   👥 5 people from your university just got jobs at Microsoft
   Read their tips on interview prep
   [View success stories]
   ```

10. **Learning Card** (Indigo)
    ```
    📖 New course: System Design for Beginners
    Companies requesting: 89+
    Salary boost: +R4k/month
    Duration: 60 hours
    [Start learning]
    ```

**Feed Updates**
- Real-time when important (opportunity opens, interview invite)
- Daily batch updates (market trends, company news)
- Weekly rollup (progress, achievements)

### RIGHT SIDEBAR (Market Intelligence)

**Trending Skills** (Today)
1. Python - Demand ↑ 8%
2. React - Demand ↑ 5%
3. Docker - Demand ↑ 12% 🔥
4. AWS - Demand ↑ 3%
5. System Design - Demand ↑ 15% 🔥

[View all →]

**Application Deadlines** (This Week)
- Entelect: 3 days left
- Discovery: 5 days left
- Jozi.jobs Featured: 2 days left
- Microsoft Internship: 7 days left

[Add to calendar]

**Salary Insights** (Your Role)
- Junior Developer average: R42k-R58k
- Your market: R48k-R65k (top 25%)
- Negotiation tips for your profile
- [View ranges by skill]

**Recommended Companies**
1. Naspers - 91% match
2. Entelect - 87% match
3. Wix - 84% match
4. 2Degrees - 82% match
5. SilverStripe - 79% match

[Save company] [View all]

**Networking Events**
- React Meetup (tomorrow)
- Jozi Tech Summit (3 Aug)
- Startup Grind (10 Aug)
- AI Workshop (15 Aug)

[Add to calendar]

**Hackathons**
- AngelHack SA (15-17 Aug)
- StartupWeekend (22-24 Aug)

**Scholarships**
- Google Cloud Skills Boost (Apply by 20 Aug)
- AWS Free Tier Extended (Open)

**Interview Invitations** (Unseen)
- 3 new invitations
- [View all]

**Tech News** (AI-Curated)
- "Python 3.14 released" - 45 companies affected
- "React 19 released" - Trending skill
- "New certification: AWS Associate Solutions Architect"

---

## 🔟 CORE FEATURES

### FEATURE 1: Career Twin (Flagship)

**What It Is**
- An AI-generated digital career identity
- Continuously learns and evolves
- Knows everything about the user
- Powers all recommendations

**What It Learns From**
- GitHub (projects, languages, commits)
- LinkedIn (experience, endorsed skills)
- CV (education, certifications)
- Futora Data (projects, assessments, goals)
- Interview History (performance, feedback)
- Application History (rejections, interviews, offers)
- Study Progress (courses, certifications)
- Market Data (trends, salary ranges)
- User Preferences (goals, location, remote preference)

**What It Does**
- Predicts which opportunities user will succeed in
- Recommends skills most likely to increase salary
- Suggests projects that showcase relevant skills
- Identifies strengths and risks
- Projects career trajectory
- Estimates interview success rates
- Always explains reasoning ("Why this matters")

**Example**: Career Twin Analysis
```
CAREER TWIN PROFILE: Themba M.

Strengths:
✅ Strong frontend skills (React, TypeScript)
✅ Consistent GitHub activity (89-day streak)
✅ Built 3 production apps
✅ Good communication (LinkedIn endorsements)
✅ Recently learned Docker

Risks:
❌ No backend experience (limiting factor)
❌ No cloud deployment (AWS, Azure)
❌ Limited interview experience
❌ Weak data structures knowledge
❌ No open source contributions

Predicted Industry Fit:
- Frontend roles: Very High ✓
- Full-stack roles: Medium (learn backend)
- DevOps roles: Low (not suitable)

Projected Interview Success:
- Local companies: 73%
- International companies: 45%

Salary Baseline: R45k-52k
Potential with growth: R65k-85k

Next Best Moves:
1. Learn Node.js (40 hrs) - increases success rate by 18%
2. Deploy app to AWS (20 hrs) - increases salary +R5k
3. Practice system design (60 hrs) - enables senior roles
```

---

### FEATURE 2: Employability Index

**What It Replaces**
- Generic "Career Score" or "Profile Strength"
- Meaningless percentages without context

**What It Shows**
- Holistic employability score
- Breakdown by category
- Specific strengths and risks
- Actionable improvements
- Salary expectation
- Interview success prediction

**Example**: Full Employability Index

```
╔════════════════════════════════════════════════════════╗
║          EMPLOYABILITY INDEX: 78%                      ║
║          ▓▓▓▓▓▓▓▓░░ [Updated: 2 hours ago]             ║
╚════════════════════════════════════════════════════════╝

CATEGORY BREAKDOWN

📊 Interview Readiness: 84%
   ✅ Strong communication
   ✅ Relevant experience
   ⚠️  Limited mock interviews

🎯 Technical Skills: 81%
   ✅ Frontend solid
   ⚠️  Backend weak
   ❌ No DevOps

💼 Portfolio Strength: 89%
   ✅ 5 projects
   ✅ Good documentation
   ✅ Live demos

🔗 Professional Network: 62%
   ⚠️  Low LinkedIn connections (45)
   ⚠️  No conference attendance
   ⚠️  Limited mentorship

📚 Certifications: 71%
   ✅ Google Cloud Cert
   ⚠️  No AWS
   ❌ No Docker

💡 Innovation: 75%
   ✅ Built side projects
   ⚠️  Limited open source
   ⚠️  No hackathons

RISK ASSESSMENT

Risk Level: MEDIUM

Top Risks:
1. Backend skills missing (HIGH IMPACT)
   - 45% of job listings require backend
   - Estimated salary loss: R8-12k/month

2. Limited network (MEDIUM IMPACT)
   - 30% of opportunities through referrals
   - Network size impacts interview rate

3. No DevOps (MEDIUM IMPACT)
   - Modern companies want full-stack +ops
   - Could prevent senior opportunities

SALARY PROJECTION

Current Market Range: R48k-64k
Potential Range (12 months): R62k-78k +16%

Most Realistic: R54k (Q1 2027)

If you complete top 3 risks:
Potential: R68k (+26%)

If you ignore risks:
Potential: R52k (+8%)

INTERVIEW SUCCESS

Estimated acceptance rate: 67%
Above average: Yes ✓ (National avg: 52%)

Interview Type Breakdown:
- Initial screening: 89%
- Technical interview: 71%
- System design: 45% (needs work)
- Culture fit: 88%

WEEKLY TREND

78% ↑ +2% from last week

Drivers of improvement:
✅ Committed Node.js project (Thu)
✅ Published 2 new blog posts (Tue)
✅ 89-day GitHub streak maintained

ACTIONABLE IMPROVEMENTS

Next 30 days (fastest impact):
1. Learn Node.js (40 hrs) → +8% index
2. Build backend project (50 hrs) → +6% index
3. System design practice (20 hrs) → +4% index

Next 90 days (long-term):
1. AWS certification (60 hrs) → +7% index
2. Contribute to open source (30 hrs) → +5% index
3. Attend conference (Jozi Tech Summit) → +3% index

[View detailed roadmap]
```

---

### FEATURE 3: Opportunity Radar

**What It Is**
- AI-powered opportunity discovery
- Not a job board
- Personalized to user profile

**What It Recommends**
- Graduate Programmes
- Internships
- Scholarships
- Hackathons
- Competitions
- Research Opportunities
- Open Source Projects
- Volunteer Experience
- Mentorship Matches
- Networking Events

**What Each Recommendation Contains**
- Match Score (0-100%)
- Why Recommended (AI explanation)
- Deadline
- Time Investment
- Skills Missing
- Estimated Acceptance Chance
- Difficulty Level
- New Skills Gained
- Salary Impact
- AI Advice
- Application Checklist
- [Apply] or [Learn more] button

**Example Recommendation**

```
╔══════════════════════════════════════════════════════╗
║  Entelect Discovery Grad Programme (4-week)          ║
╚══════════════════════════════════════════════════════╝

MATCH SCORE: 87% 🟢 EXCELLENT

WHY RECOMMENDED
- Your frontend skills align with job requirements
- You have 3/5 required skills
- Program matches your career goal
- 87% of graduates secure jobs post-programme

DEADLINE
Closes: 5 August 2026 (2 days left)

TIME COMMITMENT
- Application: 2 hours
- Interview prep: 10 hours
- 4-week intensive: 40 hours/week
- Total: 170 hours

YOUR MATCH BREAKDOWN

Have ✓                Missing ✗
✓ React              ✗ Node.js (critical)
✓ TypeScript         ✗ System Design
✓ Git                 ✗ AWS
✓ Communication

SKILLS GAP
Node.js: 40 hours to learn minimum viable
System Design: 20 hours crash course
AWS: Can learn on the job

ACCEPTANCE PREDICTION
Your likelihood: 73% (above average)
National average: 52%

Why you're competitive:
✓ Strong frontend portfolio
✓ Consistent GitHub activity
✓ Good communication (interview ready)

Why you need improvement:
✗ No backend experience (major gap)

COMPENSATION
- Stipend: R8,000/month (4 weeks)
- After programme: R48k-52k typical starting salary
- Job placement rate: 87%
- Average salary after 1 year: R62k

NEXT STEPS (If interested)

IMMEDIATE (Today)
1. ✅ Confirm your interest [Interest button]
2. Setup prep session (1 hour)

WEEK 1: Preparation
1. Watch: Node.js Express crash course (6 hours)
2. Task: Build simple API (8 hours)
3. Watch: System design for beginners (4 hours)

WEEK 2: Application
1. Submit application (1 hour)
2. Record video intro (1 hour)
3. Wait for initial screening (automated: 2 days)

WEEK 3: Interview Prep
1. Technical interview prep (10 hours)
2. Mock interview (2 hours)
3. Wait for final interview (3 days)

WEEK 4: Decision
1. Receive offer (hopefully!)
2. Accept programme
3. Start date typically next month

PREPARATION CHECKLIST

Before applying:
- [ ] Update LinkedIn profile
- [ ] Ensure GitHub is active
- [ ] CV is current
- [ ] Cover letter drafted
- [ ] Video intro recorded (30 sec)
- [ ] Know your why (Why Entelect?)
- [ ] Know your goals (What will you learn?)

Technical prep:
- [ ] Basic Node.js concepts
- [ ] Simple Express API built
- [ ] Basic system design knowledge
- [ ] Coding challenge training (HackerRank)

Interview prep:
- [ ] Behavioral questions practiced
- [ ] Project presentation ready
- [ ] Mock interview done
- [ ] Questions prepared for them

[Start prep] [Apply now] [Remind me later]
```

---

### FEATURE 4: South African Opportunity Map

**What It Is**
- Interactive map of SA opportunities
- Province-by-province breakdown
- Real-time data visualization

**What It Shows Per Province**

```
GAUTENG (Selected)
┌─────────────────────────────────┐
│  🏢 Top 5 Employers              │
│  1. Google Johannesburg (45 jobs)│
│  2. Naspers (32 jobs)            │
│  3. Entelect (28 jobs)           │
│  4. Wix (24 jobs)                │
│  5. 2Degrees (18 jobs)           │
└─────────────────────────────────┘

📊 MARKET DATA
Graduate jobs this month: 347
Average salary: S52k
Most needed skill: React (+15%)
Fastest growing: DevOps (+45%)
Remote % of jobs: 62%

🏆 TOP PROGRAMMES
1. Entelect Discovery (closes Aug 5)
2. Naspers Tech (closes Aug 12)
3. Google Step (closes Sept 1)

📍 TOP CITIES
1. Johannesburg (234 jobs)
2. Sandton (89 jobs)
3. Pretoria (24 jobs)

💼 JOB BREAKDOWN
Frontend: 45 jobs
Backend: 67 jobs
Full-stack: 89 jobs
DevOps: 34 jobs
Data: 23 jobs
AI/ML: 12 jobs
```

---

### FEATURE 5: Market Intelligence Dashboard

**Real-Time Analytics**

**Trending Skills (24 hours)**
```
1. 🔥 Docker ↑ 12% (+45 jobs)
2. 🔥 System Design ↑ 15% (+38 jobs)
3. ↑ Node.js ↑ 8% (+22 jobs)
4. ↑ React ↑ 5% (+18 jobs)
5. ↑ TypeScript ↑ 6% (+16 jobs)

Declining:
6. ↓ PHP ↓ 8% (-12 jobs)
7. ↓ jQuery ↓ 5% (-8 jobs)
```

**Fastest Growing (This Month)**
```
1. DevOps: +45%
2. AI/ML: +38%
3. Cloud (AWS/Azure): +32%
4. System Design: +28%
5. Mobile (Flutter): +15%
```

**Highest Paying Skills**
```
1. System Design: R85k-150k
2. Cloud Architecture: R80k-140k
3. DevOps: R75k-125k
4. AI/ML: R70k-140k
5. Backend (Rust): R70k-120k
```

**Most Requested Frameworks**
```
Frontend: React (45%), Vue (8%), Angular (6%)
Backend: Node.js (38%), Python Django (22%), Java Spring (18%)
Mobile: React Native (35%), Flutter (42%)
Cloud: AWS (55%), GCP (25%), Azure (20%)
```

**Most Requested Languages**
```
1. Python (72 jobs)
2. JavaScript/TypeScript (68 jobs)
3. Java (45 jobs)
4. Go (28 jobs)
5. Rust (15 jobs)
```

**Remote Work Growth**
```
Remote in SA: 62% of new listings (↑ from 48% last year)
Fully remote: 34%
Hybrid: 28%
On-site: 38%
```

**Graduate Hiring Trends**
```
Grad hires this quarter: 347
Month-over-month: ↑ 12%
Year-over-year: ↑ 34%
Acceptance rate: 18% (competitive)
Average starting salary: R52k
```

---

### FEATURE 6: Company Intelligence Profiles

**Every Company Gets a Profile**

```
╔══════════════════════════════════╗
║  NASPERS (SA Tech Leader)        ║
╚══════════════════════════════════╝

QUICK FACTS
• Founded: 1915
• HQ: Johannesburg
• Size: 3,200+ employees (SA)
• Hiring: Yes (12 grad roles)
• Culture: ★★★★★ (4.6/5)

TECH STACK
Primary: Java, Python, React, AWS
Secondary: Kotlin, Node.js, Docker, Kubernetes

JOB OPENINGS
- Junior Software Engineer (5 roles)
- Quality Assurance Engineer (2 roles)
- Data Scientist (2 roles)
- DevOps Engineer (1 role)
- UX Designer (2 roles)

HIRING PROCESS
1. Initial screening (CV review)
2. Coding challenge (3-4 hours)
3. Technical interview (90 mins)
4. Behavioral interview (60 mins)
5. Offer stage

Timeline: 4-6 weeks

INTERVIEW STAGES
Stage 1: CV screening
- Success rate: 42%
- Time: 1-2 days
- What they look for: Relevant skills, consistent GitHub

Stage 2: Coding challenge
- Success rate: 38% (among passed stage 1)
- Time: 4-6 hours
- Difficulty: Medium
- Topics: Algorithms, data structures, system design

Stage 3: Technical interview
- Success rate: 45%
- Time: 90 minutes
- Format: Whiteboard + discussion
- Topics: Deep dive on past projects, architectural decisions

Stage 4: Behavioral interview
- Success rate: 78%
- Time: 60 minutes
- Format: Conversational
- Topics: Teamwork, conflict resolution, learning ability

GRADUATE PROGRAMME
- Name: Naspers Academy
- Duration: 6 weeks
- Stipend: R10,000/month
- Topics: Full-stack development, enterprise systems
- Placement rate: 91%
- Post-programme salary: R54k-58k

CULTURE
Pros: ✓ Great learning, ✓ Diverse team, ✓ Remote-friendly
Cons: ✗ Corporate structure, ✗ Slow decision making

BENEFITS
• Competitive salary
• Medical aid
• Commuter benefits
• Free lunch
• Professional development budget
• Remote work flexibility

AVERAGE SALARY (By Region)
• Junior: R48k-54k
• Mid: R65k-80k
• Senior: R95k-130k

YOUR MATCH SCORE: 87% 🟢

Why you're a good fit:
✓ Your frontend skills (they need it)
✓ Your GitHub activity (they value it)
✓ Your communication (they look for it)

What they need from you:
✗ Backend skills (learn Node.js)
✗ Testing knowledge (learn Jest)
✗ System design (prepare for technical)

RECRUITER TIPS
From Naspers recruiters who reviewed 100+ CVs:

"What helped candidates succeed:
1. Projects with live demos
2. GitHub with commit history (consistency matters)
3. Clear explanation of technical decisions in projects
4. Evidence of learning and growth
5. Communication in portfolio/blog

What hurt candidates:
1. No live demos or deployed projects
2. Ghost GitHub (no recent commits)
3. Projects without documentation
4. Only credentials (no proof of knowledge)
5. Bad communication (we need collaborators)
"

PREPARATION CHECKLIST

Resume:
- [ ] Highlight Node.js projects (even if unofficial)
- [ ] Emphasize collaboration and code review
- [ ] Include testing experience (Jest, React Testing Library)
- [ ] Mention scale of projects (users, data volume)

GitHub:
- [ ] 15+ recent commits (past 2 months)
- [ ] 2-3 well-documented projects
- [ ] Meaningful commit messages
- [ ] README with live demo links
- [ ] Evidence of refactoring/improvement

Interview prep:
- [ ] System design (practice basics)
- [ ] Node.js knowledge (Express, async/await)
- [ ] Behavioral stories prepared (STAR method)
- [ ] Questions ready for them
- [ ] Company research done

[Bookmark] [Apply for role] [Learn prep course] [Tell a friend]
```

---

### FEATURE 7: Career Simulator

**Choose a Career Path, Get Month-by-Month Roadmap**

```
╔════════════════════════════════════╗
║  CAREER SIMULATOR: Full-Stack Dev  ║
║  Starting from: Beginner           ║
║  Goal: Mid-level in 12 months      ║
╚════════════════════════════════════╝

TIMELINE & MILESTONES

MONTH 1: Frontend Foundations
Skills: HTML, CSS, JavaScript, React basics
Projects: Build 3 simple React projects
Time: 80 hours
Milestone: Deploy first React app
Salary track: Entry-level (R35-40k)

MONTH 2: JavaScript Mastery
Skills: Async/await, callbacks, promises
Projects: Build interactive app with API
Time: 60 hours
Milestone: Build medium complexity React app
Salary track: Entry-level (R40-45k)

MONTH 3: Backend Intro (Node.js)
Skills: Express, REST APIs, basic databases
Projects: Build API with PostgreSQL
Time: 70 hours
Milestone: Full-stack app (React + Node)
Salary track: Early stage (R43-48k)

MONTH 4: Databases & Scaling
Skills: SQL, query optimization, indexing
Projects: Scale app to handle 1000 users
Time: 50 hours
Milestone: Production-database queries
Salary track: Early stage (R45-50k)

MONTH 5: DevOps Intro
Skills: Docker, CI/CD, deployment
Projects: Deploy app to production
Time: 40 hours
Milestone: App live on cloud (AWS/Heroku)
Salary track: Junior (R48-52k)

MONTH 6: System Design Basics
Skills: Scalability, caching, architecture
Projects: Design system for 10k users
Time: 60 hours
Milestone: Understand trade-offs
Salary track: Junior (R50-54k)

MONTH 7: Advanced Frontend
Skills: Performance, testing, accessibility
Projects: Optimize React app performance
Time: 50 hours
Milestone: Lighthouse score 95+
Salary track: Junior (R52-56k)

MONTH 8: Testing & Quality
Skills: Unit, integration, E2E testing
Projects: Full test coverage (>90%)
Time: 40 hours
Milestone: Professional test suite
Salary track: Junior (R54-58k)

MONTH 9: Cloud Certification
Skills: AWS (EC2, RDS, S3, Lambda)
Projects: Build app using AWS services
Time: 50 hours
Milestone: AWS certification
Salary track: Mid (R56-62k)

MONTH 10: Open Source Contribution
Skills: Code review, collaboration
Projects: 5 contributions to open source
Time: 30 hours
Milestone: Visible GitHub portfolio
Salary track: Mid (R58-64k)

MONTH 11: Interview Preparation
Skills: Coding interviews, behavioral
Projects: 50 coding problems solved
Time: 60 hours
Milestone: Ready for interviews
Salary track: Mid (R60-66k)

MONTH 12: Job Search & Negotiation
Skills: Networking, negotiations
Projects: Apply to 20+ companies
Time: Ongoing
Milestone: Job offer secured
Salary track: Mid (R62-70k)

TOTAL INVESTMENT: 550 hours (14 weeks full-time)

SUCCESS METRICS

Job Placement:
- Similar people: 82% placed within 3 months
- Your estimate: 76% (depends on effort)

Salary:
- Starting average: R54k
- Year 1 average: R62k
- Year 2 average: R75k

Interview Success:
- Technical interview pass rate: 68%
- Offer rate after final interview: 71%

Career Satisfaction:
- People happy after 6 months: 84%
- Still coding after 1 year: 91%

[Download roadmap] [Start today] [Compare paths]
```

---

### FEATURE 8: AI Skill Demand Engine

**Don't Just List Skills. Rank Them By Impact.**

```
SKILL DEMAND RANKING

1. 🔥 Docker
   Demand: ↑ 12% (45 new jobs this week)
   Salary impact: +R3-5k/month
   Difficulty: Medium (30 hours to learn)
   Growth trend: ↑ 28% YoY
   Learning time: 3-4 weeks
   
   Companies requesting:
   Naspers, Entelect, Wix, Google, Amazon
   
   Recommended course: Docker for Developers (20h)
   Project idea: Containerize your app

2. System Design
   Demand: ↑ 15% (38 new jobs this week)
   Salary impact: +R8-12k/month (most impact!)
   Difficulty: Hard (100 hours to master)
   Growth trend: ↑ 35% YoY
   Learning time: 8-12 weeks
   
   Companies requesting:
   All senior roles + FAANG companies
   
   Recommended course: System Design (80h)
   Project idea: Design Instagram clone

3. Node.js
   Demand: ↑ 8% (22 new jobs)
   Salary impact: +R4-6k/month
   Difficulty: Medium (40 hours)
   Growth trend: ↑ 12% YoY
   Learning time: 4-5 weeks
   
   Companies requesting:
   45+ hiring companies
   
   Recommended course: Express.js Master (40h)
   Project idea: Build REST API

4. React (You already have this)
   Demand: ↑ 5% (18 new jobs)
   Salary impact: +R2-3k/month
   Difficulty: Easy (already skilled)
   Growth trend: ↑ 6% YoY
   
   Next step: Specialize in React Native
   Salary boost: +R5k/month (mobile dev premium)

5. TypeScript
   Demand: ↑ 6% (16 new jobs)
   Salary impact: +R1-2k/month
   Difficulty: Easy (10 hours advanced)
   Growth trend: ↑ 18% YoY
   Learning time: 1 week
   
   Next step: Advanced TypeScript patterns
   Salary boost: +R2k/month
```

---

### FEATURE 9: AI Career Coach

**Floating assistant accessible everywhere. Already knows everything about you.**

```
USER: Should I study Honours?
COACH: Based on your profile...

Your strengths (frontend, React) make you immediately hireable.
Honours would delay income by 1 year.

Market data:
• Junior dev salary: R52k
• Grad programme salary: R48k
• Honours salary over 3 years: R43k/year (delayed start)

Career impact:
• Honours increases your salary ceiling: +R15k-20k at mid/senior
• But delays job market entry: -R52k (lost income year 1)
• ROI: Positive after year 4-5

My recommendation:
Get your first job (1 year), build 2-3 years experience,
THEN do Honours part-time while earning.

You're job-ready now. Wait 1 year and Honours adds more value.

---

USER: Should I move to Cape Town?
COACH: Here's the data...

Johannesburg vs Cape Town (Junior Dev):
Job availability: JNB (3x more jobs)
Average salary: JNB (R54k) vs CPT (R49k)
Cost of living: CPT cheaper by R3k/month
Quality of life: CPT rated higher
Remote % of jobs: JNB (45%), CPT (65%)

Market timing:
September has 40% fewer opportunities (hiring slowdown).
October-November is peak hiring season (+35% jobs).

My advice:
Stay in JNB NOW (get job offer first).
Build 6-12 months experience.
THEN negotiate remote or transfer to CPT office.

You'll get 20% better offer in JNB now,
Can move to CPT later with experience.

---

USER: What should I build next?
COACH: Your gap analysis shows...

You're missing:
1. Backend experience (highest impact: +8% employability)
2. System design knowledge (salary impact: +R8k/month)
3. Cloud deployment skills (career blocker: 45% of jobs)

Best next project:
Full-stack expense tracker app.

Details:
• Teaches: Backend (Node), Database (SQL), Frontend (React)
• Deploys to: AWS (learn cloud)
• Time: 50 hours
• Companies wanting this: 130+
• Salary impact: +R6k/month

Spec:
Frontend: React, track expenses, visualizations
Backend: Node.js Express API, JWT auth
Database: PostgreSQL
Deploy: AWS EC2 + RDS

[Start project] [View tutorial]
```

---

### FEATURE 10: Community

**Career-Focused. Not Another Social Network.**

**What Users Share**
- Interview experiences (exact questions asked)
- Graduate programme timelines (week-by-week)
- Coding assessment breakdowns
- Project walkthroughs
- Learning resources & recommendations
- Recruiter tips from real interviews
- University advice & warnings
- Success stories
- Networking experiences
- Salary negotiations

**Example Post**

```
INTERVIEW BREAKDOWN: Naspers Engineering Interview
Posted by: Lerato M. | 2 days ago | 234 upvotes | 45 comments

My Naspers interview experience (Oct 2026)

Timeline: Interviewed Oct 18, offer Oct 25

STAGE 1: CV Screening (Wed Oct 18)
- Applied: Oct 1
- First email: Oct 15 (2 weeks later)
- Status: PASSED

STAGE 2: Coding Challenge (Fri Oct 17, before screening email)
- Time limit: 4 hours
- Questions: 2 medium LeetCode-style problems
- Topic 1: Binary tree traversal
- Topic 2: String manipulation
- My score: 1/2 complete ✓
- Result: PASSED (apparently partial OK)

STAGE 3: Technical Interview (Mon Oct 21)
- Duration: 90 minutes
- Interviewer: Senior engineer (cool, helpful)
- Format: Video call, they share screen
- Topics:
  1. Project deep dive (my React app project)
  2. System design light (design Twitter feed)
  3. Code review (they showed me code, asked improvements)
- What hit:
  ✓ I explained decisions clearly
  ✓ I asked clarifying questions
  ✓ I admitted I didn't know, asked how I'd learn
- What didn't:
  ✗ I froze on system design (hadn't practiced)
  ✗ I didn't know REST best practices
- Result: PASSED (they said "close call on design")

STAGE 4: Behavioral (Wed Oct 23)
- Duration: 60 minutes
- Interviewer: HR person + team lead
- Topics:
  1. Tell us about yourself (2 mins)
  2. Conflict resolution story
  3. Learning story
  4. Why Naspers?
  5. Questions about role/culture
  6. Salary chat (they offered first)
- Tips:
  ✓ Prepare STAR format for stories
  ✓ Give specific examples, not generic
  ✓ Ask about team, culture, learning
- Result: PASSED

OFFER
- Title: Junior Software Engineer
- Salary: R54,000/year (I negotiated from R52k)
- Benefits: Medical, gym, lunch
- Start: Nov 1

What I wish I knew:
1. System design is a thing (nobody taught me at university!)
2. Code review is a skill (they literally asked me to review code)
3. Communication > perfect technical solution
4. Negotiations are normal (they expected pushback on salary)
5. Culture fit is huge (1 hour on this, 1.5 hours on tech)

What actually helped:
✓ GitHub projects (they asked about them, not CV)
✓ Blog about my learnings (they mentioned reading it)
✓ Consistent activity (89-day streak came up)
✓ Honesty about what I don't know (they liked this)

What didn't help:
✗ Generic cover letter (they never mentioned it)
✗ Certificates (they didn't ask about them)
✗ Perfect GPA (never came up)
✗ Chasing certifications (waste of time, just build)

My advice to future applicants:
1. Build projects with live demos
2. Learn system design (20 hours will save you)
3. Practice coding challenges (LeetCode medium level)
4. Prepare stories with examples
5. Interview practice > certificate chasing
6. Negotiate salary (they expect it)

Good luck! Questions in comments...

COMMENTS:
Q: How much time did you spend prepping?
A: 3 weeks full time after offer letter. 40 hours coding practice.

Q: I'm scared of system design. Help?
A: DM me! I can share resources that helped me.

Q: Did they ask about salary expection before interview?
A: No, only after offer stage.
```

---

## 🚀 TECH STACK & ARCHITECTURE

### Frontend Stack
```
• Next.js 14+ (App Router)
• React 18+
• TypeScript
• TailwindCSS
• shadcn/ui (components)
• Framer Motion (animations)
• React Hook Form (forms)
• Zod (validation)
• Recharts (charts)
• TanStack Query (data fetching)
```

### Backend Stack
```
• Next.js API Routes
• Prisma ORM
• PostgreSQL
• Clerk or Auth.js (authentication)
• Redis (caching, sessions)
• OpenAI API (AI features)
• GitHub API (portfolio analysis)
• LinkedIn API (profile optimization)
• Job board APIs (opportunity scraping)
```

### DevOps & Deployment
```
• Docker (containerization)
• GitHub Actions (CI/CD)
• Vercel (frontend hosting)
• Render/Railway (backend hosting)
• Vercel Postgres (database)
• Upstash (Redis)
• AWS (S3, Lambda, optional scaling)
```

### Code Quality
```
• ESLint
• Prettier
• TypeScript strict mode
• Jest (unit testing)
• Playwright (E2E testing)
• Lighthouse CI (performance)
```

---

## 📋 DEVELOPMENT REQUIREMENTS

### Must Build With
- ✅ Next.js 14+ App Router (not Pages)
- ✅ React 18+
- ✅ TypeScript (strict mode)
- ✅ TailwindCSS (not custom CSS)
- ✅ shadcn/ui (component base)
- ✅ Prisma (database ORM)
- ✅ PostgreSQL (not SQLite)
- ✅ Clean architecture
- ✅ Reusable components
- ✅ Scalable structure

### Must Have
- ✅ Authentication (secure)
- ✅ Database persistence
- ✅ Responsive design (mobile-first)
- ✅ Accessibility (WCAG AA)
- ✅ Error handling
- ✅ Loading states
- ✅ Form validation
- ✅ Data visualization
- ✅ Real-time updates
- ✅ API documentation

### Must Feel Like
- ✅ Production SaaS app (not student project)
- ✅ Premium product (Apple, Stripe, Linear)
- ✅ Intelligent (AI-powered)
- ✅ Professional (beautiful UX)
- ✅ Fast (performant)
- ✅ Reliable (error recovery)
- ✅ Delightful (smooth animations)

---

## 🎯 FINAL GOAL

When recruiters, tech leads, startup founders, or software engineers open Futora, they should immediately think:

> "This doesn't feel like a student project or weekend hack."
>
> "This feels like a real AI startup."
>
> "I'd actually use this product."

**Futora should be the gold standard for what a production-quality career intelligence platform looks like.**

Every line of code.
Every pixel of design.
Every feature decision.
Should demonstrate:

- ✅ Advanced frontend engineering
- ✅ Solid backend architecture
- ✅ Thoughtful product design
- ✅ AI integration done right
- ✅ Beautiful UX
- ✅ Scalable infrastructure
- ✅ Exceptional attention to detail

---

## 📅 IMPLEMENTATION PHASES

### Phase 1: MVP (Current)
- ✅ Core pages (landing, auth, dashboard)
- ✅ Basic features (onboarding, community)
- ✅ Design system
- ✅ Authentication

### Phase 2: Core Features
- 🔜 Career Twin
- 🔜 Employability Index
- 🔜 Opportunity Radar
- 🔜 Market Intelligence
- 🔜 Company profiles
- 🔜 AI Coach

### Phase 3: Advanced
- 🔜 South African Opportunity Map
- 🔜 Career Simulator
- 🔜 Skill Demand Engine
- 🔜 Advanced analytics

### Phase 4: AI Magic
- 🔜 LLM integration
- 🔜 Predictive analytics
- 🔜 Portfolio generator
- 🔜 Interview simulator
- 🔜 Resume optimization

---

**Version**: FUTORA VISION 2.0  
**Created**: 18 July 2026  
**Status**: Blueprint for Production  
**Next Step**: Implement Phase 2 Core Features

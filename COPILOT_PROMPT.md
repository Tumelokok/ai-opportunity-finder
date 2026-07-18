# Futora Platform: Phase 2 Enhancement Prompt

## Executive Overview
Transform Futora from a career intelligence platform into a comprehensive **AI-powered employment opportunity ecosystem** specifically designed to solve South Africa's unemployment crisis. Modernize the design to match LinkedIn's professional aesthetic while adding innovative features that address critical SA job market gaps.

---

## Part 1: South African Problem Statement & Innovative Features

### Core Problem We're Solving
1. **Youth unemployment crisis**: 35%+ unemployment for ages 15-34 in SA
2. **Skills mismatch**: Students graduate without industry-aligned skills
3. **Limited visibility**: Job seekers unaware of opportunities (formal & informal)
4. **Broken mentorship**: No structured access to career guidance
5. **Informal economy gap**: Gig/contract work invisible to traditional platforms

### Innovative Features to Implement (Priority Order)

#### 🎯 Feature 1: "Opportunity Radar" - AI Job Discovery Engine
**Problem Solved**: Students don't know what jobs are actually available for their skill level
**What It Does**:
- Real-time scraping of SA-specific job boards (LinkedIn, Indeed, Jozi.jobs, local company career pages)
- AI clustering of similar roles → suggests jobs by "role family" (e.g., all tech-adjacent roles for CS students)
- **Gig Work Aggregator**: Surfaces Upwork, Fiverr, local freelance opportunities
- Match confidence score (0-100%) based on skills gap analysis
- Daily digest of 5 "best fit" opportunities personalized per user

**Design Implementation**:
- New dashboard card: "5 Opportunities This Week"
- Search/filter interface with opportunity type toggle (permanent/contract/gig/internship)
- Card component showing: company, role, match %, salary range (if available), deadline

#### 🤝 Feature 2: "Peer Mentorship Marketplace"
**Problem Solved**: Informal mentorship is random; structured guidance missing
**What It Does**:
- 1-on-1 matching algorithm (interest overlap, seniority progression, availability)
- Peer-led micro-courses (5-min recorded career tips)
- Mentor spotlight: featured success stories from platform mentors
- Mentee request system → mentor can accept/decline

**Design Implementation**:
- New "/mentorship" page with two sections:
  - "Find a Mentor" (searchable grid of mentors with bio, expertise, availability)
  - "Become a Mentor" (simple form to add yourself as mentor)
- Profile cards showing mentor name, current role, expertise tags, rating/review count

#### 📊 Feature 3: "SA Job Market Intelligence Hub"
**Problem Solved**: Students have no data on which skills/roles are hot in SA
**What It Does**:
- Real-time trending job roles in SA (top 20, updated weekly)
- Salary ranges by role/experience level (city breakdown: JNB, CPT, DBN)
- Skills demand heatmap (which tech stacks are hiring?)
- Industry outlook (which sectors are growing)
- Insider tips: what companies are actually hiring

**Design Implementation**:
- New "/market-insights" page with:
  - Top 10 job roles (trending now) - card layout
  - Salary calculator (role + years experience = expected range)
  - Skills demand chart (interactive list of most wanted skills)
  - City comparison (salary variance by location)

#### 💼 Feature 4: "Gig Economy On-Ramp"
**Problem Solved**: Contract/freelance work is viable but invisible; platforms fragmented
**What It Does**:
- Curated gig opportunities from Upwork, Fiverr, PeoplePerHour, local platforms
- "Gig readiness" assessment (portfolio quality, minimum skill level needed)
- Dispute resolution integration (basic guidance for gig worker protection)
- Portfolio builder tool (within app - showcase work directly)

**Design Implementation**:
- Tab in "Opportunities" section: "Flexible Work"
- Gig opportunity cards showing platform, hourly rate estim., commitment level, skill required
- Simple portfolio builder (5-10 project showcase slots)

#### 🎓 Feature 5: "Skills-First Job Matching"
**Problem Solved**: Resume-based matching ignores real skills; gaps stay hidden
**What It Does**:
- Advanced assessment of actual skills (not just degree held)
- AI-powered skills gap identification (what you have vs. what's market-demanded)
- Personalized learning paths (Coursera, edX, YouTube recommendations + internal roadmaps)
- "Skill proof" system (certifications, project work validate skills)
- Opportunities matched by required skills (not resume keywords)

**Design Implementation**:
- Enhance current `/dashboard/skills` page:
  - "Your Skills Score" (aggregate + breakdown by category)
  - "Market Demand" overlay (show which of your skills are highest demand in SA)
  - "Skill Gaps" section listing top 3 missing skills to add for next level
  - "Learn Skills" CTA linking to courses + estimated time investment

#### 🌐 Feature 6: "Local Networking Events Hub"
**Problem Solved**: Events are scattered; hard to find entry-level friendly opportunities
**What It Does**:
- Calendar of career events + networking meetups in SA (tech, business, startup)
- Filter by: location, industry, skill level (entry/mid/senior)
- RSVP + attendance tracking (build community proof)
- Post-event resources (speaker slides, attendee network)

**Design Implementation**:
- New `/events` page with calendar view + list view
- Event card showing: date, time, location, attendee count, "RSVP" button
- Event detail modal with description, speaker info, past attendee testimonials

---

## Part 2: Design System Refresh (LinkedIn Aesthetic)

### Color Palette Transformation
**Current** → **New**
- Red accent (#C62828) → LinkedIn Blue (#0A66C2)
- Use professional grays for hierarchy:
  - Text: `#000000` (100%), `#666666` (secondary), `#A0A0A0` (tertiary)
  - Backgrounds: `#FFFFFF` (primary), `#F3F6F8` (subtle), `#E1E5E7` (dividers)
- Success green: `#057A55`, Warning orange: `#E09100`

### Typography & Spacing
- Headlines: Inter SemiBold 24px, 28px, 32px (hierarchy clear)
- Body text: Inter Regular 14px (sm), 16px (md)
- Line-height: 1.5 for readability
- Spacing scale: 4px base unit (consistent 4, 8, 12, 16, 24, 32px)

### Icon Strategy
- **Replace ALL emoji** with Lucide React SVG icons:
  - Career → `Briefcase`
  - Learning → `BookOpen`
  - Network → `Users`
  - Skills → `Zap`
  - Projects → `Folder`
  - Chat/Mentorship → `MessageCircle`
  - Opportunities → `TrendingUp`
  - Settings → `Settings`

### Components to Redesign
1. **Header/Navigation**
   - Semantic nav with proper ARIA labels
   - Professional logo + clear CTAs (Sign In / Join)
   - Sticky header with subtle shadow on scroll

2. **Hero Section**
   - Large headline (32px, bold)
   - Subheading (16px, gray-600)
   - Left side: text (55% width), Right side: illustration placeholder
   - Primary CTA button (LinkedIn blue) + secondary CTA

3. **Card Components**
   - 2px border in #E1E5E7, not shadow
   - Subtle hover effect (bg shift to #F3F6F8)
   - Proper spacing inside (16px padding)

4. **Buttons**
   - Primary: LinkedIn Blue bg, white text, 2px border, 8px padding
   - Secondary: White bg, blue text, 2px blue border, 8px padding
   - Tertiary: No border, gray text
   - Icons inside buttons use Lucide (not emoji)

5. **Form Inputs**
   - 2px border (gray-400), 8px padding, rounded 4px
   - Focus: blue border + no outline
   - Error state: orange/red border + small error text below
   - Placeholder in gray-500

6. **Accessibility Requirements**
   - All text contrast ratios ≥ 4.5:1 (WCAG AA)
   - `role` attributes on interactive elements
   - `aria-label` on icon buttons
   - `sr-only` class for screen reader-only text (skip links, offscreen labels)
   - Keyboard navigation fully supported (Tab, Enter, Escape)
   - Focus indicators visible (min 2px outline)

### Layout Patterns
- Max-width: 1200px content container
- Mobile breakpoint: 640px (Tailwind `sm`)
- Consistent gutter: 16px on desktop, 12px on mobile
- Section spacing: 64px top/bottom on desktop, 40px mobile

---

## Part 3: Implementation Roadmap

### Phase 2A: Design System Foundation (Week 1-2)
1. Update Tailwind config with new color palette
2. Create design tokens file (colors, spacing, typography)
3. Redesign component library:
   - `Button.tsx` (add primary/secondary/tertiary variants, icon support)
   - `Card.tsx` (swap shadow for border, update spacing)
   - New `Icon.tsx` wrapper (Lucide icons with consistent sizing)
   - New `Badge.tsx` (for tags, statuses)
   - New `Input.tsx` (form field with validation states)

4. Audit all existing pages for:
   - Emoji → Icon swaps
   - Color updates
   - Spacing/padding fixes
   - Accessibility gaps (missing `aria-label`, role attributes)

### Phase 2B: Core Features (Week 3-6)
**Priority 1 (Weeks 3-4)**: Opportunity Radar + Skills-First Matching
- Create `/api/opportunities` endpoint (mock data sourcing)
- Build opportunity discovery UI + filtering
- Enhance `/dashboard/skills` with market intelligence overlay

**Priority 2 (Weeks 4-5)**: Market Insights Hub
- Create `/market-insights` page with trending jobs, salary data
- Build interactive charts (Recharts component)
- Add city comparison tool

**Priority 3 (Week 5-6)**: Peer Mentorship
- Create `/mentorship` page with mentor discovery
- Build mentor signup form + matching algorithm
- Add mentor profile cards

**Priority 4 (Week 6+)**: Events Hub + Gig Economy
- `/events` calendar page
- Gig opportunities integration (Upwork API or mock)
- Portfolio builder UI

### Phase 2C: Polish & Testing (Week 7+)
- Accessibility audit (WAVE tool)
- Cross-browser testing
- Mobile responsiveness check
- Performance optimization

---

## Part 4: Code Standards & Patterns

### File Structure
```
app/
  ├── discover/page.tsx          # Opportunity Radar
  ├── market-insights/page.tsx   # Job market intelligence
  ├── mentorship/page.tsx        # Peer mentorship
  ├── events/page.tsx            # Networking events
  ├── dashboard/
  │   ├── skills/page.tsx        # Enhanced with market data
components/
  ├── ui/
  │   ├── icon.tsx               # NEW: Lucide wrapper
  │   ├── badge.tsx              # NEW: Status/tag component
  │   ├── input.tsx              # NEW: Form field
  │   ├── button.tsx             # UPDATED: add variants
  │   └── card.tsx               # UPDATED: swap shadow for border
  ├── features/
  │   ├── opportunity-card.tsx   # NEW
  │   ├── mentor-card.tsx        # NEW
  │   ├── job-market-chart.tsx   # NEW
lib/
  ├── constants/
  │   ├── opportunities.ts       # Mock data
  │   ├── market-data.ts         # Job market stats
  │   └── mentors.ts             # Mock mentor profiles
```

### Component Pattern Example
```typescript
// NEW: components/ui/icon.tsx
import { LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export function Icon({ icon: Icon, size = 'md', className, label }: IconProps) {
  const sizeMap = { sm: 16, md: 20, lg: 24 };
  return (
    <Icon 
      width={sizeMap[size]} 
      height={sizeMap[size]} 
      className={`text-current ${className}`}
      aria-label={label}
    />
  );
}
```

### Accessibility Pattern Example
```typescript
// Skip link at top of page
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Icon button with label
<button aria-label="Close menu">
  <Icon icon={X} />
</button>

// Form field with error handling
<div>
  <label htmlFor="email" className="font-semibold text-gray-900">Email</label>
  <input 
    id="email" 
    type="email" 
    aria-invalid={error ? 'true' : 'false'}
    aria-describedby={error ? 'email-error' : undefined}
  />
  {error && <span id="email-error" className="text-red-600 text-sm">{error}</span>}
</div>
```

### Color Usage Pattern
```typescript
// Use semantic color names (not hex directly)
const colorMap = {
  primary: '#0A66C2',      // LinkedIn Blue
  success: '#057A55',      // Green
  warning: '#E09100',      // Orange
  danger: '#D84315',       // Red
  gray: {
    50: '#F9FAFB',
    100: '#F3F6F8',
    300: '#E1E5E7',
    600: '#666666',
    900: '#000000',
  }
};

// Use via Tailwind classes: text-blue-70, bg-gray-100, border-gray-300
```

---

## Part 5: Data & Mocking Strategy

### Mock Data to Create
1. **Opportunities** (20-30 sample jobs)
   - Mix of: permanent roles, contract work, gig opportunities
   - Include: company name, role, location (SA city), skills required, salary range, match %

2. **Market Insights**
   - Top 10 trending roles in SA (by month)
   - Salary benchmarks (role × experience × city)
   - Skills demand (tech stack popularity)
   - Industry growth trends

3. **Mentors** (10-15 profiles)
   - Name, current role, company
   - Expertise tags
   - Availability (hours/week)
   - Bio + testimonials

4. **Events** (Monthly calendar)
   - Tech meetups, startup networking, career workshops
   - Location, date, time, attendance count

---

## Part 6: Testing Checklist

### Design System
- [ ] All pages use new color palette (no red accents remain visible except in specific brand contexts)
- [ ] All emoji replaced with Lucide icons
- [ ] Cards use 2px borders instead of shadows
- [ ] Typography hierarchy consistent (headlines, body, captions)
- [ ] Spacing follows 4px scale throughout

### Accessibility
- [ ] Lighthouse audit score ≥ 90
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Screen reader tested (NVDA/JAWS on Windows, VoiceOver on Mac)
- [ ] All images have alt text
- [ ] All form fields have labels (visible or sr-only)
- [ ] Focus indicators visible and sufficient contrast
- [ ] Color contrast ≥ 4.5:1 for all text

### Features
- [ ] Opportunity search/filter works
- [ ] Skills matching algorithm returns accurate results
- [ ] Market insights charts render correctly
- [ ] Mentor matching works
- [ ] Event calendar updates

### Performance
- [ ] Page load < 3 seconds (3G)
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] No layout shifts (CLS < 0.1)

---

## Part 7: SA-Specific Considerations

### Job Market Context
- **Major hubs**: Johannesburg, Cape Town, Durban, Sandton
- **In-demand skills**: Python, Java, React, Data Science, Cloud (AWS/Azure)
- **Growing sectors**: Tech, Financial Services, E-commerce, Renewable Energy
- **Salary expectations**: Vary hugely by experience + location (include ranges, not single values)

### User Demographics
- **Primary**: University students, recent graduates (22-28)
- **Secondary**: Career switchers, self-taught developers
- **Pain points**: Language diversity (Eng primary, but support Zulu/Xhosa text if possible later)
- **Device**: Mixed (60% mobile, 40% desktop based on SA internet patterns)

### Local Platforms to Integrate
- Jozi.jobs (local job aggregator)
- Luno/Valr (crypto careers emerging in SA)
- Local startup job boards
- Medium (many SA devs blog here)
- Twitter/X (#ZATech community)

---

## Final Success Metrics

By end of Phase 2:
1. ✅ Futora has 5+ innovative, SA-focused features
2. ✅ Design system matches LinkedIn professional aesthetic
3. ✅ 100% component accessibility compliance
4. ✅ Students can discover real job opportunities (not just via LinkedIn)
5. ✅ Platform addresses actual SA unemployment gaps
6. ✅ User can see their skills vs. market demand
7. ✅ Mobile experience is responsive & performant

---

## Quick Start Commands

```bash
# After changes:
npm run dev          # Test locally on 3000
npm run build        # Verify production build
npm run lint         # Check code quality
npm run type-check   # Verify TypeScript

# Install new deps (if needed):
npm install recharts              # For market insights charts
npm install lucide-react          # Already have, but ensure updated
```

---

**Implementation Owner**: You
**Timeline**: 6-8 weeks for full Phase 2
**Next Step**: Begin with design system foundation (colors, icons, components) before feature implementation

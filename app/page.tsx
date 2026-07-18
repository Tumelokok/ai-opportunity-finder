import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Briefcase, CheckCircle2, Code, GitBranch, Lightbulb, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const stats = [
  { value: '3.2M+', label: 'Unemployed CS graduates' },
  { value: '37%', label: 'Average readiness improvement' },
  { value: '15k+', label: 'Students onboarded' }
];

const features = [
  {
    icon: '🧠',
    title: 'AI Career Analysis',
    description: 'Your entire profile analyzed instantly—GitHub, CV, LinkedIn, skills. One score.'
  },
  {
    icon: '🎯',
    title: 'Personalized Roadmap',
    description: 'Week-by-week guidance tailored to your career goal and current readiness.'
  },
  {
    icon: '📊',
    title: 'Real-time Insights',
    description: 'Watch your career readiness grow. 82% average improvement in 8 weeks.'
  },
  {
    icon: '🚀',
    title: 'Opportunity Matching',
    description: 'Find internships and graduate programmes that match your profile. Get selected.'
  },
  {
    icon: '💪',
    title: 'Skill Gap Analysis',
    description: 'Know exactly which skills to learn and in what order.'
  },
  {
    icon: '🤖',
    title: 'AI Career Coach',
    description: 'Ask your career coach anything. Get answers based on your actual data.'
  }
];

const testimonials = [
  {
    avatar: '👩‍💻',
    name: 'Amina Hassan',
    role: 'Final-year CS student, University of the Witwatersrand',
    quote: 'Futora helped me understand my GitHub weaknesses. I updated my portfolio with real projects and now I am interviewing for internships I never thought possible.'
  },
  {
    avatar: '👨‍💼',
    name: 'Thabo Mthembu',
    role: 'Software engineering graduate, University of Cape Town',
    quote: 'The career readiness score gave me clarity on what mattered. I focused on the right skills and landed my first graduate role within months.'
  },
  {
    avatar: '👩‍🔬',
    name: 'Naledi Khumalo',
    role: 'Data science graduate, Stellenbosch University',
    quote: 'The project recommendations were perfect. I built exactly what employers wanted to see and my application stood out in a crowded field.'
  }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-50 via-white to-white pt-28 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-brand-50 px-4 py-2 border border-brand-100 mb-6">
              <Sparkles size={18} className="text-brand-600 mr-2" />
              <span className="text-sm font-semibold text-brand-700">AI-powered career intelligence</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-950 leading-tight">
              Know exactly what comes next
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Your AI career advisor analyzes your GitHub, CV, LinkedIn, and skills. Then tells you exactly what to do to land your dream job.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button className="inline-flex items-center gap-2 px-8 py-4 text-lg">
                  Start free today
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" className="inline-flex items-center gap-2 px-8 py-4 text-lg">
                  Learn our story
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 p-8 lg:p-12 border border-brand-100 aspect-video flex items-center justify-center">
            <div className="text-center">
              <BarChart3 size={64} className="text-brand-600 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Dashboard preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-brand-600">{stat.value}</p>
              <p className="mt-2 text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-surface py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-600 font-semibold">Features</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 mt-4">Everything a career platform should do.</h2>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">Built for students who want clarity, confidence, and actionable next steps.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Card key={i} className="p-8 shadow-card hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem to Solution */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 text-center mb-16">
            The problem with the job search
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8 shadow-card border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-600 flex items-center gap-2">
                Without Futora
              </h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-2xl">❌</span>
                  <span>You don't know if your GitHub is strong enough</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">❌</span>
                  <span>Your CV might not pass ATS filters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">❌</span>
                  <span>You're not sure which skills matter most</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">❌</span>
                  <span>You apply to jobs you're unprepared for</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">❌</span>
                  <span>Months pass without clarity on progress</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 shadow-card border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-600 flex items-center gap-2">
                With Futora
              </h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Know your exact GitHub score and how to improve</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Get ATS-optimized CV recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Learn skills in the right order for your goal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Apply only to opportunities you can win</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Watch real progress week after week</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-600 font-semibold">Success stories</p>
            <h2 className="text-4xl font-bold text-slate-950 mt-4">Students getting results</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-8 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-semibold text-slate-950">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-slate-950 text-center mb-16">How it works</h2>

          <div className="grid gap-8 lg:grid-cols-4">
            {[
              {
                number: '1️⃣',
                title: 'Create an account',
                description: 'Sign up in seconds. Tell us your career goal.'
              },
              {
                number: '2️⃣',
                title: 'Connect your profiles',
                description: 'Link GitHub, LinkedIn, upload your CV.'
              },
              {
                number: '3️⃣',
                title: 'Get analyzed',
                description: 'AI analyzes everything. Get your readiness score.'
              },
              {
                number: '4️⃣',
                title: 'Get your roadmap',
                description: 'Weekly tasks, projects, and next steps.'
              }
            ].map((step, i) => (
              <div key={i}>
                <div className="text-4xl mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.description}</p>
                {i < 3 && <div className="hidden lg:block mt-8 text-3xl text-brand-200">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to build your future?
          </h2>
          <p className="mt-6 text-xl text-brand-100">
            Join thousands of students getting clarity, confidence, and careers.
          </p>
          <Link href="/signup">
            <Button className="mt-10 bg-white text-brand-600 hover:bg-slate-50 inline-flex items-center gap-2">
              Start free
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <section className="bg-white border-t border-slate-200 py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 sm:grid-cols-4">
            <div>
              <h4 className="font-semibold text-slate-950 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="/#features" className="hover:text-slate-950">Features</Link></li>
                <li><Link href="/dashboard" className="hover:text-slate-950">Dashboard</Link></li>
                <li><Link href="#" className="hover:text-slate-950">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="/about" className="hover:text-slate-950">About</Link></li>
                <li><Link href="/community" className="hover:text-slate-950">Community</Link></li>
                <li><Link href="#" className="hover:text-slate-950">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-slate-950">Blog</Link></li>
                <li><Link href="#" className="hover:text-slate-950">Guides</Link></li>
                <li><Link href="#" className="hover:text-slate-950">FAQ</Link></li>
              </ul>
            </div>
            <div className="sm:col-span-4 sm:col-start-1">
              <p className="text-sm text-slate-600">© 2026 Futora. Built in South Africa. Scaling globally.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


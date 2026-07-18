import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, ChartBar, CheckCircle2, Trophy, Settings, LogOut, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-950">Dashboard</h1>
            <p className="mt-2 text-slate-600">Welcome back, Software Engineer</p>
          </div>
          <div className="flex gap-3">
            <Link href="/settings">
              <Button variant="secondary" className="inline-flex items-center gap-2">
                <Settings size={20} />
                <span className="hidden sm:inline">Settings</span>
              </Button>
            </Link>
            <Button variant="secondary" className="inline-flex items-center gap-2">
              <LogOut size={20} />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          {/* Main Content */}
          <section className="space-y-6">
            {/* Welcome Card */}
            <Card className="p-8 shadow-card bg-gradient-to-r from-brand-50 to-brand-50 border border-brand-100">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-600 font-semibold">Your career journey</p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-950">Build your future with confidence</h2>
                  <p className="mt-3 text-slate-700">Here's what you need to focus on this week to reach your goals.</p>
                </div>
                <Link href="#">
                  <Button className="inline-flex items-center gap-2">
                    View roadmap
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Career Readiness */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="p-8 shadow-card">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-brand-600 font-semibold">Career readiness</p>
                    <p className="mt-3 text-5xl font-bold text-slate-950">82%</p>
                  </div>
                  <div className="text-5xl">📈</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">GitHub strength</span>
                      <span className="text-sm font-semibold text-slate-950">74%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-2 w-8/12 rounded-full bg-brand-600" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">CV readiness</span>
                      <span className="text-sm font-semibold text-slate-950">88%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-2 w-10/12 rounded-full bg-brand-600" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">LinkedIn profile</span>
                      <span className="text-sm font-semibold text-slate-950">76%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-2 w-9/12 rounded-full bg-brand-600" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-card">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-brand-600 font-semibold">Weekly focus</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-950">Improve portfolio</h3>
                  </div>
                  <div className="text-4xl">🎯</div>
                </div>

                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                    <span>Update README for two key projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                    <span>Add deployment notes for your backend app</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0" />
                    <span>Review GitHub commit frequency</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Recent Achievements */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-600 font-semibold">Recent achievements</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">Momentum building</h3>
                </div>
                <div className="text-4xl">🏆</div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-50 border border-yellow-100 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-700 font-semibold">Projects completed</p>
                  <p className="mt-3 text-3xl font-bold text-yellow-900">3</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-100 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">Insights generated</p>
                  <p className="mt-3 text-3xl font-bold text-blue-900">12</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-50 border border-green-100 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-green-700 font-semibold">Days on streak</p>
                  <p className="mt-3 text-3xl font-bold text-green-900">24</p>
                </div>
              </div>
            </Card>

            {/* Tools */}
            <Card className="p-8 shadow-card">
              <h3 className="text-xl font-bold text-slate-950 mb-6">Available tools</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link href="/dashboard/github">
                  <Button variant="secondary" className="w-full justify-start text-left">
                    <div className="text-2xl mr-3">🐙</div>
                    <div>
                      <p className="font-semibold text-slate-950">GitHub analyzer</p>
                      <p className="text-xs text-slate-600">Review your portfolio</p>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard/linkedin">
                  <Button variant="secondary" className="w-full justify-start text-left">
                    <div className="text-2xl mr-3">💼</div>
                    <div>
                      <p className="font-semibold text-slate-950">LinkedIn analyzer</p>
                      <p className="text-xs text-slate-600">Optimize your profile</p>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard/cv">
                  <Button variant="secondary" className="w-full justify-start text-left">
                    <div className="text-2xl mr-3">📄</div>
                    <div>
                      <p className="font-semibold text-slate-950">CV analyzer</p>
                      <p className="text-xs text-slate-600">ATS optimization</p>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard/skills">
                  <Button variant="secondary" className="w-full justify-start text-left">
                    <div className="text-2xl mr-3">🎯</div>
                    <div>
                      <p className="font-semibold text-slate-950">Skills gap</p>
                      <p className="text-xs text-slate-600">What to learn next</p>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard/projects">
                  <Button variant="secondary" className="w-full justify-start text-left">
                    <div className="text-2xl mr-3">🚀</div>
                    <div>
                      <p className="font-semibold text-slate-950">Projects</p>
                      <p className="text-xs text-slate-600">Build portfolio pieces</p>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard/coach">
                  <Button variant="secondary" className="w-full justify-start text-left">
                    <div className="text-2xl mr-3">🤖</div>
                    <div>
                      <p className="font-semibold text-slate-950">AI career coach</p>
                      <p className="text-xs text-slate-600">Ask anything</p>
                    </div>
                  </Button>
                </Link>
              </div>
            </Card>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 shadow-card">
              <h3 className="text-sm uppercase tracking-[0.24em] text-brand-600 font-semibold mb-4">Quick actions</h3>
              <div className="space-y-3">
                <Link href="/dashboard/github">
                  <Button className="w-full">Analyze GitHub</Button>
                </Link>
                <Link href="/dashboard/cv">
                  <Button variant="secondary" className="w-full">Audit CV</Button>
                </Link>
                <Link href="/dashboard/coach">
                  <Button variant="secondary" className="w-full">Ask AI coach</Button>
                </Link>
                <Link href="/community">
                  <Button variant="secondary" className="w-full">Join community</Button>
                </Link>
              </div>
            </Card>

            {/* AI Coach Card */}
            <Card className="p-6 shadow-card bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-700 font-semibold">AI coach insight</p>
                  <h4 className="mt-3 text-lg font-bold text-slate-950">Your strategy</h4>
                </div>
                <div className="text-3xl">🤖</div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Focus on backend project polish this week. Add at least one new API integration to strengthen your graduate application readiness.
              </p>
              <Link href="/dashboard/coach">
                <Button variant="secondary" className="w-full mt-4">Chat with coach</Button>
              </Link>
            </Card>

            {/* Resources */}
            <Card className="p-6 shadow-card">
              <h3 className="text-sm uppercase tracking-[0.24em] text-slate-600 font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-brand-600 hover:text-brand-700 font-medium">
                    📚 Getting started guide
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-brand-600 hover:text-brand-700 font-medium">
                    👥 Join community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-brand-600 hover:text-brand-700 font-medium">
                    🎓 Learning paths
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-brand-600 hover:text-brand-700 font-medium">
                    ❓ FAQ & support
                  </Link>
                </li>
              </ul>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}


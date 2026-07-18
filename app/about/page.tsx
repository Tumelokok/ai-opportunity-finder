import { Sparkles, Target, Users, Zap, Heart, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-20 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-950 text-center">
            About Futora
          </h1>
          <p className="mt-6 text-xl text-slate-600 text-center max-w-2xl mx-auto">
            Born from frustration. Built with purpose. Designed to change careers.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-700 font-semibold">Tumelo Kok</p>
                <p className="text-xs text-slate-600 mt-2">Founder & Software Engineer</p>
                <p className="text-xs text-slate-600">South Africa</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-950">The Problem I Saw</h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Growing up in South Africa, I witnessed the economic reality: millions of talented students were graduating without knowing if they were competitive for their dream jobs. They had degrees but lacked clarity. They studied hard but didn't know which skills mattered most. They built projects but didn't understand how to showcase them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-950">My Story</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  As a software engineer, I realized the disconnect: companies struggled to find skilled talent, while students struggled to understand what companies actually wanted. I watched classmates graduate uncertain, confident ones confidently incompetent. I knew something had to change.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-950">The Mission</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Futora exists to bridge that gap. To give every South African computer science student—regardless of their background—the clarity, confidence, and tools they need to become genuinely competitive for the opportunities they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Values */}
      <section className="bg-surface py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-3">
            <Card className="p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-50 text-brand-700 mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">Focused on Inclusion</h3>
              <p className="mt-4 text-slate-600">
                Futora is designed for students from any background. No gatekeeping. Just genuine support.
              </p>
            </Card>

            <Card className="p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-50 text-brand-700 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">Focused on Action</h3>
              <p className="mt-4 text-slate-600">
                Not just insights. Every recommendation is actionable. Every step moves you closer to your goal.
              </p>
            </Card>

            <Card className="p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-50 text-brand-700 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">Focused on Now</h3>
              <p className="mt-4 text-slate-600">
                Career readiness isn't someday. It's this week. It's this month. It's this semester.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Vision */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-950">Built in South Africa. Designed for the World.</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            South Africa has talent. We have brilliant minds. What we've lacked is clarity and confidence. Futora starts here because if we can help South African students compete globally, we can help anyone.
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            The platform is architected to scale internationally. Whether you're in Cape Town, Lagos, Nairobi, or anywhere else, Futora adapts to local opportunities, local companies, local context—while maintaining a global standard of excellence.
          </p>
        </div>
      </section>

      {/* Team Future */}
      <section className="bg-gradient-to-r from-brand-50 to-brand-50 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 border border-brand-100 mb-6">
            <Sparkles size={18} className="text-brand-600" />
            <span className="text-sm font-semibold text-brand-700">Growing the team</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-950">We're just getting started.</h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Futora is backed by a mission to reduce unemployment across Africa. We're hiring brilliant engineers, designers, product people, and career coaches who believe in this.
          </p>
          <Link href="/community">
            <Button className="mt-8 inline-flex items-center gap-2">
              Join our community
              <TrendingUp size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-950">Ready to start your journey?</h2>
          <p className="mt-4 text-slate-600">Get clarity. Build confidence. Achieve your dream career.</p>
          <Link href="/signup">
            <Button className="mt-8">Get started with Futora</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

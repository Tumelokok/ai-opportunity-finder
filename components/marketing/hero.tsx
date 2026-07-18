import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Personalized career roadmap',
  'GitHub, CV, LinkedIn intelligence',
  'Weekly tasks and progress tracking'
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
              Built for CS students and future engineers
            </div>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Know exactly what you need to do to get your dream software job.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              AI Opportunity Finder analyzes your GitHub, CV, LinkedIn, projects, certifications and career goals to create a personalized roadmap toward internships and graduate opportunities.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="inline-flex items-center gap-2">
                Start free
                <ArrowRight size={18} />
              </Button>
              <Link href="#features" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">
                View demo
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3 text-slate-950">
                    <Sparkles size={18} className="text-brand-600" />
                    <p className="font-semibold">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-50 p-8 shadow-card">
            <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-600">Dashboard preview</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950">Career readiness, tasks, and insights at a glance.</p>
                </div>
                <ShieldCheck className="text-brand-700" size={26} />
              </div>
              <div className="mt-10 space-y-4">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Current readiness</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">82%</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">GitHub</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">74%</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">CV</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">88%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

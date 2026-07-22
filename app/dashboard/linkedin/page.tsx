import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LinkedInAnalyzerPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8">
          <ArrowLeft size={20} />
          Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-950 mb-8">LinkedIn Profile Analyzer</h1>

        <Card className="p-8 shadow-card">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-600 font-semibold">Profile score</p>
              <p className="mt-2 text-4xl font-bold text-slate-950">76%</p>
            </div>
            <div className="text-4xl">💼</div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-950 mb-4">Recommendations</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="font-medium text-slate-950">Improve your headline</p>
                    <p className="text-sm text-slate-600">Add keywords relevant to your target role</p>
                  </div>
                </li>
                <li className="flex gap-3 p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="font-medium text-slate-950">Enhance your About section</p>
                    <p className="text-sm text-slate-600">Add measurable achievements and specific projects</p>
                  </div>
                </li>
                <li className="flex gap-3 p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="font-medium text-slate-950">Add GitHub link to profile</p>
                    <p className="text-sm text-slate-600">Recruiters want to see your code</p>
                  </div>
                </li>
              </ul>
            </div>

            <Button className="w-full">Get detailed analysis</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}

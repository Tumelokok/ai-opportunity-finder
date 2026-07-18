import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, AlertCircle } from 'lucide-react';

export default function GitHubAnalyzerPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8">
          <ArrowLeft size={20} />
          Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-950 mb-8">GitHub Portfolio Analyzer</h1>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-xl font-semibold text-slate-950 mb-4">Connect GitHub</h2>
              <p className="text-slate-600 mb-6">Link your GitHub account to get a complete portfolio analysis.</p>
              <Button className="w-full">Connect with GitHub</Button>
            </Card>

            <Card className="p-6 shadow-card bg-blue-50 border border-blue-100">
              <div className="flex gap-3">
                <AlertCircle className="text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900">What we analyze</p>
                  <ul className="mt-3 text-sm text-blue-800 space-y-2">
                    <li>• Repository quality</li>
                    <li>• Commit frequency</li>
                    <li>• Programming languages</li>
                    <li>• Documentation quality</li>
                    <li>• Project complexity</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 shadow-card">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-brand-600 font-semibold">Portfolio score</p>
                <p className="mt-2 text-4xl font-bold text-slate-950">74%</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-950 mb-4">Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-slate-700">Strong frontend portfolio</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-slate-700">Good documentation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-950 mb-4">Areas to improve</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span className="text-slate-700">Limited backend experience</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span className="text-slate-700">No testing frameworks used</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span className="text-slate-700">Missing CI/CD pipelines</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full">View detailed report</Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

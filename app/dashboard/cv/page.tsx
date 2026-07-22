import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function CVAnalyzerPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8">
          <ArrowLeft size={20} />
          Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-950 mb-8">CV Analyzer</h1>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-xl font-semibold text-slate-950 mb-4">Upload your CV</h2>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:bg-slate-50">
                <div className="text-4xl mb-3">📄</div>
                <p className="font-medium text-slate-950">Drop your CV here</p>
                <p className="text-sm text-slate-600">or click to browse</p>
              </div>
            </Card>
          </div>

          <Card className="p-8 shadow-card">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-brand-600 font-semibold">CV Score</p>
                <p className="mt-2 text-4xl font-bold text-slate-950">88%</p>
              </div>
              <div className="text-4xl">✓</div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-950 mb-3">ATS Compatibility</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Formatting</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Keywords</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Structure</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </div>

              <Button className="w-full">Get detailed report</Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

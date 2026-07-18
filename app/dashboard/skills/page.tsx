import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SkillsGapPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8">
          <ArrowLeft size={20} />
          Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-950 mb-8">Skills Gap Analysis</h1>

        <Card className="p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-950 mb-6">Your target: Software Engineer</h2>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-950">✓ React</span>
                <span className="text-green-600">Complete</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-950">✓ JavaScript</span>
                <span className="text-green-600">Complete</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-950">⏳ Node.js</span>
                <span className="text-yellow-600">In progress</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-950">❌ Docker</span>
                <span className="text-red-600">Not started</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-950">❌ System Design</span>
                <span className="text-red-600">Not started</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-950">❌ Testing</span>
                <span className="text-red-600">Not started</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">Learning order</h3>
            <ol className="text-sm text-blue-800 space-y-2">
              <li>1. Finish Node.js fundamentals (2 weeks)</li>
              <li>2. Learn Docker basics (1 week)</li>
              <li>3. System design fundamentals (3 weeks)</li>
              <li>4. Testing & CI/CD (2 weeks)</li>
            </ol>
          </div>

          <Button className="w-full mt-8">Get personalized learning path</Button>
        </Card>
      </div>
    </main>
  );
}

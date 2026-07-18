import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';

export default function CoachPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8">
          <ArrowLeft size={20} />
          Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-950 mb-8">AI Career Coach</h1>

        <Card className="p-6 shadow-card mb-6">
          <div className="space-y-4 h-96 overflow-y-auto mb-6 p-4 bg-slate-50 rounded-lg">
            <div className="flex gap-3">
              <div className="text-2xl">🤖</div>
              <div className="bg-white rounded-lg p-4 max-w-xs">
                <p className="text-slate-700">Hi! I'm your AI career coach. I'm here to help you navigate your path to becoming a software engineer. What would you like to know today?</p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-brand-600 text-white rounded-lg p-4 max-w-xs">
                <p>Should I focus on backend or frontend first?</p>
              </div>
              <div className="text-2xl">👤</div>
            </div>

            <div className="flex gap-3">
              <div className="text-2xl">🤖</div>
              <div className="bg-white rounded-lg p-4 max-w-sm">
                <p className="text-slate-700">Based on your profile, I'd recommend starting with backend fundamentals. You already have strong frontend skills from React. Adding Node.js and database knowledge will make you much more competitive. Start with building a REST API this week.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me anything about your career..."
              className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none"
            />
            <Button className="inline-flex items-center gap-2">
              <Send size={20} />
            </Button>
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h3 className="font-semibold text-slate-950 mb-4">Suggested questions:</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-brand-600 hover:text-brand-700">Should I study Honours?</Link></li>
            <li><Link href="#" className="text-brand-600 hover:text-brand-700">Am I ready for internships?</Link></li>
            <li><Link href="#" className="text-brand-600 hover:text-brand-700">What should I build next?</Link></li>
            <li><Link href="#" className="text-brand-600 hover:text-brand-700">How do I improve my GitHub?</Link></li>
          </ul>
        </Card>
      </div>
    </main>
  );
}

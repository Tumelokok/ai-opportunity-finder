import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8">
          <ArrowLeft size={20} />
          Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-950 mb-8">Project Recommendations</h1>

        <div className="space-y-6">
          {[
            {
              title: 'Expense Tracker API',
              desc: 'Learn CRUD, databases, authentication',
              diff: 'Beginner',
              hours: '20'
            },
            {
              title: 'Authentication Server',
              desc: 'JWT, OAuth, password security',
              diff: 'Intermediate',
              hours: '30'
            },
            {
              title: 'Booking Platform',
              desc: 'Database design, business logic',
              diff: 'Intermediate',
              hours: '40'
            },
            {
              title: 'Microservices API',
              desc: 'System design, distributed systems',
              diff: 'Advanced',
              hours: '60'
            }
          ].map((project, i) => (
            <Card key={i} className="p-6 shadow-card hover:shadow-lg transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{project.title}</h3>
                  <p className="text-slate-600 mt-2">{project.desc}</p>
                  <div className="flex gap-3 mt-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700">{project.diff}</span>
                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-700">{project.hours}h</span>
                  </div>
                </div>
                <Button variant="secondary">View</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

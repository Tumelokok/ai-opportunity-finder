import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8">
          <ArrowLeft size={20} />
          Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-slate-950 mb-8">Settings</h1>

        <div className="space-y-6">
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold text-slate-950 mb-4">Profile settings</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-950 mb-2">Full name</label>
                <input
                  type="text"
                  defaultValue="Software Engineer"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-950 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="engineer@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-950 mb-2">University</label>
                <input
                  type="text"
                  placeholder="Enter your university"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none"
                />
              </div>
              <Button className="w-full">Save changes</Button>
            </form>
          </Card>

          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold text-slate-950 mb-4">Career goal</h2>
            <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none mb-4">
              <option>Software Engineer</option>
              <option>Backend Engineer</option>
              <option>Frontend Engineer</option>
              <option>AI Engineer</option>
              <option>Cloud Engineer</option>
            </select>
            <Button className="w-full">Update career goal</Button>
          </Card>

          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold text-slate-950 mb-4">Connected accounts</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <div>
                  <p className="font-medium text-slate-950">GitHub</p>
                  <p className="text-sm text-slate-600">Connected</p>
                </div>
                <Button variant="secondary" size="sm">Disconnect</Button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-slate-950">LinkedIn</p>
                  <p className="text-sm text-slate-600">Not connected</p>
                </div>
                <Button size="sm">Connect</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card border-l-4 border-red-500">
            <h2 className="text-xl font-semibold text-slate-950 mb-4">Danger zone</h2>
            <p className="text-slate-600 mb-4">Delete your account and all associated data permanently.</p>
            <Button variant="secondary" className="text-red-600 border-red-200 hover:bg-red-50">
              Delete account
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}

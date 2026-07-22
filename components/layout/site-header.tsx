import { Sparkles } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-slate-950">
          <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-brand-600 text-white shadow-sm">
            <Sparkles size={20} />
          </span>
          Futora
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/community">Community</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="secondary" className="hidden md:inline-flex">Sign in</Button>
          </Link>
          <Link href="/signup">
            <Button>Join free</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}


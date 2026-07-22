import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl font-bold text-brand-600 mb-6">404</div>
        <h1 className="text-3xl font-bold text-slate-950 mb-4">Page not found</h1>
        <p className="text-slate-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button className="inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to home
          </Button>
        </Link>
      </div>
    </main>
  );
}

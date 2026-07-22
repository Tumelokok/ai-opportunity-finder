import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AuthProvider } from '@/app/context/auth';
import { SiteHeader } from '@/components/layout/site-header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Futora - AI Career Intelligence Platform',
  description: 'AI-powered career intelligence for CS and IT students. Get personalized roadmaps, analysis, and opportunities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-surface text-slate-950 antialiased`}>
        <AuthProvider>
          <div className="min-h-screen bg-white text-slate-950">
            <SiteHeader />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

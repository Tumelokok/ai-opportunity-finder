import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Futora</p>
            <p className="mt-6 max-w-md text-slate-600">
              AI Opportunity Finder is the premium career intelligence platform built for students and early career engineers.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">Product</h3>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>
                <Link href="#features" className="hover:text-slate-950">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-slate-950">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-950">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">Company</h3>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>
                <Link href="#" className="hover:text-slate-950">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-950">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-950">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-sm text-slate-500">© 2026 Futora. Built to help students build their future with confidence.</p>
      </div>
    </footer>
  );
}

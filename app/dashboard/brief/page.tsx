import Link from 'next/link';

export const metadata = { title: 'SA graduate opportunity brief | Futora' };

const programmes = [
  {
    name: 'BBD Graduate Programme (SA27-I)',
    audience: 'New graduates in computing and related fields. BBD also considers demonstrable project work.',
    action: 'Prepare your CV, academic results and a link to a project you can explain.',
    source: 'https://bbdsoftware.com/jobs/graduate-programme-sa27-i-2/',
  },
  {
    name: 'Entelect Graduate Programme',
    audience: 'Graduates interested in software engineering, data engineering or business analysis. The programme includes a Johannesburg boot camp.',
    action: 'Check the qualification and citizenship requirements for your chosen track before applying.',
    source: 'https://culture.entelect.com/graduates',
  },
];

export default function OpportunityBrief() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-6 py-12">
      <Link href="/dashboard" className="text-brand-700">← Dashboard</Link>
      <h1 className="text-3xl font-bold">South African graduate opportunity brief</h1>
      <p>Edition of <time dateTime="2026-11-22">22 November 2026</time>. These employer pages were reviewed for this edition. Check each employer’s current intake and closing date before applying.</p>
      {programmes.map((programme) => (
        <article key={programme.source} className="space-y-3 rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">{programme.name}</h2>
          <p>{programme.audience}</p>
          <p>{programme.action}</p>
          <a className="inline-block font-semibold text-brand-700 underline" href={programme.source}>View employer programme</a>
        </article>
      ))}
    </main>
  );
}

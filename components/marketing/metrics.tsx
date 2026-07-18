export function Metrics() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="rounded-[2rem] bg-white p-10 shadow-card">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-600">Insights</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Data-driven momentum</h2>
            <p className="mt-5 text-slate-600">
              Use analytics for skills, projects, applications, and certifications to focus only on the highest-impact actions.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Average student improvement</p>
            <p className="mt-4 text-4xl font-semibold text-slate-950">37%</p>
            <p className="mt-3 text-slate-600">Career readiness growth within 8 weeks of guided recommendations.</p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Recommended actions</p>
            <p className="mt-4 text-4xl font-semibold text-slate-950">12+</p>
            <p className="mt-3 text-slate-600">Weekly tasks tailored to your goal, profile, and readiness score.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

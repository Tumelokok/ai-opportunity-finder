const features = [
  {
    title: 'Skills gap analysis',
    description: 'Compare your current strengths with industry expectations and see what to learn next.'
  },
  {
    title: 'GitHub portfolio review',
    description: 'Assess repo quality, commit activity, documentation, and project diversity.'
  },
  {
    title: 'CV and ATS audit',
    description: 'Evaluate formatting, keywords, and structure so you can pass recruiter filters.'
  },
  {
    title: 'Internship and grad fit',
    description: 'Rank opportunities by match score and explain what you need to improve.'
  },
  {
    title: 'Certification recommendations',
    description: 'Get prioritized credential suggestions based on your target role and profile.'
  },
  {
    title: 'AI career coach',
    description: 'Ask contextual questions and receive actionable guidance based on your progress.'
  }
];

export function FeatureGrid() {
  return (
    <section id="features" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-600">Core features</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Everything a modern career platform should include.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Designed for students and early career engineers who want a polished roadmap, real confidence, and AI-powered direction.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-card">
              <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-4 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-surface px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl animate-pulse space-y-6">
        <div className="h-28 rounded-[1.5rem] bg-slate-200" />
        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="space-y-6">
            <div className="h-72 rounded-[1.5rem] bg-slate-200" />
            <div className="h-72 rounded-[1.5rem] bg-slate-200" />
          </div>
          <div className="space-y-6">
            <div className="h-48 rounded-[1.5rem] bg-slate-200" />
            <div className="h-52 rounded-[1.5rem] bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

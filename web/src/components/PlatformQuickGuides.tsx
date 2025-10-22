import { PlatformGuide, platformGuides } from "@/lib/data";

const PlatformCard = ({ guide }: { guide: PlatformGuide }) => (
  <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-semibold text-slate-900">{guide.platform}</h3>
    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
      Signature hooks
    </p>
    <ul className="mt-2 space-y-2 text-sm text-slate-600">
      {guide.hooks.map((hook) => (
        <li key={hook} className="flex gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>{hook}</span>
        </li>
      ))}
    </ul>
    <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Ideal length
      </p>
      <p className="mt-2 text-sm text-slate-700">{guide.idealLength}</p>
    </div>
    <div className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Creative tips
      </p>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {guide.creativeTips.map((tip) => (
          <li key={tip} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const PlatformQuickGuides = () => {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {platformGuides.map((guide) => (
        <PlatformCard key={guide.platform} guide={guide} />
      ))}
    </div>
  );
};

export default PlatformQuickGuides;

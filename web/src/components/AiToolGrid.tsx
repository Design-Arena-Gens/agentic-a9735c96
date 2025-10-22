import { ExternalLink } from "lucide-react";
import { aiToolkits } from "@/lib/data";

const AiToolGrid = () => {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {aiToolkits.map((tool) => (
        <article
          key={tool.name}
          className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
        >
          <div>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-900">{tool.name}</h3>
              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-hover:border-slate-300 group-hover:text-slate-900"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-orange-500">
              {tool.price}
            </p>
            <p className="mt-3 text-base text-slate-600">{tool.tagline}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {tool.featureHighlights.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <dl className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
              <dt className="font-semibold text-slate-500">Best for</dt>
              <dd className="mt-1 text-slate-700">{tool.bestFor}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
};

export default AiToolGrid;

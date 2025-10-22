import { workflowSteps } from "@/lib/data";
import {
  Gauge,
  Keyboard,
  LayoutDashboard,
  Palette,
  Sparkles,
  Target,
} from "lucide-react";

const icons = [Target, LayoutDashboard, Keyboard, Palette, Gauge];

const WorkflowTimeline = () => {
  return (
    <div className="relative mt-12 grid gap-10 sm:mt-16">
      {workflowSteps.map((step, index) => {
        const Icon = icons[index] ?? Sparkles;
        return (
          <div
            key={step.id}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col justify-between gap-6 sm:flex-row">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                    Step {step.id}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-600">{step.description}</p>
                </div>
              </div>
              <div className="sm:w-56">
                <p className="text-sm font-semibold text-slate-500">Power moves</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {step.tips.map((tip) => (
                    <li key={tip} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkflowTimeline;

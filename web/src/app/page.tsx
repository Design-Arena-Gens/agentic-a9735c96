import Link from "next/link";
import { ArrowUpRight, Wand2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import AiToolGrid from "@/components/AiToolGrid";
import PromptPlayground from "@/components/PromptPlayground";
import PlatformQuickGuides from "@/components/PlatformQuickGuides";
import OptimizationChecklist from "@/components/OptimizationChecklist";

const heroStats = [
  { label: "Creative variations", value: "5+ ready-made prompts" },
  { label: "Visual polish", value: "AI tools for pro-grade assets" },
  { label: "Launch speed", value: "From idea to ad in 60 minutes" },
];

const resourceLinks = [
  {
    title: "AI Ad Inspiration Boards",
    description:
      "Curated galleries of top-performing ad concepts sorted by niche, format, and hook style.",
    href: "https://www.adcreative.ai/inspiration",
  },
  {
    title: "Creative Prompt Library",
    description:
      "Copy-and-paste prompt sheets covering hooks, scripts, and landing page alignment.",
    href: "https://www.futurepedia.io/prompt-libraries",
  },
  {
    title: "UGC Creator Marketplaces",
    description:
      "Find creators who will record scripts you generate with AI at budget-friendly rates.",
    href: "https://billo.app/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-10 lg:px-20">
        <header className="relative overflow-hidden rounded-[3rem] border border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(255,176,85,0.18),_rgba(12,15,28,0.9))] p-10 shadow-[0_40px_120px_rgba(12,12,20,0.65)] sm:p-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-200">
                AI Ad Playbook
                <Wand2 className="h-4 w-4" />
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Build elite, high-converting ads for free with AI-powered workflows.
              </h1>
              <p className="text-lg text-slate-300">
                Follow these proven systems to research, script, design, and launch
                ads that look like they came from a top agency—without paying for one.
                Plug the prompts into your favorite model, remix the creative, and hit
                publish in record time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  View the step-by-step system
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#prompts"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Jump to prompt templates
                </Link>
              </div>
            </div>
            <div className="grid w-full max-w-sm gap-4 rounded-[2.2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-black/30 p-4 text-center"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section id="workflow" className="space-y-8">
          <SectionHeading
            eyebrow="Creative OS"
            title="A five-step workflow for ads your audience actually wants to watch"
            description="Each step stacks to build clarity, creative tension, and conversion power. Work through the playbook in order or jump to the areas where you need the most leverage."
          />
          <WorkflowTimeline />
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="AI toolbox"
            title="Free tools that deliver premium visuals, copy, and voiceover"
            description="These platforms have generous free tiers and integrate well with each other. Combine them to generate scroll-stopping assets without paying enterprise prices."
          />
          <AiToolGrid />
        </section>

        <section id="prompts" className="space-y-8">
          <SectionHeading
            eyebrow="Prompt lab"
            title="Plug-and-play prompt recipes for any format"
            description="Feed real customer insight into these frameworks to skip the blank page. Tweak the inputs and paste the prompt into your favorite AI model like ChatGPT, Claude, or Gemini."
          />
          <PromptPlayground />
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Platform IQ"
            title="Know the rules of every ad placement before you hit publish"
            description="Match format-specific creative tactics so your ads feel native, respect technical constraints, and deliver a polished experience on any platform."
          />
          <PlatformQuickGuides />
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <OptimizationChecklist />
          <div className="space-y-6 rounded-3xl border border-slate-200/20 bg-white/5 p-6 text-slate-200 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
              Deep-dive resources
            </p>
            <h3 className="text-2xl font-semibold text-white">
              Keep leveling up your ad game
            </h3>
            <ul className="space-y-5 text-sm leading-6">
              {resourceLinks.map((resource) => (
                <li key={resource.title}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-orange-300 hover:bg-orange-300/10"
                  >
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-300 transition group-hover:bg-orange-200" />
                    <span>
                      <span className="block text-sm font-semibold text-white group-hover:text-orange-100">
                        {resource.title}
                      </span>
                      <span className="mt-1 block text-sm text-slate-300/90">
                        {resource.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-slate-300">
              Bonus: Mix in real customer testimonials and product footage when you
              record. AI excels at structure and story, but authenticity comes from
              your brand voice and proof.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

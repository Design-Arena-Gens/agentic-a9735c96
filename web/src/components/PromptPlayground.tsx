'use client';

import { useMemo, useState } from "react";
import { Copy, Sparkles } from "lucide-react";
import { promptRecipes } from "@/lib/data";

const friendlyLabels: Record<string, string> = {
  product: "Product or offer",
  audience: "Target audience",
  pain_points: "Top pain points",
  desired_outcome: "Desired outcome",
  tone: "Tone of voice",
  cta: "Primary CTA",
  goal: "Campaign goal",
  unique_mechanic: "Unique mechanic or angle",
  offer: "Offer details",
  benefits: "Top benefits",
  objection: "Key objection",
  social_proof: "Social proof snippet",
};

const defaultValues: Record<string, string> = {
  product: "AI-powered meal planning app",
  audience: "Busy professionals who want to eat healthier",
  pain_points: "no time to cook, decision fatigue, wasted groceries",
  desired_outcome: "cook healthy meals in 15 minutes",
  tone: "energetic and friendly",
  cta: "Start your free 14-day trial",
  goal: "Drive free trial signups",
  unique_mechanic: "Personalized recipes generated in seconds",
  offer: "Free 14-day trial plus grocery list automation",
  benefits: "saves time, personalized nutrition, delicious recipes",
  objection: "not another restrictive diet app",
  social_proof: "4.8★ rating from 12k reviews",
};

const PromptPlayground = () => {
  const [recipeIndex, setRecipeIndex] = useState(0);
  const [fields, setFields] = useState<Record<string, string>>(defaultValues);
  const [copied, setCopied] = useState(false);

  const recipe = promptRecipes[recipeIndex];

  const renderedPrompt = useMemo(() => {
    return recipe.fields.reduce((acc, field) => {
      const value = fields[field] || `{${field}}`;
      return acc.replaceAll(`{${field}}`, value);
    }, recipe.prompt);
  }, [recipe, fields]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(renderedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (error) {
      console.error("Failed to copy prompt", error);
    }
  };

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[380px_1fr] lg:items-start">
      <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Recipes
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Choose the best template for your creative.
            </p>
          </div>
          <Sparkles className="h-5 w-5 text-slate-400" />
        </div>
        <div className="space-y-3">
          {promptRecipes.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setRecipeIndex(index)}
              className={`w-full rounded-2xl border p-4 text-left transition ${
                index === recipeIndex
                  ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                {item.context}
              </p>
              <p className="mt-2 text-base font-semibold">{item.name}</p>
              <p
                className={`mt-2 text-sm ${
                  index === recipeIndex ? "text-slate-200" : "text-slate-500"
                }`}
              >
                {item.proTip}
              </p>
            </button>
          ))}
        </div>
      </aside>
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Customize the inputs
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Sharper inputs = stronger outputs. Update fields with specifics from
            your product, audience, and offer.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {recipe.fields.map((field) => (
            <label key={field} className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                {friendlyLabels[field] ?? field}
              </span>
              <textarea
                rows={field === "pain_points" || field === "benefits" ? 4 : 3}
                value={fields[field] ?? ""}
                onChange={(event) =>
                  setFields((prev) => ({
                    ...prev,
                    [field]: event.target.value,
                  }))
                }
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-sm text-slate-700 shadow-inner focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                placeholder={`Describe ${friendlyLabels[field] ?? field}`}
              />
            </label>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-inner">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                Ready-to-paste prompt
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Drop this into your favorite AI model.
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border border-orange-400 bg-orange-400/20 px-4 py-2 text-sm font-semibold text-orange-100 transition hover:bg-orange-400/30"
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : "Copy prompt"}
            </button>
          </div>
          <pre className="mt-4 max-h-96 overflow-auto whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm leading-6">
            {renderedPrompt}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default PromptPlayground;

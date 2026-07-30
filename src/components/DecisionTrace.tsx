import { AlertTriangle, ArrowRight, BadgeCheck, Check, FileCheck2, Scale } from "lucide-react";
import { Reveal } from "./Motion";

const facts = [
  ["Seller", "PL · VAT registered"],
  ["Customer", "DE · Valid VAT ID"],
  ["Supply", "B2B goods"],
  ["Movement", "Poland → Germany"],
];

export function DecisionTrace() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-primary/10 bg-[#0B241D] text-white shadow-[0_34px_90px_-48px_rgba(7,29,24,0.7)]">
        <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Illustrative decision trace
            </div>
            <div className="mt-1 text-sm font-semibold">INV-2026-0421 · Intra-EU supply</div>
          </div>
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-300/10 px-3 py-1 text-[11px] font-medium text-emerald-200 ring-1 ring-inset ring-emerald-300/20">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Review complete
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
            <div className="text-xs font-medium text-white/55">Transaction inputs</div>
            <dl className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="state-hover-dark flex items-center justify-between gap-4 rounded-xl bg-white/[0.055] px-3.5 py-3 ring-1 ring-inset ring-white/10"
                >
                  <dt className="text-xs text-white/50">{label}</dt>
                  <dd className="text-right text-xs font-medium text-white/90">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="p-5">
            <div className="grid gap-3">
              <TraceRow
                icon={Scale}
                label="Taxexa Rules"
                title="0% intra-Community supply"
                detail="Article 138 · effective for transaction date"
                tone="green"
              />
              <TraceRow
                icon={FileCheck2}
                label="Taxexa Check"
                title="Invoice fields and VAT IDs validated"
                detail="VIES response stored · identity match confirmed"
                tone="green"
              />
              <TraceRow
                icon={AlertTriangle}
                label="Taxexa Evidence"
                title="One transport document still required"
                detail="CMR received · destination receipt missing"
                tone="amber"
              />
            </div>

            <div className="state-hover-dark mt-4 flex flex-col gap-3 rounded-2xl bg-white/[0.055] p-4 ring-1 ring-inset ring-white/10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/45">
                  Next action
                </div>
                <div className="mt-1 text-xs font-medium text-white/90">
                  Request destination receipt before closing the evidence pack.
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200">
                View reasoning
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function TraceRow({
  icon: Icon,
  label,
  title,
  detail,
  tone,
}: {
  icon: typeof Scale;
  label: string;
  title: string;
  detail: string;
  tone: "green" | "amber";
}) {
  const isGreen = tone === "green";

  return (
    <div className="state-hover-dark grid grid-cols-[auto_1fr_auto] items-start gap-3 rounded-2xl bg-white/[0.055] p-4 ring-1 ring-inset ring-white/10">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
          isGreen ? "bg-emerald-300/10 text-emerald-200" : "bg-amber-300/10 text-amber-200"
        }`}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
          {label}
        </div>
        <div className="mt-1 text-sm font-semibold text-white">{title}</div>
        <div className="mt-1 text-[11px] leading-relaxed text-white/55">{detail}</div>
      </div>
      <div
        className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full ${
          isGreen ? "bg-emerald-300/15 text-emerald-200" : "bg-amber-300/15 text-amber-200"
        }`}
      >
        {isGreen ? (
          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
        ) : (
          <AlertTriangle className="h-3 w-3" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

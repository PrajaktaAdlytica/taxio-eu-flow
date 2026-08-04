import { useState, type ElementType } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Link2,
  MapPin,
  PackageCheck,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

type ViewKey = "overview" | "rules" | "check" | "evidence";

const views: Array<{
  key: ViewKey;
  label: string;
  icon: ElementType;
  status: string;
}> = [
  { key: "overview", label: "Overview", icon: ScanSearch, status: "1 action" },
  { key: "rules", label: "Rules", icon: BookOpen, status: "Resolved" },
  { key: "check", label: "Check", icon: FileCheck2, status: "Passed" },
  { key: "evidence", label: "Evidence", icon: ShieldCheck, status: "3 of 4" },
];

const facts = [
  ["Seller", "Vistula Home Sp. z o.o.", "PL VAT registered"],
  ["Customer", "Nordlicht Handel GmbH", "DE VAT ID · illustrative"],
  ["Supply", "Modular shelving", "B2B goods"],
  ["Movement", "Warsaw → Berlin", "8 Oct 2025"],
];

const checks = [
  ["Invoice structure", "Passed", "Required fields present"],
  ["VAT treatment", "Passed", "0% treatment matches rule result"],
  ["Customer VAT ID", "Passed", "Illustrative VIES receipt stored"],
  ["Evidence policy", "Review", "Destination receipt is missing"],
];

const evidence = [
  ["Commercial invoice", "INV-2025-0421", "Stored", FileText],
  ["VAT ID receipt", "30 Jul · 11:24 CET", "Stored", CheckCircle2],
  ["Signed CMR", "CMR-88421", "Stored", PackageCheck],
  ["Destination receipt", "Requested from buyer", "Missing", MapPin],
];

export function ProductWorkspace() {
  const [activeView, setActiveView] = useState<ViewKey>("overview");

  return (
    <div className="overflow-hidden rounded-[28px] border border-primary/10 bg-[#081E19] text-white shadow-[0_42px_110px_-54px_rgba(5,34,27,0.72)]">
      <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.025] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-300/15 text-emerald-200 ring-1 ring-inset ring-emerald-200/20">
            <ScanSearch className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <div className="text-xs font-semibold">Transaction TX-2048</div>
            <div className="text-[10px] text-white/45">
              Fictional workspace · no live processing
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-300/10 px-2.5 py-1 text-[10px] font-medium text-amber-100 ring-1 ring-inset ring-amber-200/20">
            Review required
          </span>
          <span className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[10px] text-white/55 ring-1 ring-inset ring-white/10">
            PL → DE
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr]">
        <div className="border-b border-white/10 bg-black/10 p-3 lg:border-b-0 lg:border-r">
          <div
            role="tablist"
            aria-label="Taxexa product workspace views"
            className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1"
          >
            {views.map((view) => {
              const Icon = view.icon;
              const active = activeView === view.key;
              return (
                <button
                  key={view.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`workspace-panel-${view.key}`}
                  id={`workspace-tab-${view.key}`}
                  onClick={() => setActiveView(view.key)}
                  className={`flex min-h-14 items-center gap-2 rounded-xl px-3 text-left transition ${
                    active
                      ? "bg-white/[0.1] text-white ring-1 ring-inset ring-white/15"
                      : "text-white/52 hover:bg-white/[0.05] hover:text-white/80"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${active ? "text-emerald-200" : ""}`} />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold">{view.label}</span>
                    <span className="block truncate text-[9px] text-white/35">{view.status}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="state-hover-dark mt-4 hidden rounded-xl bg-white/[0.035] p-3 ring-1 ring-inset ring-white/10 lg:block">
            <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">
              Decision rail
            </div>
            <div className="mt-3 space-y-3">
              {[
                ["Determine", "Complete"],
                ["Check", "Complete"],
                ["Prove", "1 action"],
              ].map(([label, state], index) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className={`grid h-5 w-5 place-items-center rounded-full text-[9px] font-semibold ${
                      index < 2
                        ? "bg-emerald-300 text-[#082019]"
                        : "bg-amber-300/15 text-amber-100 ring-1 ring-inset ring-amber-200/25"
                    }`}
                  >
                    {index < 2 ? <Check className="h-3 w-3" strokeWidth={3} /> : "3"}
                  </span>
                  <span className="text-[10px] text-white/65">{label}</span>
                  <span className="ml-auto text-[9px] text-white/30">{state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 p-4 sm:p-5 lg:p-6">
          {activeView === "overview" && <OverviewPanel />}
          {activeView === "rules" && <RulesPanel />}
          {activeView === "check" && <CheckPanel />}
          {activeView === "evidence" && <EvidencePanel />}
        </div>
      </div>
    </div>
  );
}

function PanelHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="text-[9px] font-semibold uppercase tracking-[0.17em] text-emerald-200/70">
        {eyebrow}
      </div>
      <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h3>
      <p className="mt-1 max-w-2xl text-[11px] leading-relaxed text-white/45">{description}</p>
    </div>
  );
}

function OverviewPanel() {
  return (
    <div role="tabpanel" id="workspace-panel-overview" aria-labelledby="workspace-tab-overview">
      <PanelHeader
        eyebrow="Transaction summary"
        title="Polish goods sold to a German business"
        description="One fictional transaction carries the same facts, rule result, invoice checks and evidence status across the workspace."
      />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {facts.map(([label, value, note]) => (
          <div
            key={label}
            className="state-hover-dark rounded-xl bg-white/[0.045] p-3.5 ring-1 ring-inset ring-white/10"
          >
            <div className="text-[9px] uppercase tracking-wider text-white/30">{label}</div>
            <div className="mt-1.5 text-xs font-medium text-white/85">{value}</div>
            <div className="mt-1 text-[10px] text-white/38">{note}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
        <div className="state-hover-dark rounded-xl bg-emerald-300/[0.08] p-4 ring-1 ring-inset ring-emerald-200/15">
          <div className="flex items-center gap-2 text-emerald-100">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Proposed treatment
            </span>
          </div>
          <div className="mt-2 text-sm font-semibold">0% intra-Community supply</div>
          <div className="mt-1 text-[10px] leading-relaxed text-white/45">
            Subject to valid buyer VAT ID and evidence that the goods left Poland.
          </div>
        </div>
        <div className="state-hover-dark rounded-xl bg-amber-300/[0.08] p-4 ring-1 ring-inset ring-amber-200/15">
          <div className="flex items-center gap-2 text-amber-100">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Next action</span>
          </div>
          <div className="mt-2 text-sm font-semibold">Collect destination receipt</div>
          <div className="mt-1 text-[10px] leading-relaxed text-white/45">
            Reviewer: Marta Zielińska · illustrative assignment
          </div>
        </div>
      </div>
    </div>
  );
}

function RulesPanel() {
  return (
    <div role="tabpanel" id="workspace-panel-rules" aria-labelledby="workspace-tab-rules">
      <PanelHeader
        eyebrow="Taxexa Rules"
        title="Why the transaction resolves to 0%"
        description="The concept exposes the decision path instead of returning an unexplained tax code."
      />
      <div className="mt-5 space-y-2">
        {[
          ["1", "Customer is acting as a taxable person", "Buyer VAT ID provided"],
          ["2", "Goods move between EU Member States", "Poland → Germany"],
          ["3", "Supplier retains transport evidence", "CMR stored · receipt outstanding"],
        ].map(([number, title, detail]) => (
          <div
            key={number}
            className="state-hover-dark flex items-center gap-3 rounded-xl bg-white/[0.045] p-3 ring-1 ring-inset ring-white/10"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-300/10 text-[10px] font-semibold text-emerald-100">
              {number}
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-medium text-white/82">{title}</span>
              <span className="block text-[10px] text-white/38">{detail}</span>
            </span>
            <ChevronRight className="ml-auto h-3.5 w-3.5 shrink-0 text-white/25" />
          </div>
        ))}
      </div>
      <SourceCard />
    </div>
  );
}

function CheckPanel() {
  return (
    <div role="tabpanel" id="workspace-panel-check" aria-labelledby="workspace-tab-check">
      <PanelHeader
        eyebrow="Taxexa Check"
        title="Invoice passed, evidence needs review"
        description="Validation states stay separate, so one missing document does not hide the checks that passed."
      />
      <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-inset ring-white/10">
        {checks.map(([label, state, detail]) => (
          <div
            key={label}
            className="state-hover-dark grid gap-1 border-b border-white/10 bg-white/[0.04] px-3.5 py-3 last:border-0 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div>
              <div className="text-[11px] font-medium text-white/80">{label}</div>
              <div className="mt-0.5 text-[10px] text-white/36">{detail}</div>
            </div>
            <span
              className={`w-fit rounded-full px-2 py-1 text-[9px] font-semibold ${
                state === "Passed"
                  ? "bg-emerald-300/10 text-emerald-100"
                  : "bg-amber-300/10 text-amber-100"
              }`}
            >
              {state}
            </span>
          </div>
        ))}
      </div>
      <SourceCard />
    </div>
  );
}

function EvidencePanel() {
  return (
    <div role="tabpanel" id="workspace-panel-evidence" aria-labelledby="workspace-tab-evidence">
      <PanelHeader
        eyebrow="Taxexa Evidence"
        title="Three documents stored. One still missing."
        description="The evidence file shows what supports the proposed treatment and what must happen next."
      />
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {evidence.map(([label, detail, state, Icon]) => (
          <div
            key={label as string}
            className="state-hover-dark flex items-center gap-3 rounded-xl bg-white/[0.045] p-3.5 ring-1 ring-inset ring-white/10"
          >
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                state === "Stored"
                  ? "bg-emerald-300/10 text-emerald-100"
                  : "bg-amber-300/10 text-amber-100"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-medium text-white/82">{label}</span>
              <span className="block truncate text-[10px] text-white/38">{detail}</span>
            </span>
            <span className="ml-auto text-[9px] font-medium text-white/42">{state}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3 rounded-xl bg-amber-300/[0.07] p-4 ring-1 ring-inset ring-amber-200/15 sm:flex-row sm:items-center">
        <div>
          <div className="text-[11px] font-semibold text-amber-100">
            Request destination receipt
          </div>
          <div className="mt-1 text-[10px] text-white/42">
            Preview action only · no email will be sent
          </div>
        </div>
        <button
          type="button"
          disabled
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-amber-200/15 px-3 text-[10px] font-semibold text-amber-100 ring-1 ring-inset ring-amber-100/20 disabled:cursor-not-allowed"
        >
          Send request <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

function SourceCard() {
  return (
    <div className="state-hover-dark mt-4 grid gap-2 rounded-xl bg-white/[0.035] p-3.5 ring-1 ring-inset ring-white/10 sm:grid-cols-3">
      <div className="flex items-start gap-2">
        <Link2 className="mt-0.5 h-3.5 w-3.5 text-emerald-200" aria-hidden="true" />
        <div>
          <div className="text-[9px] uppercase tracking-wider text-white/30">Rule source</div>
          <div className="mt-1 text-[10px] text-white/68">EU VAT Directive · Art. 138</div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Clock3 className="mt-0.5 h-3.5 w-3.5 text-emerald-200" aria-hidden="true" />
        <div>
          <div className="text-[9px] uppercase tracking-wider text-white/30">Effective date</div>
          <div className="mt-1 text-[10px] text-white/68">Illustrative · 8 Oct 2025</div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-emerald-200" aria-hidden="true" />
        <div>
          <div className="text-[9px] uppercase tracking-wider text-white/30">Review state</div>
          <div className="mt-1 text-[10px] text-white/68">Human review required</div>
        </div>
      </div>
    </div>
  );
}

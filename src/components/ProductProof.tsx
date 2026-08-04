import { AlertTriangle, ArrowRight, Check, CircleHelp, Clock3, FileOutput } from "lucide-react";

type ProductKind = "rules" | "check" | "evidence";

const content: Record<
  ProductKind,
  {
    eyebrow: string;
    title: string;
    description: string;
    inputs: Array<[string, string]>;
    result: string;
    detail: string;
    source: string;
    workflow: Array<[string, string]>;
    freshness: Array<[string, string]>;
    capabilities: Array<[string, string]>;
    useCases: string[];
  }
> = {
  rules: {
    eyebrow: "Illustrative rule trace",
    title: "A conclusion with its logic attached.",
    description:
      "Taxexa Rules is imagined as an effective-dated decision engine: every answer preserves the transaction facts, source and reasoning that produced it.",
    inputs: [
      ["Seller", "Poland"],
      ["Customer", "Germany · B2B"],
      ["Supply", "Goods"],
      ["Movement", "PL → DE"],
    ],
    result: "0% intra-Community supply",
    detail: "Reverse charge wording required · evidence review triggered",
    source: "EU VAT Directive · Article 138",
    workflow: [
      ["Problem", "Treatment depends on buyer status, movement and retained proof."],
      ["Inputs", "Seller, buyer, supply type, route and transaction date."],
      ["Decision", "0% intra-Community supply proposed with conditions."],
      ["Next", "Confirm destination evidence before closing the review."],
    ],
    freshness: [
      ["Jurisdiction", "EU · Poland"],
      ["Effective", "Illustrative · 8 Oct 2025"],
      ["Reviewed", "Illustrative · 8 Oct 2025"],
      ["State", "Human review required"],
    ],
    capabilities: [
      ["Effective dates", "Reproduce the rule that applied on the transaction date."],
      ["Source trail", "Keep the authority reference beside the result."],
      ["Review states", "Escalate incomplete or contradictory inputs."],
      ["Change history", "Show what changed, when and why."],
    ],
    useCases: ["Cross-border goods", "B2B services", "Reverse charge", "OSS/IOSS routing"],
  },
  check: {
    eyebrow: "Illustrative validation trace",
    title: "A check that explains every warning.",
    description:
      "Taxexa Check is designed to separate format checks, official-source responses and business-rule warnings instead of collapsing everything into one green badge.",
    inputs: [
      ["Invoice", "INV-2025-0421"],
      ["VAT ID", "DE123456789"],
      ["Tax point", "8 Oct 2025"],
      ["Currency", "EUR"],
    ],
    result: "Invoice valid · evidence incomplete",
    detail: "VAT ID response stored · buyer identity confirmed",
    source: "VIES response · illustrative timestamp 11:24 CET",
    workflow: [
      ["Problem", "A valid invoice can still contain treatment or identity conflicts."],
      ["Inputs", "Invoice fields, VAT IDs, amounts, dates and rule result."],
      ["Decision", "Invoice checks pass; evidence remains incomplete."],
      ["Next", "Resolve the evidence warning before approval."],
    ],
    freshness: [
      ["Jurisdiction", "Poland · Germany"],
      ["Checked", "Illustrative · 8 Oct 2025"],
      ["Source state", "Mock response stored"],
      ["Confidence", "High · review open"],
    ],
    capabilities: [
      ["Structured checks", "Validate required fields, totals and tax treatments."],
      ["Registry states", "Distinguish valid, invalid and source unavailable."],
      ["Identity review", "Surface mismatches for human confirmation."],
      ["Dated receipts", "Store when and where a validation occurred."],
    ],
    useCases: [
      "Pre-posting review",
      "Supplier onboarding",
      "Batch validation",
      "Correction workflows",
    ],
  },
  evidence: {
    eyebrow: "Illustrative evidence file",
    title: "The proof stays connected to the decision.",
    description:
      "Taxexa Evidence is imagined as a transaction-level file that makes missing, contradictory and superseded documents visible before an audit request arrives.",
    inputs: [
      ["Invoice", "Received"],
      ["VAT response", "Stored"],
      ["CMR", "Received"],
      ["Destination receipt", "Missing"],
    ],
    result: "Evidence pack · 75% complete",
    detail: "One destination document requested from the customer",
    source: "Evidence policy · illustrative version 3.2",
    workflow: [
      ["Problem", "Supporting documents are scattered across inboxes and folders."],
      ["Inputs", "Invoice, VAT receipt, transport record and destination proof."],
      ["Decision", "Evidence file is 75% complete with one visible gap."],
      ["Next", "Request the buyer's destination receipt."],
    ],
    freshness: [
      ["Policy", "Illustrative · v3.2"],
      ["Reviewed", "Illustrative · 8 Oct 2025"],
      ["Documents", "3 stored · 1 missing"],
      ["State", "Follow-up required"],
    ],
    capabilities: [
      ["Evidence policy", "Show which documents support each treatment."],
      ["Version history", "Preserve changes and reviewer attribution."],
      ["Gap detection", "Flag missing or contradictory documents."],
      ["Portable export", "Create a transaction file for external review."],
    ],
    useCases: [
      "Intra-EU transport",
      "Exemption support",
      "Audit preparation",
      "Client collaboration",
    ],
  },
};

export function ProductProof({ kind }: { kind: ProductKind }) {
  const product = content[kind];

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              {product.eyebrow}
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              {product.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-medium text-amber-900">
              <CircleHelp className="h-3.5 w-3.5" aria-hidden="true" />
              Fictional data · interface concept
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-primary/10 bg-[#0B241D] text-white shadow-[0_34px_90px_-48px_rgba(7,29,24,0.7)]">
            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/45">
                    Transaction TX-2048
                  </div>
                  <div className="mt-1 text-sm font-semibold">Poland → Germany · B2B goods</div>
                </div>
                <div className="rounded-full bg-white/[0.06] px-3 py-1 text-[10px] text-white/60 ring-1 ring-inset ring-white/10">
                  Sample
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <dl className="grid gap-2">
                {product.inputs.map(([label, value]) => (
                  <div
                    key={label}
                    className="state-hover-dark flex items-center justify-between gap-3 rounded-xl bg-white/[0.055] px-3 py-2.5 ring-1 ring-inset ring-white/10"
                  >
                    <dt className="text-[11px] text-white/45">{label}</dt>
                    <dd className="text-right text-[11px] font-medium text-white/85">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="state-hover-dark flex flex-col rounded-2xl bg-white/[0.055] p-4 ring-1 ring-inset ring-white/10">
                <div className="flex items-center gap-2 text-emerald-200">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">Result</span>
                </div>
                <div className="mt-3 text-base font-semibold">{product.result}</div>
                <div className="mt-2 text-[11px] leading-relaxed text-white/55">
                  {product.detail}
                </div>
                <div className="mt-auto pt-5">
                  <div className="flex items-start gap-2 border-t border-white/10 pt-3 text-[10px] leading-relaxed text-white/45">
                    <Clock3 className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                    {product.source}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-accent">
                From problem to next action
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-primary">
                The complete fictional workflow
              </h2>
            </div>
            <div className="text-[10px] text-muted-foreground">
              Transaction TX-2048 · illustrative
            </div>
          </div>
          <div className="mt-7 grid gap-3 lg:grid-cols-4">
            {product.workflow.map(([label, detail], index) => (
              <div
                key={label}
                className="state-hover relative rounded-2xl border border-border bg-background/60 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-accent-soft text-[10px] font-semibold text-accent">
                    {index + 1}
                  </span>
                  {index < product.workflow.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-border" aria-hidden="true" />
                  )}
                </div>
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {label}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
          <dl className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {product.freshness.map(([label, value]) => (
              <div key={label} className="state-hover bg-surface px-4 py-3">
                <dt className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1 text-[11px] font-medium text-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              What the product concept is designed to make visible
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.capabilities.map(([title, detail]) => (
                <div
                  key={title}
                  className="state-hover rounded-2xl border border-border bg-surface p-5"
                >
                  <div className="text-sm font-semibold text-primary">{title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="state-hover rounded-3xl border border-border bg-accent-soft/65 p-6">
            <FileOutput className="h-5 w-5 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-primary">Example use cases</h2>
            <ul className="mt-5 grid gap-3">
              {product.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="flex items-center justify-between gap-3 border-b border-accent/15 pb-3 text-sm font-medium text-primary/80 last:border-0 last:pb-0"
                >
                  {useCase}
                  <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2 rounded-2xl bg-white/70 p-4 text-xs leading-relaxed text-primary/65">
              <AlertTriangle
                className="mt-0.5 h-4 w-4 shrink-0 text-amber-700"
                aria-hidden="true"
              />
              Coverage and integrations shown in this concept are illustrative, not production
              commitments.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

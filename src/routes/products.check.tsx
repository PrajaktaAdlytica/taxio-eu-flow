import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/Button";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { CTA } from "@/components/CTA";
import { ProductProof } from "@/components/ProductProof";

export const Route = createFileRoute("/products/check")({
  head: () => ({
    meta: [
      { title: "Taxexa Check — Explainable VAT and invoice validation" },
      {
        name: "description",
        content:
          "Explore the fictional Taxexa Check workflow for invoice validation, VAT ID states and visible review actions.",
      },
    ],
  }),
  component: Page,
});

const features = [
  {
    t: "Registry-aware VAT validation",
    d: "Separate valid, invalid, unavailable and identity-review states instead of returning one opaque badge.",
  },
  {
    t: "Invoice-level validation",
    d: "Line items, tax codes and totals verified before anything is filed.",
  },
  {
    t: "Cross-checks",
    d: "Names, addresses and country combinations cross-checked automatically.",
  },
  {
    t: "Continuous audit trail",
    d: "Every check is stored with timestamp and source for full traceability.",
  },
];

function Page() {
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Taxexa Check</Eyebrow>
          <h1 className="mt-4 text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.02] text-balance">
            Validate every invoice{" "}
            <span className="font-editorial text-accent">before it moves.</span>
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground leading-relaxed">
            Explore how VAT numbers, invoice fields and transaction data could be checked before
            posting—with a dated trace explaining every result and warning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/request-demo" variant="primary" size="lg">
              Request concept demo <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/#workspace" variant="outline" size="lg">
              Explore the workspace
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl bg-[color:var(--accent-soft)] p-10 border border-border">
          <div className="max-w-md flex items-center gap-3 text-primary">
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center border border-border">
              <ShieldCheck className="h-5 w-5 text-accent" />
            </div>
            <div className="text-sm font-semibold">Validation Engine</div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Invoice fields · Valid",
              "VAT ID · Confirmed",
              "Identity · Match",
              "Evidence · Review",
            ].map((t) => (
              <div
                key={t}
                className="state-hover rounded-xl bg-white border border-border px-4 py-3 text-sm text-primary"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow="Features"
          title="Built for finance teams that can't afford errors."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.t} className="surface-card card-hover p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 rounded-md bg-accent-soft text-accent flex items-center justify-center">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-primary">{f.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductProof kind="check" />

      <CTA />
    </Shell>
  );
}

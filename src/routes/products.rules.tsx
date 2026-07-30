import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/Button";
import { ArrowRight, Check, Scale } from "lucide-react";
import { CTA } from "@/components/CTA";
import { ProductProof } from "@/components/ProductProof";

export const Route = createFileRoute("/products/rules")({
  head: () => ({
    meta: [
      { title: "Taxexa Rules — Explainable European VAT decisions" },
      {
        name: "description",
        content:
          "Explore the fictional Taxexa Rules workflow for effective-dated European VAT treatment and reviewable decision logic.",
      },
    ],
  }),
  component: Page,
});

const features = [
  {
    t: "Country and scenario coverage",
    d: "A concept for effective-dated treatment across supported European transaction types.",
  },
  {
    t: "Reverse charge & OSS/IOSS",
    d: "Illustrative decision paths show how cross-border facts could route to different treatments.",
  },
  {
    t: "Deterministic engine",
    d: "Every rule decision explainable and auditable — no black boxes.",
  },
  {
    t: "Integration-ready concept",
    d: "The imagined API surface connects rule decisions to ERP, billing and e-commerce workflows.",
  },
];

function Page() {
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Taxexa Rules</Eyebrow>
          <h1 className="mt-4 text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.02] text-balance">
            Country-specific VAT logic,{" "}
            <span className="font-editorial text-accent">automated.</span>
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground leading-relaxed">
            Explore how transaction facts could resolve into an explainable VAT treatment—with the
            authority source, effective date and review state kept beside the answer.
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
        <div className="rounded-2xl bg-[color:var(--accent-lavender)] p-10 border border-border">
          <div className="max-w-md flex items-center gap-3 text-primary">
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center border border-border">
              <Scale className="h-5 w-5 text-accent" />
            </div>
            <div className="text-sm font-semibold">Rule Engine</div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Seller · Poland",
              "Customer · Germany",
              "Treatment · 0%",
              "Source · Article 138",
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
        <SectionHeader eyebrow="Features" title="One rule engine. Every scenario." />
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

      <ProductProof kind="rules" />

      <CTA />
    </Shell>
  );
}

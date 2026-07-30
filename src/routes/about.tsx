import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Taxexa" },
      {
        name: "description",
        content:
          "Taxexa is an interactive European SaaS concept for explainable VAT decisions, invoice checks and supporting evidence.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>About Taxexa</Eyebrow>
          <h1 className="mt-4 text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.02] text-balance">
            Building European infrastructure for{" "}
            <span className="font-editorial text-accent">tax compliance.</span>
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground leading-relaxed">
            Taxexa is an interactive European B2B SaaS concept exploring how SMEs, accountants,
            finance teams and cross-border sellers could connect VAT decisions, invoice checks and
            supporting evidence in one operational workspace.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "European by design",
              d: "The concept is grounded in the fragmented country rules, invoice mandates and evidence needs European teams face.",
            },
            {
              t: "Explainability first",
              d: "Every imagined product result keeps its inputs, source, effective date and review state visible.",
            },
            {
              t: "Operational focus",
              d: "The interface is designed to feel calm, precise and useful during real finance-team review work.",
            },
          ].map((v) => (
            <div key={v.t} className="surface-card card-hover p-6">
              <div className="text-sm font-semibold text-primary">{v.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow="Concept contact"
          title="A transparent contact surface for the concept."
          description="Taxexa.com is reserved for the concept. The email link below is illustrative and may not be monitored."
        />
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <a
            href="mailto:hello@taxexa.com"
            className="text-accent hover:text-accent/80 font-medium"
          >
            hello@taxexa.com
          </a>
        </div>
      </section>

      <CTA />
    </Shell>
  );
}

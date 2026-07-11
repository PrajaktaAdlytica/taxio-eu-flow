import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/Button";
import { ArrowRight, Check, Scale } from "lucide-react";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/products/rules")({
  head: () => ({ meta: [{ title: "Taxexa Rules — Country-specific VAT automation" }] }),
  component: Page,
});

const features = [
  { t: "27 EU countries", d: "Live coverage of every EU member state, updated continuously by our tax content team." },
  { t: "Reverse charge & OSS/IOSS", d: "Cross-border scenarios handled automatically, no manual VAT logic to maintain." },
  { t: "Deterministic engine", d: "Every rule decision explainable and auditable — no black boxes." },
  { t: "API-first", d: "Plug Taxexa Rules into your ERP, billing or e-commerce stack in minutes." },
];

function Page() {
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Taxexa Rules</Eyebrow>
          <h1 className="mt-4 text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.02] text-balance">
            Country-specific VAT logic, <span className="font-editorial text-accent">automated.</span>
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground leading-relaxed">
            Apply the right VAT treatment across every transaction, in every country you sell into — without maintaining custom logic yourself.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/request-demo" variant="primary" size="lg">Request Demo <ArrowRight className="h-4 w-4" /></ButtonLink>
            <ButtonLink to="/" variant="outline" size="lg">Back to platform</ButtonLink>
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
            {["Europe map", "Country selector", "Rule engine", "Compliance status"].map((t) => (
              <div key={t} className="rounded-xl bg-white border border-border px-4 py-3 text-sm text-primary">{t}</div>
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

      <CTA />
    </Shell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Taxio" },
      { name: "description", content: "Taxio builds premium European infrastructure for VAT compliance, e-invoicing and evidence management." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>About Taxio</Eyebrow>
          <h1 className="mt-4 text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.02] text-balance">
            Building European infrastructure for <span className="font-editorial text-accent">tax compliance.</span>
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground leading-relaxed">
            Taxio is a European B2B SaaS platform helping SMEs, accountants, finance teams and cross-border sellers automate VAT compliance, e-invoicing and evidence management — from one operational workspace.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Made in Europe", d: "Built in Warsaw for the European market — hosted in the EU, compliant with GDPR from day one." },
            { t: "Tax content team", d: "In-house tax specialists monitor all 27 EU member states, so your workflows always reflect current rules." },
            { t: "Operational focus", d: "We design software that finance teams actually enjoy using — calm, fast, and never in the way." },
          ].map((v) => (
            <div key={v.t} className="surface-card card-hover p-6">
              <div className="text-sm font-semibold text-primary">{v.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader eyebrow="Contact" title="Come and say hello." description="Taxio Sp. z o.o. · Rondo Daszyńskiego 2B · 00-843 Warsaw · Poland" />
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <a href="mailto:hello@taxio.ai" className="text-accent hover:text-accent/80 font-medium">hello@taxio.ai</a>
          {" · "}
          <a href="tel:+48223078420" className="text-accent hover:text-accent/80 font-medium">+48 22 307 84 20</a>
        </div>
      </section>

      <CTA />
    </Shell>
  );
}

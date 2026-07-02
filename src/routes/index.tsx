import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, PlayCircle } from "lucide-react";
import { Shell } from "@/components/Shell";
import { ButtonLink } from "@/components/Button";
import { HeroWorkflow } from "@/components/HeroWorkflow";
import { TrustedBy } from "@/components/TrustedBy";
import { ProblemCards } from "@/components/ProblemCards";
import { SolutionFlow } from "@/components/SolutionFlow";
import { ProductCards } from "@/components/ProductCards";
import { PlatformDashboard } from "@/components/PlatformDashboard";
import { BenefitStats } from "@/components/BenefitStats";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { Reveal } from "@/components/Motion";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taxio — Automate VAT compliance across Europe." },
      { name: "description", content: "Validate invoices, apply country-specific VAT rules and automate evidence collection from one operational workspace." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-20 md:pb-28 min-h-[82vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
            <div>
              <Eyebrow>EU Tax Compliance Platform</Eyebrow>
              <h1 className="mt-4 text-[44px] sm:text-6xl lg:text-[68px] leading-[1.02] font-semibold text-primary tracking-tight text-balance">
                Automate VAT compliance across{" "}
                <span className="text-accent">Europe.</span>
              </h1>
              <p className="mt-6 max-w-lg text-[17px] text-muted-foreground leading-relaxed">
                Validate invoices, apply country-specific VAT rules, automate evidence collection and prepare every transaction for compliance from one operational workspace.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/request-demo" variant="primary" size="lg">
                  Request Demo <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#platform" variant="outline" size="lg">
                  <PlayCircle className="h-4 w-4" /> Watch Product Tour
                </ButtonLink>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-accent" /> 27 EU countries</div>
                <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-accent" /> GDPR compliant</div>
                <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-accent" /> EU-hosted</div>
              </div>
            </div>
            <div><HeroWorkflow /></div>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* PROBLEM */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="The Challenge"
          title={<>Tax compliance shouldn't live across <span className="font-editorial text-accent">spreadsheets, emails</span> and disconnected documents.</>}
          description="Manual VAT validation, changing regulations and scattered supporting evidence slow finance teams and increase compliance risk."
        />
        <div className="mt-14"><ProblemCards /></div>
      </section>

      {/* SOLUTION */}
      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="The Solution"
          title={<>One workflow for every <span className="font-editorial text-accent">VAT decision.</span></>}
          description="Taxio connects invoice validation, VAT rules and supporting evidence into one operational workflow."
        />
        <div className="mt-14"><Reveal><SolutionFlow /></Reveal></div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Our Products"
          title={<>Three products. <span className="font-editorial text-accent">One connected platform.</span></>}
          description="A modular suite covering the full compliance lifecycle — validation, rules and evidence — with continuous updates in between."
        />
        <div className="mt-14"><ProductCards /></div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="The Platform"
          title={<>One workspace for complete <span className="font-editorial text-accent">VAT visibility.</span></>}
          description="Every invoice. Every rule. Every piece of evidence. In one always-current view your teams can trust."
        />
        <div className="mt-14"><Reveal><PlatformDashboard /></Reveal></div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Why Taxio" title="Real outcomes for European finance teams." />
        <div className="mt-14"><BenefitStats /></div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing."
          description="Choose the plan that fits your team today — scale as your programme grows."
        />
        <div className="mt-14"><Pricing /></div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeader eyebrow="Customers" title="Trusted by finance leaders." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { q: "Taxio reduced our VAT review time from days to minutes while keeping every transaction fully documented.", n: "Anna Kowalska", r: "Finance Director", c: "Warsaw Commerce Group" },
            { q: "Cross-border invoicing became significantly easier once our compliance workflow moved into Taxio.", n: "Piotr Nowak", r: "Head of Finance", c: "Baltic Retail Solutions" },
            { q: "We finally have one place for invoices, VAT validation and supporting evidence.", n: "Katarzyna Wiśniewska", r: "Chief Accountant", c: "Nova Logistics Polska" },
          ].map((t) => (
            <div key={t.n} className="surface-card card-hover p-7 flex flex-col">
              <div className="text-accent text-4xl leading-none font-editorial">"</div>
              <p className="mt-2 text-[15px] text-primary/90 leading-relaxed flex-1">{t.q}</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="text-sm font-semibold text-primary">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r} · {t.c}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
        <div className="mt-12">
          <FAQ items={[
            { q: "How does Taxio validate VAT numbers?", a: "Taxio validates VAT identifiers against official European sources (including VIES) in real time, checks format per country and cross-checks the name and address on the invoice." },
            { q: "How often are VAT rules updated?", a: "Our tax content team monitors regulatory changes across all 27 EU member states and pushes updates continuously, so your workflows always reflect the current rules." },
            { q: "Does Taxio support cross-border invoicing?", a: "Yes. Taxio handles intra-community supplies, reverse charge scenarios, OSS/IOSS and country-specific e-invoicing formats such as Peppol." },
            { q: "Can evidence be exported?", a: "Every invoice, receipt, contract and supporting document can be exported as a compliance-ready package for auditors, tax authorities or internal review." },
            { q: "Is Taxio suitable for accountants?", a: "Yes. Accountancy firms use Taxio to manage multiple client workspaces, standardise VAT reviews and produce fully documented filings." },
          ]} />
        </div>
      </section>

      <CTA />
    </Shell>
  );
}

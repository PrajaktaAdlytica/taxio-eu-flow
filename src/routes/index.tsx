import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ScanSearch } from "lucide-react";
import { Shell } from "@/components/Shell";
import { ButtonLink } from "@/components/Button";
import { HeroWorkflow } from "@/components/HeroWorkflow";
import { TrustedBy } from "@/components/TrustedBy";
import { ProblemCards } from "@/components/ProblemCards";
import { SolutionFlow } from "@/components/SolutionFlow";
import { ProductCards } from "@/components/ProductCards";
import { BenefitStats } from "@/components/BenefitStats";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { Reveal } from "@/components/Motion";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { DecisionTrace } from "@/components/DecisionTrace";
import { RegulatoryContext } from "@/components/RegulatoryContext";
import { ProductWorkspace } from "@/components/ProductWorkspace";
import { CustomerJourney } from "@/components/CustomerJourney";
import { TrustByDesign } from "@/components/TrustByDesign";
import { CinematicEntry } from "@/components/CinematicEntry";
import { FundingAnnouncement } from "@/components/FundingAnnouncement";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taxexa — EU invoice compliance you can explain" },
      {
        name: "description",
        content:
          "Determine VAT treatment, validate invoices and connect every decision to its supporting evidence in one European compliance workspace.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell overlayHeader>
      <CinematicEntry />

      {/* HERO */}
      <section id="taxexa-overview" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-20 md:pb-28 min-h-[82vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
            <div>
              <Eyebrow>European invoice compliance · Product concept</Eyebrow>
              <h1 className="mt-4 text-[44px] sm:text-6xl lg:text-[68px] leading-[1.02] font-semibold text-primary tracking-tight text-balance">
                Get the VAT treatment right.{" "}
                <span className="font-editorial text-accent">Then prove it.</span>
              </h1>
              <p className="mt-6 max-w-lg text-[17px] text-muted-foreground leading-relaxed">
                Determine the right VAT treatment, validate every invoice and keep the evidence
                behind each decision in one operational workspace for European finance and
                accounting teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/request-demo" variant="primary" size="lg">
                  Request concept demo <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#workspace" variant="outline" size="lg">
                  <ScanSearch className="h-4 w-4" /> Explore the concept
                </ButtonLink>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" /> Explainable decisions
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" /> Dated rule sources
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" /> Exportable evidence
                </div>
              </div>
            </div>
            <div>
              <HeroWorkflow />
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* PROBLEM */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="The Challenge"
          title={
            <>
              Tax compliance shouldn't live across{" "}
              <span className="font-editorial text-accent">spreadsheets, emails</span> and
              disconnected documents.
            </>
          }
          description="Manual VAT validation, changing regulations and scattered supporting evidence slow finance teams and increase compliance risk."
        />
        <div className="mt-14">
          <ProblemCards />
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="The Solution"
          title={
            <>
              Determine. Check. <span className="font-editorial text-accent">Prove.</span>
            </>
          }
          description="Taxexa connects transaction facts, applicable rules, invoice checks and supporting evidence into one reviewable decision trace."
        />
        <div className="mt-14">
          <Reveal>
            <SolutionFlow />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="One connected transaction"
          title={
            <>
              Follow the decision from transaction facts to{" "}
              <span className="font-editorial text-accent">audit-ready context.</span>
            </>
          }
          description="A single fictional Poland-to-Germany invoice connects Taxexa Rules, Check and Evidence into one continuous review path."
        />
        <div className="mt-14">
          <CustomerJourney />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Our Products"
          title={
            <>
              Three products.{" "}
              <span className="font-editorial text-accent">One defensible decision.</span>
            </>
          }
          description="A modular concept spanning rule determination, invoice validation and the evidence needed to support the conclusion."
        />
        <div className="mt-14">
          <ProductCards />
        </div>
      </section>

      <section id="decision-trace" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
        <SectionHeader
          eyebrow="Explainability by design"
          title={
            <>
              Not just a green check.{" "}
              <span className="font-editorial text-accent">The reasoning behind it.</span>
            </>
          }
          description="An illustrative view of how Taxexa could expose inputs, applied rules, validation results, missing evidence and the next review action."
        />
        <div className="mt-14">
          <DecisionTrace />
        </div>
      </section>

      {/* PLATFORM */}
      <section id="workspace" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
        <SectionHeader
          eyebrow="Interactive product workspace"
          title={
            <>
              Inspect the same decision through{" "}
              <span className="font-editorial text-accent">four connected views.</span>
            </>
          }
          description="Switch between Overview, Rules, Check and Evidence to see how the fictional transaction stays explainable from input to next action."
        />
        <div className="mt-14">
          <Reveal>
            <ProductWorkspace />
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Illustrative product targets"
          title="The operational outcomes Taxexa is designed to pursue."
          description="Concept metrics shown below are fictional and demonstrate the intended product value, not measured customer results."
        />
        <div className="mt-14">
          <BenefitStats />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <RegulatoryContext />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <TrustByDesign />
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Pricing"
          title="Illustrative plans for different operating models."
          description="Demo pricing shows one possible packaging model and is not a commercial offer."
        />
        <div className="mt-14">
          <Pricing />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
        <div className="mt-12">
          <FAQ
            items={[
              {
                q: "How would Taxexa validate VAT numbers?",
                a: "The concept separates format checks, official-source responses such as VIES, source-unavailable states and identity review. No live registry connection is implemented in this demo.",
              },
              {
                q: "How would Taxexa keep rules current?",
                a: "The product concept uses effective-dated rules, source links and a visible change history. The operational governance model would be established before a real launch.",
              },
              {
                q: "What cross-border scenarios does the concept show?",
                a: "The demo illustrates intra-Community supplies, reverse charge, OSS/IOSS and country-specific e-invoicing contexts. These examples are not production coverage commitments.",
              },
              {
                q: "Can evidence be exported in this demo?",
                a: "The interface demonstrates a portable evidence package, but no real files are stored or exported in this non-functional concept.",
              },
              {
                q: "How is this demo intended for accountants?",
                a: "The concept includes multi-client review, documented reasoning, evidence exports and reviewer attribution. These are illustrative workflows rather than live customer capabilities.",
              },
            ]}
          />
        </div>
      </section>

      <FundingAnnouncement />

      <CTA />
    </Shell>
  );
}

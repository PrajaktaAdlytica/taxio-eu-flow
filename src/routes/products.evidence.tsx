import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/Button";
import { ArrowRight, Check, FolderCheck } from "lucide-react";
import { CTA } from "@/components/CTA";
import { ProductProof } from "@/components/ProductProof";

export const Route = createFileRoute("/products/evidence")({
  head: () => ({
    meta: [
      { title: "Taxexa Evidence — Connected transaction proof" },
      {
        name: "description",
        content:
          "Explore the fictional Taxexa Evidence workflow for connected documents, visible gaps and portable transaction context.",
      },
    ],
  }),
  component: Page,
});

const features = [
  {
    t: "Connected collection",
    d: "A concept for attaching receipts, contracts and transport documents to the decision they support.",
  },
  {
    t: "Audit-ready packages",
    d: "Export a fully documented evidence pack for any period or transaction in a click.",
  },
  {
    t: "Version history",
    d: "Illustrative reviewer, timestamp and change history keeps the evidence trail understandable.",
  },
  {
    t: "Portable by design",
    d: "The concept prioritises structured, exportable transaction files over a closed document archive.",
  },
];

function Page() {
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Taxexa Evidence</Eyebrow>
          <h1 className="mt-4 text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.02] text-balance">
            Every document, connected to{" "}
            <span className="font-editorial text-accent">every transaction.</span>
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground leading-relaxed">
            Explore how documents, validation receipts and reviewer actions could remain connected
            to the VAT conclusion they support.
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
        <div className="rounded-2xl bg-[color:var(--accent-amber)] p-10 border border-border">
          <div className="max-w-md flex items-center gap-3 text-primary">
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center border border-border">
              <FolderCheck className="h-5 w-5 text-accent" />
            </div>
            <div className="text-sm font-semibold">Evidence Vault</div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Invoice · Received",
              "VIES receipt · Stored",
              "CMR · Received",
              "Destination proof · Missing",
              "Evidence pack · 75%",
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
        <SectionHeader eyebrow="Features" title="Never chase a document again." />
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

      <ProductProof kind="evidence" />

      <CTA />
    </Shell>
  );
}

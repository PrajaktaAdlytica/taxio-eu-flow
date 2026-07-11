import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/Button";
import { ArrowRight, Check, FolderCheck } from "lucide-react";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/products/evidence")({
  head: () => ({ meta: [{ title: "Taxexa Evidence — Compliance evidence, automated" }] }),
  component: Page,
});

const features = [
  { t: "Automatic collection", d: "Receipts, contracts and supporting documents automatically attached to the right transactions." },
  { t: "Audit-ready packages", d: "Export a fully documented evidence pack for any period or transaction in a click." },
  { t: "Version history", d: "Every file, every change tracked with immutable timestamps and user attribution." },
  { t: "Secure by default", d: "EU-hosted storage, granular permissions and full GDPR alignment." },
];

function Page() {
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Taxexa Evidence</Eyebrow>
          <h1 className="mt-4 text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.02] text-balance">
            Every document, connected to <span className="font-editorial text-accent">every transaction.</span>
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground leading-relaxed">
            Automatically collect, organise and export compliance evidence for every transaction — audit-ready, always.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/request-demo" variant="primary" size="lg">Request Demo <ArrowRight className="h-4 w-4" /></ButtonLink>
            <ButtonLink to="/" variant="outline" size="lg">Back to platform</ButtonLink>
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
            {["Invoices", "Receipts", "Contracts", "Attachments", "Export Package"].map((t) => (
              <div key={t} className="rounded-xl bg-white border border-border px-4 py-3 text-sm text-primary">{t}</div>
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

      <CTA />
    </Shell>
  );
}

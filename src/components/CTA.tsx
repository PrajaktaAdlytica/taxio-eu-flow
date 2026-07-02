import { ButtonLink } from "./Button";
import { ArrowRight, Check } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="surface-card relative overflow-hidden p-10 md:p-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight text-balance">
              Ready to simplify VAT compliance?
            </h3>
            <p className="mt-4 text-[15px] text-muted-foreground max-w-md">
              See how Taxio helps finance teams automate validation, evidence collection and European VAT compliance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink to="/request-demo" variant="primary" size="lg">
                Request Demo <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="mailto:hello@taxio.ai" variant="outline" size="lg">
                Talk to Sales
              </ButtonLink>
            </div>
          </div>
          <div className="hidden md:block">
            <MiniPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniPreview() {
  const items = [
    { l: "INV-2026-0421 · Baltic Retail", ok: true },
    { l: "INV-2026-0422 · Nordic Supply", ok: true },
    { l: "INV-2026-0423 · Loire Marketplace", ok: false },
  ];
  return (
    <div className="surface-card p-4 space-y-2">
      {items.map((it) => (
        <div key={it.l} className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-border/70 bg-background/50">
          <div className="text-xs font-medium text-primary truncate mr-2">{it.l}</div>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${it.ok ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"} inline-flex items-center gap-1`}>
            {it.ok && <Check className="h-3 w-3" strokeWidth={3} />}
            {it.ok ? "Valid" : "Review"}
          </span>
        </div>
      ))}
    </div>
  );
}

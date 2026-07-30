import { ArrowUpRight, CalendarClock, Radio, Route } from "lucide-react";

const milestones = [
  {
    date: "2026",
    title: "KSeF operating reality",
    detail:
      "A live Polish e-invoicing environment with phased obligations, rejection handling and offline procedures.",
    icon: Radio,
  },
  {
    date: "2028",
    title: "Single VAT Registration changes",
    detail:
      "ViDA measures expand OSS pathways and reshape selected cross-border VAT responsibilities.",
    icon: Route,
  },
  {
    date: "2030",
    title: "EU digital reporting",
    detail:
      "Structured e-invoicing supports digital reporting for affected intra-EU B2B transactions.",
    icon: CalendarClock,
  },
];

export function RegulatoryContext() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div>
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-1 w-1 rounded-full bg-accent" />
          Why this concept matters now
        </div>
        <h2 className="mt-3 max-w-xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-4xl">
          Built around the direction of European invoicing.
        </h2>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
          This demo explores how a single control layer could connect today&apos;s Polish KSeF
          operations with the longer-term direction of ViDA—without pretending every country follows
          one identical workflow.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://ksef.podatki.gov.pl/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            Official KSeF portal
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            European Commission · ViDA
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <ol className="grid gap-3">
        {milestones.map(({ date, title, detail, icon: Icon }) => (
          <li
            key={date}
            className="state-hover grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-border bg-surface p-5 shadow-[0_16px_45px_-36px_rgba(11,18,32,0.35)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                {date}
              </div>
              <h3 className="mt-1 text-base font-semibold text-primary">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

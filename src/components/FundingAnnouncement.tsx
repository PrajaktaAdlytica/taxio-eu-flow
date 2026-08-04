import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Reveal } from "./Motion";

const DLABS_PORTFOLIO = "https://d-labs-site.vercel.app/companies";

export function FundingAnnouncement() {
  return (
    <section
      id="funding"
      aria-labelledby="funding-announcement-title"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-accent/20 bg-[#0b3026] px-6 py-8 text-white shadow-[0_30px_80px_-48px_rgba(11,48,38,0.72)] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle at 88% 20%, rgba(109, 219, 166, 0.24), transparent 23rem), radial-gradient(circle at 10% 110%, rgba(255,255,255,0.1), transparent 22rem)",
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Funding announcement
                </span>
                <span className="h-1 w-1 rounded-full bg-emerald-300/70" aria-hidden="true" />
                <time dateTime="2025-10-08">Oct 8, 2025</time>
              </div>
              <h2
                id="funding-announcement-title"
                className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[46px]"
              >
                Taxexa secures <span className="font-editorial text-emerald-200">$470K</span> in
                funding from Dlabs.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">
                Taxexa is part of Dlabs’ global portfolio of companies building tax compliance for
                complex operating environments.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <a
                href={DLABS_PORTFOLIO}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-medium text-[#0b3026] transition-all hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b3026]"
              >
                View Dlabs portfolio <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/news/funding-announcement"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 px-5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b3026]"
              >
                Read announcement
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

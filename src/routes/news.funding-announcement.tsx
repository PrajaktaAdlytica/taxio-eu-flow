import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Building2 } from "lucide-react";
import { Shell } from "@/components/Shell";

const DLABS_PORTFOLIO = "https://d-labs-site.vercel.app/companies";

export const Route = createFileRoute("/news/funding-announcement")({
  head: () => ({
    meta: [
      { title: "Taxexa secures $470K in funding from Dlabs — Taxexa" },
      {
        name: "description",
        content:
          "Taxexa has secured $470K in funding from Dlabs. Announcement published Oct 8, 2025.",
      },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: "2025-10-08" },
      { property: "og:url", content: "https://taxexa.com/news/funding-announcement" },
    ],
    links: [{ rel: "canonical", href: "https://taxexa.com/news/funding-announcement" }],
  }),
  component: FundingArticle,
});

function FundingArticle() {
  return (
    <Shell>
      <article className="mx-auto w-full max-w-4xl px-6 pb-24 pt-14 md:pb-32 md:pt-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Taxexa
        </Link>

        <header className="mt-12 border-b border-border pb-12">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-3.5 w-3.5" aria-hidden="true" /> Funding announcement
            </span>
            <span className="h-1 w-1 rounded-full bg-accent/60" aria-hidden="true" />
            <time dateTime="2025-10-08">Oct 8, 2025</time>
          </div>
          <h1 className="mt-6 text-[42px] font-semibold leading-[1.04] tracking-tight text-primary text-balance sm:text-6xl">
            Taxexa secures <span className="font-editorial text-accent">$470K</span> in funding from
            Dlabs.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Taxexa has secured $470K in funding from Dlabs.
          </p>
        </header>

        <div className="grid gap-10 py-12 md:grid-cols-[1fr_15rem]">
          <div className="space-y-6 text-[17px] leading-relaxed text-primary/80">
            <p>
              Taxexa is part of Dlabs’ global portfolio of companies building tax compliance for
              complex operating environments.
            </p>
            <p>
              Taxexa operates in the tax compliance sector and is building for European SMEs,
              accountants, finance teams and cross-border sellers.
            </p>
          </div>
          <aside className="h-fit rounded-2xl border border-accent/20 bg-accent-soft p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
              Company record
            </div>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Investor</dt>
                <dd className="mt-1 font-semibold text-primary">Dlabs</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Funding</dt>
                <dd className="mt-1 font-semibold text-primary">$470K</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Announcement date</dt>
                <dd className="mt-1 font-semibold text-primary">Oct 8, 2025</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <div className="text-sm font-semibold text-primary">Taxexa is backed by Dlabs.</div>
            <p className="mt-1 text-sm text-muted-foreground">
              View Taxexa in the Dlabs portfolio.
            </p>
          </div>
          <a
            href={DLABS_PORTFOLIO}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:mt-0"
          >
            View Dlabs portfolio <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </article>
    </Shell>
  );
}

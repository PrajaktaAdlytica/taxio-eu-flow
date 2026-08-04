import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { FlaskConical, Mail, MapPin } from "lucide-react";

const cols = [
  {
    title: "Products",
    links: [
      { label: "Taxexa Rules", to: "/products/rules" },
      { label: "Taxexa Check", to: "/products/check" },
      { label: "Taxexa Evidence", to: "/products/evidence" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Funding announcement", to: "/news/funding-announcement" },
      {
        label: "Dlabs portfolio",
        href: "https://d-labs-site.vercel.app/companies",
        external: true,
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/taxexa/", external: true },
      {
        label: "Crunchbase",
        href: "https://www.crunchbase.com/organization/taxexa",
        external: true,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", disabled: true },
      { label: "Terms", disabled: true },
      { label: "Contact", href: "mailto:hello@taxexa.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dotted border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              European VAT compliance, e-invoicing and evidence management — in one operational
              workspace.
            </p>
            <div className="mt-5 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 text-accent" />
                <div>Poland / European Union focus</div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent" />
                <a href="mailto:hello@taxexa.com" className="hover:text-accent transition-colors">
                  hello@taxexa.com
                </a>
              </div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[10px] font-medium text-amber-950">
              <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
              Startup concept · not a live service
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) =>
                  "to" in l ? (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-primary/80 hover:text-accent transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ) : "href" in l ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={"external" in l && l.external ? "_blank" : undefined}
                        rel={"external" in l && l.external ? "noreferrer noopener" : undefined}
                        className="text-primary/80 hover:text-accent transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label} className="cursor-not-allowed text-muted-foreground/60">
                      {l.label}
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2025 Taxexa — taxexa.com</div>
          <div>Designed for European finance operations</div>
        </div>
        <p className="mt-4 text-center text-[10px] leading-relaxed text-muted-foreground/75">
          Taxexa is an interactive startup concept. Products, pricing, transactions, results, people
          and performance claims shown here are fictional.
        </p>
      </div>
    </footer>
  );
}

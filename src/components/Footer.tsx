import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react";

const cols = [
  {
    title: "Products",
    links: [
      { label: "Taxexa Check", to: "/products/check" },
      { label: "Taxexa Rules", to: "/products/rules" },
      { label: "Taxexa Evidence", to: "/products/evidence" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solutions", href: "/#solutions" },
      { label: "Pricing", href: "/#pricing" },
      { label: "About", to: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
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
              European VAT compliance, e-invoicing and evidence management — in one operational workspace.
            </p>
            <div className="mt-5 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 text-accent" />
                <div>
                  Taxexa Sp. z o.o.<br />
                  Rondo Daszyńskiego 2B<br />
                  00-843 Warsaw, Poland
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent" />
                <a href="mailto:hello@taxexa.com" className="hover:text-accent transition-colors">hello@taxexa.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-accent" />
                <a href="tel:+48223078420" className="hover:text-accent transition-colors">+48 22 307 84 20</a>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <a href="#" className="p-2 rounded-lg border border-border hover:border-accent/60 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg border border-border hover:border-accent/60 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{col.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) =>
                  "to" in l ? (
                    <li key={l.label}><Link to={l.to} className="text-primary/80 hover:text-accent transition-colors">{l.label}</Link></li>
                  ) : (
                    <li key={l.label}><a href={l.href} className="text-primary/80 hover:text-accent transition-colors">{l.label}</a></li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Taxexa Sp. z o.o. — taxexa.com</div>
          <div>Warsaw · Amsterdam · Berlin</div>
        </div>
      </div>
    </footer>
  );
}

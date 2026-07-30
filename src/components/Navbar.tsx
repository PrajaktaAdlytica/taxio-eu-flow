import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/utils";

const products = [
  { to: "/products/rules", name: "Taxexa Rules", desc: "Country-specific VAT rule engine" },
  { to: "/products/check", name: "Taxexa Check", desc: "Automated VAT & invoice validation" },
  { to: "/products/evidence", name: "Taxexa Evidence", desc: "Compliance evidence collection" },
];

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent",
        overlay && "entry-overlay-nav",
      )}
      data-overlay={overlay}
      data-scrolled={scrolled}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="entry-overlay-logo-wrap flex items-center">
          <Logo className="entry-overlay-logo h-8 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-sm">
          <NavLink to="/">Home</NavLink>
          <div
            ref={productsRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setProductsOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setProductsOpen(false);
                productsRef.current?.querySelector("button")?.focus();
              }
            }}
          >
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-haspopup="menu"
              aria-controls="products-menu"
              onClick={() => setProductsOpen((current) => !current)}
              className="entry-overlay-ink inline-flex items-center gap-1 rounded-md px-3 py-2 text-primary/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Products
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {productsOpen && (
              <div
                id="products-menu"
                role="menu"
                className="absolute left-0 top-full w-[320px] pt-2"
              >
                <div className="surface-card p-2 shadow-xl">
                  {products.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      role="menuitem"
                      onClick={() => setProductsOpen(false)}
                      className="block rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors"
                    >
                      <div className="text-sm font-medium text-primary">{p.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{p.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavAnchor href="/#workspace">Product tour</NavAnchor>
          <NavAnchor href="/#pricing">Pricing</NavAnchor>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <ButtonLink to="/signin" variant="ghost" size="sm" className="entry-overlay-ink">
            Sign In
          </ButtonLink>
          <ButtonLink to="/request-demo" variant="primary" size="sm">
            Request concept demo
          </ButtonLink>
        </div>

        <button
          type="button"
          className="entry-overlay-ink -mr-2 p-2 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background/95 backdrop-blur lg:hidden"
        >
          <div className="px-6 py-4 space-y-1">
            <MobileLink to="/" onClick={() => setOpen(false)}>
              Home
            </MobileLink>
            {products.map((p) => (
              <MobileLink key={p.to} to={p.to} onClick={() => setOpen(false)}>
                {p.name}
              </MobileLink>
            ))}
            <a
              href="/#workspace"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-primary"
            >
              Product tour
            </a>
            <a
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-primary"
            >
              Pricing
            </a>
            <MobileLink to="/about" onClick={() => setOpen(false)}>
              About
            </MobileLink>
            <div className="pt-3 flex gap-2">
              <ButtonLink to="/signin" variant="outline" size="sm" className="flex-1">
                Sign In
              </ButtonLink>
              <ButtonLink to="/request-demo" variant="primary" size="sm" className="flex-1">
                Request demo
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="entry-overlay-ink px-3 py-2 rounded-md text-primary/80 hover:text-primary transition-colors"
      activeProps={{ className: "text-primary font-medium" }}
    >
      {children}
    </Link>
  );
}
function NavAnchor({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="entry-overlay-ink px-3 py-2 rounded-md text-primary/80 hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
}
function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link to={to} onClick={onClick} className="block py-2.5 text-primary">
      {children}
    </Link>
  );
}

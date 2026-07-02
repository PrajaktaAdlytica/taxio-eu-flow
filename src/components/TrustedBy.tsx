const audiences = [
  "EU SMEs", "Accounting Firms", "Cross-border Retailers", "Finance Teams",
  "Tax Advisors", "SaaS Companies", "Manufacturers", "Importers", "Exporters",
];

export function TrustedBy() {
  return (
    <section className="py-14 border-y border-border bg-dotted">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by finance and tax teams across Europe
        </p>
        <div className="mt-8 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-16 animate-marquee w-max">
            {[...audiences, ...audiences].map((l, i) => (
              <div
                key={i}
                className="text-xl font-semibold text-primary/40 hover:text-primary/70 transition-colors tracking-tight shrink-0"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

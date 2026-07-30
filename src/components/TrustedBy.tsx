const audiences = [
  "EU SMEs",
  "Accounting firms",
  "Finance teams",
  "Cross-border sellers",
  "Tax advisors",
];

export function TrustedBy() {
  return (
    <section
      aria-labelledby="audiences-heading"
      className="border-y border-border bg-surface/60 py-11"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p
          id="audiences-heading"
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Designed for the teams carrying European invoice risk
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          {audiences.map((audience) => (
            <div
              key={audience}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-primary/70 shadow-sm"
            >
              {audience}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

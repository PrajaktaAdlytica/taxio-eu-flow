import logoUrl from "@/assets/taxio-logo.svg?url";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Taxio"
      className={className}
    />
  );
}

import logoUrl from "@/assets/taxexa-logo.svg?url";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return <img src={logoUrl} alt="Taxexa" className={className} />;
}

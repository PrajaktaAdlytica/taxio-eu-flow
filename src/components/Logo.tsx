import logoAsset from "@/assets/taxio-logo.svg.asset.json";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Taxio"
      className={className}
    />
  );
}

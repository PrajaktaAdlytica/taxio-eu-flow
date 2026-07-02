export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 256 256" className="h-7 w-7" aria-hidden>
        <path
          d="M64 32H160L208 80V208C208 216.837 200.837 224 192 224H64C55.1634 224 48 216.837 48 208V48C48 39.1634 55.1634 32 64 32Z"
          className="text-accent"
          fill="currentColor"
        />
        <path
          d="M160 32V72C160 76.4183 163.582 80 168 80H208L160 32Z"
          fill="currentColor"
          className="text-accent"
          fillOpacity="0.75"
        />
        <path
          d="M84 132L118 166L180 104"
          stroke="#FAFAF8"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="text-[1.25rem] font-semibold tracking-tight text-primary">
        Taxio
      </span>
    </div>
  );
}

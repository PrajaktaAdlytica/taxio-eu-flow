import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

export function DemoDisclosure({ overlay = false }: { overlay?: boolean }) {
  return (
    <div
      className={cn(
        "border-b text-amber-950",
        overlay
          ? "entry-overlay-disclosure relative z-40 border-black/10 bg-transparent"
          : "border-amber-200/80 bg-amber-50/90",
      )}
    >
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center gap-2 px-6 py-2 text-center text-[11px] font-medium tracking-wide">
        <FlaskConical className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>
          Interactive product concept — all company details, customer stories, metrics and workspace
          data are illustrative.
        </span>
      </div>
    </div>
  );
}

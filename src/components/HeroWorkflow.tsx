import { useState, type ElementType } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  AlertTriangle,
  BookOpen,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  FolderCheck,
  Link2,
  MapPin,
  PackageCheck,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type VisualKey = "rules" | "check" | "evidence";

const visualOptions: Array<{
  key: VisualKey;
  index: string;
  label: string;
  action: string;
  icon: ElementType;
}> = [
  { key: "rules", index: "01", label: "Rules", action: "Determine", icon: BookOpen },
  { key: "check", index: "02", label: "Check", action: "Validate", icon: FileCheck2 },
  { key: "evidence", index: "03", label: "Evidence", action: "Prove", icon: ShieldCheck },
];

const fadeTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

export function HeroWorkflow() {
  const [active, setActive] = useState<VisualKey>("rules");
  const reducedMotion = useReducedMotion();
  const activeOption = visualOptions.find((option) => option.key === active) ?? visualOptions[0];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-8 -z-10 rounded-[40px] bg-accent/10 blur-3xl" />

      <div className="overflow-hidden rounded-[28px] border border-primary/10 bg-[#071E18] text-white shadow-[0_38px_100px_-48px_rgba(5,34,27,0.78)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-300/10 text-emerald-200 ring-1 ring-inset ring-emerald-200/15">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/75">
                Taxexa product film
              </div>
              <div className="text-[9px] text-white/35">Illustrative transaction · TX-2048</div>
            </div>
          </div>
          <div
            className="flex items-center gap-1.5 text-[9px] font-medium text-emerald-100/75"
            aria-label={`${activeOption.label} visual active`}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-300"
              animate={reducedMotion ? undefined : { scale: [1, 1.55, 1], opacity: [1, 0.48, 1] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            />
            Live visual
          </div>
        </div>

        <div className="relative h-[380px] overflow-hidden sm:h-[420px]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={active}
              initial={reducedMotion ? false : { opacity: 0, scale: 1.018, x: 14 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.99, x: -10 }}
              transition={fadeTransition}
              className="absolute inset-0"
              role="tabpanel"
              id={`taxexa-visual-${active}`}
              aria-label={`${activeOption.label} animated product visual`}
            >
              {active === "rules" && <RulesVisual reducedMotion={Boolean(reducedMotion)} />}
              {active === "check" && <CheckVisual reducedMotion={Boolean(reducedMotion)} />}
              {active === "evidence" && <EvidenceVisual reducedMotion={Boolean(reducedMotion)} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div
        className="mt-3 grid grid-cols-3 gap-2"
        role="tablist"
        aria-label="Choose a Taxexa product visual"
      >
        {visualOptions.map((option) => {
          const Icon = option.icon;
          const isActive = option.key === active;
          return (
            <button
              key={option.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`taxexa-visual-${option.key}`}
              onClick={() => setActive(option.key)}
              className={`group relative min-w-0 overflow-hidden rounded-xl border px-2 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-4 ${
                isActive
                  ? "border-accent/45 bg-surface text-primary shadow-[0_18px_42px_-28px_rgba(17,24,39,0.55)]"
                  : "border-border bg-surface/70 text-muted-foreground hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface hover:text-primary"
              }`}
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Icon
                  className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-accent" : "text-current"}`}
                  aria-hidden="true"
                />
                <span className="truncate text-[8px] font-semibold uppercase tracking-[0.08em] sm:text-[10px] sm:tracking-[0.13em]">
                  {option.index} · {option.label}
                </span>
              </span>
              <span className="mt-1.5 block text-[10px] opacity-55">{option.action}</span>
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent transition-transform duration-500 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                }`}
              />
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-center text-[10px] text-muted-foreground">
        Select a product to change the animated visual · fictional data
      </p>
    </div>
  );
}

function VisualHeader({ label, title, status }: { label: string; title: string; status: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-200/65">
          {label}
        </div>
        <h3 className="mt-1 text-base font-semibold tracking-tight text-white sm:text-lg">
          {title}
        </h3>
      </div>
      <span className="rounded-full bg-white/[0.055] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wider text-white/48 ring-1 ring-inset ring-white/10">
        {status}
      </span>
    </div>
  );
}

function RulesVisual({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="h-full bg-[radial-gradient(circle_at_82%_8%,rgba(68,214,155,0.15),transparent_42%),linear-gradient(155deg,#071E18,#0B2B22)] p-4 sm:p-5">
      <VisualHeader label="Taxexa Rules" title="Determine the VAT treatment" status="Resolving" />

      <div className="mt-4 grid grid-cols-[0.95fr_1.05fr] gap-3">
        <div className="space-y-2">
          {[
            ["Seller", "Poland · VAT registered"],
            ["Customer", "Germany · B2B"],
            ["Supply", "Goods · Warsaw → Berlin"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              initial={reducedMotion ? false : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...fadeTransition, delay: index * 0.1 }}
              className="state-hover-dark rounded-xl bg-white/[0.055] px-3 py-2.5 ring-1 ring-inset ring-white/10"
            >
              <div className="text-[8px] uppercase tracking-wider text-white/30">{label}</div>
              <div className="mt-1 text-[10px] font-medium text-white/78">{value}</div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-black/10 p-3 ring-1 ring-inset ring-white/10">
          <div className="flex items-center justify-between text-[8px] uppercase tracking-wider text-white/35">
            <span>Decision path</span>
            <span>3 facts matched</span>
          </div>
          <div className="relative mt-4">
            <div className="absolute left-3 top-3 h-[calc(100%-1.5rem)] w-px bg-white/10" />
            <motion.div
              className="absolute left-[9px] top-3 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]"
              animate={reducedMotion ? undefined : { y: [0, 47, 94, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="space-y-3">
              {["Taxable person", "EU movement", "Evidence condition"].map((label) => (
                <div key={label} className="relative flex items-center gap-3 pl-7">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-300/10 text-emerald-200 ring-1 ring-inset ring-emerald-200/15">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[9px] font-medium text-white/62">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeTransition, delay: 0.35 }}
        className="mt-3 rounded-2xl bg-emerald-300/[0.09] p-3.5 ring-1 ring-inset ring-emerald-200/20"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-wider text-emerald-200">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              Proposed treatment
            </div>
            <div className="mt-1.5 text-sm font-semibold text-white">0% intra-Community supply</div>
          </div>
          <motion.span
            className="rounded-full bg-emerald-200 px-2 py-1 text-[8px] font-bold text-[#073126]"
            animate={reducedMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            RESOLVED
          </motion.span>
        </div>
        <div className="mt-3 flex items-center gap-2 border-t border-emerald-100/10 pt-2.5 text-[8px] text-white/38">
          <Link2 className="h-3 w-3 text-emerald-200" aria-hidden="true" />
          EU VAT Directive · Article 138
          <span className="ml-auto flex items-center gap-1">
            <Clock3 className="h-3 w-3" aria-hidden="true" />
            Effective 30 Jul 2026 · illustrative
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function CheckVisual({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="h-full bg-[radial-gradient(circle_at_14%_16%,rgba(96,165,250,0.17),transparent_42%),linear-gradient(150deg,#071A20,#092925)] p-4 sm:p-5">
      <VisualHeader
        label="Taxexa Check"
        title="Validate before the invoice moves"
        status="Scanning"
      />

      <div className="mt-4 grid h-[292px] grid-cols-[1.03fr_0.97fr] gap-3 sm:h-[330px]">
        <div className="relative overflow-hidden rounded-2xl bg-[#F8FAF9] p-3 text-primary shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-white">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div>
                <div className="text-[9px] font-semibold">INV-2026-0421</div>
                <div className="text-[7px] text-muted-foreground">Vistula Home Sp. z o.o.</div>
              </div>
            </div>
            <span className="text-[8px] font-semibold text-accent">€4,820</span>
          </div>

          <div className="mt-4 grid gap-2">
            {[78, 92, 62, 85].map((width, index) => (
              <div key={width} className="rounded-lg border border-border bg-white p-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="h-1.5 rounded-full bg-secondary" style={{ width: `${width}%` }} />
                  <motion.span
                    initial={reducedMotion ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.25 + index * 0.15,
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-soft text-accent"
                  >
                    <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                  </motion.span>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className="pointer-events-none absolute inset-x-0 top-16 h-px bg-blue-400 shadow-[0_0_18px_4px_rgba(96,165,250,0.35)]"
            animate={reducedMotion ? undefined : { y: [0, 225, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute right-3 -top-3 flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-[7px] font-semibold text-white">
              <ScanLine className="h-2.5 w-2.5" aria-hidden="true" />
              SCAN
            </span>
          </motion.div>
        </div>

        <div className="space-y-2">
          {[
            ["VAT ID", "Confirmed", CheckCircle2, "green"],
            ["Identity", "Match", CheckCircle2, "green"],
            ["Tax wording", "Present", CheckCircle2, "green"],
            ["Evidence", "Review", AlertTriangle, "amber"],
          ].map(([label, status, Icon, tone], index) => (
            <motion.div
              key={label as string}
              initial={reducedMotion ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...fadeTransition, delay: 0.12 + index * 0.1 }}
              className="state-hover-dark flex items-center gap-2 rounded-xl bg-white/[0.055] p-2.5 ring-1 ring-inset ring-white/10"
            >
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
                  tone === "green"
                    ? "bg-emerald-300/10 text-emerald-200"
                    : "bg-amber-300/10 text-amber-200"
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[9px] font-medium text-white/76">
                  {label as string}
                </span>
                <span
                  className={`block text-[8px] ${
                    tone === "green" ? "text-emerald-200/60" : "text-amber-200/65"
                  }`}
                >
                  {status as string}
                </span>
              </span>
            </motion.div>
          ))}

          <motion.div
            className="rounded-xl bg-blue-300/[0.09] p-3 ring-1 ring-inset ring-blue-200/15"
            animate={
              reducedMotion
                ? undefined
                : {
                    boxShadow: [
                      "0 0 0 rgba(96,165,250,0)",
                      "0 0 24px rgba(96,165,250,.12)",
                      "0 0 0 rgba(96,165,250,0)",
                    ],
                  }
            }
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            <div className="text-[8px] uppercase tracking-wider text-blue-200/55">Result</div>
            <div className="mt-1 text-[10px] font-semibold text-white">Invoice valid</div>
            <div className="mt-0.5 text-[8px] text-white/38">1 evidence action remains</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function EvidenceVisual({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="h-full bg-[radial-gradient(circle_at_82%_18%,rgba(251,191,36,0.16),transparent_42%),linear-gradient(155deg,#0B211B,#122A22)] p-4 sm:p-5">
      <VisualHeader label="Taxexa Evidence" title="Keep the proof connected" status="3 of 4" />

      <div className="mt-4 grid grid-cols-[1.08fr_0.92fr] gap-3">
        <div className="relative min-h-[210px]">
          {[
            {
              label: "Commercial invoice",
              detail: "INV-2026-0421",
              icon: FileText,
              y: 0,
              rotate: -1.4,
            },
            {
              label: "VAT ID receipt",
              detail: "VIES · 11:24 CET",
              icon: CheckCircle2,
              y: 63,
              rotate: 0.9,
            },
            {
              label: "Signed CMR",
              detail: "CMR-88421",
              icon: PackageCheck,
              y: 126,
              rotate: -0.4,
            },
          ].map((document, index) => {
            const Icon = document.icon;
            return (
              <motion.div
                key={document.label}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, x: -26, y: document.y + 12, rotate: document.rotate - 2 }
                }
                animate={
                  reducedMotion
                    ? { opacity: 1, x: 0, y: document.y, rotate: document.rotate }
                    : {
                        opacity: 1,
                        x: [0, 3, 0],
                        y: [document.y, document.y - 4, document.y],
                        rotate: [document.rotate, document.rotate + 0.35, document.rotate],
                      }
                }
                transition={
                  reducedMotion
                    ? fadeTransition
                    : {
                        opacity: { duration: 0.5, delay: index * 0.12 },
                        x: { duration: 3.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 3.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" },
                        rotate: {
                          duration: 3.8 + index * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                }
                className="state-hover-dark absolute inset-x-0 flex items-center gap-3 rounded-2xl bg-white/[0.075] p-3 shadow-xl ring-1 ring-inset ring-white/12 backdrop-blur"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-300/10 text-emerald-200">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[10px] font-semibold text-white/82">
                    {document.label}
                  </span>
                  <span className="block text-[8px] text-white/37">{document.detail}</span>
                </span>
                <span className="ml-auto grid h-5 w-5 place-items-center rounded-full bg-emerald-300/12 text-emerald-200">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-3">
          <div className="state-hover-dark rounded-2xl bg-white/[0.055] p-4 ring-1 ring-inset ring-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[8px] uppercase tracking-wider text-white/35">
                  Evidence file
                </div>
                <div className="mt-1 text-xl font-semibold text-white">75%</div>
              </div>
              <motion.span
                className="grid h-10 w-10 place-items-center rounded-full bg-emerald-300/10 text-emerald-200 ring-1 ring-inset ring-emerald-200/15"
                animate={reducedMotion ? undefined : { rotate: [0, 8, 0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FolderCheck className="h-5 w-5" aria-hidden="true" />
              </motion.span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-emerald-300"
                initial={reducedMotion ? false : { width: "0%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <motion.div
            className="rounded-2xl bg-amber-300/[0.09] p-3.5 ring-1 ring-inset ring-amber-200/18"
            animate={
              reducedMotion
                ? undefined
                : {
                    boxShadow: [
                      "0 0 0 rgba(251,191,36,0)",
                      "0 0 26px rgba(251,191,36,.12)",
                      "0 0 0 rgba(251,191,36,0)",
                    ],
                  }
            }
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <div className="flex items-start gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-300/10 text-amber-200">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <div className="text-[9px] font-semibold text-amber-100">Destination receipt</div>
                <div className="mt-1 text-[8px] leading-relaxed text-white/38">
                  Missing · request prepared for buyer
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center gap-2 px-1 text-[8px] text-white/32">
            <FolderCheck className="h-3 w-3 text-emerald-200/60" aria-hidden="true" />
            Policy v3.2 · illustrative
          </div>
        </div>
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeTransition, delay: 0.42 }}
        className="mt-3 flex items-center gap-3 rounded-2xl bg-emerald-300/[0.08] p-3 ring-1 ring-inset ring-emerald-200/16"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-300/10 text-emerald-200">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <div className="text-[9px] font-semibold text-white/82">Decision package connected</div>
          <div className="mt-0.5 truncate text-[8px] text-white/36">
            Rule result · invoice check · 3 stored documents · 1 open request
          </div>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-emerald-200/12 px-2 py-1 text-[8px] font-semibold text-emerald-100">
          REVIEWABLE
        </span>
      </motion.div>
    </div>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const scenes = [
  {
    id: "evidence-loom",
    index: "01",
    label: "Evidence Loom",
    poster: "/media/taxexa-entry/evidence-loom-poster.webp",
    webm: "/media/taxexa-entry/evidence-loom.webm?v=4s-clean",
    mp4: "/media/taxexa-entry/evidence-loom.mp4?v=4s-clean",
    theme: "light",
  },
  {
    id: "rule-aperture",
    index: "02",
    label: "Rule Aperture",
    poster: "/media/taxexa-entry/rule-aperture-poster.webp",
    webm: "/media/taxexa-entry/rule-aperture.webm?v=4s-clean",
    mp4: "/media/taxexa-entry/rule-aperture.mp4?v=4s-clean",
    theme: "light",
  },
  {
    id: "chain-of-custody",
    index: "03",
    label: "Chain of Custody",
    poster: "/media/taxexa-entry/chain-of-custody-poster.webp",
    webm: "/media/taxexa-entry/chain-of-custody.webm?v=4s-clean",
    mp4: "/media/taxexa-entry/chain-of-custody.mp4?v=4s-clean",
    theme: "dark",
  },
] as const;

export function CinematicEntry() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const activeScene = scenes[activeIndex];
  const isDark = activeScene.theme === "dark";

  const selectScene = useCallback((index: number) => {
    const incomingVideo = videoRefs.current[index];
    if (incomingVideo) incomingVideo.currentTime = 0;
    setActiveIndex(index);
    setCycleKey((current) => current + 1);
  }, []);

  const advanceScene = useCallback(() => {
    if (!isPlaying || reducedMotion) return;
    setActiveIndex((current) => {
      const nextIndex = (current + 1) % scenes.length;
      const incomingVideo = videoRefs.current[nextIndex];
      if (incomingVideo) incomingVideo.currentTime = 0;
      return nextIndex;
    });
    setCycleKey((current) => current + 1);
  }, [isPlaying, reducedMotion]);

  const enterTaxexa = useCallback(() => {
    document.getElementById("taxexa-overview")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [reducedMotion]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) setIsPlaying(false);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.entryTheme = isDark ? "dark" : "light";
    return () => {
      delete document.documentElement.dataset.entryTheme;
    };
  }, [isDark]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      if (isPlaying && !reducedMotion) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [isPlaying, reducedMotion]);

  return (
    <section
      className="cinematic-entry relative isolate -mt-[131px] min-h-[911px] overflow-hidden border-b border-black/10 bg-[#e9e3d8] lg:-mt-[100px] lg:h-[calc(69svh+100px)] lg:max-h-[830px] lg:min-h-[780px]"
      aria-label="Taxexa visual determination"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {scenes.map((scene, index) => (
          <video
            key={scene.id}
            ref={(node) => {
              videoRefs.current[index] = node;
            }}
            className={cn(
              "cinematic-entry__video absolute inset-0 h-full w-full object-cover object-[42%_center] lg:object-center",
              index === activeIndex ? "opacity-100" : "opacity-0",
            )}
            muted
            autoPlay={!reducedMotion}
            playsInline
            preload="auto"
            poster={scene.poster}
            tabIndex={-1}
          >
            <source src={scene.webm} type="video/webm" />
            <source src={scene.mp4} type="video/mp4" />
          </video>
        ))}
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-colors duration-700 lg:hidden",
          isDark ? "bg-black/25" : "bg-white/25",
        )}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto flex h-full min-h-[911px] max-w-7xl flex-col px-6 pb-7 pt-[187px] lg:min-h-[780px] lg:px-6 lg:pb-8 lg:pt-[164px]">
        <motion.div
          className={cn(
            "max-w-[610px] transition-colors duration-700",
            isDark ? "text-white" : "text-primary",
          )}
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.2em]",
              isDark ? "text-emerald-300" : "text-accent",
            )}
          >
            Taxexa · Visual determination
          </p>
          <h1 className="mt-5 max-w-[500px] text-[38px] font-semibold leading-[1.01] tracking-[-0.04em] text-balance sm:text-[48px] lg:text-[54px]">
            See how a VAT answer becomes{" "}
            <span className={cn("font-editorial", isDark ? "text-emerald-300" : "text-accent")}>
              defensible.
            </span>
          </h1>
          <p
            className={cn(
              "mt-5 max-w-sm text-[14px] leading-relaxed sm:text-[15px]",
              isDark ? "text-white/76" : "text-slate-700",
            )}
          >
            Choose a chapter to follow the rule, the check and the evidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              type="button"
              size="lg"
              onClick={enterTaxexa}
              className="group shadow-[0_16px_38px_-18px_rgba(25,135,84,0.8)]"
            >
              Enter Taxexa
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <button
              type="button"
              onClick={enterTaxexa}
              className={cn(
                "rounded-md px-2 py-2 text-xs font-medium underline decoration-current/35 underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isDark ? "text-white/74 hover:text-white" : "text-slate-700 hover:text-primary",
              )}
            >
              Skip introduction
            </button>
          </div>
        </motion.div>

        <div className="mt-auto pt-14">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121a17]/90 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            <div className="grid md:grid-cols-[1fr_1fr_1fr_auto]">
              {scenes.map((scene, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => selectScene(index)}
                    className={cn(
                      "group relative min-h-[78px] border-b border-white/10 px-5 py-4 text-left transition-colors duration-300 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-300 md:border-b-0 md:border-r",
                      isActive ? "bg-white/[0.07]" : "hover:bg-white/[0.055]",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full border transition-all duration-300",
                          isActive
                            ? "border-emerald-300 bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]"
                            : "border-white/45 group-hover:border-white/80",
                        )}
                      />
                      <span
                        className={cn(
                          "text-[12px] font-medium uppercase tracking-[0.14em] transition-colors",
                          isActive ? "text-white" : "text-white/52 group-hover:text-white/82",
                        )}
                      >
                        {scene.index} / {scene.label}
                      </span>
                    </span>
                    {isActive ? (
                      <span className="ml-5 mt-1.5 block text-[10px] uppercase tracking-[0.12em] text-emerald-300">
                        {isPlaying && !reducedMotion ? "Playing · 00:04" : "Paused"}
                      </span>
                    ) : (
                      <span className="ml-5 mt-1.5 block text-[10px]" aria-hidden="true">
                        &nbsp;
                      </span>
                    )}
                    {isActive ? (
                      <span className="absolute inset-x-5 bottom-0 h-px overflow-hidden bg-white/15">
                        <span
                          key={`${scene.id}-${cycleKey}`}
                          className={cn(
                            "cinematic-entry__progress block h-full bg-emerald-300",
                            (!isPlaying || reducedMotion) && "[animation-play-state:paused]",
                          )}
                          onAnimationEnd={advanceScene}
                        />
                      </span>
                    ) : null}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setIsPlaying((current) => !current)}
                disabled={reducedMotion}
                className="flex min-h-[64px] items-center justify-center gap-2 px-6 text-white/72 transition-colors hover:bg-white/[0.055] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-300 disabled:cursor-not-allowed disabled:opacity-45 md:min-h-[78px]"
                aria-label={
                  reducedMotion
                    ? "Motion disabled by system preference"
                    : isPlaying
                      ? "Pause visual stories"
                      : "Play visual stories"
                }
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] md:sr-only">
                  {isPlaying ? "Pause" : "Play"}
                </span>
              </button>
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            Showing visual {activeScene.index}: {activeScene.label}
          </p>
        </div>
      </div>
    </section>
  );
}

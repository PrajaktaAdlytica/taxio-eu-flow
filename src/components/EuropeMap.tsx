import { motion } from "motion/react";

// Approximate EU country dots on a normalised 100x100 grid — for miniature visualisations only.
const dots: { x: number; y: number; c: string }[] = [
  { x: 32, y: 30, c: "IE" }, { x: 40, y: 24, c: "UK" }, { x: 48, y: 22, c: "NO" },
  { x: 55, y: 30, c: "SE" }, { x: 60, y: 38, c: "FI" }, { x: 46, y: 42, c: "DK" },
  { x: 44, y: 52, c: "NL" }, { x: 46, y: 58, c: "BE" }, { x: 50, y: 60, c: "DE" },
  { x: 42, y: 66, c: "FR" }, { x: 52, y: 70, c: "AT" }, { x: 58, y: 66, c: "PL" },
  { x: 56, y: 74, c: "CZ" }, { x: 60, y: 78, c: "SK" }, { x: 62, y: 84, c: "HU" },
  { x: 48, y: 78, c: "CH" }, { x: 46, y: 84, c: "IT" }, { x: 36, y: 82, c: "ES" },
  { x: 30, y: 82, c: "PT" }, { x: 68, y: 84, c: "RO" }, { x: 66, y: 90, c: "BG" },
  { x: 60, y: 92, c: "GR" }, { x: 66, y: 46, c: "EE" }, { x: 66, y: 52, c: "LV" },
  { x: 64, y: 58, c: "LT" },
];

export function EuropeMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
        {dots.map((d, i) => (
          <motion.circle
            key={d.c}
            cx={d.x}
            cy={d.y}
            r={1.8}
            fill="currentColor"
            className="text-accent"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 2.4,
              delay: (i % 6) * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, FlaskConical, Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { motion } from "motion/react";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign In — Taxexa" },
      { name: "description", content: "Sign in to your Taxexa workspace." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [show, setShow] = useState(false);
  const [previewed, setPreviewed] = useState(false);
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col bg-primary text-primary-foreground p-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <Link to="/" className="relative text-primary-foreground [&_span]:text-white">
          <Logo />
        </Link>
        <div className="relative mt-auto max-w-md">
          <h2 className="text-4xl font-semibold tracking-tight text-balance leading-[1.05]">
            Sign in to your <span className="font-editorial text-accent">Taxexa</span> workspace.
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/70">
            A concept entry point for future VAT decisions, invoice checks and evidence workflows.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs text-primary-foreground/60">
            <span className="h-1 w-1 rounded-full bg-accent" /> Fictional workspace · authentication
            disabled
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-14 bg-dotted">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <div className="lg:hidden mb-8">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <h1 className="text-3xl font-semibold text-primary tracking-tight">Sign In</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Preview of the future Taxexa workspace entry experience.
          </p>
          <div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-950">
            <FlaskConical className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Authentication is intentionally disabled. Do not enter real credentials.
          </div>

          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setPreviewed(true);
            }}
          >
            <Field label="Email">
              <input type="email" placeholder="you@company.com" className="input" />
            </Field>
            <Field label="Password">
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="••••••••"
                  className="input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShow((current) => !current)}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </Field>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-primary/70">
                <input type="checkbox" className="rounded border-border" /> Remember me
              </label>
              <span className="cursor-not-allowed text-muted-foreground/70">Forgot password?</span>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Preview sign in <ArrowRight className="h-4 w-4" />
            </Button>
            {previewed && (
              <div
                role="status"
                className="flex items-start gap-2 rounded-xl bg-accent-soft p-3 text-xs leading-relaxed text-primary"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                Preview complete. No credentials were transmitted or stored.
              </div>
            )}
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            New to Taxexa?{" "}
            <Link to="/request-demo" className="text-accent hover:text-accent/80 font-medium">
              Request a demo
            </Link>
          </div>
        </motion.div>
      </div>
      <style>{`
        .input {
          width: 100%; height: 44px; padding: 0 0.875rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem; background: var(--surface);
          color: var(--foreground); font-size: 0.875rem;
          transition: border-color 200ms, box-shadow 200ms;
        }
        .input:focus { outline: none; border-color: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 20%, transparent); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-primary">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

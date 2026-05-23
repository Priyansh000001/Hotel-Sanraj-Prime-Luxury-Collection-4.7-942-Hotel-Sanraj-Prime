import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/hotels/pratap-nagar-branch", label: "Pratap Nagar, Jaipur" },
  { to: "/hotels/gurjar-ki-thadi-branch", label: "Gurjar Ki Thadi, Jaipur" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong border-b hairline py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="group brand-nav-wrap flex items-center gap-3 rounded-full px-2 py-1.5"
        >
          <BrandLogo className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
          <div className="leading-tight">
            <div className="font-display text-base tracking-wide text-foreground sm:text-lg">
              Sanraj <span className="text-gradient-gold">Inn</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[10px]">
              Luxury Collection
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/hotels/pratap-nagar-branch#book"
            className="rounded-full bg-gradient-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-gold-glow transition-transform hover:scale-105"
          >
            Book Stay
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-foreground lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="glass-strong mx-4 mt-3 overflow-hidden rounded-2xl lg:hidden"
        >
          <div className="flex flex-col p-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-xl text-foreground/90 hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

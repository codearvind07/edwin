import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  PhoneCall,
  ShieldCheck,
  ScrollText,
  Users,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const navIcons = [ShieldCheck, ScrollText, Users];

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="flex items-center justify-between rounded-xl bg-white/90 px-6 py-4 shadow-glow backdrop-blur-md border border-white/60"
        >
          <a
            href="#home"
            className="flex items-center gap-3 text-brand-navy"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-royal to-brand-navy text-white shadow-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-lg leading-none">Edwin Corporate</p>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-sky">
                Law Firm
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-navy/70 transition-all duration-200 hover:text-brand-royal hover:-translate-y-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2 text-white shadow-glow">
            <PhoneCall className="h-4 w-4" />
            <span className="text-sm font-semibold">+91 98765 43210</span>
          </div>

          <button
            type="button"
            className="inline-flex lg:hidden items-center justify-center rounded-xl border border-brand-navy/10 bg-white/80 p-2 shadow-sm"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? (
              <X className="h-5 w-5 text-brand-navy" />
            ) : (
              <Menu className="h-5 w-5 text-brand-navy" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-lg backdrop-blur"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-base font-medium text-brand-navy/80 transition-colors hover:text-brand-royal"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-2 rounded-xl bg-brand-navy px-4 py-3 text-white">
                  <PhoneCall className="h-4 w-4" />
                  <span className="text-sm font-semibold">+91 98765 43210</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Changed from mapping all navIcons to only showing one "Trusted Legal Partner" element */}
      <div className="pointer-events-none absolute inset-x-0 top-full hidden justify-center lg:flex lg:translate-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60 shadow"
        >
          <ShieldCheck className="mr-2 inline-block h-3.5 w-3.5" />
          Trusted Legal Partner
        </motion.div>
      </div>
    </motion.header>
  );
};
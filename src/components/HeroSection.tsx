import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ScrollText, ShieldCheck, Scale, PhoneCall, Menu, X } from "lucide-react";

const stats = [
  { label: "Years of Excellence", value: "10+" },
  { label: "Expert Professionals", value: "35" },
  { label: "Cases Resolved", value: "1500+" },
];

export const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-brand-navy via-[#131f44] to-[#1f3c88]"
    >
      {/* Header content moved from NavigationBar */}
      <div className="relative z-50 mx-auto max-w-xl px-4 sm:px-6 pt-16">
        <div
          className="flex items-center justify-between rounded-xl  px-1 py-2 shadow-glow backdrop-blur-md border border-white/60 sm:px-6 sm:py-2"
        >
          {/* Centered logo and company name */}
          <div className="flex w-full items-center justify-center">
            <a
              href="#home"
              className="flex items-center gap-3 text-brand-navy"
            >
              <div className="flex items-center justify-center">
                <img 
                  src="/edwinlogo.png" 
                  alt="Edwin Logo" 
                />
              </div>
            </a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-lg backdrop-blur sm:hidden">
            <div className="px-4 py-3">
              <div className="flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-4 py-2 text-white">
                <PhoneCall className="h-4 w-4" />
                <span className="text-sm font-semibold">+91 98765 43210</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute inset-0 opacity-60">
        <img
          src="https://public.youware.com/users-website-assets/prod/59284182-b3ef-454d-a012-27cd8e0d74c7/2653a56c97fd41528b7e4b09bfb2f303"
          alt="Corporate law team working on documents"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-24 text-center text-white sm:px-6 sm:pb-24 sm:pt-32 lg:flex-row lg:items-start lg:px-6 lg:pb-24 lg:pt-40 lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] sm:px-4 sm:py-2 sm:text-xs">
            Since 2014
          </div>

          <h1 className="mt-4 font-display text-2xl leading-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:mt-6 lg:text-5xl lg:leading-tight">
            Strategic Counsel for Businesses Ready to Lead with Confidence
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base sm:leading-relaxed md:mt-6 lg:mt-6">
            Edwin Corporate Law Firm delivers comprehensive legal, tax, and intellectual property solutions across India. Our multidisciplinary experts protect your innovations, streamline compliance, and unlock sustainable growth.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-8 lg:justify-start">
            
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white sm:px-6 sm:py-3"
            >
              Explore Our Expertise
              <ScrollText className="h-4 w-4" />
            </motion.a>
          </div>

          <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-3 text-center text-white/80 sm:mt-10 sm:max-w-lg sm:gap-4 sm:text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/20 bg-white/10 px-2 py-3 sm:px-3 sm:py-4">
                <div className="font-display text-xl sm:text-2xl md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] sm:mt-1 sm:text-[0.65rem] md:mt-2 md:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-10 w-full max-w-xl rounded-3xl border border-white/20 bg-white/5 p-5 backdrop-blur-lg sm:p-6 lg:ml-8 lg:mt-0 lg:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold/90 to-white text-brand-navy sm:h-12 sm:w-12">
              <Scale className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold sm:text-sm">
                Dedicated Business Partner
              </p>
              <p className="text-xs text-white/80 sm:text-sm">
                Comprehensive legal support across corporate, taxation, and IP domains.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4 text-xs leading-relaxed text-white/75 sm:mt-6 sm:text-sm sm:leading-relaxed">
            <p>
              We integrate lawyers, chartered accountants, IP strategists, and compliance experts under one roof to support your expansion from incorporation to international operations.
            </p>
            <p>
              Trusted by growing enterprises nationwide for GST, ROC filings, intellectual property protection, financial governance, and corporate restructuring.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 text-[0.7rem] text-white/70 sm:mt-8 sm:gap-4 sm:text-xs">
            {[
              "GST & Taxation Advisory",
              "IPR (Trademark, Patent, GI)",
              "Company & LLP Incorporation",
              "Compliance & Audits",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-brand-gold sm:h-4 sm:w-4" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
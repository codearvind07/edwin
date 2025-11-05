"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const texts = [
    "Change Business Form Type",
    "Welcome to Edwin Corporate Law Firm",
    "Trademark & Copyrights",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/law.jpg"
          alt="Corporate professionals in meeting"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-transparent to-[#0a1845]/90" />
      </div>

      {/* Fixed Logo at Top */}
      <div className="absolute top-6 px-6 sm:px-10 lg:px-20 w-full z-20">
        <motion.img
          src="/edwinlogo.png"
          alt="Edwin Corporate Law Firm Logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-10 w-auto sm:h-12 md:h-14 drop-shadow-lg"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1580px] flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 gap-10 lg:gap-16 text-center lg:text-left">
        {/* LEFT SIDE - Animated Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-left max-w-[620px] space-y-6 lg:space-y-8 mt-20 lg:mt-0"
        >
          {/* Animated Text */}
          <div className="relative flex items-center justify-center lg:justify-start min-h-[5rem] sm:min-h-[6rem]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={texts[index]}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#d4a017]"
              >
                {texts[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Description + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center lg:items-end text-center lg:text-right max-w-[520px] space-y-5 sm:space-y-6"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-block whitespace-nowrap rounded-full bg-[#d4a017]/15 px-6 sm:px-8 py-2 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.15em] text-black font-semibold border border-[#d4a017]/30 shadow-sm"
          >
            Your Trusted Partner for Startup Legalities
          </motion.div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-black max-w-[480px]">
            Edwin Corporate Law Firm, founded in 2014, has been serving clients
            across India with the vision of providing a complete business
            solution — from company incorporation and taxation to intellectual
            property and compliance management.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4a017] px-7 sm:px-8 py-3 text-sm font-semibold text-black shadow-lg hover:bg-[#f1c94c] transition"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Overlay Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/overlay-pattern.svg')] opacity-15 mix-blend-overlay" />
    </section>
  );
};

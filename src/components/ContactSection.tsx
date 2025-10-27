import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z
    .string()
    .email("Enter a valid email address so we can respond."),
  phone: z
    .string()
    .min(6, "Include the appropriate country/area code."),
  message: z
    .string()
    .min(10, "Provide a brief overview of your requirements."),
});

type ContactFormData = z.infer<typeof contactSchema>;

const infoBlocks = [
  {
    title: "Meet Us",
    description: "A-5, Pamposh Enclave, GK-1, South Delhi, New Delhi 110048",
    icon: MapPin,
  },
  {
    title: "Call",
    description: "+91 98765 43210",
    icon: PhoneCall,
  },
  {
    title: "Write",
    description: "advisory@edwincorporate.com",
    icon: Mail,
  },
];

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitted(false);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Contact submission", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative bg-white py-24">
      <div className="gradient-blur right-12 top-8 bg-brand-royal/20" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full bg-brand-royal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-royal">
              Contact Us
            </div>
            <h2 className="mt-6 font-display text-4xl text-brand-navy">
              Let us craft the right legal and financial roadmap for your enterprise
            </h2>
            <p className="mt-4 text-sm text-brand-navy/70">
              Share your key priorities and our specialists will reach out within one business day.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {infoBlocks.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-brand-royal/10 bg-brand-sand/60 p-6 text-left"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-royal/10 text-brand-royal">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-brand-navy">{title}</p>
                  <p className="mt-2 text-sm text-brand-navy/70">{description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="relative overflow-hidden rounded-3xl border border-brand-royal/10 bg-white p-8 shadow-[0_10px_45px_rgba(31,60,136,0.1)]"
          >
            <div className="pointer-events-none absolute -top-10 right-4 h-32 w-32 rounded-full bg-brand-royal/10" />
            <h3 className="font-display text-2xl text-brand-navy">Request a Consultation</h3>
            <p className="mt-2 text-sm text-brand-navy/60">
              We maintain strict confidentiality across every inquiry.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <label className="text-sm font-medium text-brand-navy">Name</label>
                <input
                  {...register("name")}
                  className="mt-2 w-full rounded-2xl border border-brand-royal/20 bg-brand-sand/40 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-royal focus:outline-none focus:ring-2 focus:ring-brand-royal/30"
                  placeholder="Your full name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-brand-royal">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-brand-navy">Email</label>
                <input
                  {...register("email")}
                  className="mt-2 w-full rounded-2xl border border-brand-royal/20 bg-brand-sand/40 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-royal focus:outline-none focus:ring-2 focus:ring-brand-royal/30"
                  placeholder="name@company.com"
                  autoComplete="email"
                  type="email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-brand-royal">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-brand-navy">Phone</label>
                <input
                  {...register("phone")}
                  className="mt-2 w-full rounded-2xl border border-brand-royal/20 bg-brand-sand/40 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-royal focus:outline-none focus:ring-2 focus:ring-brand-royal/30"
                  placeholder="Include country code"
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-brand-royal">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-brand-navy">How can we support you?</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-brand-royal/20 bg-brand-sand/40 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-royal focus:outline-none focus:ring-2 focus:ring-brand-royal/30"
                  placeholder="Share details about your legal or financial requirements"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-brand-royal">{errors.message.message}</p>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-royal px-6 py-3 text-sm font-semibold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
              <Send className="h-4 w-4" />
            </motion.button>

            {submitted && (
              <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Thank you for reaching out! Our team will connect with you shortly.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

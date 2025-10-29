import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

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

export const RequestConsultationPage = () => {
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
    <section className="relative bg-brand-sand py-16 sm:py-24">
      <div className="gradient-blur right-12 top-8 bg-brand-royal/20" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-brand-royal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-royal">
            Request a Consultation
          </div>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl text-brand-navy">
            Let us craft the right legal and financial roadmap for your enterprise
          </h1>
          <p className="mt-4 text-sm text-brand-navy/70 max-w-2xl mx-auto">
            Share your key priorities and our specialists will reach out within one business day.
            We maintain strict confidentiality across every inquiry.
          </p>
        </div>

        {/* Two-column layout for form and address */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="relative overflow-hidden rounded-3xl border border-brand-royal/10 bg-white p-6 shadow-[0_10px_45px_rgba(31,60,136,0.1)] sm:p-8"
          >
            <div className="pointer-events-none absolute -top-10 right-4 h-32 w-32 rounded-full bg-brand-royal/10" />
            
            <div className="space-y-5">
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
                  rows={5}
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
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Thank you for reaching out! Our team will connect with you shortly.
              </div>
            )}
          </motion.form>

          {/* Address Information */}
          <div>
            <div className="relative h-full overflow-hidden rounded-3xl border border-brand-royal/10 bg-white p-6 shadow-[0_10px_45px_rgba(31,60,136,0.1)] sm:p-8">
              <div className="pointer-events-none absolute -top-10 right-4 h-32 w-32 rounded-full bg-brand-royal/10" />
              
              <div className="flex h-full flex-col">
                <div>
                  <h2 className="font-display text-2xl text-brand-navy">Corporate Office</h2>
                  <p className="mt-2 text-brand-navy/70">
                    Get in touch with our team or visit us at our corporate headquarters.
                  </p>
                </div>

                <div className="mt-8 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-royal/10 text-brand-royal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-lg text-brand-navy">Our Location</h3>
                        <p className="mt-1 text-brand-navy/70">
                          A-5, Pamposh Enclave, GK-1,<br/>
                          South Delhi, New Delhi 110048, IN
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-royal/10 text-brand-royal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-display text-lg text-brand-navy">Email Us</h3>
                        <p className="mt-1 text-brand-navy/70">
                          <a href="mailto:advisory@edwincorporate.com" className="hover:text-brand-royal">
                            advisory@edwincorporate.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display text-lg text-brand-navy">Office Hours</h3>
                    <div className="mt-2 space-y-2 text-brand-navy/70">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};
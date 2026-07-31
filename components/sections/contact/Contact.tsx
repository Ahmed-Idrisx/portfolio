"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/lib/validation/contact";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      reset();

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-8 md:py-24 px-4 md:px-8 relative bg-background overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting spheres */}
      <div className="absolute top-[20%] left-[5%] w-100 h-100 bg-cyan/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-87.5 h-87.5 bg-primary/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          {/* Left Column: Heading & Paragraphs */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-6">
            <SectionHeader
              icon={Mail}
              sectionNumber="04"
              eyebrowTitle="CONTACT"
              heading="Contact"
              headingId="contact-title"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4 text-zinc-400 font-sans text-sm md:text-base md:max-w-md leading-relaxed"
            >
              <p>
                I&apos;m always interested in hearing about new projects,
                collaborations and opportunities.
              </p>
              <p>Drop me a message!</p>
            </motion.div>
          </div>

          {/* Right Column: Sleek minimalist contact form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <form
                id="contact-form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                {/* Name & Email Fields row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-name"
                      className="text-xs font-mono text-zinc-500 uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      id="form-name"
                      type="text"
                      placeholder="Enter Your Name"
                      {...register("name")}
                      className="w-full bg-black/40 border border-zinc-800/80 focus:border-primary px-4 py-3 rounded-lg text-sm text-white focus:outline-none  transition-all placeholder:text-zinc-600"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-email"
                      className="text-xs font-mono text-zinc-500 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      id="form-email"
                      type="email"
                      placeholder="Enter your email"
                      {...register("email")}
                      className="w-full bg-black/40 border border-zinc-800/80 focus:border-primary px-4 py-3 rounded-lg text-sm text-white focus:outline-none  transition-all placeholder:text-zinc-600"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-message"
                    className="text-xs font-mono text-zinc-500 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="form-message"
                    rows={6}
                    placeholder="Write your message here"
                    {...register("message")}
                    className="w-full bg-black/40 border border-zinc-800/80 focus:border-primary px-4 py-3 rounded-lg text-sm text-white focus:outline-none transition-all  placeholder:text-zinc-600 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button or status alert */}
                <div className="flex flex-col items-stretch md:items-end mt-2">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full md:w-fit px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-2.5 text-xs font-mono"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>
                        Your Message sent successfully! Ahmed Idris will get
                        back to you shortly.
                      </span>
                    </motion.div>
                  ) : (
                    <>
                      {serverError && (
                        <div className="w-full md:w-fit px-4 py-3 rounded-lg border border-red-500/20 bg-red-500/10 text-sm text-red-400">
                          {serverError}
                        </div>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-fit py-3.5 px-10 rounded-lg bg-linear-to-r from-primary to-secondary text-white font-bold text-xs md:text-sm tracking-wider uppercase hover:opacity-90 active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/15"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </motion.button>
                    </>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { ContactFormData, contactSchema } from "@/lib/validation/contact";

const inputClasses =
  "w-full bg-surface-2/60 border border-border focus:border-primary px-4 py-3 rounded-lg text-sm text-text-primary focus:outline-none transition-all placeholder:text-text-faint";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setServerError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  };

  return (
    <Section id="contact" bordered>
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
            className="flex flex-col gap-4 text-text-muted font-sans text-sm md:text-base md:max-w-md leading-relaxed"
          >
            <p>
              I&apos;m always interested in hearing about new projects,
              collaborations and opportunities.
            </p>
            <p>Drop me a message!</p>
          </motion.div>
        </div>

        {/* Right Column: Form */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-name"
                    className="text-xs font-mono text-text-faint uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="form-name"
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name")}
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p className="text-danger text-xs">{errors.name.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-email"
                    className="text-xs font-mono text-text-faint uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="form-email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="text-danger text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="form-message"
                  className="text-xs font-mono text-text-faint uppercase tracking-wider"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="form-message"
                  rows={6}
                  placeholder="Write your message here"
                  {...register("message")}
                  className={`${inputClasses} resize-none`}
                />
                {errors.message && (
                  <p className="text-danger text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-stretch md:items-end mt-2">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full md:w-fit px-6 py-3 rounded-xl bg-success/10 border border-success/20 text-success flex items-center gap-2.5 text-xs font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>
                      Your Message sent successfully! Ahmed Idris will get back
                      to you shortly.
                    </span>
                  </motion.div>
                ) : (
                  <>
                    {serverError && (
                      <div className="w-full md:w-fit px-4 py-3 rounded-lg border border-danger/20 bg-danger/10 text-sm text-danger mb-3">
                        {serverError}
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-fit uppercase tracking-wider text-xs md:text-sm ml-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

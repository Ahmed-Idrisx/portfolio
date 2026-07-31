"use client";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/Contact";

import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/Projects";
import TechStack from "@/components/sections/tech-stack/TechStack";
import Loader from "@/components/ui/Loader";
import { AnimatePresence, motion } from "motion/react";

import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-white antialiased selection:bg-primary selection:text-black">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Dynamic Scroll Progress Bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-0.75 bg-slate-950">
        <motion.div
          className="h-full bg-linear-to-r from-primary via-secondary to-cyan"
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      {/* Loader reveal */}
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Navigation Header */}
            <Navbar />

            {/* Main Portfolio Sections Flow */}
            <main className="grow">
              <Hero />
              <About />
              <Projects />
              <TechStack />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

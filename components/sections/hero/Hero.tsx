"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  FileText,
  Sparkles,
  MapPin,
} from "lucide-react";
import { personalInfo } from "@/constants/personalInfo";
import Link from "next/link";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Rotating roles
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(roleTimer);
  }, []);

  // Particle background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particles array
    const particlesCount = Math.min(Math.floor((width * height) / 15000), 75);
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const colors = [
      "rgba(79, 140, 255, 0.4)",
      "rgba(139, 92, 246, 0.4)",
      "rgba(34, 211, 238, 0.4)",
    ];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.5,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.4 - 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Anim loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse transition
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Draw light ambient mouse glow
      const radialGradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        350,
      );
      radialGradient.addColorStop(0, "rgba(79, 140, 255, 0.08)");
      radialGradient.addColorStop(0.5, "rgba(139, 92, 246, 0.03)");
      radialGradient.addColorStop(1, "transparent");
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw particles
      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse parallax force
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x -= dx * force * 0.03;
          p.y -= dy * force * 0.03;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect near particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distDx = p.x - p2.x;
          const distDy = p.y - p2.y;
          const connectDist = Math.sqrt(distDx * distDx + distDy * distDy);
          if (connectDist < 100) {
            ctx.strokeStyle = `rgba(79, 140, 255, ${0.1 * (1 - connectDist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Floating Animated Gradient Blobs */}
      <div className="absolute top-[20%] left-[10%] w-62.5 h-62.5 md:w-112.5 md:h-112.5 bg-linear-to-tr from-primary to-transparent rounded-full blur-[120px] opacity-20 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-62.5 h-62.5 md:w-100 md:h-100 bg-linear-to-br from-secondary to-transparent rounded-full blur-[100px] opacity-15 animate-float-medium pointer-events-none" />

      {/* Content wrapper */}
      <div className="container max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: info */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-cyan font-mono tracking-wider border border-cyan/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          {/* Name Display */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-[0.3em] mb-1"
            >
              Creative Web Developer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white mb-2"
            >
              {personalInfo.name}
            </motion.h1>
          </div>

          {/* Scrolling Roles */}
          <div className="h-10 md:h-12.5 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-xl md:text-3xl font-mono text-primary font-semibold tracking-wide flex items-center gap-2 text-glow-accent"
              >
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-cyan animate-pulse" />
                {personalInfo.roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Custom Summary based on resume */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 max-w-155 leading-relaxed font-sans"
          >
            {personalInfo.heroSummary}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-mono text-gray-500"
          >
            <MapPin className="w-4 h-4 text-rose-500 animate-bounce" />
            <span>Based in {personalInfo.location}</span>
          </motion.div>

          {/* Buttons Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-4 w-full"
          >
            <Link
              href="#projects"
              className="px-6 py-3 rounded-xl bg-linear-to-r from-primary to-secondary font-display font-medium text-sm text-white flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-102"
            >
              <span>View Projects</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="flex h-11 items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-5 text-sm font-medium text-primary transition-all duration-300 hover:scale-[1.02] hover:bg-primary/15"
            >
              <Mail className="h-4 w-4 text-glow-accent animate-pulse" />
              Contact Me
            </Link>

            <Link
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-900/40 text-gray-400 border border-white/5 font-display text-xs hover:border-white/10 hover:text-white transition-all duration-300 flex items-center"
            >
              <FileText className="w-4 h-4 inline mr-2 text-gray-500" />
              <span>Resume</span>
            </Link>
          </motion.div>
        </div>

        {/* Right column: developer card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center w-full"
        >
          <div className="relative w-full max-w-100 aspect-square rounded-3xl p-1 bg-linear-to-br from-primary/30 to-secondary/30 shadow-2xl overflow-hidden group">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-slate-950/90 rounded-3xl z-10" />

            {/* Futuristic Vector Layout representation */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
              {/* Header inside mockup card */}
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span>SYSTEM DIAGNOSTIC: READY</span>
                <span className="text-cyan animate-pulse">● LIVE_SERVER</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 my-auto relative">
                {/* Glowing Avatar */}
                <div className="w-24 h-24 rounded-full bg-linear-to-tr from-primary to-secondary flex items-center justify-center p-0.5 shadow-xl relative animate-pulse">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-display font-bold text-3xl text-white">
                    A.I
                  </div>
                  {/* Floating orbit ring */}
                  <div
                    className="absolute -inset-2 rounded-full border border-dashed border-cyan/40 animate-spin"
                    style={{ animationDuration: "12s" }}
                  />
                </div>

                <div className="text-center">
                  <div className="font-display font-bold text-lg text-white">
                    {personalInfo.name}
                  </div>
                  <div className="text-xs font-mono text-primary uppercase tracking-wider mt-0.5">
                    {personalInfo.title}
                  </div>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap justify-center gap-1.5 max-w-70 mt-2">
                  {["React", "Next.js", "TypeScript", "Tailwindcss"].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono bg-white/5 border border-white/5 text-gray-400 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Bottom stats inside card */}
              <div className="grid grid-cols-3 border-t border-white/5 pt-4 text-center">
                <div>
                  <div className="text-sm font-display font-bold text-primary">
                    3+
                  </div>
                  <div className="text-xs font-mono text-gray-500 uppercase">
                    Major Sites
                  </div>
                </div>
                <div>
                  <div className="text-sm font-display font-bold text-cyan">
                    6+
                  </div>
                  <div className="text-xs font-mono text-gray-500 uppercase">
                    Core Techs
                  </div>
                </div>
                <div>
                  <div className="text-sm font-display font-bold text-secondary">
                    100%
                  </div>
                  <div className="text-xs font-mono text-gray-500 uppercase">
                    Success
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Vertical Social panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden md:flex fixed left-8 bottom-12 flex-col items-center gap-5 z-20"
      >
        <div className="w-px h-20 bg-linear-to-b from-transparent to-slate-800" />
        <motion.a
          whileHover={{ scale: 1.15, y: -2, color: "#ffffff" }}
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 transition-colors duration-200"
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.15, y: -2, color: "#4F8CFF" }}
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 transition-colors duration-200"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15, y: -2, color: "#8B5CF6" }}
          href={`mailto:${personalInfo.email}`}
          className="text-gray-500 transition-colors duration-200"
          title="Email"
        >
          <Mail className="w-5 h-5" />
        </motion.a>
        <div className="w-px h-12 bg-linear-to-t from-transparent to-slate-800" />
      </motion.div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("SOFTWARE");
  const words = [
    "SOFTWARE",
    "ARCHITECT",
    "AUTHENTICATE",
    "PERFORMANCE",
    "AHMED IDRIS",
  ];

  useEffect(() => {
    // Cycle words
    let wordIdx = 0;
    const wordInterval = setInterval(() => {
      if (wordIdx < words.length - 1) {
        wordIdx++;
        setCurrentText(words[wordIdx]);
      }
    }, 450);

    // Dynamic progress tick
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(wordInterval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <motion.div
      id="preloader"
      className="fixed inset-0 bg-background z-50 flex flex-col justify-between p-8 md:p-16 select-none"
      exit={{
        y: "-100vh",
        transition: { duration: 0.8, ease: "easeOut" },
      }}
    >
      {/* Top Meta Details */}
      <div className="flex justify-between items-center text-xs font-mono text-primary uppercase tracking-widest">
        <div>Ahmed Idris Portfolio</div>
        <div>Welcome User</div>
      </div>

      {/* Middle Animated Text */}
      <div className="flex flex-col justify-center items-start">
        <div className="text-xs font-mono text-gray-500 uppercase mb-4 tracking-widest">
          Init Portfolio Engine
        </div>
        <div className="h-17.5 md:h-30 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white uppercase"
            >
              {currentText}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Counter Bar */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div className="text-[10px] md:text-xs font-mono text-gray-500 max-w-50 leading-relaxed">
            CRITICAL SYSTEMS NOMINAL. ESTABLISHING GLASS MORPHIC INTERFACES.
          </div>
          <div className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-white">
            {progress}%
          </div>
        </div>

        {/* Real loading indicator line */}
        <div className="w-full h-0.5 bg-slate-900 overflow-hidden relative">
          <motion.div
            className="h-full bg-linear-to-r from-primary to-secondary"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

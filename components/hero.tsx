"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "./language-provider";
import { ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Portrait from "@/assets/image.png";

export function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 900], [0, 180]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section
      id="home"
      className="relative lg:min-h-[78vh] flex items-center pt-28 pb-12 lg:pb-16 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-150 h-150 bg-violet-500/12 dark:bg-violet-500/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <div className="relative z-10 grid lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)] items-center gap-10 px-6 max-w-7xl w-full mx-auto">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-6xl font-bold tracking-tighter leading-[0.95] mb-5 text-zinc-950 dark:text-zinc-50"
          >
            {t("hero.role")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg sm:text-xl font-semibold text-violet-700 dark:text-violet-300 mb-5"
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-9 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-violet-700 dark:bg-violet-400 text-white dark:text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-violet-800 dark:hover:bg-violet-300 transition-colors"
            >
              {t("nav.projects")}
              <HugeiconsIcon
                icon={ArrowRight}
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {t("nav.contact")}
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="relative hidden lg:flex h-110 items-end justify-center rounded-[2rem] overflow-hidden border border-violet-400/20 bg-zinc-100 dark:bg-zinc-900"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,0.23),transparent_60%)]" />
          <span className="absolute top-6 left-7 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Frontend / UI
          </span>
          <Image
            src={Portrait}
            alt="Portrait of Htet Myat Aung"
            className="relative z-10 h-[90%] w-auto object-contain object-bottom grayscale"
            priority
          />
          <span className="absolute bottom-6 right-7 z-20 text-xs font-medium text-zinc-600 dark:text-zinc-300">
            Based in Yangon, Myanmar
          </span>
        </motion.div>
      </div>
    </section>
  );
}

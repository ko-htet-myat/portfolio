"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Portrait from "@/assets/image.png";
import { useLanguage } from "./language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden rounded-b-[2rem] border-b border-zinc-200 bg-[#f7f7f5] text-zinc-950"
    >
      <div className="relative mx-auto max-w-7xl px-5 pt-32 sm:px-8 md:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-30 text-center text-sm sm:text-base text-zinc-600"
        >
          <span aria-hidden="true" className="mr-2">
            👋
          </span>
          Hi, I&apos;m {t("hero.greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-5 flex flex-col items-center text-center font-black leading-[0.84] tracking-[-0.09em]"
        >
          <span className="relative z-30 block whitespace-nowrap text-[clamp(4.25rem,12vw,10rem)]">
            {t("hero.display_primary")}
          </span>
          <span className="hero-outline relative z-10 mt-3 block whitespace-nowrap text-[clamp(3.2rem,10vw,8.8rem)] sm:mt-4">
            {t("hero.display_secondary")}
          </span>
        </motion.h1>

        <div className="relative z-20 -mt-4 h-64 sm:-mt-12 sm:h-72 lg:-mt-18 lg:h-68">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="pointer-events-none absolute inset-x-0 bottom-0 lg:-bottom-24 z-20 flex justify-center"
          >
            <Image
              src={Portrait}
              alt="Portrait of Htet Myat Aung"
              className="h-auto w-[min(88vw,390px)] object-contain object-bottom grayscale sm:w-[min(50vw,500px)]"
              priority
            />
          </motion.div>

          <div className="absolute bottom-9 left-0 z-30 hidden max-w-60 lg:block">
            <p className="mb-3 text-sm font-semibold">
              Based in Yangon, Myanmar.
            </p>
            <p className="text-sm leading-relaxed text-zinc-600">
              {t("hero.description")}
            </p>
          </div>
          <div className="absolute bottom-12 right-0 z-30 hidden items-center gap-2 text-sm text-zinc-600 lg:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {t("hero.badge")}
          </div>
        </div>

        <div className="relative z-30 flex flex-col items-center gap-6 border-t border-zinc-200 py-6 xl:flex-row xl:items-end xl:justify-between lg:-mt-2 lg:border-0 lg:pt-0 lg:pb-10">
          <p className="max-w-sm text-sm text-center lg:text-start leading-relaxed text-zinc-600 lg:hidden">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
            >
              <HugeiconsIcon icon={ArrowUpRight} className="h-5 w-5" />
              {t("nav.projects")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-900 transition-colors hover:border-zinc-950 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
            >
              {t("nav.contact")}
            </a>
          </div>
          <p className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:block lg:hidden">
            Yangon, Myanmar / Frontend & UI
          </p>
        </div>
      </div>
    </section>
  );
}

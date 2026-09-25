"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useLanguage } from "./language-provider";
import { SdlcWorkflow } from "./sdlc-workflow";

export function WorkingProcess() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      id: 1,
      num: t("process.1.num"),
      title: t("process.1.title"),
      desc: t("process.1.desc"),
    },
    {
      id: 2,
      num: t("process.2.num"),
      title: t("process.2.title"),
      desc: t("process.2.desc"),
    },
    {
      id: 3,
      num: t("process.3.num"),
      title: t("process.3.title"),
      desc: t("process.3.desc"),
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 px-6 max-w-5xl mx-auto">
      <div className="relative hidden" ref={containerRef}>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block">
          <motion.div
            className="absolute top-0 left-0 w-full bg-violet-600 dark:bg-violet-400"
            style={{ height: progressHeight }}
          />
        </div>

        <div className="flex flex-col gap-12 md:gap-20">
          {steps.map((step, index) => {
            // Calculate when this step should become active based on scroll
            const stepProgress = index / (steps.length - 1);

            return (
              <StepItem
                key={step.id}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
                stepProgress={stepProgress}
              />
            );
          })}
        </div>
      </div>
      <SdlcWorkflow />
    </section>
  );
}

interface Step {
  id: number;
  num: string;
  title: string;
  desc: string;
}

function StepItem({
  step,
  index,
  scrollYProgress,
  stepProgress,
}: {
  step: Step;
  index: number;
  scrollYProgress: MotionValue<number>;
  stepProgress: number;
}) {
  // Steps light up slightly before the progress line reaches them
  const threshold = Math.max(0, stepProgress - 0.1);
  const [isActive, setIsActive] = useState(
    () => scrollYProgress.get() >= threshold,
  );

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIsActive(value >= threshold);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0"
    >
      <div className="md:w-1/2 flex md:justify-end md:pr-16 w-full">
        <div className="flex items-center gap-4">
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              isActive ? "text-violet-700 dark:text-violet-300" : "text-zinc-900 dark:text-zinc-50"
            }`}
          >
            {step.num}
          </span>
          <h3
            className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${
              isActive ? "text-violet-700 dark:text-violet-300" : "text-zinc-900 dark:text-zinc-50"
            }`}
          >
            {step.title}
          </h3>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full z-10 border-4 border-zinc-50 dark:border-zinc-950 transition-colors duration-300 ${
            isActive ? "bg-violet-600 dark:bg-violet-400" : "bg-zinc-300"
          }`}
        />
      </div>

      <div className="md:w-1/2 md:pl-16 w-full">
        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

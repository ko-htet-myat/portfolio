"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./language-provider";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Services() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    { id: 1, title: t("services.1.title"), desc: t("services.1.desc") },
    { id: 2, title: t("services.2.title"), desc: t("services.2.desc") },
    { id: 3, title: t("services.3.title"), desc: t("services.3.desc") },
    { id: 4, title: t("services.4.title"), desc: t("services.4.desc") },
    { id: 5, title: t("services.5.title"), desc: t("services.5.desc") },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-zinc-900 dark:text-zinc-50 leading-tight">
            {t("services.title")}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
            {t("services.desc")}
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm tracking-wide text-white dark:text-zinc-950 bg-violet-700 dark:bg-violet-400 shadow-lg shadow-violet-500/15 w-fit"
          >
            {t("services.button")}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 flex flex-col"
        >
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={service.id}
                initial="initial"
                whileHover="hover"
                className={`group flex flex-col py-6 md:py-7 ${
                  index !== services.length - 1
                    ? "border-b border-zinc-300 dark:border-zinc-700"
                    : ""
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${service.id}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
                  >
                    <span
                      className={`text-2xl md:text-3xl font-bold tracking-tight uppercase transition-colors duration-300 ${isOpen ? "text-violet-700 dark:text-violet-300" : "text-zinc-900 dark:text-zinc-50 group-hover:text-violet-700 dark:group-hover:text-violet-300"}`}
                    >
                      {service.title}
                    </span>
                    <motion.div
                      variants={{
                        initial: {
                          opacity: isOpen ? 1 : 0,
                          scale: isOpen ? 1 : 0.8,
                          x: isOpen ? 0 : -10,
                        },
                        hover: { opacity: 1, scale: 1, x: 0 },
                      }}
                      animate={{
                        opacity: isOpen ? 1 : undefined,
                        scale: isOpen ? 1 : undefined,
                        x: isOpen ? 0 : undefined,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-full bg-violet-700 dark:bg-violet-400 flex items-center justify-center text-white dark:text-zinc-950 shadow-md shrink-0"
                    >
                      <HugeiconsIcon
                        icon={ArrowUpRight}
                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </motion.div>
                  </button>
                </h3>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      id={`service-panel-${service.id}`}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
                        {service.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

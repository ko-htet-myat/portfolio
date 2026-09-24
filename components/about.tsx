"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./language-provider";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy, Check, Sparkles, Terminal } from "@hugeicons/core-free-icons";

type TabType = "story" | "philosophy" | "highlights";

const CODE_SNIPPET = `const developer = {
  name: "Htet Myat Aung",
  title: "Frontend Developer & UI Architect",
  coreStack: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS"],
  methodologies: ["Agentic AI Workflows", "Fluid Micro-Interactions", "SSR & RSC"],
  philosophy: "Pixel perfection meets sub-second performance",
  openForOpportunities: true,
  status: "Ready to build the extraordinary 🚀"
};`;

export function About() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>("story");
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(CODE_SNIPPET);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch {
      // fallback
    }
  };

  const tabs: { id: TabType; label: string; icon: typeof Sparkles }[] = [
    { id: "story", label: t("about.tab_story"), icon: Sparkles },
    { id: "philosophy", label: t("about.tab_philosophy"), icon: Terminal },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Header Badge & Title */}
      <div className=" mb-10 md:mb-5">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 max-w-3xl leading-tight"
        >
          {t("about.heading_prefix")}{" "}
        </motion.h2>
      </div>

      {/* Main Grid: Left Identity Card + Right Interactive Bento */}
      <div>
        {/* Right Column: Interactive Story & Bento Experience */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          {/* Interactive Navigation Tabs */}
          <div className=" lg:ml-auto flex p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md self-start max-w-full overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="aboutActiveTab"
                      className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-xs border border-zinc-200/80 dark:border-zinc-700/80"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.45,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <HugeiconsIcon icon={tab.icon} className="w-3.5 h-3.5" />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Body with Smooth Transition */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {/* TAB 1: STORY */}
              {activeTab === "story" && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Lead Narrative */}
                  <div className="p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md space-y-4">
                    <p className="text-zinc-900 dark:text-zinc-100 text-base sm:text-lg font-medium leading-relaxed">
                      {t("about.story_lead")}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {t("about.story_body")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: TECH PHILOSOPHY (Interactive Developer IDE Terminal) */}
              {activeTab === "philosophy" && (
                <motion.div
                  key="philosophy"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl overflow-hidden font-mono"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs text-zinc-400 font-sans font-medium flex items-center gap-1.5">
                        <HugeiconsIcon
                          icon={Terminal}
                          className="w-3.5 h-3.5 text-blue-400"
                        />
                        developer.config.ts
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 transition-colors cursor-pointer"
                    >
                      <HugeiconsIcon
                        icon={copiedCode ? Check : Copy}
                        className={`w-3.5 h-3.5 ${copiedCode ? "text-emerald-400" : ""}`}
                      />
                      <span>{copiedCode ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>

                  {/* Terminal Code Body */}
                  <div className="p-5 sm:p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-300">
                    <div className="flex gap-4">
                      {/* Line numbers */}
                      <div className="select-none text-zinc-600 text-right space-y-1 font-mono pr-2">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i}>{i + 1}</div>
                        ))}
                      </div>

                      {/* Code Content */}
                      <div className="space-y-1 font-mono">
                        <div>
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-yellow-300">developer</span> ={" "}
                          {"{"}
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">name</span>:{" "}
                          <span className="text-emerald-300">
                            &quot;Htet Myat Aung&quot;
                          </span>
                          ,
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">title</span>:{" "}
                          <span className="text-emerald-300">
                            &quot;Frontend Developer & UI Architect&quot;
                          </span>
                          ,
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">coreStack</span>: [
                          <span className="text-emerald-300">
                            &quot;React 19&quot;
                          </span>
                          ,{" "}
                          <span className="text-emerald-300">
                            &quot;Next.js 16&quot;
                          </span>
                          ,{" "}
                          <span className="text-emerald-300">
                            &quot;TypeScript&quot;
                          </span>
                          ,{" "}
                          <span className="text-emerald-300">
                            &quot;Tailwind&quot;
                          </span>
                          ],
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">methodologies</span>:
                          [
                          <span className="text-emerald-300">
                            &quot;Agentic AI Workflows&quot;
                          </span>
                          ,{" "}
                          <span className="text-emerald-300">
                            &quot;Fluid Motion&quot;
                          </span>
                          ],
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">philosophy</span>:{" "}
                          <span className="text-emerald-300">
                            &quot;Pixel perfection meets sub-second
                            performance&quot;
                          </span>
                          ,
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">
                            openForOpportunities
                          </span>
                          : <span className="text-orange-400">true</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-400">status</span>:{" "}
                          <span className="text-emerald-300">
                            &quot;Ready to build the extraordinary 🚀&quot;
                          </span>
                        </div>
                        <div>{"};"}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type ProjectVisualProps = {
  id: number;
  className?: string;
};

const labels = ["COMMERCE", "INSURANCE", "HEALTHCARE", "BANKING"];

export function ProjectVisual({ id, className = "" }: ProjectVisualProps) {
  const label = labels[id - 1] ?? "PROJECT";

  return (
    <div aria-hidden="true" className={`relative isolate overflow-hidden bg-[#ede9f6] dark:bg-[#191525] ${className}`}>
      <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[linear-gradient(to_right,rgba(109,40,217,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(109,40,217,0.12)_1px,transparent_1px)] bg-size-[32px_32px]" />
      <div className="absolute -top-28 -right-24 h-80 w-80 rounded-full border-[55px] border-violet-400/20 dark:border-violet-400/10" />
      <div className="absolute left-7 top-7 text-[10px] font-bold tracking-[0.24em] text-violet-900/55 dark:text-violet-200/60">HMA / {String(id).padStart(2, "0")}</div>
      {id === 1 && <>
        <div className="absolute left-[19%] top-[24%] h-[52%] w-[55%] -rotate-9 rounded-[2rem] border border-violet-300/60 bg-violet-400/30 shadow-2xl shadow-violet-900/10" />
        <div className="absolute left-[34%] top-[18%] h-[60%] w-[40%] rotate-10 rounded-[2rem] border border-violet-300/70 bg-violet-300/55 dark:bg-violet-500/35 shadow-xl" />
        <div className="absolute left-[48%] top-[32%] h-[28%] w-[19%] rounded-full border-12 border-violet-700/55 dark:border-violet-200/60" />
      </>}
      {id === 2 && <>
        <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[24px] border-violet-400/35 dark:border-violet-400/25" />
        <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[24px] border-violet-600/45 dark:border-violet-300/40" />
        <div className="absolute left-1/2 top-1/2 h-[14%] w-[14%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-800/70 dark:bg-violet-200/75" />
      </>}
      {id === 3 && <>
        <div className="absolute left-[43%] top-[19%] h-[61%] w-[15%] rounded-xl bg-violet-600/60 dark:bg-violet-300/60" />
        <div className="absolute left-[20%] top-[42%] h-[16%] w-[61%] rounded-xl bg-violet-600/60 dark:bg-violet-300/60" />
        <div className="absolute left-[27%] top-[27%] h-[46%] w-[46%] rounded-full border border-violet-500/40" />
      </>}
      {id === 4 && <>
        <div className="absolute left-[22%] top-[27%] h-[49%] w-[56%] -rotate-12 rounded-2xl border border-violet-200/70 bg-violet-800/60 dark:bg-violet-300/50 shadow-2xl" />
        <div className="absolute left-[30%] top-[20%] h-[49%] w-[56%] rotate-6 rounded-2xl border border-violet-300/70 bg-violet-400/65 dark:bg-violet-700/65 shadow-2xl" />
        <div className="absolute left-[45%] top-[43%] h-2 w-[22%] rotate-6 rounded-full bg-white/70" />
      </>}
      <div className="absolute bottom-6 left-7 text-[clamp(2rem,5vw,4.5rem)] leading-none font-black tracking-[-0.08em] text-violet-950/15 dark:text-violet-100/15">{label}</div>
      <div className="absolute bottom-7 right-7 h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-300" />
    </div>
  );
}

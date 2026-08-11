"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowUp, Sparkles, Paperclip, Mic } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SAMPLE_PROMPTS = [
  "Identify unnecessary re-renders in this React tree and suggest memoization strategies...",
  "Architect a resilient offline-first state sync machine using IndexedDB and TanStack Query...",
  "Convert this client page into Next.js App Router RSC with streaming and Suspense...",
  "Audit this custom headless combobox component for WAI-ARIA keyboard navigation...",
];

export default function AiChatInput() {
  const [inputValue, setInputValue] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content length
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [inputValue]);

  // Typewriter effect logic
  useEffect(() => {
    const currentPrompt = SAMPLE_PROMPTS[promptIndex];
    const typingSpeed = isDeleting ? 25 : 50;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setPlaceholderText(
          currentPrompt.substring(0, placeholderText.length + 1),
        );
        if (placeholderText === currentPrompt) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setPlaceholderText(
          currentPrompt.substring(0, placeholderText.length - 1),
        );
        if (placeholderText === "") {
          setIsDeleting(false);
          setPromptIndex(
            (prevIndex) => (prevIndex + 1) % SAMPLE_PROMPTS.length,
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, promptIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto px-6 lg:py-16 space-y-3">
      {/* Main Responsive Input Container */}
      <div
        className={`relative flex flex-col bg-neutral-900/95 backdrop-blur-md border rounded-2xl transition-all duration-200 shadow-2xl ${
          isFocused
            ? "border-neutral-600 ring-2 ring-neutral-700/50"
            : "border-neutral-800 hover:border-neutral-700"
        }`}
      >
        {/* Textarea & Dynamic Typewriter Placeholder Wrapper */}
        <div className="relative flex items-center px-3.5 sm:px-4 pt-3.5 sm:pt-4 pb-2 min-h-14">
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent text-white placeholder-transparent focus:outline-none resize-none z-10 text-sm sm:text-base leading-relaxed max-h-40"
            readOnly={true}
          />

          {/* Typewriter Overlay Placeholder */}
          {!inputValue && (
            <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 right-3.5 pointer-events-none text-neutral-500 text-sm sm:text-base flex items-center gap-0.5 truncate">
              <span className="truncate">{placeholderText}</span>
              <span className="w-0.5 h-4 bg-amber-400 animate-pulse shrink-0 inline-block" />
            </div>
          )}
        </div>

        {/* Action Controls & Footer Toolbar */}
        <div className="flex items-center justify-between px-3 sm:px-4 pb-3 pt-1">
          {/* Quick Tools */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-2 sm:p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 active:bg-neutral-700 rounded-xl transition-colors"
              aria-label="Attach File"
            >
              <HugeiconsIcon
                icon={Paperclip}
                className="w-4 h-4 sm:w-4 sm:h-4"
              />
            </button>
            <button
              type="button"
              className="p-2 sm:p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 active:bg-neutral-700 rounded-xl transition-colors"
              aria-label="Voice Input"
            >
              <HugeiconsIcon icon={Mic} className="w-4 h-4 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Submit Action & Keyboard Shortcut Info */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-500 hidden md:inline-block">
              <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded border border-neutral-700 font-mono text-[10px]">
                Shift + Enter
              </kbd>{" "}
              for new line
            </span>
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Send Prompt"
              className={`p-2.5 sm:p-2 rounded-xl transition-all duration-200 ${
                inputValue.trim()
                  ? "bg-white text-black hover:bg-neutral-200 active:scale-95"
                  : "bg-neutral-800 text-neutral-600 cursor-not-allowed"
              }`}
            >
              <HugeiconsIcon icon={ArrowUp} className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

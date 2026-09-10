"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("light");
  const [label, setLabel] = useState("WELCOME");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "[data-theme][data-label]"
    );

    if (!sections.length) return;

    /* =========================
       SCROLL PROGRESS
    ========================== */

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const currentProgress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(
        Math.min(100, Math.max(0, currentProgress))
      );
    };

    /* =========================
       SECTION DETECTION
    ========================== */

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          const section = visibleSections[0].target;

          setTheme(section.dataset.theme);
          setLabel(section.dataset.label);
        }
      },
      {
        root: null,

        /*
          Only consider the middle
          portion of the screen.
        */
        rootMargin: "-40% 0px -40% 0px",

        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className={`fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:block`}
    >
      <div className="flex w-40 flex-col gap-3">

        {/* LABEL + PERCENTAGE */}

        <div className="flex items-center justify-between">
          <span
            className={`text-[10px] font-medium tracking-[0.16em] transition-colors duration-500 ${
              isDark
                ? "text-white/70"
                : "text-black/50"
            }`}
          >
            {label}
          </span>

          <span
            className={`text-[10px] transition-colors duration-500 ${
              isDark
                ? "text-white/40"
                : "text-black/30"
            }`}
          >
            {Math.round(progress)}%
          </span>
        </div>

        {/* PROGRESS BAR */}

        <div
          className={`h-[2px] w-full overflow-hidden rounded-full transition-colors duration-500 ${
            isDark
              ? "bg-white/20"
              : "bg-black/10"
          }`}
        >
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isDark
                ? "bg-white"
                : "bg-black"
            }`}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>
    </div>
  );
}
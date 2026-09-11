"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Product Design",
    title: "CayTunes",
    description:
      "A social music experience designed around listening, chatting, and sharing moments through music.",
    tags: ["UX/UI", "Product Design", "Prototype"],
    href: "/design/caytunes",
    theme: "cay",
  },
  {
    number: "02",
    category: "Product Design + Frontend",
    title: "FocusList",
    description:
      "A focused task management experience built to make planning feel simple, clear, and personal.",
    tags: ["UI/UX", "Frontend", "React"],
    href: "/design/focuslist",
    theme: "focus",
  },
  {
    number: "03",
    category: "Product Design",
    title: "Coming Soon",
    description:
      "Another thoughtful digital experience is currently in progress.",
    tags: ["UX/UI"],
    href: "#",
    theme: "future",
  },
];

function AbstractBackground({ theme }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* =================================================
          CAYTUNES BACKGROUND
      ================================================= */}

      <div
        className={`absolute inset-0 transition-all duration-700 ${
          theme === "cay"
            ? "scale-100 opacity-100"
            : "scale-105 opacity-0"
        }`}
      >
        {/* Large organic shape */}

        <div
          className="
            absolute
            -left-20
            top-20
            h-[280px]
            w-[280px]
            rounded-[48%_52%_60%_40%]
            bg-[#DCD7FF]/55
            blur-[1px]
            transition-transform
            duration-[8000ms]
            ease-in-out
            animate-pulse
          "
        />

        {/* Second circle */}

        <div
          className="
            absolute
            right-[8%]
            top-[12%]
            h-[190px]
            w-[190px]
            rounded-full
            border
            border-[#9D91FF]/20
            bg-[#EAE7FF]/50
            animate-pulse
            duration-[4000ms]
          "
        />

        {/* Orbit */}

        <div
          className="
            absolute
            right-[15%]
            top-[18%]
            h-[230px]
            w-[230px]
            rounded-full
            border
            border-[#8275E8]/20
            rotate-12
          "
        />

        <div
          className="
            absolute
            right-[15%]
            top-[18%]
            h-[230px]
            w-[230px]
            rounded-full
            border
            border-[#8275E8]/10
            -rotate-45
            scale-x-[1.8]
          "
        />

        {/* Floating dots */}

        <div
          className="
            absolute
            left-[25%]
            top-[22%]
            h-3
            w-3
            rounded-full
            bg-[#8C82E8]/35
            animate-bounce
          "
        />

        <div
          className="
            absolute
            right-[30%]
            bottom-[20%]
            h-2
            w-2
            rounded-full
            bg-[#8C82E8]/40
            animate-pulse
          "
        />

        {/* Thin line */}

        <div
          className="
            absolute
            bottom-[15%]
            left-[10%]
            h-px
            w-[40%]
            rotate-[-12deg]
            bg-[#7669D8]/15
          "
        />

        {/* Small diamond */}

        <div
          className="
            absolute
            bottom-[18%]
            right-[7%]
            h-16
            w-16
            rotate-45
            rounded-[14px]
            border
            border-[#8275E8]/15
            bg-white/20
            backdrop-blur-sm
            animate-pulse
          "
        />
      </div>

      {/* =================================================
          FOCUSLIST BACKGROUND
      ================================================= */}

      <div
        className={`absolute inset-0 transition-all duration-700 ${
          theme === "focus"
            ? "scale-100 opacity-100"
            : "scale-105 opacity-0"
        }`}
      >
        {/* Main circle */}

        <div
          className="
            absolute
            right-[4%]
            top-[-60px]
            h-[330px]
            w-[330px]
            rounded-full
            border
            border-[#9CB9FF]/20
            bg-[#E9F0FF]/60
            animate-pulse
          "
        />

        {/* Inner circle */}

        <div
          className="
            absolute
            right-[10%]
            top-[10px]
            h-[210px]
            w-[210px]
            rounded-full
            border
            border-[#7FA4FF]/15
          "
        />

        {/* Blue organic shape */}

        <div
          className="
            absolute
            left-[5%]
            bottom-[-100px]
            h-[300px]
            w-[420px]
            rounded-[50%_40%_45%_55%]
            bg-[#DDE8FF]/65
            animate-pulse
          "
        />

        {/* Geometric lines */}

        <div
          className="
            absolute
            left-[25%]
            top-[10%]
            h-[200px]
            w-[200px]
            rotate-12
            border
            border-[#6E98FF]/10
          "
        />

        <div
          className="
            absolute
            left-[25%]
            top-[10%]
            h-[200px]
            w-[200px]
            -rotate-12
            border
            border-[#6E98FF]/10
          "
        />

        {/* Orange accent */}

        <div
          className="
            absolute
            left-[16%]
            top-[20%]
            h-5
            w-5
            rounded-full
            bg-[#E9B58C]/30
            animate-bounce
          "
        />

        {/* Blue dot */}

        <div
          className="
            absolute
            right-[25%]
            bottom-[20%]
            h-3
            w-3
            rounded-full
            bg-[#6F98FF]/30
            animate-pulse
          "
        />

        {/* Diagonal line */}

        <div
          className="
            absolute
            right-[10%]
            bottom-[15%]
            h-px
            w-[35%]
            rotate-[20deg]
            bg-[#6E98FF]/15
          "
        />
      </div>

      {/* =================================================
          FUTURE PROJECT BACKGROUND
      ================================================= */}

      <div
        className={`absolute inset-0 transition-all duration-700 ${
          theme === "future"
            ? "scale-100 opacity-100"
            : "scale-105 opacity-0"
        }`}
      >
        {/* Large ring */}

        <div
          className="
            absolute
            left-[8%]
            top-[5%]
            h-[260px]
            w-[260px]
            rounded-full
            border-[18px]
            border-black/[0.025]
            animate-spin
          "
        />

        {/* Neutral organic shape */}

        <div
          className="
            absolute
            right-[10%]
            top-[15%]
            h-[230px]
            w-[230px]
            rounded-[45%_55%_55%_45%]
            bg-black/[0.025]
            animate-pulse
          "
        />

        {/* Floating square */}

        <div
          className="
            absolute
            right-[28%]
            bottom-[18%]
            h-20
            w-20
            rotate-12
            rounded-[20px]
            border
            border-black/[0.06]
            bg-white/30
            animate-bounce
          "
        />

        <div
          className="
            absolute
            left-[30%]
            bottom-[12%]
            h-10
            w-10
            -rotate-12
            rounded-[12px]
            border
            border-black/[0.05]
            animate-pulse
          "
        />

        {/* Dots */}

        <div
          className="
            absolute
            left-[20%]
            top-[30%]
            h-2
            w-2
            rounded-full
            bg-black/10
          "
        />

        <div
          className="
            absolute
            right-[20%]
            bottom-[30%]
            h-3
            w-3
            rounded-full
            bg-black/10
          "
        />
      </div>

      {/* =================================================
          DEFAULT BACKGROUND
      ================================================= */}

      {!theme && (
        <>
          <div
            className="
              absolute
              left-[10%]
              top-[15%]
              h-32
              w-32
              rounded-full
              border
              border-black/[0.05]
              animate-pulse
            "
          />

          <div
            className="
              absolute
              right-[10%]
              bottom-[15%]
              h-40
              w-40
              rounded-[40px]
              border
              border-black/[0.04]
              rotate-12
              animate-pulse
            "
          />
        </>
      )}
    </div>
  );
}

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);

  const activeTheme =
    activeProject !== null
      ? projects[activeProject].theme
      : null;

  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-20
        md:px-10
        md:py-24
        lg:px-16
      "
      onMouseLeave={() => setActiveProject(null)}
    >
      {/* ABSTRACT BACKGROUND */}

      <AbstractBackground theme={activeTheme} />

      {/* SOFT OVERLAY */}

      <div className="pointer-events-none absolute inset-0 bg-[#F7F7F5]/30" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}

        <div
          className="
            mb-12
            flex
            flex-col
            gap-4
            md:mb-16
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-black/35
              "
            >
              Selected Work
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                tracking-[-0.045em]
                md:text-5xl
              "
            >
              Things I&apos;ve designed.
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-black/45
            "
          >
            A collection of products, interfaces, and experiments where
            design meets technology.
          </p>
        </div>

        {/* CARDS */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <Link
              href={project.href}
              key={project.number}
              onMouseEnter={() => setActiveProject(index)}
              className="group"
            >
              <article
                className="
                  relative
                  min-h-[330px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-black/[0.06]
                  bg-white/65
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:bg-white/75
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.07)]
                "
              >
                {/* NUMBER + ARROW */}

                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium text-black/30">
                    {project.number}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/[0.07]
                      bg-white/60
                      text-sm
                      transition-all
                      duration-300
                      group-hover:rotate-45
                      group-hover:bg-black
                      group-hover:text-white
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* CONTENT */}

                <div className="mt-16">
                  <p
                    className="
                      mb-3
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-black/35
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-sm
                      text-sm
                      leading-6
                      text-black/50
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* TAGS */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-black/[0.06]
                        bg-white/60
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-black/45
                        backdrop-blur-sm
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* HOVER GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-36
                    w-36
                    rounded-full
                    bg-white/70
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
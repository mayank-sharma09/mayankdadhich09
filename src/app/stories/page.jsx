"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const stories = [
  {
    number: "01",
    type: "Product Story",
    title: "Bridgr",
    description:
      "A short product advertisement created to show how a traditional library can move from paper and spreadsheets to smarter digital management.",
    tags: ["Ad Film", "Product Story", "Visual Direction"],
    image: "/images/bridgr-preview.jpg",
    className: "md:col-span-2",
  },
  {
    number: "02",
    type: "Character Story",
    title: "Conversations",
    description:
      "Short visual stories built around characters, everyday situations, and the small conversations that make a scene feel alive.",
    tags: ["Characters", "Storytelling", "Direction"],
    image: "/images/character-story.jpg",
    className: "",
  },
  {
    number: "03",
    type: "Narrative",
    title: "The Last Point",
    description:
      "A visual story about ambition, competition, friendship, and the moments that happen beyond the final point.",
    tags: ["2D Story", "Narrative", "Sound"],
    image: "/images/the-last-point.jpg",
    className: "",
  },
];

export default function StoriesPage() {

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      {/* HERO */}


  {/* HERO */}
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

    {/* MOBILE VIDEO */}
    <div className="absolute inset-0 md:hidden">
      <video
        src="/blackholemobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    </div>

    {/* DESKTOP VIDEO */}
    <div className="absolute inset-0 hidden md:block">
      <video
        src="/visual.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    </div>

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/20" />

    {/* TEXT */}
    <div className="relative z-10 w-full px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">

        <p
          className="stories-text-up mb-7 text-xs font-medium uppercase tracking-[0.2em] text-white/50"
          style={{ animationDelay: "0ms" }}
        >
          Visual Storyteller
        </p>

        <h1
          className="stories-text-up mx-auto max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white md:text-7xl lg:text-[100px]"
          style={{ animationDelay: "120ms" }}
        >
          Stories made
          <br />
          to be felt
        </h1>

        <p
          className="stories-text-up mx-auto mt-9 max-w-xl text-base leading-7 text-white/55 md:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          I like turning ideas into visual experiences through
          storytelling, motion, sound, characters, and product films.
        </p>

        <div
          className="stories-text-up mt-16 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35"
          style={{ animationDelay: "360ms" }}
        >
          <span className="h-px w-10 bg-white/30" />
          Scroll to explore
        </div>

      </div>
    </div>

    {/* ANIMATION */}
    <style>{`
      .stories-text-up {
        opacity: 0;
        transform: translateY(24px);
        animation: storiesTextUp 0.8s ease-out forwards;
      }

      @keyframes storiesTextUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .stories-text-up {
          opacity: 1;
          transform: none;
          animation: none;
        }
      }
    `}</style>

  </section>



      {/* SELECTED STORIES */}
      {/* SELECTED STORIES */}
<section className="relative px-6 pb-28 pt-28 md:px-10 lg:px-16">

  {/* BLUR TRANSITION FROM HERO */}
  <div className="pointer-events-none absolute inset-x-0 -top-32 h-48 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/70 to-[#111111] blur-2xl" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
          Selected Stories
        </p>

        <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
          Things I've made.
        </h2>
      </div>

      <span className="hidden text-sm text-white/20 md:block">
        03 Stories
      </span>
    </div>

    {/* REST OF YOUR CONTENT... */}

  </div>
</section>

      {/* STORY TYPES */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                What I Create
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Different formats.
                <br />
                One purpose.
              </h2>
            </div>

            <div>
              {[
                [
                  "01",
                  "Product Films",
                  "Short advertisements that make digital products easier to understand and more memorable.",
                ],
                [
                  "02",
                  "Character Stories",
                  "Characters, conversations, and everyday moments turned into visual narratives.",
                ],
                [
                  "03",
                  "Narrative Films",
                  "Stories driven by emotion, atmosphere, sound, and visual direction.",
                ],
                [
                  "04",
                  "Visual Experiments",
                  "Small creative experiments exploring motion, composition, sound, and ideas.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-t border-white/10 py-6"
                >
                  <div className="grid grid-cols-[40px_1fr] gap-4">
                    <span className="text-xs text-white/25">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-lg font-medium">
                        {title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-white/35">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[36px] bg-[#F4F3EF] px-6 py-20 text-black md:px-12 md:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/30">
              My Approach
            </p>

            <h2 className="mt-8 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
              I don't just want to show
              <br className="hidden md:block" />
              something beautiful.
              <br />
              I want to make people feel something.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-6 text-black/45 md:text-base">
              Whether it is a product advertisement, a character
              conversation, or a personal story, I care about the idea
              behind the visuals and the emotion they leave behind.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            Have a story?
          </p>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Let's turn an idea into something people remember.
            </h2>

            <Link
              href="/#contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Let's talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 pb-28 md:px-10 md:pb-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium">Mayank.</p>

          <p className="text-xs text-white/25">
            Product Design · Frontend · Visual Storytelling
          </p>
        </div>
      </footer>
    </main>
  );
}
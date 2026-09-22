"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import BackToTop from "../components/BackToTop";



export default function StoriesPage() {

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
   const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const [muted1, setMuted1] = useState(true);
  const [muted2, setMuted2] = useState(true);

  const toggleMute1 = () => {
    if (!video1Ref.current) return;

    video1Ref.current.muted = !video1Ref.current.muted;
    setMuted1(video1Ref.current.muted);
  };

  const toggleMute2 = () => {
    if (!video2Ref.current) return;

    video2Ref.current.muted = !video2Ref.current.muted;
    setMuted2(video2Ref.current.muted);
  };


  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <BackToTop />
      {/* HERO */}
     <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

  {/* VIDEO BACKGROUND */}
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



  {/* TEXT CONTENT */}
  <div className="relative z-10 w-full px-6 py-20 md:px-10 lg:px-16 font-serif ">

    <div className="mx-auto max-w-7xl text-center">

      {/* Small intro */}
      <p
        className="stories-text-up mb-7 text-xs font-medium uppercase tracking-[0.2em] text-white/50"
        style={{ animationDelay: "0ms" }}
      >
        Visual Storyteller
      </p>

      {/* Main heading */}
      <h1
        className="stories-text-up mx-auto max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white md:text-7xl lg:text-[100px]"
        style={{ animationDelay: "120ms" }}
      >
        Stories made
        <br />
        to be felt.
      </h1>

      {/* Description */}
    

      {/* Scroll hint */}
      <div
        className="stories-text-up mt-16 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35"
        style={{ animationDelay: "360ms" }}
      >
        <span className="h-px w-10 bg-white/30" />
        Scroll to explore
      </div>

    </div>

  </div>

  {/* SECTION ANIMATION */}
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
<section className="px-6 pb-28 pt-28 md:px-10 lg:px-16">
  <div className="mx-auto max-w-7xl">

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

    {/* FEATURED STORY */}
    <Link
      href="#"
      className="group relative mb-6 block overflow-hidden rounded-[28px] bg-[#1A1A1A]"
    >
      <div className="relative aspect-[16/8] overflow-hidden bg-[#222222]">

        {/* VIDEO */}
        <video
          ref={videoRef}
          src="/bridgrVid.mp4"
          autoPlay
          loop
          muted
          playsInline
         preload="metadata"
          poster="/bridgr.png"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Info */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
            01 / Product Story
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Bridgr
            </h3>
          </div>
        </div>

        {/* Sound Button */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm text-white/70 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>

      </div>
    </Link>

    {/* SMALL STORIES */}
    <div className="grid gap-6 md:grid-cols-3 ">

      {/* Character Story */}
      <Link
        href="#"
        className="group relative mx-auto w-[260px]  overflow-hidden rounded-[28px] bg-[#1A1A1A]"
      >
        <div className="relative aspect-[9/16] overflow-hidden bg-[#222222]">

          {/* VIDEO */}
          <video
            ref={video1Ref}
            src="/bridgR-App.mp4"
          autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/bridr-poster.png"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
           <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMute1();
            }}
            className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-sm text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            aria-label={muted1 ? "Unmute video" : "Mute video"}
          >
            {muted1 ? "🔇" : "🔊"}
          </button>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
              02 / Character Story
            </p>

            <h3 className="mt-2 text-3xl font-medium tracking-[-0.035em]">
              AI Advertisement
            </h3>
          </div>

          
        </div>
      </Link>

      {/* Narrative */}
      <Link
        href="#"
        className="group relative mx-auto w-[260px]  overflow-hidden rounded-[28px] bg-[#1A1A1A]"
      >
        <div className="relative aspect-[9/16] overflow-hidden bg-[#222222] ">

          {/* VIDEO */}
          <video
            ref={video2Ref}
            src="/bride-reel.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
                poster="/bride-poster.png"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMute2();
            }}
            className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-sm text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            aria-label={muted2 ? "Unmute video" : "Mute video"}
          >
            {muted2 ? "🔇" : "🔊"}
          </button>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
              03 / Reel
            </p>

            <h3 className="mt-2 text-3xl font-medium tracking-[-0.035em]">
             Reel
            </h3>
          </div>

          
        </div>
      </Link>

    </div>
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
     <section className="border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-16">
  <div className="mx-auto max-w-7xl leading-normal    // 1.5">
    <div className="rounded-[28px] bg-[#E7E7E7] text-black px-6 py-12 sm:px-8 sm:py-16 md:rounded-[36px] md:px-12 md:py-28">
      
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/30 sm:text-xs">
        My Approach
      </p>

      <h2 className="mt-6 max-w-5xl text-[36px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl md:mt-8 md:text-6xl">
        I don't just want to show something beautiful.
       
        I want to make people feel something.
      </h2>

      <p className="mt-6 max-w-xl text-sm leading-6 text-black/45 sm:mt-8 sm:text-base sm:leading-7">
        Whether it is a product advertisement, a character
        conversation, or a personal story, I care about the idea
        behind the visuals and the emotion they leave behind.
      </p>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-26">
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
  <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
    Let's turn an idea into something people remember.
  </h2>

  {/* CTA + SOCIALS */}
  <div className="flex items-center gap-4">
    {/* Let's Talk */}
    <a
      href="mailto:dadhichmayank09@gmail.com"
      className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
    >
      Let's talk
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </a>

    {/* Social Icons */}
    <div className="flex items-center gap-2">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/mayankdadhich._?stkn=a2p4b2c1ZWhwMzlo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white"
      >
        <FaInstagram
          size={17}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </a>

      {/* LinkedIn */}
      <a
         href="https://www.linkedin.com/in/mayank-sharma-ab0a9b226/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
      >
        <FaLinkedinIn
          size={17}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </a>
    </div>
  </div>
</div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 pb-28 md:px-10 md:pb-10 lg:px-16">
       <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Mayank Dadhich.</p>

            <p>Designed & built by Mayank Dadhich.</p>
          </div>
      </footer>
    </main>
  );
}
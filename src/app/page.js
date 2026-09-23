"use client";

import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import BackToTop from "./components/BackToTop";

export default function Home() {
  const [notification, setNotification] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        form.reset();

        setNotification("Thanks for your Response!");

        setTimeout(() => {
          setNotification("");
        }, 4000);
      } else {
        setNotification("Something went wrong. Please try again.");

        setTimeout(() => {
          setNotification("");
        }, 4000);
      }
    } catch (error) {
      console.error(error);

      setNotification("Unable to send your message. Please try again.");

      setTimeout(() => {
        setNotification("");
      }, 4000);
    }
  }
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#111111]">
      <BackToTop />

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden bg-[#F7F7F5]">
        <div className="mx-auto grid min-h-screen max-w-[1600px] md:grid-cols-[1.02fr_1fr]">

          {/* VIDEO */}
          <div className="relative order-1 min-h-[430px] md:order-2 md:min-h-screen">

            {/* Mobile — no fade */}
            <video
              src="/vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover md:hidden"
            />

            {/* Desktop — with soft fade */}
            <video
              src="/vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="hidden h-full w-full object-cover md:block"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.55) 45%, black 70%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.55) 45%, black 70%)",
              }}
            />

          </div>

          {/* TEXT */}
          <div className="relative order-2 flex items-center px-6 py-16 sm:px-10 sm:py-20 md:order-1 md:px-12 md:py-24 lg:px-16">
            <div className="relative z-10 w-full">

              {/* Small intro */}
              <p
                className="
        hero-fade-up
        mb-5
        max-w-[340px]
        text-[16px]
        font-medium
        uppercase
        leading-[1.6]
        tracking-[0.16em]
        text-black/40
        sm:mb-7
        sm:max-w-xl
        sm:text-[14px]
        sm:tracking-[0.18em]
        md:text-[18px]
      "
              >
                MAYANK DADHICH
              </p>

              {/* Main heading */}
              <h1 className="max-w-4xl text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[52px] md:text-7xl lg:text-[76px] xl:text-[88px]">

                <span
                  className="hero-line"
                  style={{ animationDelay: "120ms" }}
                >
                 I'm a Product Designer & Developer,
                </span>

                <br />

                <span
                  className="hero-line"
                  style={{ animationDelay: "220ms" }}
                >
                 Visual Storyteller
                </span>

             

               

              </h1>

              {/* Buttons */}
              <div
                className="
        hero-fade-up
        mt-8
        flex
        flex-wrap
        items-center
        gap-3
        sm:mt-10
      "
                style={{ animationDelay: "500ms" }}
              >
                <a
                  href="#work"
                  className="
          rounded-full
          bg-[#111111]
          px-5 py-3
          text-xs
          font-medium
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          sm:px-6
          sm:py-3.5
          sm:text-sm
        "
                >
                  Explore my work ↓
                </a>

                <a
                  href="/about"
                  className="
          rounded-full
          border
          border-black/10
          bg-white/30
          px-5 py-3
          text-xs
          font-medium
          text-black/60
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-black/20
          hover:bg-white/60
          hover:text-black
          sm:px-6
          sm:py-3.5
          sm:text-sm
        "
                >
                  More about me ↗
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================
          CREATIVE DIRECTIONS
      ========================== */}
      <section className=" border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-black/40">
              What I do
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Two ways I like to create.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* DESIGN */}
            <a
              href="/design"
              className="group rounded-[32px] bg-[#111111] p-8 text-white transition-transform duration-500 hover:-translate-y-2 sm:p-10 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm text-white/40">
                  01
                </span>

                <span className="text-2xl text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                  ↗
                </span>
              </div>

              <div className="mt-24">
                <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Product Design
                  <br />
                  + Frontend
                </h3>

                <p className="mt-6 max-w-md leading-relaxed text-white/50">
                  Designing thoughtful digital products and bringing
                  them to life through code.
                </p>

                <p className="mt-10 text-sm font-medium text-white/60">
                  Explore Design →
                </p>
              </div>
            </a>


            {/* STORIES */}
            <a
              href="/stories"
              className="group rounded-[32px] border border-black/10 bg-white p-8 transition-transform duration-500 hover:-translate-y-2 sm:p-10 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm text-black/30">
                  02
                </span>

                <span className="text-2xl text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black">
                  ↗
                </span>
              </div>

              <div className="mt-24">
                <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Visual
                  <br />
                  Stories
                </h3>

                <p className="mt-6 max-w-md leading-relaxed text-black/50">
                  Short-form films, product stories, motion and
                  visual experiments.
                </p>

                <p className="mt-10 text-sm font-medium text-black/60">
                  Explore Stories →
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>


      {/* =========================
          SELECTED WORK
      ========================== */}
      <section
        id="work"
        className="border-t border-black/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-black/40">
                Selected work
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                A few things I've worked on.
              </h2>
            </div>

            <a
              href="/design"
              className="hidden text-sm font-medium text-black/50 transition hover:text-black sm:block"
            >
              View all →
            </a>
          </div>


          {/* CAYTUNES */}
          <a
            href="/design/caytunes"
            className="group mt-16 block overflow-hidden rounded-[32px] bg-[#A1D3FF]"
          >
            <div className="grid min-h-[500px] items-stretch md:grid-cols-2">

              {/* TEXT */}
              <div className="relative z-20 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
                <p className="text-sm text-black/40">
                  01 · PRODUCT DESIGN
                </p>

                <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                  CayTunes
                </h3>

                <p className="mt-5 max-w-md text-black/60">
                  A social music experience designed around
                  listening, chatting and sharing moments together.
                </p>

                              <div className="mt-8 flex flex-wrap gap-3">
  {/* VIEW DEMO */}
    <a
    href="design/caytunes"
    target="_self"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-black/85"
  >
    {/* Play / Video Icon */}
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>

    View Demo
  </a>
  </div>
              </div>

              {/* IMAGE */}

              <div className="relative min-h-[300px] overflow-hidden md:min-h-[500px]">

                {/* IMAGE */}
                <div
                  className="
      absolute
      inset-0
      hidden
      md:block
    "
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 8%, rgba(0,0,0,0.7) 22%, #000 38%, #000 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 8%, rgba(0,0,0,0.7) 22%, #000 38%, #000 100%)",
                  }}
                >
                  <Image
                    src="/caytunes.jpg"
                    alt="CayTunes project"
                    fill
                    priority
                    className="
        object-cover
        transition-transform
        duration-700
        ease-out
        group-hover:scale-[1.03]
      "
                  />
                </div>

                {/* MOBILE IMAGE */}
                <div
                  className="
      absolute
      inset-0
      md:hidden
    "
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 8%, rgba(0,0,0,0.7) 22%, #000 38%, #000 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 8%, rgba(0,0,0,0.7) 22%, #000 38%, #000 100%)",
                  }}
                >
                  <Image
                    src="/caytunes.jpg"
                    alt="CayTunes project"
                    fill
                    priority
                    className="
        object-cover
        transition-transform
        duration-700
        ease-out
        group-hover:scale-[1.03]
      "
                  />
                </div>

              </div>

            </div>
          </a>


          {/* FOCUSLIST */}
          <a
           
            className="group mt-16 block overflow-hidden rounded-[32px] bg-[#EDEDE9]"
          >
            <div className="grid min-h-[500px] items-stretch md:grid-cols-2">

              {/* TEXT */}
              <div className="relative z-20 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
                <p className="text-sm uppercase text-black/40">
                  02 · Frontend Development
                </p>

                <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                  FocusList
                </h3>

                <p className="mt-5 max-w-md text-black/60">
                  A focused task management experience built for planning,
                  prioritizing and getting things done.
                </p>

<div className="mt-8 flex flex-wrap gap-3">
  {/* VIEW DEMO */}
  <a
    href="https://task-list-theta-amber.vercel.app/"
    target="_self"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-black/85"
  >
    {/* Play / Video Icon */}
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>

    View Demo
  </a>

  {/* GITHUB */}
  <a
    href="https://github.com/thedevmayank/FocusList"
    target="_self"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-5 py-2.5 text-sm font-medium text-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-black/20 hover:bg-white hover:text-black"
  >
    {/* GitHub Icon */}
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 8.9c.85 0 1.7.12 2.49.37 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.92v2.85c0 .27.18.6.69.49A10.22 10.22 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
    />
  </svg>

    GitHub
  </a>
</div>

              </div>

              {/* IMAGE */}
              <div className="relative min-h-[300px] overflow-hidden md:min-h-[500px]">

                <Image
                  src="/focuslist.jpg"
                  alt="FocusList project"
                  fill
                  priority
                  className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.03]
        "
                />

                {/* DESKTOP — VERY SOFT IMAGE FADE */}
                <div
                  className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          hidden
          w-72
          md:block
        "
                  style={{
                    background: `
            linear-gradient(
              to right,
              #EDEDE9 0%,
              rgba(237,237,233,0.98) 8%,
              rgba(237,237,233,0.90) 18%,
              rgba(237,237,233,0.72) 30%,
              rgba(237,237,233,0.48) 43%,
              rgba(237,237,233,0.22) 60%,
              rgba(237,237,233,0.06) 78%,
              transparent 100%
            )
          `,
                  }}
                />

                {/* DESKTOP — SUBTLE BLUR AT THE VERY EDGE */}
                <div
                  className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          hidden
          w-36
          md:block
        "
                  style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    maskImage:
                      "linear-gradient(to right, black 0%, rgba(0,0,0,0.55) 35%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, black 0%, rgba(0,0,0,0.55) 35%, transparent 100%)",
                  }}
                />

                {/* MOBILE — VERY SOFT TOP FADE */}
                <div
                  className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-10
          h-44
          w-full
          md:hidden
        "
                  style={{
                    background: `
            linear-gradient(
              to bottom,
              #EDEDE9 0%,
              rgba(237,237,233,0.98) 8%,
              rgba(237,237,233,0.90) 18%,
              rgba(237,237,233,0.72) 30%,
              rgba(237,237,233,0.48) 45%,
              rgba(237,237,233,0.22) 63%,
              rgba(237,237,233,0.06) 80%,
              transparent 100%
            )
          `,
                  }}
                />

                {/* MOBILE — SUBTLE BLUR */}
                <div
                  className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-28
          w-full
          md:hidden
        "
                  style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    maskImage:
                      "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.55) 35%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.55) 35%, transparent 100%)",
                  }}
                />

              </div>
            </div>
          </a>


          {/* BRIDGR */}
          <a
  href="/stories"
  className="group mt-16 block overflow-hidden rounded-[32px] bg-[#393F4B]"
>
  <div className="grid min-h-[500px] items-stretch md:grid-cols-2">

    {/* TEXT */}
    <div className="relative z-20 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
      <p className="text-sm uppercase text-white/50">
        03 · Visual Story
      </p>

      <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
        BridgR
      </h3>

      <p className="mt-5 max-w-md text-white/70">
        A short product advertisement created to communicate
        a smarter way to manage private libraries.
      </p>

    
 <div className="mt-8 flex flex-wrap gap-3">
  {/* VIEW DEMO */}
  <a
    href="/stories"
    target="_self"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-black/85"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
    </svg>

    View Demo
  </a>
</div>
    </div>

    {/* IMAGE */}
    <div className="relative min-h-[300px] overflow-hidden md:min-h-[500px]">

      <Image
        src="/bridgr.png"
        alt="BridgR visual story"
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.03]
        "
      />

      {/* DESKTOP — SMOOTH LEFT BLEND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          hidden
          w-72
          md:block
        "
        style={{
          background: `
            linear-gradient(
              to right,
              #393F4B 0%,
              rgba(57,63,75,0.98) 8%,
              rgba(57,63,75,0.92) 18%,
              rgba(57,63,75,0.74) 30%,
              rgba(57,63,75,0.50) 43%,
              rgba(57,63,75,0.24) 60%,
              rgba(57,63,75,0.07) 78%,
              transparent 100%
            )
          `,
        }}
      />

      {/* DESKTOP — SUBTLE IMAGE BLUR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          hidden
          w-36
          md:block
        "
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage:
            "linear-gradient(to right, black 0%, rgba(0,0,0,0.55) 35%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, rgba(0,0,0,0.55) 35%, transparent 100%)",
        }}
      />

      {/* MOBILE — SMOOTH TOP BLEND */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-10
          h-44
          w-full
          md:hidden
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              #393F4B 0%,
              rgba(57,63,75,0.98) 8%,
              rgba(57,63,75,0.92) 18%,
              rgba(57,63,75,0.74) 30%,
              rgba(57,63,75,0.50) 45%,
              rgba(57,63,75,0.24) 63%,
              rgba(57,63,75,0.07) 80%,
              transparent 100%
            )
          `,
        }}
      />

      {/* MOBILE — SUBTLE IMAGE BLUR */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-28
          w-full
          md:hidden
        "
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.55) 35%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.55) 35%, transparent 100%)",
        }}
      />

    </div>
  </div>
</a>

        </div>
      </section>


      {/* =========================
          PHILOSOPHY
      ========================== */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:px-10 lg:px-16 lg:py-40">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/40">
            A little philosophy
          </p>

          <h2 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[88px]">
            I've always been curious
            <br />
            about how things
            <br />
            <span className="text-white/30">
              come together.
            </span>
          </h2>

          <a
            href="/about"
            className="mt-10 inline-block text-sm font-medium text-white/60 transition hover:text-white"
          >
            Get to know me →
          </a>

        </div>
      </section>


      {/* =========================
          CONTACT
      ========================== */}


      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-16 md:grid-cols-2">

            <div >
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-black/40">
                Let's talk
              </p>

              <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">
                Have something
                <br />
                worth exploring?
              </h2>

              <p className="mt-6 max-w-md leading-relaxed text-black/50">
                Got an idea, project, or something exciting in mind? Let’s connect.

              </p>
              <div className="flex items-center gap-4">
   
    

    {/* Social Icons */}
    <div className="flex items-center gap-2 mt-10">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/mayankdadhich._?stkn=a2p4b2c1ZWhwMzlo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray/500 text-gray/500 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white"
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
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray/500 text-gray/500 transition-all duration-300 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
      >
        <FaLinkedinIn
          size={17}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </a>
    </div>
  </div>
            </div>
            
            {/* FORM */}

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-black/40"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Mayank"
                  required
                  className="mt-3 w-full border-b border-black/15 bg-transparent pb-3 text-lg outline-none placeholder:text-black/20 focus:border-black"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm text-black/40"
                >
                  Your email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-3 w-full border-b border-black/15 bg-transparent pb-3 text-lg outline-none placeholder:text-black/20 focus:border-black"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm text-black/40"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="mt-3 w-full border-b border-black/15 bg-transparent pb-3 text-lg outline-none placeholder:text-black/20 focus:border-black"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm text-black/40"
                >
                  What's on your mind?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me a little about it..."
                  required
                  className="mt-3 w-full resize-none border-b border-black/15 bg-transparent pb-3 text-lg outline-none placeholder:text-black/20 focus:border-black"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="rounded-full bg-[#111111] px-7 cursor-pointer py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send message ↗"}
              </button>

            </form>

          </div>
        </div>
      </section>



      {/* =========================
          FOOTER
      ========================== */}
       <footer className="px-6 pb-28 md:px-10 md:pb-10 lg:px-16 ">
       <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Mayank Dadhich.</p>

            <p>Designed & built by Mayank Dadhich.</p>
          </div>
      </footer>
      {notification && (
        <div className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2 px-6">
          <div className="flex items-center gap-3 whitespace-nowrap rounded-full border border-[#C9E8D3] bg-[#EAF6EE] px-5 py-3.5 text-sm font-medium text-[#246B3A] shadow-lg">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#246B3A] text-xs text-white">
              ✓
            </span>

            {notification}
          </div>
        </div>
      )}
    </main>
  );
}

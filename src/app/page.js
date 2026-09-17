"use client";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { useState } from "react";


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

        setNotification("Message sent successfully!");

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
        text-[10px]
        font-medium
        uppercase
        leading-[1.6]
        tracking-[0.16em]
        text-black/40
        sm:mb-7
        sm:max-w-xl
        sm:text-xs
        sm:tracking-[0.18em]
        md:text-sm
      "
              >
                Product Designer · Creative Developer · Visual Storyteller
              </p>

              {/* Main heading */}
              <h1 className="max-w-4xl text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[52px] md:text-7xl lg:text-[76px] xl:text-[88px]">

                <span
                  className="hero-line"
                  style={{ animationDelay: "120ms" }}
                >
                  I've always been
                </span>

                <br />

                <span
                  className="hero-line"
                  style={{ animationDelay: "220ms" }}
                >
                  curious about how
                </span>

                <br />

                <span
                  className="hero-line"
                  style={{ animationDelay: "320ms" }}
                >
                  things{" "}
                  <span className="text-black/30">
                    come together.
                  </span>
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
            className="group mt-16 block overflow-hidden rounded-[32px] bg-[#E9E7FF]"
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

                <span className="mt-8 inline-block text-sm font-medium">
                  View case study ↗
                </span>
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
            href="/design/focuslist"
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

                <span className="mt-8 inline-block text-sm font-medium">
                  View case study ↗
                </span>
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

      <span className="mt-8 inline-block text-sm font-medium text-white">
        View case study ↗
      </span>
    </div>

    {/* IMAGE */}
    <div className="relative min-h-[300px] overflow-hidden md:min-h-[500px]">

      <Image
        src="/bridgr.jpg"
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

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-black/40">
                Let's talk
              </p>

              <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">
                Have something
                <br />
                worth exploring?
              </h2>

              <p className="mt-6 max-w-md leading-relaxed text-black/50">
                Have an idea, project or collaboration in mind?
                I'd love to hear about it.
              </p>
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
      <footer className="border-t border-black/10 px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mayank.</p>

          <p>Designed & built by Mayank.</p>
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

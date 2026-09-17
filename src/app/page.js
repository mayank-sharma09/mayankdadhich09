import Image from "next/image";
import Navbar from "./components/Navbar";


    export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#111111]">

      {/* =========================
          HERO
      ========================== */}
   <section className="relative overflow-hidden bg-[#F7F7F5]">
  <div className="mx-auto grid min-h-screen max-w-[1600px] md:grid-cols-[1.05fr_0.95fr]">

    {/* VIDEO */}
    <div className="relative order-1 min-h-[430px] md:order-2 md:min-h-screen">
      <video
        src="/product-designer.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
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

        <p className="mb-5 max-w-[340px] text-[10px] font-medium uppercase leading-[1.6] tracking-[0.16em] text-black/40 sm:mb-7 sm:max-w-xl sm:text-xs sm:tracking-[0.18em] md:text-sm">
          Product Designer · Creative Developer · Visual Storyteller
        </p>

        <h1 className="max-w-4xl text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[52px] md:text-7xl lg:text-[76px] xl:text-[88px]">
          I've always been
          <br />
          curious about how
          <br />
          things{" "}
          <span className="text-black/30">come together.</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
          <a
            href="#work"
            className="rounded-full bg-[#111111] px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Explore my work ↓
          </a>

          <a
            href="/about"
            className="rounded-full border border-black/10 bg-white/30 px-5 py-3 text-xs font-medium text-black/60 backdrop-blur-md transition-all duration-300 hover:border-black/20 hover:bg-white/60 hover:text-black sm:px-6 sm:py-3.5 sm:text-sm"
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
      <section className="border-t border-black/10">
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
            <div className="grid min-h-[500px] items-end md:grid-cols-2">

              <div className="p-8 sm:p-12 lg:p-16">
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

              {/* PROJECT VISUAL PLACEHOLDER */}
              <div className="flex h-full min-h-[300px] items-center justify-center bg-black/5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/20">
                  Project Preview
                </span>
              </div>

            </div>
          </a>


          {/* FOCUSLIST */}
          <a
            href="/design/focuslist"
            className="group mt-6 block overflow-hidden rounded-[32px] bg-[#EDEDE9]"
          >
            <div className="grid min-h-[420px] items-center md:grid-cols-2">

              <div className="order-2 p-8 sm:p-12 md:order-1 lg:p-16">
                <p className="text-sm text-black/40">
                  02 · FRONTEND
                </p>

                <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                  FocusList
                </h3>

                <p className="mt-5 max-w-md text-black/60">
                  A focused task management experience built
                  for planning, prioritizing and getting things done.
                </p>

                <span className="mt-8 inline-block text-sm font-medium">
                  View project ↗
                </span>
              </div>

              {/* PROJECT VISUAL PLACEHOLDER */}
              <div className="order-1 flex h-full min-h-[280px] items-center justify-center bg-black/5 md:order-2">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/20">
                  Project Preview
                </span>
              </div>

            </div>
          </a>


          {/* BRIDGR */}
          <a
            href="/stories"
            className="group mt-6 block overflow-hidden rounded-[32px] bg-[#111111] text-white"
          >
            <div className="grid min-h-[420px] items-center md:grid-cols-2">

              {/* VISUAL PLACEHOLDER */}
              <div className="flex h-full min-h-[280px] items-center justify-center bg-white/5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/20">
                  Video Preview
                </span>
              </div>

              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-sm text-white/40">
                  03 · VISUAL STORY
                </p>

                <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                  Bridgr
                </h3>

                <p className="mt-5 max-w-md text-white/50">
                  A short product advertisement created to
                  communicate a smarter way to manage private libraries.
                </p>

                <span className="mt-8 inline-block text-sm font-medium text-white/70">
                  View story ↗
                </span>
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
            <form className="space-y-8">

              <div>
                <label className="text-sm text-black/40">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="Mayank"
                  className="mt-3 w-full border-b border-black/15 bg-transparent pb-3 text-lg outline-none placeholder:text-black/20 focus:border-black"
                />
              </div>

              <div>
                <label className="text-sm text-black/40">
                  Your email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full border-b border-black/15 bg-transparent pb-3 text-lg outline-none placeholder:text-black/20 focus:border-black"
                />
              </div>

              <div>
                <label className="text-sm text-black/40">
                  What's on your mind?
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell me a little about it..."
                  className="mt-3 w-full resize-none border-b border-black/15 bg-transparent pb-3 text-lg outline-none placeholder:text-black/20 focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#111111] px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Send message ↗
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

    </main>
  );
}

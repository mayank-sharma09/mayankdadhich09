"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import ScrollProgress from "../components/ScrollProgress";
import Skills from "../components/Skills";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <ScrollProgress />

      <main className="min-h-screen bg-[#F7F7F5] text-[#111111]" >
        {/* =========================
            HERO 
        ========================== */}
    <section
  data-theme="light"
  data-label="WELCOME"
  className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-24 pt-16 sm:px-10 md:pt-40 lg:px-16"
>
  <div className="relative z-10">
<div className="mb-10 text-center md:hidden">
  <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
    About Me
  </p>
</div>
    {/* PHOTO */}
    <div className="about-photo relative mx-auto mb-14 flex justify-center md:mb-16">

      {/* subtle ring */}
      <div className="about-ring absolute inset-0 m-auto h-[230px] w-[230px] rounded-full border border-black/10 sm:h-[270px] sm:w-[270px] md:h-[310px] md:w-[310px]" />

      {/* photo */}
      <div className="relative h-[210px] w-[210px] overflow-hidden rounded-full bg-[#E5E5E3] sm:h-[250px] sm:w-[250px] md:h-[290px] md:w-[290px]">
        <img
          src="/profilepic.jpg"
          alt="Mayank Sharma"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* HEADING */}
    <div className="about-heading mx-auto max-w-5xl text-center">
      <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[92px]">
        I've always been curious
        <br className="hidden md:block" />
        about how things
        <br className="hidden md:block" />
        <span className="text-black/30">
          come together.
        </span>
      </h1>
    </div>

    {/* DESCRIPTION */}
    <div className="about-description mx-auto mt-10 max-w-md text-center">
      <p className="text-sm leading-6 text-black/45 md:text-base md:leading-7">
        Design, technology, and storytelling have always been
        different ways for me to explore that curiosity.
      </p>
    </div>

  </div>

  <style>{`
    /* PHOTO */
    .about-photo {
      opacity: 0;
      transform: translateY(40px) scale(0.92);
      filter: blur(10px);
      animation: aboutPhotoIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
    }

    @keyframes aboutPhotoIn {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.92);
        filter: blur(10px);
      }

      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
      }
    }

    /* RING */
    .about-ring {
      opacity: 0;
      transform: scale(0.7);
      animation: ringIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards;
    }

    @keyframes ringIn {
      0% {
        opacity: 0;
        transform: scale(0.7);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* HEADING */
    .about-heading {
      opacity: 0;
      transform: translateY(35px);
      filter: blur(8px);
      animation: aboutTextIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
    }

    /* DESCRIPTION */
    .about-description {
      opacity: 0;
      transform: translateY(25px);
      filter: blur(6px);
      animation: aboutTextIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
    }

    @keyframes aboutTextIn {
      0% {
        opacity: 0;
        transform: translateY(35px);
        filter: blur(8px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
    }

    /* ACCESSIBILITY */
    @media (prefers-reduced-motion: reduce) {
      .about-photo,
      .about-ring,
      .about-heading,
      .about-description {
        opacity: 1;
        transform: none;
        filter: none;
        animation: none;
      }
    }
  `}</style>
</section>

        {/* =========================
            INTRO
        ========================== */}
        <section
          data-theme="light"
          data-label="GETTING TO KNOW ME"
          className="mx-auto max-w-7xl px-6 pb-32 sm:px-10 lg:px-16"
        >
          <div className="grid gap-12 border-t border-black/10 pt-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-black/40">
                A little about me
              </p>
            </div>

            <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-black/70 sm:text-xl">
              <p>
                I'm Mayank Dadhich, a product designer and creative developer
                currently pursuing my Master's in Computer Applications.
              </p>

              <p>
                I enjoy understanding how things work, finding problems
                worth solving, and turning those problems into simple,
                thoughtful digital experiences.
              </p>

              <p>
                My work sits somewhere between{" "}
                <span className="font-medium text-black">
                  design, technology, and storytelling.
                </span>{" "}
                I design interfaces, prototype products, bring ideas to
                life through frontend development, and create visual
                stories when an idea needs a different kind of expression.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            WHAT I DO
        ========================== */}
        <section data-theme="dark"   data-label="DESIGNING" className="bg-[#111111] text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <div className="mb-16">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/40">
                What I do
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Two ways I like to create.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
              {/* PRODUCT DESIGN */}
              <div className="group bg-[#111111] p-8 transition-colors duration-500 hover:bg-white/[0.05] sm:p-10 lg:p-12">
                <div className="mb-16 flex items-start justify-between">
                  <span className="text-sm text-white/40">01</span>

                  <ArrowUpRight
                    size={22}
                    className="text-white/40 transition-transform duration-300 group-hover:-translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Product Design
                  <br />
                  + Frontend
                </h3>

                <p className="mt-6 max-w-md leading-relaxed text-white/50">
                  I design digital products by thinking about the problem
                  first, then turning ideas into intuitive interfaces and
                  functional experiences.
                </p>

                <div className="mt-10 flex flex-wrap gap-2">
                  {[
                    "UI/UX",
                    "Product Design",
                    "Figma",
                    "Prototyping",
                    "React",
                    "Next.js",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* VISUAL STORYTELLING */}
              <div className="group bg-[#111111] p-8 transition-colors duration-500 hover:bg-white/[0.05] sm:p-10 lg:p-12">
                <div className="mb-16 flex items-start justify-between">
                  <span className="text-sm text-white/40">02</span>

                  <ArrowUpRight
                    size={22}
                    className="text-white/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Visual
                  <br />
                  Storytelling
                </h3>

                <p className="mt-6 max-w-md leading-relaxed text-white/50">
                  I create short-form visual experiences, product stories,
                  character concepts and advertising content that turn ideas
                  into something people can see and feel.
                </p>

                <div className="mt-10 flex flex-wrap gap-2">
                  {[
                    "Visual Stories",
                    "Product Ads",
                    "Motion",
                    "Video",
                    "Sound",
                    "Creative Direction",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CURRENTLY
        ========================== */}
        <section
          data-theme="light"
          data-label="BUILDING"
          className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-black/40">
                Currently
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Learning.
                <br />
                Building.
                <br />
                Experimenting.
              </h2>
            </div>

            <div>
              <div className="border-t border-black/10 py-6">
                <p className="text-sm text-black/40">01</p>

                <h3 className="mt-2 text-xl font-medium">
                  Product Design
                </h3>

                <p className="mt-2 text-black/50">
                  Exploring better ways to understand problems and design
                  useful digital products.
                </p>
              </div>

              <div className="border-t border-black/10 py-6">
                <p className="text-sm text-black/40">02</p>

                <h3 className="mt-2 text-xl font-medium">
                  Frontend Development
                </h3>

                <p className="mt-2 text-black/50">
                  Turning designs into responsive and interactive
                  experiences using modern web technologies.
                </p>
              </div>

              <div className="border-y border-black/10 py-6">
                <p className="text-sm text-black/40">03</p>

                <h3 className="mt-2 text-xl font-medium">
                  Visual Storytelling
                </h3>

                <p className="mt-2 text-black/50">
                  Experimenting with short-form videos, product
                  storytelling, motion and creative direction.
                </p>
              </div>
            </div>
          </div>
        </section>
       <Skills/>
        {/* =========================
            EDUCATION
        ========================== */}
        <section
          data-theme="light"
           data-label="LEARNING"
          className="border-t border-black/10"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
            <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-black/40">
                  Education
                </p>
              </div>

              <div>
                <p className="text-sm text-black/40">Currently</p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Master of Computer Applications
                </h2>

                <p className="mt-2 text-black/50">
                  Computer Applications · Jaipur
                </p>

                <div className="my-10 h-px bg-black/10" />

                <p className="text-sm text-black/40">Previously</p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Bachelor of Computer Applications
                </h2>

                <p className="mt-2 text-black/50">
                  Computer Applications
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================== */}
        <section data-theme="dark"  data-label="LET'S CONNECT" className="bg-[#111111] text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/40">
              Let's connect
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Have an idea?
              <br />
              Let's build something.
            </h2>

            <a
              href="mailto:dadhichmayank09@gmail.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
            >
              <Mail size={17} />
              Get in touch
            </a>

            {/* SOCIAL LINKS */}
            <div className="mt-20 flex flex-wrap gap-3">
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

        {/* =========================
            FOOTER
        ========================== */}
        <footer
          data-theme="dark"
            data-label="THANK YOU"
          className="bg-[#111111] px-6 pb-28  sm:px-10 lg:px-16"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Mayank Dadhich.</p>

            <p>Designed & built by Mayank Dadhich.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
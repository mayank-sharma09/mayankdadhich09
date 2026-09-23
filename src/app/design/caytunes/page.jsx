"use client";
import Image from "next/image";
import { useState } from "react";
import BackToTop from "../../components/BackToTop";

const researchMethods = [
  "Online survey",
  "Informal conversations",
  "Competitive analysis",
];

const focusAreas = [
  "UX Research",
  "Information Architecture",
  "User Flows",
  "Wireframing",
  "UI Design",
  "Prototyping",
];

const insights = [
  {
    number: "01",
    title: "Music is personal.",
    text: "People don't just listen to songs. They associate music with moods, memories, people, and moments.",
  },
  {
    number: "02",
    title: "Sharing music is expression.",
    text: "Sending someone a song or lyric can communicate something that words sometimes can't.",
  },
  {
    number: "03",
    title: "Discovery is part of the experience.",
    text: "People don't always know exactly what they want to listen to. Mood and context can influence discovery.",
  },
  {
    number: "04",
    title: "Listening together feels different.",
    text: "Music can become more engaging when friends can experience the same moment together.",
  },
];

const opportunityAreas = [
  {
    number: "01",
    title: "Discover",
    text: "Find music that fits the moment.",
  },
  {
    number: "02",
    title: "Express",
    text: "Share music as a form of communication.",
  },
  {
    number: "03",
    title: "Connect",
    text: "Listen together with friends.",
  },
];


const flows = [
  {
    number: "01",
    title: "Discover & Play",
    flow: "Home → Search → Album → Music Player",
    image: "/userFlows/discoverMusic.png",
  },
  {
    number: "02",
    title: "Find Music",
    flow: "Search → Artist / Song → Album → Player",
    image: "/userFlows/playsong.png",
  },
  {
    number: "03",
    title: "Share Music",
    flow: "Chat → Music Note → Select Lyric → Share",
    image: "/userFlows/shareMusic.png",
  },
  {
    number: "04",
    title: "Listen Together",
    flow: "Chat → Music Room → Invite → Shared Listening",
    image: "/userFlows/musicRoom.png",
  },
];

const designPrinciples = [
  {
    number: "01",
    title: "Music stays the hero.",
    text: "Social features should support the listening experience rather than compete with it.",
  },
  {
    number: "02",
    title: "Keep interactions lightweight.",
    text: "Sharing and connecting should feel natural instead of turning the app into another social network.",
  },
  {
    number: "03",
    title: "Let mood shape the interface.",
    text: "Dream Mode and Rise Mode create different visual moods while keeping the product familiar.",
  },
];

const prototypeScreens = [
  {
    title: "Home",

    image: "/userFlows/homePage.jpg"
  },
  {
    title: "Music Player",

    image: "/userFlows/mobilePlayer.jpg"
  },
  {
    title: "Music Room",

    image: "/userFlows/room.jpg"
  },
  {
    title: "Library",

    image: "/userFlows/library.jpg"
  },
  {
    title: "Profile",

    image: "/userFlows/profile.jpg"
  },
  {
    title: "Messages",

    image: "/userFlows/messages.jpg"
  },
];
const finalUI = [
  {
    title: "Home",

    image: "/finalUI/home.jpg"
  },
  {
    title: "Music Player",

    image: "/finalUI/musicplayer.jpg"
  },
  {
    title: "Music Room",

    image: "/finalUI/musicRoom.jpg"
  },
  {
    title: "Library",

    image: "/finalUI/library.jpg"
  },
  {
    title: "Profile",

    image: "/finalUI/profile.jpg"
  },
  {
    title: "Messages",

    image: "/finalUI/messages.jpg"
  },
];

export default function CayTunesCaseStudy() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState(null);

  return (
    <main
      id="top"
      className="overflow-hidden bg-[#F7F7F5] text-[#111111]"
    >
      <BackToTop />
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="px-4 pb-24 pt-8 sm:px-6 md:px-8 md:pb-32 md:pt-12">
        <div className="mx-auto max-w-[1180px]">

          {/* Top information */}

          <div className="flex items-center justify-between text-xs font-medium">
            <span>CayTunes</span>
            <span>Product Design</span>
          </div>

          {/* Hero copy */}

          <div className="mb-12 mt-24 max-w-[1050px] md:mb-16 md:mt-32">

            <h1 className="text-[48px] font-medium leading-[0.98] tracking-[-0.065em] sm:text-[58px] md:text-[76px] lg:text-[96px]">
              Music feels different
              <br />
              when you experience it together.
            </h1>

            <p className="mt-7 max-w-[600px] text-[17px] leading-[1.55] text-black/50 md:text-[19px]">
              A conceptual social music streaming experience designed
              around discovery, personalization, and shared listening.
            </p>

          </div>

          {/* Video placeholder */}
          <div className="relative aspect-video overflow-hidden rounded-[22px] bg-[#E6E6E8] md:rounded-[30px]">
            <video
              src="/preview.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Hero metadata */}

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/45">
            <span>Self-initiated project</span>
            <span>Mobile</span>
            <span>August, 2026</span>
          </div>

          <div className="mt-16 flex items-center gap-2 text-xs text-black/40">
            <span>Scroll to explore</span>
            <span>↓</span>
          </div>

        </div>
      </section>


      {/* =========================================================
          OVERVIEW
      ========================================================== */}

      <section className="px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="00"
            label="Overview"
            title="A music app built around connection."
          />

          <div className="grid gap-16 md:grid-cols-[1.5fr_0.7fr] md:gap-24">

            <div className="max-w-[700px]">

              <p className="text-[21px] leading-[1.5] tracking-[-0.025em] md:text-[25px]">
                CayTunes is a conceptual music streaming experience
                exploring how music discovery and social interaction
                could live together in one place.
              </p>

              <p className="mt-7 text-[21px] leading-[1.5] tracking-[-0.025em] md:text-[25px]">
                Instead of treating music as something we only listen to,
                CayTunes explores the moments when music becomes something
                we share, express, and experience together.
              </p>

            </div>

            <div className="border-t border-black/10">

              <InfoRow
                label="Role"
                value="Product Designer"
              />

              <InfoRow
                label="Timeline"
                value="2026"
              />

              <InfoRow
                label="Platform"
                value="Mobile"
              />

              <InfoRow
                label="Type"
                value="Self-initiated"
              />

            </div>

          </div>

          <div className="mt-24">

            <span className="text-xs text-black/45">
              My focus
            </span>

            <div className="mt-4 flex flex-wrap gap-2">

              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-4 py-2.5 text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          PROBLEM
      ========================================================== */}

      <section className="bg-[#111111] px-4 py-24 text-white sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="01"
            label="Problem"
            light
            title={
              <>
                Music streaming is great
                <br />
                at playing music.
                <br />
                But what about experiencing
                <br className="hidden md:block" />
                it together?
              </>
            }
          />

          <div className="ml-auto max-w-[730px]">

            <p className="text-[20px] leading-[1.55] text-white/55 md:text-[23px]">
              Most music streaming experiences are designed around an
              individual listener — discover a song, press play, save it,
              and move on.
            </p>

            <p className="mt-7 text-[20px] leading-[1.55] text-white/55 md:text-[23px]">
              But music is often deeply social. We send songs to friends,
              associate lyrics with feelings, build playlists together,
              and want to listen to the same song at the same moment.
            </p>

          </div>

          <div className="my-28 max-w-[850px] md:my-36">

            <span className="text-xs text-white/35">
              I wanted to explore
            </span>

            <h3 className="mt-5 text-[32px] font-medium leading-[1.1] tracking-[-0.04em] md:text-[52px]">
              What could a music streaming experience look like if
              connection was part of the experience, rather than
              an afterthought?
            </h3>

          </div>

          <div className="grid gap-3 md:grid-cols-3">

            {[
              [
                "01",
                "Discover",
                "Finding music that matches your mood and interests.",
              ],
              [
                "02",
                "Express",
                "Using music and lyrics to communicate feelings.",
              ],
              [
                "03",
                "Connect",
                "Listening and experiencing music with friends.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="flex min-h-[300px] flex-col justify-between rounded-[24px] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
              >

                <span className="text-white/35">
                  {number}
                </span>

                <div>
                  <h3 className="text-[28px] tracking-[-0.04em]">
                    {title}
                  </h3>

                  <p className="mt-3 leading-[1.5] text-white/40">
                    {text}
                  </p>
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          RESEARCH
      ========================================================== */}

      <section className="px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          ```
          <SectionHeading
            number="02"
            label="Research"
            title="Understanding how people share and experience music."
          />

          <div className="grid border-y border-black/10 md:grid-cols-3">

            {[
              "Informal conversations",
              "Music sharing habits",
              "Listening together",
            ].map((method, index) => (
              <div
                key={method}
                className={`min-h-[180px] p-7 ${index !== 2
                    ? "border-b border-black/10 md:border-b-0 md:border-r"
                    : ""
                  }`}
              >
                <span className="text-xs text-black/35">
                  0{index + 1}
                </span>

                <h3 className="mt-16 text-[21px] tracking-[-0.03em]">
                  {method}
                </h3>
              </div>
            ))}

          </div>

          <div className="mt-14 rounded-[28px] bg-[#E6E6E8] px-6 py-12 sm:px-10 md:px-16 md:py-16">
            <span className="text-xs tracking-[0.08em] text-black/35">
              WHAT I HEARD
            </span>

            <div className="mt-8 grid gap-10 md:grid-cols-3">

              <div>
                <p className="text-3xl font-medium tracking-[-0.04em]">
                  Switching apps
                </p>
                <p className="mt-3 text-sm leading-6 text-black/50">
                  The people I spoke with found it inconvenient to move between
                  different apps when sharing music with friends.
                </p>
              </div>

              <div>
                <p className="text-3xl font-medium tracking-[-0.04em]">
                  Lyric Notes
                </p>
                <p className="mt-3 text-sm leading-6 text-black/50">
                  The idea of sharing a specific lyric stood out as a useful way
                  to share a feeling or moment from a song.
                </p>
              </div>

              <div>
                <p className="text-3xl font-medium tracking-[-0.04em]">
                  Listening together
                </p>
                <p className="mt-3 text-sm leading-6 text-black/50">
                  Having music, conversations, and shared listening in one place
                  was seen as a more convenient experience.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[180px_1fr]">
            <span className="text-xs text-black/40">
              Key takeaway
            </span>

            <p className="max-w-[650px] text-sm leading-[1.6] text-black/50">
              These conversations helped shape the core direction of CayTunes:
              reducing the need to switch between apps while making it easier to
              share songs, specific lyrics, and listening experiences with friends.
            </p>
          </div>
          ```

        </div>
      </section>



      {/* =========================================================
          INSIGHTS
      ========================================================== */}

      <section className="bg-[#EEEEEF] px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="03"
            label="Insights"
            title="What I found."
          />

          <div className="border-t border-black/10">

            {insights.map((item) => (
              <article
                key={item.number}
                className="grid grid-cols-[45px_1fr] gap-4 border-b border-black/10 py-10 md:grid-cols-[80px_1fr]"
              >

                <span className="text-xs text-black/35">
                  {item.number}
                </span>

                <div>

                  <h3 className="text-[25px] tracking-[-0.04em] md:text-[30px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[620px] leading-[1.55] text-black/50">
                    {item.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          OPPORTUNITY
      ========================================================== */}

      <section className="px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="04"
            label="Opportunity"
            title="From observations to opportunity."
          />

          <div className="max-w-[950px]">

            <span className="text-xs text-black/40">
              How might we...
            </span>

            <h2 className="mt-6 text-[38px] font-medium leading-[1.05] tracking-[-0.055em] md:text-[64px]">
              Make music discovery more personal while giving
              people meaningful ways to experience music together?
            </h2>

          </div>

          <div className="mt-28 grid border-t border-black/10 md:grid-cols-3">

            {opportunityAreas.map((item, index) => (
              <div
                key={item.title}
                className="border-b border-black/10 p-7 md:border-b-0 md:border-r md:last:border-r-0"
              >

                <span className="text-xs text-black/35">
                  {item.number}
                </span>

                <h3 className="mt-16 text-[30px] tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-black/50">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* USER PERSONA */}
      <section className="bg-[#F7F7F5] px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          {/* SECTION HEADING */}
          <div className="mb-16 grid gap-8 md:grid-cols-[0.4fr_1.6fr] md:items-end">
            <div>
              <span className="text-xs font-medium tracking-[0.12em] text-black/35">
                03
              </span>
              <span className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                User Persona
              </span>
            </div>

            <div>
              <h2 className="max-w-3xl text-[34px] font-medium leading-[1.05] tracking-[-0.04em] sm:text-[44px] md:text-[56px]">
                Meet Aarav, a student who experiences music socially.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-[1.7] text-black/45 sm:text-base">
                A simple persona representing the kind of college student
                CayTunes is designed around.
              </p>
            </div>
          </div>

          {/* PERSONA CARD */}
          <div className="overflow-hidden rounded-[30px] border border-black/10 bg-white">

            {/* TOP */}
            <div className="grid md:grid-cols-[0.65fr_1.35fr]">

              {/* PROFILE */}
              <div className="border-b border-black/10 p-7 sm:p-10 md:border-b-0 md:border-r md:p-12">

                {/* PHOTO PLACEHOLDER */}
                <div className="mx-auto flex aspect-square max-w-[260px] items-center justify-center overflow-hidden rounded-[28px] bg-[#E7E7E5]">
                  <img src= "/userFlows/user.jpg" alt="Aarav Mehta" width={260} height={260} className="h-full w-full object-cover" />  
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">
                    Aarav Mehta
                  </h3>

                  <p className="mt-2 text-sm text-black/45">
                    20 · B.Tech Computer Science · 2nd Year
                  </p>

                  <p className="mt-1 text-sm text-black/45">
                    Jaipur, India
                  </p>
                </div>

                {/* QUICK INFO */}
                <div className="mt-8 border-t border-black/10 pt-6">
                  <div className="grid grid-cols-2 gap-y-5">

                    <div>
                      <span className="text-[12px] uppercase tracking-[0.12em] text-black/30">
                        Device
                      </span>
                      <p className="mt-1 text-sm">Smartphone</p>
                    </div>

                    <div>
                      <span className="text-[12px] uppercase tracking-[0.12em] text-black/30">
                        Music
                      </span>
                      <p className="mt-1 text-sm">Daily</p>
                    </div>

                    <div>
                      <span className="text-[12px] uppercase tracking-[0.12em] text-black/30">
                        Sharing
                      </span>
                      <p className="mt-1 text-sm">Frequent</p>
                    </div>

                    <div>
                      <span className="text-[12px] uppercase tracking-[0.12em] text-black/30">
                        Tech Comfort
                      </span>
                      <p className="mt-1 text-sm">High</p>
                    </div>

                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="p-7 sm:p-10 md:p-12">

                {/* BIO */}
                <div>
                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/30">
                    About
                  </span>

                  <p className="mt-4 max-w-2xl text-base leading-[1.7] text-black/65">
                    Aarav is a social and tech-savvy college student who
                    listens to music throughout the day — while travelling
                    to college, studying, coding, and hanging out with friends.
                    He frequently discovers songs through social media and
                    shares music with his friends through messaging apps.
                  </p>
                </div>

                {/* GOALS + FRUSTRATIONS */}
                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <div>
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/30">
                      Goals
                    </span>

                    <ul className="mt-5 space-y-3 text-sm leading-[1.6] text-black/60">
                      <li>Discover new music easily</li>
                      <li>Share songs with friends quickly</li>
                      <li>Listen to music together</li>
                      <li>Save songs and create playlists</li>
                      <li>Share specific lyrics or moments</li>
                    </ul>
                  </div>

                  <div>
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/30">
                      Frustrations
                    </span>

                    <ul className="mt-5 space-y-3 text-sm leading-[1.6] text-black/60">
                      <li>Switching between music and chat apps</li>
                      <li>Difficulty sharing a specific lyric</li>
                      <li>Music sharing feels disconnected</li>
                      <li>Conversations get separated from music</li>
                    </ul>
                  </div>

                </div>

                {/* BEHAVIOURS */}
                <div className="mt-12 border-t border-black/10 pt-10">

                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/30">
                    Behaviours
                  </span>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Listens daily",
                      "Shares songs",
                      "Discovers through social media",
                      "Uses messaging apps",
                      "Creates playlists",
                      "Listens while studying",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 px-4 py-2 text-xs text-black/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>

            {/* QUOTE */}
           

          </div>

          {/* PERSONA TAKEAWAY */}
          <div className="mt-10 grid gap-6 md:grid-cols-[180px_1fr]">
            <span className="text-[12px] text-black/35">
              Key takeaway
            </span>

            <p className="max-w-2xl text-sm leading-[1.7] text-black/55 sm:text-base">
              Aarav doesn't just want to listen to music. He wants an easier
              way to discover, share, and experience music with the people
              around him.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          INFORMATION ARCHITECTURE
      ========================================================== */}

      <section className="bg-[#111111] px-4 py-24 text-white sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="05"
            label="Information Architecture"
            title="Structuring the experience."
            light
          />

          {/* IA IMAGE PLACEHOLDER */}
          <div className="mt-16 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02]">
            <div className=" overflow-hidden rounded-[24px] border border-white/10 ">
              <img
                src="/IA.jpg"
                alt="CayTunes information architecture"
                width={1000}
                height={400}
                className=" h-full w-full"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-10 max-w-[600px] text-sm leading-[1.6] text-white/40">
            <strong className="text-white/70">
              Conceptual architecture
            </strong>

            <p className="mt-2">
              The architecture above represents the broader CayTunes
              product concept. The current prototype focuses on the
              core listening experience.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          USER FLOWS
      ========================================================== */}

      <section className="px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px] cursor-pointer">

          <SectionHeading
            number="06"
            label="User Flows"
            title="Designing the paths between moments."
          />

          <div className="border-t border-black/10 ">

            {flows.map((flow) => (
              <button
                key={flow.number}
                type="button"
                onClick={() => setSelectedFlow(flow)}
                className="
            group
            grid
            w-full
            grid-cols-[45px_1fr_30px]
            items-center
            border-b
            border-black/10
            py-8
            text-left
            transition-colors
            duration-300
            hover:bg-black/[0.02]
            md:grid-cols-[80px_1fr_50px]
          "
              >

                {/* NUMBER */}
                <span className="text-xs text-black/35">
                  {flow.number}
                </span>

                {/* CONTENT */}
                <div>

                  <h3 className="text-xl tracking-[-0.03em] md:text-[25px] cursor-pointer">
                    {flow.title}
                  </h3>

                  <p className="mt-1 text-sm text-black/45">
                    {flow.flow}
                  </p>

                </div>

                {/* ARROW */}
                <span
                  className="
              text-xl
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                >
                  →
                </span>

              </button>
            ))}

          </div>

        </div>

        {/* ================= USER FLOW MODAL ================= */}

        {selectedFlow && (
          <div
            className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/60
        px-4
        py-6
        backdrop-blur-md
      "
            onClick={() => setSelectedFlow(null)}
          >

            {/* MODAL */}
            <div
              className="
          relative
          max-h-[90vh]
          w-full
          max-w-[1100px]
          overflow-auto
          rounded-[28px]
          bg-[#F7F7F5]
          p-5
          shadow-2xl
          sm:p-8
          md:p-10
        "
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setSelectedFlow(null)}
                className="
            absolute
            right-5
            top-5
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black/[0.05]
            text-xl
            text-black/50
            transition
            hover:bg-black
            hover:text-white
          "
                aria-label="Close"
              >
                ×
              </button>

              {/* HEADER */}
              <div className="pr-14">

                <p className="text-xs font-medium uppercase tracking-[0.15em] text-black/35">
                  User Flow
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  {selectedFlow.title}
                </h2>

                <p className="mt-2 text-sm text-black/45">
                  {selectedFlow.flow}
                </p>

              </div>

              {/* IMAGE PLACEHOLDER */}
              <div
                className="
    mt-8
    overflow-hidden
    rounded-[20px]
    border
    border-black/10
    bg-white
  "
              >
                <Image
                  src={selectedFlow.image}
                  alt={`${selectedFlow.title} user flow`}
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>

            </div>
          </div>
        )}

      </section>


      {/* =========================================================
          WIREFRAMES
      ========================================================== */}

      <section className="bg-[#EEEEEF] px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="07"
            label="Wireframes"
            title="Starting with structure, not decoration."
          />

          <p className="mb-16 max-w-[650px] text-[17px] leading-[1.6] text-black/50">
            Before defining the visual language, I focused on hierarchy,
            navigation, content structure, and the core listening flow.
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {prototypeScreens.map((screen) => (
              <div
                key={screen.title}
                className="group overflow-hidden rounded-[20px] bg-[#DCDCDD] md:rounded-[24px]"
              >
                {/* IMAGE */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* TEXT */}
                <div className="px-4 py-4">
                  <h3 className="text-sm font-medium text-black">
                    {screen.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-black/40">
                    {screen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          VISUAL DIRECTION
      ========================================================== */}




      {/* =========================================================
          DESIGN PRINCIPLES
      ========================================================== */}

      <section className="bg-[#111111] px-4 py-24 text-white sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="08"
            label="Design Principles"
            title="Keeping the experience focused."
            light
          />

          <div className="grid gap-3 md:grid-cols-3">

            {designPrinciples.map((item) => (
              <article
                key={item.number}
                className="min-h-[330px] rounded-[24px] border border-white/10 p-7"
              >

                <span className="text-xs text-white/35">
                  {item.number}
                </span>

                <h3 className="mt-20 text-[28px] tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-[1.5] text-white/40">
                  {item.text}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          KEY EXPERIENCES
      ========================================================== */}

      <section className="px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="09"
            label="Key Experiences"
            title="Designing moments that make CayTunes feel different."
          />

          {/* Music Notes */}

          <FeatureSection
            number="01"
            title="Lyric Notes"
            description="A way to share a specific lyric or moment from a song as a more expressive form of communication."
            image="/userFlows/Sharing.jpg"

          />

          {/* Music Rooms */}

          <FeatureSection
            number="02"
            title="Music Room"
            description="A shared listening space where friends can listen, react, add songs, and shape the queue together."
            image="/userFlows/musicRoom.jpg"
            reverse
          />

        </div>
      </section>

      {/* Design System  */}

      {/* DESIGN SYSTEM */}
      <section className="bg-[#111111] px-4 py-24 text-white sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="10"
            label="Design System"
            title="Creating a visual language for CayTunes."
            light
          />

          {/* INTRO */}
          <div className="mt-12 max-w-[620px]">
            <p className="text-base leading-[1.7] text-white/45 md:text-lg">
              The visual system was designed to keep CayTunes expressive,
              playful, and consistent across the listening experience.
              I focused on a small set of colors, typography, and reusable
              interface patterns rather than designing every screen from scratch.
            </p>
          </div>


          {/* COLORS */}
          <div className="mt-20">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
              01 · Colors
            </p>

            <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              A calm foundation with expressive accents.
            </h3>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {/* Primary */}
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04]">
                <div className="h-36 bg-[#F6F6F6]" />
                <div className="p-5">
                  <p className="text-sm font-medium text-white">
                    Background
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    #F6F6F6
                  </p>
                </div>
              </div>

              {/* Surface */}
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04]">
                <div className="h-36 bg-white" />
                <div className="p-5">
                  <p className="text-sm font-medium text-white">
                    Surface
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    #FFFFFF
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04]">
                <div className="h-36 bg-[#111111]" />
                <div className="p-5">
                  <p className="text-sm font-medium text-white">
                    Primary Text
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    #111111
                  </p>
                </div>
              </div>

              {/* Accent */}
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04]">
                <div className="h-36 bg-[#7567FF]" />
                <div className="p-5">
                  <p className="text-sm font-medium text-white">
                    Accent
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    #7567FF
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* TYPOGRAPHY */}
          <div className="mt-24 border-t border-white/10 pt-20">

            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
              02 · Typography
            </p>

            <div className="mt-10 grid gap-12 md:grid-cols-[1fr_0.7fr]">

              <div>
                <p className="text-6xl font-semibold tracking-[-0.06em] sm:text-7xl md:text-8xl">
                  CayTunes
                </p>

                <p className="mt-6 text-2xl tracking-[-0.03em] text-white/60 md:text-3xl">
                  Music feels different when you experience it together.
                </p>
              </div>

              <div className="self-end text-sm text-white/40">
                <div className="border-t border-white/10 py-4">
                  <div className="flex justify-between">
                    <span>Display</span>
                    <span>Semibold</span>
                  </div>
                </div>

                <div className="border-t border-white/10 py-4">
                  <div className="flex justify-between">
                    <span>Body</span>
                    <span>Regular</span>
                  </div>
                </div>

                <div className="border-t border-white/10 py-4">
                  <div className="flex justify-between">
                    <span>Radius</span>
                    <span>16–28px</span>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* COMPONENTS */}
          <div className="mt-24 border-t border-white/10 pt-20">

            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
              03 · Components
            </p>

            <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
              Reusable patterns for the core experience.
            </h3>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* CayTab */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm text-white/35">Navigation</p>

                <div className="mt-8 overflow-hidden rounded-[22px] bg-[#F6F6F6]">
                  <img
                    src="/userFlows/cayTab.jpg"
                    alt="CayTab navigation"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <h4 className="mt-5 text-lg font-medium">
                  CayTab
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-white/35">
                  A fixed navigation pattern designed to keep the main listening
                  experience accessible.
                </p>
              </div>


              {/* Button */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm text-white/35">Actions</p>

                <div className="mt-8 overflow-hidden rounded-[22px] bg-[#F6F6F6]">
                  <img
                    src="/userFlows/primaryActions.jpg"
                    alt="Primary action"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <h4 className="mt-5 text-lg font-medium">
                  Primary Action
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-white/35">
                  Clear, high-contrast actions for important moments in the flow.
                </p>
              </div>


              {/* Music Note */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm text-white/35">Content</p>

                <div className="mt-8 overflow-hidden rounded-[22px] bg-[#F6F6F6]">
                  <img
                    src="/userFlows/lyricComp.jpg"
                    alt="CayTab navigation"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <h4 className="mt-5 text-lg font-medium">
                  Lyric Note
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-white/35">
                  A product-specific component for sharing meaningful moments from a song.
                </p>
              </div>

            </div>
          </div>




        </div>
      </section>



      {/* end design system section here */}

      {/* =========================================================
          FINAL UI
      ========================================================== */}

      <section className="bg-[#F7F7F5] px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="11"
            label="Final UI"
            title="From structure to experience."
          />

          <p className="mb-16 max-w-[650px] text-[17px] leading-[1.6] text-black/50">
            The final interface brings together discovery, playback,
            personalization, and mood-driven visual design.
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {finalUI.map((screen) => (
              <div
                key={screen.title}
                className="group overflow-hidden rounded-[20px] bg-[#DCDCDD] md:rounded-[24px]"
              >
                {/* IMAGE */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* TEXT */}
                <div className="px-4 py-4">
                  <h3 className="text-sm font-medium text-black">
                    {screen.title}
                  </h3>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          PROTOTYPE
      ========================================================== */}

      <section className="bg-[#111111] px-4 py-20 text-white sm:px-6 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="12"
            label="Prototype"
            title="Putting the experience together."
            light
          />

          {/* PROTOTYPE VIDEO */}
          <div className="mt-12 overflow-hidden rounded-[28px] bg-[#1D1D1D]">
            <video
              src="/finalUI/finalVideo.mp4"
              controls
              playsInline
              preload="metadata"
              className="aspect-video h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>



        </div>
      </section>


      {/* =========================================================
          LEARNINGS
      ========================================================== */}

      <section className="px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="13"
            label="Learnings"
            title="What this project taught me."
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">

            <LearningCard
              number="01"
              title="Designing for connection is different."
              text="Social features need to add value without taking attention away from the primary product experience."
            />

            <LearningCard
              number="02"
              title="Visual mood can influence behavior."
              text="The interface can communicate how an experience should feel, not just what it does."
            />

            <LearningCard
              number="03"
              title="Concepts need clear boundaries."
              text="Defining what belongs in the prototype and what remains a future concept keeps the product story clear."
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          NEXT STEPS
      ========================================================== */}

      <section className="bg-[#EEEEEF] px-4 py-24 sm:px-6 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">

          <SectionHeading
            number="14"
            label="Next Steps"
            title="Where CayTunes could go next."
          />

          <div className="grid gap-3 md:grid-cols-3">

            <NextStep
              number="01"
              title="Validate the social experience"
              text="Test Music Notes and Music Rooms with real users."
            />

            <NextStep
              number="02"
              title="Explore richer personalization"
              text="Improve recommendations based on mood, context, and listening behavior."
            />

            <NextStep
              number="03"
              title="Expand the listening ecosystem"
              text="Explore collaborative playlists, richer room interactions, and deeper social discovery."
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          END
      ========================================================== */}

      <section className="flex min-h-[70vh] items-center bg-[#111111] px-4 py-24 text-white sm:px-6 md:px-8">

        <div className="mx-auto w-full max-w-[1180px]">

          <span className="text-sm text-white/35">
            CayTunes
          </span>

          <h2 className="mt-8 text-[58px] font-medium leading-[0.92] tracking-[-0.07em] sm:text-[76px] md:text-[110px]">
            Music is better
            <br />
            when it's shared.
          </h2>

          <a
            href="#top"
            className="mt-16 inline-block text-sm text-white transition-opacity hover:opacity-50"
          >
            Back to top ↑
          </a>

        </div>

      </section>

    </main>
  );
}


/* =============================================================
   REUSABLE COMPONENTS
============================================================= */

function SectionHeading({
  number,
  label,
  title,
  light = false,

}) {
  return (
    <div className={`mb-16 md:mb-20 ${light ? "text-white" : ""}`}>

      <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.08em]">

        <span className={light ? "text-white/35" : "text-black/35"}>
          {number}
        </span>

        <span className={light ? "text-white/70" : "text-black/70"}>
          {label}
        </span>

      </div>

      <h2 className="max-w-[900px] text-[42px] font-medium leading-[1] tracking-[-0.055em] sm:text-[52px] md:text-[72px]">
        {title}
      </h2>

    </div>
  );
}


function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-black/10 py-4 text-sm">

      <span className="text-black/40">
        {label}
      </span>

      <strong className="font-medium">
        {value}
      </strong>

    </div>
  );
}


function FeatureSection({
  number,
  title,
  description,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`mb-32 grid items-center gap-12 md:mb-40 md:grid-cols-[1.4fr_0.7fr] md:gap-20 ${reverse ? "md:grid-cols-[0.7fr_1.4fr]" : ""
        }`}
    >

      <div className="overflow-hidden rounded-[28px] bg-[#EEEEEC] shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
        <div className="">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className={reverse ? "md:order-1" : ""}>

        <span className="text-xs text-black/35">
          {number}
        </span>

        <h3 className="mt-6 text-[42px] tracking-[-0.05em] md:text-[52px]">
          {title}
        </h3>

        <p className="mt-5 text-[17px] leading-[1.6] text-black/50">
          {description}
        </p>

      </div>

    </div>
  );
}


function LearningCard({
  number,
  title,
  text,
}) {
  return (
    <article className="border-t border-black/10 pt-6">

      <span className="text-xs text-black/35">
        {number}
      </span>

      <h3 className="mt-16 text-[27px] tracking-[-0.04em]">
        {title}
      </h3>

      <p className="mt-4 leading-[1.55] text-black/50">
        {text}
      </p>

    </article>
  );
}


function NextStep({
  number,
  title,
  text,
}) {
  return (
    <article className="min-h-[300px] rounded-[24px] bg-white p-7">

      <span className="text-xs text-black/35">
        {number}
      </span>

      <h3 className="mt-20 text-[26px] tracking-[-0.04em]">
        {title}
      </h3>

      <p className="mt-4 leading-[1.5] text-black/50">
        {text}
      </p>

    </article>
  );
}
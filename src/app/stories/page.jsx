"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./stories.css";

export default function StoriesPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStory, setActiveStory] = useState(0);
  const storyRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = height > 0 ? scrollTop / height : 0;
      setScrollProgress(progress);

      storyRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (
          rect.top < window.innerHeight * 0.55 &&
          rect.bottom > window.innerHeight * 0.45
        ) {
          setActiveStory(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stories = [
    {
      number: "01",
      title: "BRIDGR",
      description:
        "A small problem. A bigger transformation. A story about taking something familiar and moving it into a new world.",
      image: "/stories/bridgr.jpg",
    },
    {
      number: "02",
      title: "THE LAST POINT",
      description:
        "Two people. One moment. A story about distance, connection, and everything left unsaid.",
      image: "/stories/last-point.jpg",
    },
    {
      number: "03",
      title: "UNTITLED",
      description:
        "Every story begins somewhere. This one is still being written.",
      image: "/stories/story-03.jpg",
    },
  ];

  return (
    <main className="stories-page">
      {/* =====================================================
          PROGRESS
      ===================================================== */}

      <div className="story-progress">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              height: `${scrollProgress * 100}%`,
            }}
          />
        </div>

        <div className="progress-time">
          {String(activeStory + 1).padStart(2, "0")}
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="stories-nav">
        <Link href="/" className="nav-logo">
          MAYANK
        </Link>

        <div className="nav-center">
          STORIES
        </div>

        <Link href="/" className="nav-back">
          BACK
        </Link>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        {/* stars */}
        <div className="stars stars-one" />
        <div className="stars stars-two" />
        <div className="stars stars-three" />

        {/* ambient glow */}
        <div className="hero-glow" />

        {/* black hole */}
        <div className="black-hole">
          <div className="accretion-ring ring-one" />
          <div className="accretion-ring ring-two" />
          <div className="accretion-ring ring-three" />

          <div className="event-horizon" />

          <div className="black-hole-core" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            VISUAL STORYTELLING
          </p>

          <h1>
            STORIES
          </h1>

          <p className="hero-line">
            Ideas have gravity.
          </p>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO ENTER</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro">

        <div className="intro-number">
          00
        </div>

        <div className="intro-content">

          <p className="section-label">
            THE QUESTION
          </p>

          <h2>
            Some stories
            <br />
            take you somewhere.
          </h2>

          <p className="intro-description">
            Others change the way you see where you are.
          </p>

        </div>

      </section>

      {/* =====================================================
          TIME SECTION
      ===================================================== */}

      <section className="time-section">

        <div className="time-orbit">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="orbit-center">
            <span>TIME</span>
          </div>
        </div>

        <div className="time-copy">
          <p className="section-label">
            01 — TIME
          </p>

          <h2>
            Time changes
            <br />
            everything.
          </h2>

          <p>
            A moment lasts seconds.
            <br />
            A good story lasts much longer.
          </p>
        </div>

      </section>

      {/* =====================================================
          STORIES
      ===================================================== */}

      <section className="stories-section">

        <div className="stories-header">

          <div>
            <p className="section-label">
              THE STORIES
            </p>

            <h2>
              Worlds I've created.
            </h2>
          </div>

          <p className="stories-intro">
            Visual stories, product films,
            <br />
            experiments and moments.
          </p>

        </div>

        <div className="story-list">

          {stories.map((story, index) => (
            <article
              key={story.number}
              ref={(el) => {
                storyRefs.current[index + 1] = el;
              }}
              className={`story-card ${
                activeStory === index + 1 ? "active" : ""
              }`}
            >

              <div className="story-meta">

                <span className="story-number">
                  {story.number}
                </span>

                <span className="story-type">
                  VISUAL STORY
                </span>

              </div>

              <div className="story-visual">

                <div className="story-image-wrapper">

                  <img
                    src={story.image}
                    alt={story.title}
                    className="story-image"
                  />

                  <div className="story-image-overlay" />

                  <div className="story-play">
                    <span>PLAY</span>
                    <span>→</span>
                  </div>

                </div>

              </div>

              <div className="story-info">

                <h3>
                  {story.title}
                </h3>

                <p>
                  {story.description}
                </p>

                <button className="enter-story">
                  ENTER THE STORY
                  <span>↗</span>
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================================
          SOUND
      ===================================================== */}

      <section className="sound-section">

        <div className="sound-background">
          <div className="sound-circle circle-one" />
          <div className="sound-circle circle-two" />
          <div className="sound-circle circle-three" />
        </div>

        <div className="sound-content">

          <p className="section-label">
            02 — SOUND
          </p>

          <h2>
            You don't
            <br />
            always notice it.
          </h2>

          <p>
            But you feel it.
          </p>

          <button className="sound-button">
            <span className="sound-icon">
              ▶
            </span>

            PLAY SOUND
          </button>

        </div>

      </section>

      {/* =====================================================
          STORYTELLER
      ===================================================== */}

      <section className="storyteller">

        <div className="storyteller-orbit">
          <div />
          <div />
          <div />
        </div>

        <div className="storyteller-content">

          <p className="section-label">
            THE STORYTELLER
          </p>

          <h2>
            I'm interested in
            <br />
            the space between
            <br />
            an idea and a feeling.
          </h2>

          <p className="storyteller-description">
            I create visual stories, product films
            and experiences that turn ideas into
            something people can experience.
          </p>

        </div>

      </section>

      {/* =====================================================
          ENDING
      ===================================================== */}

      <section className="ending">

        <div className="ending-stars" />

        <div className="ending-dot" />

        <div className="ending-content">

          <p className="ending-small">
            EVERY STORY ENDS.
          </p>

          <h2>
            UNTIL ANOTHER
            <br />
            ONE BEGINS.
          </h2>

          <Link
            href="/"
            className="ending-link"
          >
            BACK TO PORTFOLIO
            <span>→</span>
          </Link>

        </div>

        <div className="ending-name">
          MAYANK SHARMA
        </div>

      </section>


      

    </main>
  );
}
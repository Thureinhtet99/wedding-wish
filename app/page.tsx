"use client";

import Image from "next/image";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import Link from "next/link";

const startPetals = () => {
  // Adjusted physics so petals fall further (higher gravity, longer ticks)
  const defaults = {
    spread: 100,
    ticks: 700, // longer lifetime so particles can travel to bottom
    gravity: 0.6, // stronger gravity to pull petals down
    decay: 0.96,
    startVelocity: 2, // specify the exact accepted shape string literals instead of using `any`
    shapes: ["circle"] as ("circle" | "square")[],
    scalar: 1.1,
    colors: ["#ffb7c5", "#ff9aae", "#ffd1dc", "#fce4ec"],
  };

  function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  setInterval(() => {
    // Stagger origins slightly above the top so they fall through the viewport
    confetti({
      ...defaults,
      particleCount: 2,
      origin: {
        x: Math.random(),
        y: randomRange(-0.2, 0.05), // start a bit higher and allow some bursts from slightly inside the viewport
      },
      drift: randomRange(-0.6, 0.6),
      scalar: randomRange(0.9, 1.6),
    });
  }, 160);
};

export default function Home() {
  useEffect(() => {
    startPetals();
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="relative h-screen w-full">
          <Image
            src="/images/wedding/wedding_9.jpg"
            alt="Wedding couple"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/40 to-black/40" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-white">
          {/* Middle Section - Names */}
          <div className="text-center pb-20 mb-56 md:mb-64 max-w-4xl mx-auto px-4">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-4 text-[#8b7355] drop-shadow-[0_0_40px_white]"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              T Nyein Min Myat
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-[#8b7355] drop-shadow-[0_0_40px_white]">
              &
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#8b7355] drop-shadow-[0_0_40px_white]"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Htet Shoon Lae @
              <br />
              Wai Phyar Moe Swe
            </h1>
          </div>
        </div>
      </div>

      {/* Love birds */}
      <section id="love-birds" className="py-28 md:py-24 px-4 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2
              className="text-6xl md:text-7xl font-serif italic text-[#8b7355] mb-6 drop-shadow-sm"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Love Birds
            </h2>

            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#8b7355] mb-4 font-light">
              are getting married
            </p>
          </div>

          {/* Center Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rotate-6 overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/images/wedding/wedding_3.jpg"
                  alt="Bride and Groom"
                  fill
                  className="object-cover -rotate-6"
                />
              </div>
            </div>
          </div>

          {/* Wedding Date */}
          <p className="text-2xl text-center font-serif text-[#8b7355] mb-2">
            November 23, 2025
          </p>
        </div>
      </section>

      {/* Wedding wish */}
      <section
        id="wedding-wish"
        className="relative min-h-screen w-full overflow-hidden py-16 md:py-24"
      >
        {/* Background Image */}
        <div className="relative h-full min-h-screen w-full">
          <Image
            src="/images/wedding/wedding_8.jpg"
            alt="Wedding background"
            fill
            className="object-cover grayscale"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-6 md:p-8">
          <div className="max-w-5xl w-full mr-auto">
            {/* Envelope and Card Container */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center md:ml-20 lg:ml-32">
              {/* Envelope with Photo */}
              <div className="relative -rotate-6">
                {/* Envelope base */}
                <div className="relative w-72 h-96 md:w-96 md:h-[450px] bg-[#e8dcc8] shadow-2xl rounded-sm">
                  {/* Envelope flap - top triangle */}
                  <div
                    className="absolute top-0 left-0 right-0 h-32 bg-[#d4c4a8]"
                    style={{
                      clipPath: "polygon(0 0, 50% 70%, 100% 0)",
                    }}
                  />

                  {/* Polaroid Photo coming out */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 md:w-96 rotate-3">
                    <div className="bg-white p-3 pb-8 shadow-2xl">
                      <div className="relative w-full h-96">
                        <Image
                          src="/images/wedding/wedding_6.jpg"
                          alt="Wedding couple"
                          className="object-cover"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invitation Card */}
              <div className="relative rotate-3">
                <div className="w-80 md:w-96 h-auto bg-[#f5f0e8] shadow-2xl p-8 md:p-12 border-4 border-[#8b7355]">
                  {/* Date at top */}
                  <div className="text-center mb-8">
                    <p className="text-xs tracking-[0.3em] text-gray-700">
                      A Special Wish for Wedding Day
                    </p>
                    {/* <p className="text-sm tracking-[0.3em] uppercase text-gray-700">
                      23,2025
                    </p> */}
                  </div>

                  {/* Main message in handwriting style */}
                  <div className="space-y-6 mb-8">
                    <p
                      className="text-2xl text-center leading-relaxed text-gray-800"
                      style={{ fontFamily: "'Great Vibes', cursive" }}
                    >
                      Wishing you both a lifetime filled with love, laughter,
                      and endless happiness. May your hearts always beat as one,
                      and your journey together be as beautiful as this special
                      day
                    </p>
                    {/* <p
                      className="text-4xl md:text-5xl text-center leading-relaxed text-gray-800"
                      style={{ fontFamily: "'Great Vibes', cursive" }}
                    >
                      in the heart of
                    </p>
                    <p
                      className="text-4xl md:text-5xl text-center leading-relaxed text-gray-800"
                      style={{ fontFamily: "'Great Vibes', cursive" }}
                    >
                      Myanmar
                    </p> */}
                  </div>

                  {/* Names at bottom */}
                  {/* <div className="text-center pt-6 border-t border-gray-400">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-700">
                      T NYEIN MIN MYAT &
                    </p>
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-700">
                      HTET SHOON LAE
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#faf7f2] px-4 pb-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            Made with <span className="text-red-600">{"<3"}</span> for your
            special day
          </p>
          <Link
            href="https://www.thureinhtet.com/"
            className="text-sm text-blue-600 mt-4"
            target="_blank"
          >
            www.thureinhtet.com
          </Link>
        </div>
      </footer>
    </>
  );
}

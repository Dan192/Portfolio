import { Github, Linkedin, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import BackgroundMarquee from "@/components/BackgroundMarquee";

const HeroSection = () => {
  const [status, setStatus] = useState("");

  const possibleStatuses = [
    "Building something cool 🔨",
    "Playing Basketball 🏀",
    "Weightlifting 💪",
    "Pushing to GitHub 🖥️",
    "Reading Quant docs 📖",
    "Scrolling through dev Twitter 𝕏",
    "Gaming 🎮",
    "In a flow state ☯️",
  ];

  useEffect(() => {
    setStatus(
      possibleStatuses[Math.floor(Math.random() * possibleStatuses.length)]
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* 🌀 Background DAN matrix */}
      <BackgroundMarquee />

      {/* 📊 Vertical grid lines */}
      <div className="absolute inset-0 z-10 flex justify-between pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px bg-black/10 h-full" />
        ))}
      </div>

      {/* 💬 Foreground */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-python-blue mb-6 glitch-hover nes-text">
          Hello, I'm <span className="text-python-green">Dan Rassouli</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-6 floating nes-text">
          Python Developer & Aspiring Portfolio Manager/Quant
        </p>

        {/* ✅ Status pill with ping animation and text */}
        <div className="my-4 max-w-xs md:max-w-md mx-auto rounded-full inline-flex items-center bg-white border border-black/10 overflow-hidden whitespace-nowrap">
          <div className="py-2 pl-3 pr-4 inline-flex items-center font-medium text-emerald-600 border-r border-black/10">
            <span className="relative inline-flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Status
          </div>
          <span className="inline-block px-3 text-gray-700 text-sm md:text-base truncate">
            {status}
          </span>
        </div>

        {/* 🔗 Social links with original NES styles */}
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://github.com/Dan192"
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn is-dark"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dan-rassouli/"
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn is-primary"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:Drassouli14@gmail.com"
            className="nes-btn is-warning"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

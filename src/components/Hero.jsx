import gsap from "gsap";

import { useState } from "react";
import { useEffect } from "react";

import { useGSAP } from "@gsap/react";

import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  // Chooses the video source based on size of window
  const determineVideoSource = () => {
    return window.innerWidth > 760 ? heroVideo : smallHeroVideo;
  };

  const [heroVideoSrc, setHeroVideoSrc] = useState(determineVideoSource());

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2.5,
      ease: "sine.in",
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 3,
      ease: "sine.in",
      duration: 1,
      y: -50,
    });
  }, []);

  const changeVideo = () => setHeroVideoSrc(determineVideoSource());

  useEffect(() => {
    window.addEventListener("resize", () => changeVideo());

    return () => {
      window.removeEventListener("resize", changeVideo);
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={heroVideoSrc}
            src={heroVideoSrc}
          ></video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="text-xl font-normal"> From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;

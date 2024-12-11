import gsap from "gsap";

import VideoCarousel from "./VideoCarousel";

import { useGSAP } from "@gsap/react";

import { rightImg, watchImg } from "../utils";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
    });
    gsap.to(".link", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25
    });
  });

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the Film
              <img src={watchImg} alt="play-button" className="ml-2" />
            </p>
            <p className="link">
              Watch the Event
              <img src={rightImg} alt="arrow" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;

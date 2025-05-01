import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BannerImg from "../assets/amimationlogo.png";
import BannerImg2 from "../assets/logo3.png";
import BannerImg3 from "../assets/logo5.png";
import BannerImg4 from "../assets/logo-4.png";

gsap.registerPlugin(ScrollTrigger);

const HorizentalScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div ref={scrollRef} className="w-screen h-screen overflow-hidden">
      <div className="flex w-max h-screen">
        {/* প্রতিটি স্টেপ .panel class দিবে */}
        <section className="panel w-screen h-screen flex items-center justify-center bg-[#1a1a1a] text-white text-center p-10">
          <div>
            <button className="py-2 px-6 rounded-xl text-3xl bg-[#f7bdf8]">
              Animate Anything
            </button>
            <br />
            <button className="py-2 px-6 mt-5 rounded-xl text-3xl bg-[#ff8709] ml-20">
              Animate Anything
            </button>
            <h2 className="text-2xl pt-6 max-w-2xl">
              That's right, Anything Whether you're animating UI, SVG or
              creating immersive WebGL experiences...
            </h2>
          </div>
        </section>

        <section className="panel w-screen h-screen flex items-center justify-center bg-[#2b2b2b]">
          <img src={BannerImg} alt="Banner 1" />
        </section>

        <section className="panel w-screen h-screen flex flex-col items-center justify-center bg-[#1e1e1e] text-white text-center">
          <button className="text-7xl font-bold bg-gradient-to-r from-[#abff84] to-[#0ae448] px-6 py-4 rounded-xl">
            Nice and
          </button>
          <button className="text-7xl font-bold mt-10 bg-gradient-to-r from-[#fec5fb] to-[#9d95ff] px-6 py-4 rounded-xl rotate-3">
            Easy
          </button>
        </section>

        <section className="panel w-screen h-screen flex flex-col items-center justify-center bg-[#151515] text-white text-center">
          <img src={BannerImg2} alt="" />
          <h2 className="text-6xl font-bold mt-10 max-w-4xl">
            Add personality to your animations with a huge variety of Super
          </h2>
          <img src={BannerImg3} alt="" className="mt-5" />
        </section>

        <section className="panel w-screen h-screen flex flex-col items-center justify-center bg-[#000] text-white text-center">
          <button className="text-7xl font-bold bg-gradient-to-r from-[#ff8709] to-[#fec5fb] px-10 py-4 mb-6">
            Plug-and-play
          </button>
          <button className="text-7xl font-bold bg-gradient-to-r from-[#fec5fb] to-[#9d95ff] px-10 py-4 rotate-2">
            Super
          </button>
        </section>

        <section className="panel w-screen h-screen flex items-center justify-center bg-[#111] text-white text-6xl font-bold text-center">
          eases , or build your own custom curves
        </section>

        <section className="panel w-screen h-screen flex flex-col items-center justify-center bg-[#222] text-white">
          <div className="flex gap-5 items-center">
            <button className="text-6xl font-bold bg-[#fec5fb] px-6 py-4 rounded-2xl">
              Choreograph
            </button>
            <img src={BannerImg4} alt="logo" />
            <button className="text-6xl font-bold bg-[#ff8709] px-6 py-4 rounded-2xl">
              sequences
            </button>
          </div>
          <button className="text-6xl font-bold bg-[#abff84] px-6 py-4 mt-6 rounded-2xl">
            sequences
          </button>
        </section>

        <section className="panel w-screen h-screen flex items-center justify-center bg-[#333] text-white text-9xl font-bold">
          in a{" "}
          <div className="mx-6 h-20 w-20 bg-gradient-to-r from-[#fec5fb] to-[#9d95ff] rotate-45"></div>{" "}
          snap
        </section>
      </div>
    </div>
  );
};

export default HorizentalScroll;

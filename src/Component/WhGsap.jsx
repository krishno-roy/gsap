import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const WhGsap = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      {
        y: 50,
        opacity: 0,
        color: "#ffffff",
      },
      {
        y: 0,
        opacity: 1,
        color: "#ffff",
        stagger: {
          each: 0.05,
          from: "start",
          ease: "sine.inOut",
        },
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  const text =
    "GSAP allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so you can focus on the fun stuff.";

  return (
    <div className="text-white container mx-auto py-7">
      <h2 className="flex items-center text-3xl">
        <span className="text-5xl">{"{"}</span>
        Why GSAP®
        <span className="text-5xl">{"}"}</span>
      </h2>

      <h2
        className="text-8xl leading-[6rem] mt-10 mb-10 flex flex-wrap"
        ref={textRef}
      >
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default WhGsap;

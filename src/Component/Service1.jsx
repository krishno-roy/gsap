import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../assets/icon.png";

const Service1 = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out",
        }
      );
    });
  }, []);

  const sectionData = [
    {
      title: "Scroll",
      description: "Turn scrolling into silky-smooth storytelling.",
    },
    {
      title: "Scroll",
      description: "Turn scrolling into silky-smooth storytelling.",
    },
    {
      title: "Scroll",
      description: "Turn scrolling into silky-smooth storytelling.",
    },
  ];

  return (
    <div className="container mx-auto px-12 py-12">
      <div className="pb-4">
        <h2 className="flex items-center text-2xl text-white">
          <span className="text-5xl ">{"{"}</span>
          GSAP® Tools
          <span className="text-5xl">{"}"}</span>
        </h2>
      </div>

      {sectionData.map((section, index) => (
        <div
          key={index}
          className={`flex gap-8 py-20 ${
            index < sectionData.length - 1 ? "border-b border-gray-300/45" : ""
          }`}
        >
          <div>
            <img
              src={Logo}
              alt=""
              ref={(el) => (imageRefs.current[index] = el)}
            />
          </div>
          <div className="text-white space-y-5">
            <h2 className="text-4xl font-bold">{section.title}</h2>
            <p className="text-7xl font-bold">{section.description}</p>
            <button className="relative overflow-hidden border-2 border-white text-3xl rounded-full py-3 px-5 text-white group">
              <span className="relative z-10 hover:text-black">
                Explore Scroll
              </span>
              <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out z-0"></span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service1;

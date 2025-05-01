import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo4.png";
import Logo4 from "../assets/logo6.png";
import Logo5 from "../assets/logo7.png";
import Logo6 from "../assets/logo11.png";
import Logo7 from "../assets/logo10.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const Brand = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      const fromLeft = index % 2 === 0;
      gsap.fromTo(
        img,
        {
          opacity: 0,
          x: fromLeft ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div className="bg-black py-10">
      <div className="container mx-auto flex flex-wrap justify-center gap-5 overflow-hidden">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            ref={(el) => (imageRefs.current[index] = el)}
            className="w-32 h-32 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Brand;

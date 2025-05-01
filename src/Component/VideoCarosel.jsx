import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScrollSection.css"; // Make sure this file exists

gsap.registerPlugin(ScrollTrigger);

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const totalWidth = container.scrollWidth;
      const windowWidth = window.innerWidth;

      gsap.to(container, {
        x: () => `-${totalWidth - windowWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth - windowWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="horizontal-section">
      <div ref={containerRef} className="horizontal-container">
        {videos.map((src, index) => (
          <div className="horizontal-card" key={index}>
            <video
              src={src}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="scroll-video"
            />
            <div className="card-content">
              <h2>Project {index + 1}</h2>
              <p>Beautiful showcase style video</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScrollSection;

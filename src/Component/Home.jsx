import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroLogo1 from "../assets/logo-2.png"; // Adjust path if necessary
import HeroLogo2 from "../assets/heroicon.png"; // Adjust path if necessary

const Home = () => {
  // Separate refs for the two images and the "i" letter
  const logo1Ref = useRef(null);
  const logo2Ref = useRef(null);
  const letterRef = useRef(null);

  useEffect(() => {
    // Floating logo animation (for HeroLogo2)
    gsap.to(logo2Ref.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  useEffect(() => {
    // Continuous rotation up and down (yoyo effect for the "i" letter)
    gsap.to(letterRef.current, {
      rotate: 360,
      yoyo: true, // Makes the animation go back and forth
      repeat: -1, // Repeat forever
      duration: 2, // Duration of one full cycle (rotation up and down)
      ease: "power2.inOut", // Smooth easing
    });
  }, []);

  useEffect(() => {
    // Rotate HeroLogo1 continuously
    gsap.to(logo1Ref.current, {
      rotation: 180, // Rotate 360 degrees
      repeat: -1, // Repeat forever
      duration: 5, // Rotate once every 5 seconds
      ease: "linear", // Linear easing for continuous rotation
    });
  }, []);

  return (
    <div className="bg-black py-12 ">
      <div className="container mx-auto min-h-screen border-b-2 border-gray-300/45">
        {/* HeroLogo2 - Floating animation */}
        <img
          ref={logo1Ref}
          src={HeroLogo2}
          alt="Floating Logo"
          className="absolute w-40 ml-50"
        />

        <div className="relative z-10">
          <h2 className="text-white text-[300px] font-bold">Animate</h2>
          <h2 className="text-white text-[300px] text-right -mt-50 font-bold">
            anythn
            <span
              ref={letterRef}
              className="inline-block align-baseline text-[300px] text-white [transform-origin:center_center]"
            >
              i
            </span>
            ng
          </h2>
        </div>

        {/* HeroLogo1 - Rotating logo */}
        <div className="absolute left-1/2 -mt-14 transform translate-x-80 -translate-y-1/2">
          <img
            ref={logo2Ref}
            src={HeroLogo1}
            alt="Rotating Hero Logo"
            className="w-40"
          />
        </div>

        {/* Text with gradient border button */}
        <div className="text-white flex justify-between items-center pb-7">
          <h2 className="flex items-center text-2xl">
            <span className="text-9xl -mt-6">{"{"}</span>
            GSAP – A wildly robust JavaScript
            <br /> animation library built for professionals
            <span className="text-9xl -mt-6">{"}"}</span>
          </h2>

          <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-yellow-500">
            <button className="py-4 px-10 rounded-full text-white text-3xl bg-black w-full h-full">
              Get GSAP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

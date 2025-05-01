import React from 'react'
import Logo from "../assets/icon.png"

const Service1 = () => {
  return (
    <div className="container mx-auto px-12 py-12">
      <div className="pb-4">
        <h2 className="flex items-center text-2xl text-white">
          <span className="text-5xl ">{"{"}</span>
          GSAP® Tools
          <span className="text-5xl">{"}"}</span>
        </h2>
      </div>
      <div className="flex gap-8 py-20 border-b border-gray-300/45">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="text-white space-y-5">
          <h2 className="text-4xl font-bold">Scroll</h2>
          <p className="text-7xl font-bold">
            Turn scrolling into silky-smooth storytelling.
          </p>
          <button className="relative overflow-hidden border-2 border-white text-3xl rounded-full py-3 px-5 text-white group">
            <span className="relative z-10 hover:text-black">
              Explore Scroll
            </span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out z-0"></span>
          </button>
        </div>
      </div>
      <div className="flex gap-8 py-20 border-b border-gray-300/45">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="text-white space-y-5">
          <h2 className="text-4xl font-bold">Scroll</h2>
          <p className="text-7xl font-bold">
            Turn scrolling into silky-smooth storytelling.
          </p>
          <button className="relative overflow-hidden border-2 border-white text-3xl rounded-full py-3 px-5 text-white group">
            <span className="relative z-10 hover:text-black">
              Explore Scroll
            </span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out z-0"></span>
          </button>
        </div>
      </div>
      <div className="flex gap-8 py-20">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="text-white space-y-5">
          <h2 className="text-4xl font-bold">Scroll</h2>
          <p className="text-7xl font-bold">
            Turn scrolling into silky-smooth storytelling.
          </p>
          <button className="relative overflow-hidden border-2 border-white text-3xl rounded-full py-3 px-5 text-white group">
            <span className="relative z-10 hover:text-black">
              Explore Scroll
            </span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out z-0"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service1
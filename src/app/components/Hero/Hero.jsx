import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I&rsquo;m Thomas Meyer
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Full stack web developer
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-[#a1a1aa] text-white hover:text-black hover:bg-slate-500">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-[#a1a1aa] text-white hover:text-black hover:bg-slate-500 mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
            <Image
              src="/images/avatar.png"
              alt="Hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={500}
              responsive
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

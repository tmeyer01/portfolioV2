import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left lg:justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-500 to-stone-200">
              Hello, I&rsquo;m{" "}
            </span>
            <br></br>
            Thomas Meyer
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Full stack web developer
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-slate-700 via-slate-500 to-stone-200 text-white hover:text-black hover:bg-slate-500">
              Hire Me
            </button>
            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-slate-700 via-slate-500 to-stone-200 text-white hover:text-black mt-3">
              <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2">
                Download CV
              </span>
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

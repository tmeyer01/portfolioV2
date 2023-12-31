"use client";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="py-14 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start md:pr-8"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-500 to-stone-200">
              Hello, I&rsquo;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Thomas Meyer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Full Stack Web Dev",
                2000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="pr-7"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            A dedicated web developer motivated by the creative process of
            bringing digital experinces to life.
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full md:mr-4 bg-gradient-to-r from-slate-700 via-slate-500 to-stone-200 text-white hover:text-black hover:bg-slate-500"
            >
              Hire Me
            </Link>
            <Link
              href="https://www.canva.com/design/DAEwBE504Vk/xNEYzY-ZtLBoGtA3jAhUVw/view?utm_content=DAEwBE504Vk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-slate-700 via-slate-500 to-stone-200 text-white hover:text-black mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2">
                Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="col-span-4 place-self-center mt-6 lg:mt-0"
        >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#393838] to-transparent rounded-full w-[250px] h-[250px] lg:w-[325px] lg:h-[325px] relative overflow-hidden">
            <Image
              src="/images/avatar.png"
              alt="Hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

"use client";
import { useState, useTransition } from "react";
import Image from "next/image";

import TabButton from "@/app/components/TabButton/TabButton";
import { TAB_DATA } from "@/app/components/About/TabData";

function AboutMe() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/coding.jpg" width={500} height={500} alt="Coding" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full pb-8">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className=" text-base text-[#ADB7BE] lg:text-lg">
            {" "}
            I am a web developer based in Vancouver, BC who specializes in full
            stack development. Coding is my passion. I have gained skills over
            the years through hands on experience, with Agile software
            development methodologies. My expertise encompasses a diverse range
            of frameworks and libraries, including React, Node.js, Express,
            Next.js, Rails, jQuery, Ajax, Material-UI, Babel, ActiveRecord, and
            PostgreSQL.
            <br />
            What drives me is the art of creating websites and applications
            that&apos;re user friendly. I approach each project with creativity
            and enthusiasm striving to deliver results. Apart from my coding
            expertise I am also an ultra-endurance cyclist, which reflects my
            determination and discipline not only in web development but also in
            my personal pursuits. My commitment to excellence and adaptability
            makes me a valuable asset, for any project.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

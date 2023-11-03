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
          <p className=" text-base lg:text-lg">
            {" "}
            I&rsquo;m a full-stack web developer based in Vancouver, BC, with a
            passion for coding. Over the years, I&rsquo;ve honed my skills
            through hands-on experience with Agile software development
            methodologies. This experience has been gained by working on
            e-commerce sites and mastering content management systems.
            <br />
            I&rsquo;m driven by the art of creating user-friendly websites and
            applications, and I approach each project with boundless creativity
            and enthusiasm. Beyond coding, I&rsquo;m an ultra-endurance cyclist,
            reflecting my determination and discipline in both web development
            and personal pursuits. My dedication to excellence and adaptability
            makes me a valuable asset for any project.
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

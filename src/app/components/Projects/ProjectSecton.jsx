"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

// components and data
import ProjectsCard from "@/app/components/Projects/ProjectsCard";
import { projects } from "@/app/components/Projects/ProjectData";
import { useInView } from "framer-motion";

function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} className="py-16" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              imgSrc={project.imgSrc}
              description={project.description}
              link={project.link}
              video={project.video}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;

import ProjectsCard from "@/app/components/Projects/ProjectsCard";
import { projects } from "@/app/components/Projects/ProjectData";

function ProjectsSection() {
  return (
    <section className=" lg:py-12" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            imgSrc={project.imgSrc}
            description={project.description}
            link={project.link}
            video={project.video}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

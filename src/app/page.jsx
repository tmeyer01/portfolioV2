import Image from "next/image";
import Nav from "@/app/components/Nav/Nav";
import Hero from "@/app/components/Hero/Hero";
import AboutMe from "@/app/components/About/AboutMe";
import ProjectsSection from "@/app/components/Projects/ProjectSecton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Nav />
      <div className="container mx-auto px-12 py-12">
        <Hero />
        <AboutMe />
        <ProjectsSection />
      </div>
    </main>
  );
}

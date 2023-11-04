import Image from "next/image";
import Nav from "@/app/components/Nav/Nav";
import Hero from "@/app/components/Hero/Hero";
import AboutMe from "@/app/components/About/AboutMe";
import ProjectsSection from "@/app/components/Projects/ProjectSecton";
import ContactSection from "@/app/components/Contact/ContactSection";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-hidden">
      <Nav />
      <div className="container mx-auto px-12 py-12">
        <Hero />
        <AboutMe />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

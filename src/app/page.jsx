import Image from "next/image";
import Hero from "@/app/components/Hero/Hero";
import Nav from "@/app/components/Nav/Nav";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Nav />
      <div className="container mx-auto px-12 py-12">
        <Hero />
      </div>
    </main>
  );
}

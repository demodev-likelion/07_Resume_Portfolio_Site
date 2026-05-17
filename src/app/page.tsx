import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Teaching from "@/components/Teaching";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Teaching />
        <Awards />
        <Contact />
      </main>
    </>
  );
}

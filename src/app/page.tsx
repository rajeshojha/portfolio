import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <Analytics /> 
    </>
  );
}

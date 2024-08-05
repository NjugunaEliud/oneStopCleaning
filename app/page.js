import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}

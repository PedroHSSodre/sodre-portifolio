import About from "@/app/_components/About";
import Skills from "@/app/_components/Skills";
import Contact from "@/app/_components/Contact";
import NavMenu from "@/app/_components/NavMenu";

export default function Home() {
  return (
    <main>
      <NavMenu />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

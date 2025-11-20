import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Team from "./Team";
import Contact from "./Contact";

const Home = () => (
  <main className="mx-auto mt-32 flex max-w-6xl flex-col gap-12 px-6 pb-20">
    <Hero />
    <About />
    <Projects />
    <Team />
    <Contact />
  </main>
);

export default Home;


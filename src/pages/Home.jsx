import Hero from "../components/Hero";
import CTA from "../components/CTA";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => (
  <main className="mt-32 flex w-full flex-col gap-16 px-6 pb-24 lg:px-12">
    <Hero />
    <div className="flex flex-col gap-16 bg-white/70 px-4 py-12 backdrop-blur">
      <About />
      <Services />
      <Projects />
      <Achievements />
      <Certifications />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  </main>
);

export default Home;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Team from "./sections/Team";
import OpeningTimes from "./sections/OpeningTimes";

const Page = () => (
  <div className="bg-indigo-800 overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
    <OpeningTimes />
    <Team />
    <Footer />
  </div>
);

export default Page;

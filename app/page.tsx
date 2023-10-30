import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contacto from "./sections/Contacto";
import Team from "./sections/Team";
import OpeningTimes from "./sections/OpeningTimes";

const Page = () => (
  <div className="bg-emerald-600 overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contacto />
    <OpeningTimes />
    <Team />
    <Footer />
  </div>
);

export default Page;

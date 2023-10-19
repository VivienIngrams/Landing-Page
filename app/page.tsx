import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Team from "./sections/Team";

const Page = () => (
  <div className="bg-[#629d6a] overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Team />
    <Services />
    <Contact />
    <Footer />
  </div>
);

export default Page;

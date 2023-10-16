import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import Instagram from "./sections/Instagram";


const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Instagram />
    </div>
    <div className="relative">
      <Services />
    </div>
    <div className="relative">
      <Reviews />
      <div className="gradient-04 z-0" />
      <Contact/>
    </div>
    <Footer />
  </div>
);

export default Page;
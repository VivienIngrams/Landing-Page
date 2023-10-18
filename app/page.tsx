import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import Instagram from "./sections/Instagram";



const Page = () => (
 
  <div className="bg-[#629d6a] overflow-hidden">
    <Navbar />
    <Hero />
 
      <About />
      <Instagram />
      <Services />

      <Reviews />
      <Contact />

    <Footer />
  </div> 
);

export default Page;
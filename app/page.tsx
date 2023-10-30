import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contacts from "./sections/Contacts";
import Team from "./sections/Team";
import OpeningTimes from "./sections/OpeningTimes";

const Page = () => (
  <div className="bg-emerald-600 overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contacts />
    <OpeningTimes />
    <Team />
    <Footer />
  </div>
);

export default Page;

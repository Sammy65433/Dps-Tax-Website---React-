import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Languages from "./components/Languages";
import Purpose from "./components/Purpose";
import WhyChoose from "./components/WhyChoose";
import Booking from "./components/Booking";
import Realty from "./components/Realty";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Languages />
      <Purpose />
      <WhyChoose />
      <HowItWorks />
      <Booking />
      <Realty />
      <FAQ />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

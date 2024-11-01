import DubaiSection from "./Components/DubaiSection";
import LandingSection from "./Components/LandingSection";
import ServicesSection from "./Components/ServicesSection";

function Home() {
  return (
    <>
      <LandingSection />

      {/* Dubai Busness */}
      <DubaiSection />

      {/* Testimonials Section */}
      <ServicesSection />

    </>
  );
}

export default Home;

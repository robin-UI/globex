import DubaiSection from "./Components/DubaiSection";
import LandingSection from "./Components/LandingSection";
import ServicesSection from "./Components/ServicesSection";
import SignupSection from "./Components/SignupSection";
import TestmonialSection from "./Components/TestmonialSection";

function Home() {
  return (
    <>
      <LandingSection />

      {/* Dubai Busness */}
      <DubaiSection />

      {/* Testimonials Section */}
      <ServicesSection />

      <SignupSection />

      <TestmonialSection />
    </>
  );
}

export default Home;

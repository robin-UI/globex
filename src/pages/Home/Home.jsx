import { Helmet } from "react-helmet";
import DubaiSection from "./Components/DubaiSection";
import LandingSection from "./Components/LandingSection";
import ServicesSection from "./Components/ServicesSection";
import SignupSection from "./Components/SignupSection";
import TestmonialSection from "./Components/TestmonialSection";

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Company Setup Dubai | Business Setup UAE | Offshore, Freezone &
          Mainland
        </title>
        <meta
          name="description"
          content="Your one-stop solution for company setup in Dubai and the wider UAE. We handle everything from offshore company formation to freezone and mainland business setup. Start your UAE venture with us."
        />
      </Helmet>
      <LandingSection />

      {/* Dubai Busness */}
      <DubaiSection />

      {/* Testimonials Section */}
      <ServicesSection />

      <SignupSection />

      <TestmonialSection />
    </div>
  );
}

export default Home;

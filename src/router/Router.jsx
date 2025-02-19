import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import { LayOut } from "../App";
import OurCompany from "../pages/ourCompany/OurCompany";
import Services from "../pages/services/Services";
import CompanySetup from "../pages/companySetup/CompanySetup";
// import YearVisit from "../pages/yearVisit/YearVisit";
import Media from "../pages/media/Media";
import Services2 from "../pages/services/Services2";
import About from "../pages/about/About";
import Team from "../pages/team/Team";
import BlogList from "../pages/blog/Blog";
import ContactUs from "../pages/contactus/ContactUs";
import GoldenVisa from "../pages/GoldenVisa/GoldenVisa";
import BlogDetails from "../pages/blog/BlogDetails";
import BlogLayout from "../pages/blog/BlogLayout";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import LoadingAnimation from "../components/lotties/loading.json";
import Freezone from "../pages/Details/Freezone";
import Offsore from "../pages/Details/Offsore";
import Mainland from "../pages/Details/Mainland";
import ProfessionalLicense from "../pages/Details/freezone/ProfessionalLicense";
import CommercialLicense from "../pages/Details/freezone/CommercialLicense";
import IndustrialLicense from "../pages/Details/freezone/IndustrialLicense";
import TourismGuide from "../pages/Details/freezone/TourismGuide";
import ProServices from "../pages/services/ProServices";
import AttestationServices from "../pages/services/AttestationServices";
import LabourServices from "../pages/services/LabourServices";

function Routers() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <RouteChangeHandler setLoading={setLoading} />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="business-setup-in-dubai-UAE" element={<OurCompany />} />
            <Route path="services" element={<Services2 />} />
            {/* <Route path="our-team" element={<CompanySetup />} /> */}
            <Route path="our-team" element={<Team />} />
            <Route path="UAE-golden-visa-and-company-formation" element={<GoldenVisa />} />
            <Route path="media" element={<BlogList />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="blog" element={<BlogLayout />}>
              <Route index element={<BlogList />} /> {/* Blog homepage */}
              <Route path=":blogId" element={<BlogDetails />} />
            </Route>
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="freezone-company-setup-in-UAE" element={<Freezone />} />
            <Route path="professional-license" element={<ProfessionalLicense />} />
            <Route path="commercial-license" element={<CommercialLicense />} />
            <Route path="industrial-license" element={<IndustrialLicense />} />
            <Route path="tourism-guide" element={<TourismGuide />} />
            <Route path="offshore-company-formation-in-dubai" element={<Offsore />} />
            <Route path="UAE-mainland-company-formation" element={<Mainland />} />
            <Route path="pro-services" element={<ProServices />} />
            <Route path="attestation-services" element={<AttestationServices />} />
            <Route path="labour-services" element={<LabourServices />} />
            <Route path="*" element={<div> This page is not found </div>} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default Routers;

function RouteChangeHandler({ setLoading }) {
  const location = useLocation();

  useEffect(() => {
    // Show loading screen on route change
    setLoading(true);

    // Hide loading screen after a delay (simulate load time)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800); // Adjust the delay as needed

    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, [location, setLoading]);

  return null;
}

function LoadingScreen() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

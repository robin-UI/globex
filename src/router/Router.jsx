import { Route, Routes, useLocation } from "react-router";
import Home from "../pages/Home/Home";
import { LayOut } from "../App";
import OurCompany from "../pages/ourCompany/OurCompany";
// import Services from "../pages/services/Services";
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
            <Route path="our-company" element={<OurCompany />} />
            <Route path="services" element={<Services2 />} />
            {/* <Route path="our-team" element={<CompanySetup />} /> */}
            <Route path="our-team" element={<Team />} />
            <Route path="year-uae-visa" element={<GoldenVisa />} />
            <Route path="media" element={<BlogList />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="blog" element={<BlogLayout />}>
              <Route index element={<BlogList />} /> {/* Blog homepage */}
              <Route path=":blogId" element={<BlogDetails />} />
            </Route>
            <Route path="contact" element={<ContactUs />} />
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

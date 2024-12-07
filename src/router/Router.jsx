import { Route, Routes } from "react-router";
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

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="our-company" element={<OurCompany />} />
        <Route path="services" element={<Services2 />} />
        <Route path="company-setup" element={<CompanySetup />} />
        <Route path="company-setup" element={<Team />} />
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
  );
}

export default Routers;

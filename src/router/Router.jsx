import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import { LayOut } from "../App";
import OurCompany from "../pages/ourCompany/OurCompany";
import Services from "../pages/services/Services";
import CompanySetup from "../pages/companySetup/CompanySetup";
import YearVisit from "../pages/yearVisit/YearVisit";
import Media from "../pages/media/Media";
import Services2 from "../pages/services/Services2";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="our-company" element={<OurCompany />} />
        <Route path="services" element={<Services2 />} />
        <Route path="company-setup" element={<CompanySetup />} />
        <Route path="year-uae-visa" element={<YearVisit />} />
        <Route path="media" element={<Media />} />
        <Route path="*" element={<div> This page is not found </div>} />
      </Route>
    </Routes>
  );
}

export default Routers;

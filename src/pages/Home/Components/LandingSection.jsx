import ButtonStar  from "../../../assets/images/buttonStar.svg";
import GrowIcon  from "../../../assets/images/GrowIcon.svg";
import OnecontinuousLine  from "../../../assets/images/OnecontinuousLine.png";

import { LandingLine, LandingText } from "../../../components/Icons/Icons";

function LandingSection() {
  return (
    <section className="px-28 h-[720px] relative">
      <div className="flex items-center w-full">
        <div className="w-1/2">
        <div className="flex items-center gap-2"> <img className="h-[18px]" src={GrowIcon} alt="" /> <LandingText /> <LandingLine/> </div>
          {/* <p className="text-xl font-medium gradient-text">Begin your journey</p>  */}
          {/* <hr /> */}
          <h3 className="text-6xl leading-[66px] font-light">Launch Your </h3>
          <h3 className="text-6xl leading-[66px] font-bold">Dream Company</h3>
          <h3 className="text-6xl leading-[66px] font-light mb-5">in Dubai</h3>
          <p className="text-lg text-gray-500 leading-7 mb-5">
            Seamless, Fast, and Tailored for Global <br /> Entrepreneurs. Globex offers
            all the services, tools,<br /> and resources you need to succeed worldwide <br />
            effortlessly and efficiently.
          </p>
          <button className="gradient-border px-4 py-2 rounded-xl text-[#126CD7] font-medium flex gap-2 items-center">  Excellent 4.7 <span className="font-light">out of</span> 5 <img src={ButtonStar} /> Trustpilot</button>
        </div>

        <div className="relative w-1/2 pl-2 h-[650px]">
          <img className="absolute top-[10px] left-[50px] w-[215px] h-[255px]" src="../images/homepage/banner-img-1.png" alt="brand-1" />
          <img className="absolute top-[50px] left-[283px] w-[297px] h-[254px] rounded-[30px]" src="../images/homepage/banner-img-3.png" alt="brand-2" />
          <img className="absolute top-[292px] left-[-35px] w-[297px] h-[243px] rounded-[30px]" src="../images/homepage/banner-img-2.png" alt="brand-3" />
          <img className="absolute top-[317px] left-[283px] w-[215px] h-[255px]" src="../images/homepage/banner-img-4.png" alt="brand-4" />
        </div>
      </div>
      <img className="absolute w-screen bottom-[-298px] left-0" src={OnecontinuousLine} alt="" />
    </section>
  );
}

export default LandingSection;

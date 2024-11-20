import ButtonStar from "../../../assets/images/buttonStar.svg";
import GrowIcon from "../../../assets/images/GrowIcon.svg";
import OnecontinuousLine from "../../../assets/images/OnecontinuousLine.png";

import { LandingLine, LandingText } from "../../../components/Icons/Icons";

function LandingSection() {
  return (
    // <section className="container mx-auto px-4 lg:px-28 min-h-screen py-12 lg:py-20 relative">
    //   <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
    //     {/* Content Side */}
    //     <div className="w-full lg:w-1/2 space-y-6">
    //       <div className="flex items-center gap-2">
    //         {/* Assuming these components/images exist */}
    //         <img className="h-[18px]" src={GrowIcon} alt="Growth icon" />
    //         <LandingText />
    //         <LandingLine />
    //       </div>
          
    //       <div className="space-y-2">
    //         <h3 className="text-4xl lg:text-6xl font-light leading-tight">Launch Your</h3>
    //         <h3 className="text-4xl lg:text-6xl font-bold leading-tight">Dream Company</h3>
    //         <h3 className="text-4xl lg:text-6xl font-light leading-tight">in Dubai</h3>
    //       </div>

    //       <p className="text-base lg:text-lg text-gray-500 leading-relaxed">
    //         Seamless, Fast, and Tailored for Global Entrepreneurs. Globex offers all the services, tools, and resources you need to succeed worldwide effortlessly and efficiently.
    //       </p>

    //       <button className="gradient-border px-6 py-3 rounded-xl text-[#126CD7] font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors">
    //         Excellent 4.7 <span className="font-light">out of</span> 5
    //         <img src={ButtonStar} alt="Star rating" />
    //         Trustpilot
    //       </button>
    //     </div>

    //     {/* Images Grid Side */}
    //     <div className="w-full lg:w-1/2">
    //       <div className="relative aspect-square max-w-[650px] mx-auto">
    //         <img
    //           className="absolute top-[2%] left-[10%] w-[35%] rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
    //           src="../images/homepage/banner-img-1.png"
    //           alt="Business showcase 1"
    //         />
    //         <img
    //           className="absolute top-[8%] left-[48%] w-[45%] rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
    //           src="../images/homepage/banner-img-3.png"
    //           alt="Business showcase 2"
    //         />
    //         <img
    //           className="absolute top-[45%] left-[5%] w-[45%] rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
    //           src="../images/homepage/banner-img-2.png"
    //           alt="Business showcase 3"
    //         />
    //         <img
    //           className="absolute top-[50%] left-[48%] w-[35%] rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
    //           src="../images/homepage/banner-img-4.png"
    //           alt="Business showcase 4"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <img
    //     className="absolute w-full left-0 bottom-0 transform translate-y-1/2"
    //     src={OnecontinuousLine}
    //     alt="Decorative line"
    //   />
    // </section>

    <section className="relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8 xl:px-20 min-h-[calc(100vh-80px)] py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full">
        <ContentSection />
        <ImageGrid />
      </div>
    </div>

    <img
      className="absolute w-full left-0 -bottom-32 lg:-bottom-48"
      src={OnecontinuousLine}
      alt=""
      aria-hidden="true"
    />
  </section>
  );
}

export default LandingSection;



function ContentSection() {
  return (
    <div className="w-full lg:w-1/2 space-y-8 lg:pr-8">
      <div className="flex items-center gap-3">
        <img className="h-[18px]" src={GrowIcon} alt="Growth icon" />
        <LandingText />
        <LandingLine />
      </div>
      
      <div className="space-y-3">
        <h3 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-tight">
          Launch Your
        </h3>
        <h3 className="text-4xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Dream Company
        </h3>
        <h3 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-tight">
          in Dubai
        </h3>
      </div>

      <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
        Seamless, Fast, and Tailored for Global Entrepreneurs. Globex offers all the services, 
        tools, and resources you need to succeed worldwide effortlessly and efficiently.
      </p>

      <TrustpilotButton />
    </div>
  );
}

function ImageGrid() {
  return (
    <div className="w-full lg:w-1/2 h-full">
      <div className="relative w-full aspect-[4/3] lg:aspect-square max-w-[650px] mx-auto">
        <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
          <div className="relative h-full">
            <img
              className="absolute top-[5%] w-[90%] rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 object-cover"
              src="../images/homepage/banner-img-1.png"
              alt="Business showcase 1"
              loading="lazy"
            />
            <img
              className="absolute top-[60%] w-full rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 object-cover"
              src="../images/homepage/banner-img-2.png"
              alt="Business showcase 2"
              loading="lazy"
            />
          </div>
          <div className="relative h-full">
            <img
              className="absolute top-[15%] w-full rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 object-cover"
              src="../images/homepage/banner-img-3.png"
              alt="Business showcase 3"
              loading="lazy"
            />
            <img
              className="absolute top-[70%] w-[85%] ml-auto right-0 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 object-cover"
              src="../images/homepage/banner-img-4.png"
              alt="Business showcase 4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustpilotButton() {
  return (
    <button className="group gradient-border px-6 py-3 rounded-xl text-[#126CD7] font-medium flex items-center gap-2 hover:bg-blue-50/50 transition-all duration-300">
      <span className="flex items-center gap-2">
        Excellent 4.7 <span className="font-light text-gray-600">out of</span> 5
      </span>
      <img 
        src={ButtonStar} 
        alt="Trustpilot rating" 
        className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
      />
      <span className="text-gray-700">Trustpilot</span>
    </button>
  );
}
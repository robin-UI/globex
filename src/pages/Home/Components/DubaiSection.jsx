import { useState } from "react";
import {
  BuildingIcon,
  GlobeIcon,
  MapIcon,
} from "../../../components/Icons/Icons";

import backgroundDubai from "../../../assets/images/dubainSectionBG.png";

function DubaiSection() {
  return (
    <section>
      <div className="bg-gray-50 sm:py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block sm:inline">
                Uncover the ideal business setup that
              </span>{" "}
              <span className="block sm:inline">
                fits your vision in Dubai.
              </span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
              Seasoned advisors analyze your needs efficiently and devise
              tailored business setup solutions to adequately protect your
              interests.
            </p>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <BusinessCard
            title="Freezone"
            description="Setting up your company in a UAE free zone is beneficial for companies looking for more freedom in how they run."
            icon={<GlobeIcon />}
            gradient={true}
          />
          <BusinessCard
            title="Offshore"
            description="The biggest benefit of opening an offshore company is not having to pay any taxes."
            icon={<BuildingIcon />}
          />
          <BusinessCard
            title="Mainland"
            description="A mainland business is a good choice for companies that are comfortable with functioning within an emirate."
            icon={<MapIcon />}
          />
        </div>
      </div>
      </div>
      <img
        src={backgroundDubai}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      />
    </section>
  );
}

export default DubaiSection;

function BusinessCard({ title, description, icon }) {
  const [gradient, setGradient] = useState(false);
  return (
    <div
      onMouseEnter={() => setGradient(true)}
      onMouseLeave={() => setGradient(false)}
      className={`max-w-sm w-full lg:max-w-full  p-6 sm:p-8 rounded-xl ${
        gradient
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          : "bg-gray-50"
      } transition-transform hover:scale-105 lg:h-auto flex-none bg-cover rounded text-center overflow-hidden`}
      style={{
        width: "351px",
        height: "269px",
        textAlign: "center",
        letterSpacing: "2%",
        lineHeight: "20px",
        fontWeight: 300,
        borderRadius: "15px",
        padding: "10px", 
        boxShadow: "0 4px 8px rgba(128, 128, 128, 0.5)", 
      }}
    >
      <div
        className={`${
          gradient ? "text-blue-600" : "text-white"
        } align-middle flex justify-center w-full`}
      >
        <img src="/images/homepage/Group 13.svg" />
      </div>

      <h2
        className={`${
          gradient ? "text-white" : "text-gray-900"
        } font-bold text-xl mb-2`}
      >
        {title}
      </h2>

      <p
        className={` ${gradient ? "text-white" : "text-gray-500"}`}
        style={{
          width: "263px",
          height: "80px",
        }}
      >
        {description}
      </p>

      <button
        className={`p-1 rounded-md font-small text-sm sm:text-base ${
          gradient
            ? "bg-white text-blue-600"
            : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
        }`}
        style={{
          width: "127px",
          height: "33px",
          fontSize: "12px",
          fontWeight: "12px",
        }}
      >
        LEARN MORE
      </button>
    </div>
  );
}
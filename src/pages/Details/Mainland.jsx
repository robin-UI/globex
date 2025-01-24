import React, { useState } from "react";
import FormModal from "../../components/utils/FormModal";

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

const BenefitCard = ({ title, description }) => (
  <div className="flex items-start space-x-4 mb-4 p-4 bg-white shadow-md rounded-lg">
    <ArrowRight className="text-blue-600 mt-1 flex-shrink-0" size={24} />
    <div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

function Mainland() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  // const handleClose = () => setOpen(false);

  const benefits = [
    {
      title: "Strategic Global Connectivity",
      description:
        "Leverage Dubai's strategic position as a global business hub, connecting your enterprise to major international markets and trade routes.",
    },
    {
      title: "Premium Business Districts",
      description:
        "Establish your presence in Dubai's prestigious commercial locations, offering unparalleled access to key business clusters and networking opportunities.",
    },
    {
      title: "Dual Market Integration",
      description:
        "Benefit from seamless access to both UAE's lucrative domestic market and international business opportunities through established trade channels.",
    },
    {
      title: "Unrestricted Capital Flow",
      description:
        "Enjoy complete financial freedom with no capital restrictions or profit repatriation limits, maximizing your business's financial potential.",
    },
    {
      title: "Diverse Talent Pool",
      description:
        "Access a rich multicultural workforce combining local expertise with international experience, driving innovation and business excellence.",
    },
    {
      title: "Streamlined Regulatory Framework",
      description:
        "Experience efficient government processes and transparent regulations, supported by advanced digital infrastructure and business-friendly policies.",
    },
    {
      title: "Scalable Business Operations",
      description:
        "Capitalize on unlimited expansion opportunities across various sectors and geographical locations within the UAE and beyond.",
    },
  ];

  return (
    <>
      <div className="max-w-full mx-auto p-6 bg-gray-50 pt-32 lg:px-24">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Why Dubai Mainland is Perfect for Your Business?
        </h2>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
        <div className="text-center mt-6 text-gray-700 italic">
          Trust Globex Incorporation for seamless Dubai mainland company formation. 
          Partner with us to transform your business vision into reality.
        </div>
      </div>
      <div className="max-w-full p-6 lg:px-24 bg-white shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Steps to Set Up a New Business in the UAE Mainland
        </h2>

        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            Our elite team of{" "}
            <span className="italic">
              legal experts, financial advisors, and business consultants
            </span>{" "}
            excel in facilitating diverse business establishments, from{" "}
            <span className="italic">
              trading enterprises to fully foreign-owned corporations
            </span>{" "}
            in the UAE mainland market.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            Our proven track record includes assisting countless entrepreneurs 
            and organizations globally in securing business licenses, establishing 
            physical presence, and building prosperous ventures in the UAE.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Select Business Activity
          </h3>
          <p className="text-gray-700">
            Our specialists will advise you on:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Specific business activities matching your requirements</li>
              <li>Suitable jurisdiction for your chosen activities</li>
              <li>Cost-effective options within your budget</li>
            </ul>
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium text-blue-700 mb-2">
            License Types We Offer
          </h4>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <ul className="list-disc list-inside">
                <li>Commercial Trading License</li>
                <li>Consultancy License</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc list-inside">
                <li>E-commerce License</li>
                <li>Real Estate License</li>
                <li>Manufacturing License</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-gray-800 font-medium">
            Ready to start your business journey in the UAE?
          </p>
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      <FormModal open={open} handleOpen={handleOpen} />
    </>
  );
}

export default Mainland;

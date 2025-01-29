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
  <div className="flex flex-col items-start p-4 bg-white shadow-md rounded-lg h-full">
    <div className="flex items-start space-x-4 mb-2">
      <ArrowRight className="text-blue-600 mt-1 flex-shrink-0" size={24} />
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    </div>
    <p className="text-gray-600 pl-10">{description}</p>
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
    {
      title: "Tax-Efficient Environment",
      description:
        "Benefit from UAE's favorable tax regime with zero corporate tax on most business activities and no personal income tax, maximizing your company's profitability.",
    },
    {
      title: "World-Class Infrastructure",
      description:
        "Operate in a city with cutting-edge infrastructure, including smart city initiatives, advanced telecommunications, and state-of-the-art logistics facilities.",
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden py-20 lg:py-32">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/20 to-transparent -skew-x-12 transform-gpu"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-blue-100/20 to-transparent -skew-y-12 transform-gpu"></div>

        <div className="relative container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Dubai Mainland is Perfect
              <span className="block text-blue-600 mt-2">
                for Your Business
              </span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="pt-6 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-0 right-0 w-full h-full bg-blue-50 rounded-bl-[100px] transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-right"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text with enhanced design */}
          <div className="relative mt-16 max-w-3xl mx-auto text-center">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-lg"></div>
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-200 rounded-full opacity-50 blur-lg"></div>
            <p className="relative z-10 text-lg text-gray-700 font-medium italic">
              Trust Globex Incorporation for seamless Dubai mainland company
              formation.
              <span className="block mt-2 text-blue-600">
                Partner with us to transform your business vision into reality.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden py-20 bg-gray-50">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-white -skew-x-12 transform-gpu translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-white -skew-y-12 transform-gpu"></div>
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Steps to Set Up a New Business
              <span className="block mt-2 text-blue-600">in the UAE Mainland</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our elite team of legal experts, financial advisors, and business consultants
              excel in facilitating diverse business establishments in the UAE mainland market.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Experience Card */}
              <div className="bg-white p-8 rounded-2xl group hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our proven track record includes assisting countless entrepreneurs globally in securing business licenses, establishing physical presence, and building prosperous ventures in the UAE.
                  </p>
                </div>
              </div>

              {/* Business Activity Selection */}
              <div className="bg-white p-8 rounded-2xl group hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mr-3 font-bold">1</span>
                  Select Business Activity
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Specific business activities matching your requirements",
                    "Suitable jurisdiction for your chosen activities",
                    "Cost-effective options within your budget"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mr-3 font-bold">2</span>
                License Types We Offer
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["Commercial Trading", "Consultancy"],
                  ["E-commerce", "Real Estate", "Manufacturing"]
                ].map((column, colIndex) => (
                  <div key={colIndex} className="space-y-4">
                    {column.map((license, index) => (
                      <div key={index} className="flex items-center space-x-3 group">
                        <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:w-3 transition-all duration-300"></div>
                        <span className="text-gray-600">{license} License</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <p className="text-gray-800 font-medium mb-4">
                  Ready to start your business journey in the UAE?
                </p>
                <button 
                  onClick={handleOpen}
                  className="px-8 py-3 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] text-white rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Gradient hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#377CFF] to-[#2BDEFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Button content */}
                  <span className="relative flex items-center">
                    Contact Us
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormModal open={open} handleOpen={handleOpen} />
    </>
  );
}

export default Mainland;

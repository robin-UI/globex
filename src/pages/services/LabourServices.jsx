import { useState } from "react";
import FormModal from "../../components/utils/FormModal";

function LabourServices() {
  const [openModal, setopenModal] = useState(false);
  const handleModal = () => setopenModal(!openModal);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-[url('/images/otherImages/labor-hero.jpg')] bg-cover bg-center"
            style={{ height: "100vh" }}
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center space-y-6 relative z-10">
            <div className="animate-fade-in-down">
              <h2 className=" font-semibold text-xl mb-4 drop-shadow-lg inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] relative z-10">
                  GLOBEX INCORPORATION
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA]/20 to-[#377CFF]/20 blur-xl -z-10 transform scale-150"></div>
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight drop-shadow-lg">
                Premier Labour Supply Services
                <span className="block text-4xl md:text-5xl mt-2 text-[#2BDEFA]">
                  in Dubai
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mt-6 drop-shadow-lg font-medium">
              Delivering excellence in workforce solutions since 2024
            </p>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="container mx-auto px-4 py-16 md:px-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                Your Trusted Manpower Partner Since 2004
              </h2>
              <p className="text-gray-600 leading-relaxed">
                GLOBEX INCORPORATION is a privately-owned company and a trusted
                manpower supply provider in the UAE. We pride ourselves on
                delivering swift, efficient, and global workforce solutions
                tailored to our clients' needs.
              </p>
              <button
                onClick={handleModal}
                className="bg-blue-600 px-8 py-3 hover:bg-blue-700 bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)] text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-600">15+</span>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-600">
                    1000+
                  </span>
                  <p className="text-gray-600 mt-2">Workers Deployed</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-600">100%</span>
                  <p className="text-gray-600 mt-2">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-600">24/7</span>
                  <p className="text-gray-600 mt-2">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-16 md:px-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Our Comprehensive Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Skilled Workforce
                </h3>
                <p className="text-gray-600">
                  Diverse and highly skilled workers sourced from various
                  countries, ready to meet your specific needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Complete Protection
                </h3>
                <p className="text-gray-600">
                  Comprehensive insurance coverage including WCP and medical
                  insurance for all employees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Reliable Logistics
                </h3>
                <p className="text-gray-600">
                  Efficient transportation facilities ensuring seamless pick-up
                  and drop-off at job sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormModal open={openModal} handleOpen={handleModal} />
    </>
  );
}

export default LabourServices;

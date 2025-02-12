import { useState } from "react";

function CommercialLicense() {
  const activities = [
    "Automobiles",
    "Computer Systems and Communication Equipment",
    "Contracting",
    "Foodstuffs",
    "Furniture",
    "Medical and Surgical Equipment",
    "Readymade Garments",
    "Software",
  ];

  const advantages = [
    "You can undertake up to ten allied commercial activities with a single Commercial License",
    "You are allowed to fully repatriate your capital and profits",
    "You can hire as many foreign workers as you want, as long as you have the commercial space to employ them",
    "You can import items from abroad and/or export them overseas",
  ];

  const requiredDocuments = [
    "Application form with company name in English & Arabic",
    "Original leasing contract for registered office",
    "Permission letter from Dubai municipality to use the office as a business address",
    "Department of Economic Development approval letter of the trade name",
    "Payment proof for the license",
    "Passport size color photos of the applicants",
    "NOC certificate",
    "Letter of intent of business",
    "Complete business plan",
    "Shared capital details",
    "Financial statements",
    "Notarized copy of Registry Identification form",
  ];
  const [openModal, setopenModal] = useState(false);
  const handleModal = () => setopenModal(!openModal);
  return (
    <section>
      <div className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-[#2BDEFA]/10 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-t from-[#377CFF]/10 to-transparent rounded-tr-full"></div>

        <div className="max-w-7xl mx-auto px-4 py-16 pt-28">
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF]">
                Commercial License
              </span>
              <span className="block text-2xl text-gray-600 mt-2">Dubai Free Zone</span>
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              This type of Trade License is issued to those who are into commercial trading, 
              covering a specific range of products and services in the UAE market.
            </p>
            <button
                onClick={handleModal}
                className="bg-blue-600 px-8 py-3 mt-5 hover:bg-blue-700 bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)] text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
              </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Activities */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Activities Covered
                  </h2>
                  <div className="grid gap-4">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                        <span className="text-[#377CFF] font-bold mr-4">{(index + 1).toString().padStart(2, '0')}</span>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Advantages */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Key Advantages
                  </h2>
                  <div className="space-y-4">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="group/item flex items-start p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center mr-4 group-hover/item:bg-[#377CFF] transition-colors duration-300">
                          <span className="text-[#377CFF] font-bold group-hover/item:text-white">{(index + 1).toString().padStart(2, '0')}</span>
                        </div>
                        <p className="text-gray-700">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Required Documents Section */}
          <div className="mt-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  Required Documents
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {requiredDocuments.map((document, index) => (
                    <div key={index} className="group/doc relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-xl opacity-0 group-hover/doc:opacity-5 transition-opacity duration-300"></div>
                      <div className="relative p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                        <div className="flex items-center">
                          <span className="text-[#377CFF] font-bold mr-3">{(index + 1).toString().padStart(2, '0')}</span>
                          <span className="text-gray-700">{document}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get License Section */}
      <section className="mt-24 relative px-4 lg:px-20 pb-20 overflow-x-hidden">
        {/* Decorative Elements */}
        <div className="absolute -right-20 top-0 w-40 h-40 bg-[#2BDEFA]/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-40 h-40 bg-[#377CFF]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">
              How to Get a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] ml-2">
                Commercial License Dubai
              </span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <span className="text-4xl font-bold text-[#2BDEFA]">01</span>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-3">Company Name Registration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Choose and verify your company name availability through our expert consultants. 
                      We'll help you search and secure your desired business name.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <span className="text-4xl font-bold text-[#377CFF]">02</span>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-3">License Application</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete the application process with proper documentation and fee payment. 
                      Fees vary based on activities and company structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Considerations */}
          <div className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-3xl opacity-5"></div>
            <div className="relative p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <svg className="w-6 h-6 text-[#377CFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Important Fee Considerations
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Higher number of business partners increases fees",
                  "More activities included in the Commercial License increases cost",
                  "Fees vary by emirate"
                ].map((item, index) => (
                  <div key={index} className="bg-white/80 p-4 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-[#377CFF]/10 flex items-center justify-center mr-3">
                        <span className="text-[#377CFF] font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Setup Consultant Section */}
      <section className="mt-24 relative px-4 lg:px-20 pb-20">
        <div className="relative group max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          <div className="relative bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Why Choose Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] ml-2">
                  Business Setup Services?
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-12 text-center">
                At Globex Incorporation, we combine expertise with dedication to ensure your 
                business setup journey is smooth and successful.
              </p>

              {/* Services Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Bookkeeping", icon: "📊" },
                  { title: "Accounting", icon: "💼" },
                  { title: "Audit Solutions", icon: "📈" }
                ].map((service, index) => (
                  <div key={index} className="group/service relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-xl opacity-0 group-hover/service:opacity-5 transition-opacity duration-300"></div>
                    <div className="relative p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 text-center">
                      <div className="text-3xl mb-3">{service.icon}</div>
                      <h3 className="font-semibold text-gray-800">{service.title}</h3>
                      {/* <div className="mt-4 opacity-0 group-hover/service:opacity-100 transition-opacity duration-300">
                        <button className="text-[#377CFF] font-medium hover:underline">
                          Learn More →
                        </button>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CommercialLicense;

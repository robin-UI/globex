import React from "react";
import FormModal from "../../../components/utils/FormModal";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-2xl font-bold text-gray-800 ${className}`}>
    {children}
  </h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const Check = () => (
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
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

function IndustrialLicense() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => setOpenModal(!openModal);

  const industrialActivities = [
    "Manufacturing of paper and/or paper-based products",
    "Production of bread on a commercial scale",
    "Anything involving the production or mixing of chemicals on a large scale",
    "Casting of metals",
    "Forging and/or assembly of machines / equipment / engines",
    "Packaging of food products, including bottling of carbonated drinks",
  ];

  const industrialActivitiesLeft = [
    "Raw materials processing",
    "Petroleum and metal extraction",
    "Fabric production & Textiles manufacturing",
    "The casting of metals such as iron & steel",
    "Appliances and machinery manufacturing",
    "Bread production and food products production",
    "Manufacturing of paper products",
    "Metal casing, containers & boxes manufacturing",
    "Structural steel, steel workshop and tool manufacturing",
    "Coating, insulations, seals & protection materials manufacturing",
    "Waste collection and treatment",
    "Manufacturing of wood, wood products and Furniture",
    "Adhesive & paper slitting",
  ];

  const industrialActivitiesRight = [
    "Glass industries & chinaware manufacturing",
    "Agricultural equipment & accessories manufacturing",
    "Lenses cutting & glass repairing",
    "Manufacture of gold and precious stones cutting",
    "Light aircraft manufacturing & maintenance",
    "Meat processing",
    "Manufacture of batteries",
    "Plastic industries manufacturing home appliances",
    "Air conditioning units assembly",
    "Advertising & decorative models manufacturing",
    "Production of petroleum products",
    "Manufacture of motor vehicles, motorcycles & its spare parts",
    "Processing like filling, segregating and packaging of products",
  ];

  return (
    <>
      <section className="relative h-[110vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="../images/otherImages/indLic.jpg"
            alt="UAE industrial license"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full container mx-auto px-4 lg:px-20 lg:pt-28">
          <div className="h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-12 w-full">
              {/* Left Column - Main Content */}
              <div className="space-y-8 text-white">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Industrial Manufacturing
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] mt-2">
                      License in Dubai
                    </span>
                  </h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-full mt-6"></div>
                </div>

                <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
                  An Industrial Manufacturing License in Dubai is granted for commercial activities 
                  of an industrial nature, such as manufacturing or refining of petrochemicals. 
                  Activities involving specialized plant equipment typically fall under this category.
                </p>

                {/* Key Activities Scrollable Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white/90">Key Industrial Activities</h3>
                  <div className="space-y-3 max-h-[200px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#377CFF] scrollbar-track-white/10">
                    {industrialActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="group flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-xl 
                                 hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] 
                                      flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-sm font-bold">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-white/90">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Requirements Card */}
              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 
                              hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <svg
                      className="w-6 h-6 text-[#2BDEFA] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Key Requirements
                  </h3>
                  <div className="space-y-4 max-h-[310px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#377CFF] scrollbar-track-white/10">
                    {[
                      "Necessary firefighting equipment with certification",
                      "Worker health protection plans",
                      "Appropriate electrical power connections",
                      "Failsafe electrical protection equipment",
                    ].map((req, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-white/10 rounded-xl 
                                 hover:bg-white/20 transition-colors duration-300"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] 
                                      flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-white/90 mt-1.5">{req}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] 
                                 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#377CFF]/20 
                                 transform hover:-translate-y-0.5 transition-all duration-300">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20 pt-16">
        {/* License Sanctions Card */}
        <div className="relative group col-span-full lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          <div className="relative h-full bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-6">
              Post-License Sanctions
            </h3>
            <div className="space-y-4">
              {[
                "Construction must start within six months",
                "DED permission required to start functioning",
                "Must notify authorities of operational changes",
                "Registration in Industrial Register required",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-[#377CFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ongoing Requirements Card */}
        <div className="relative group col-span-full lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          <div className="relative h-full bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-6">Ongoing Requirements</h3>
            <div className="space-y-4">
              {[
                "Maintain accurate worker records",
                "Ensure workers are qualified for machinery",
                "Proper use of imported materials",
                "Notify DED of Director appointments",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-[#2BDEFA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Requirements Card */}
        <div className="relative group col-span-full lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          <div className="relative h-full bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-6">Special Requirements</h3>
            <div className="p-4 bg-gradient-to-r from-[#2BDEFA]/10 to-[#377CFF]/10 rounded-xl">
              <p className="text-gray-800 font-medium mb-2">
                Abu Dhabi Requirement:
              </p>
              <p className="text-gray-700">
                25% of all workers must be of Emirati nationality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section with Image */}
      <section className="px-4 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2BDEFA]/5 to-[#377CFF]/5 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Image */}
              <div className="lg:w-1/2">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <img
                    src="../images/otherImages/requir.jpg"
                    alt="UAE industrial license"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#2BDEFA]/10 rounded-full blur-2xl"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#377CFF]/10 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Requirements for
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF]">
                      Industrial Manufacturing License
                    </span>
                  </h3>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-full"></div>
                </div>

                <div className="space-y-6">
                  {[
                    "Detailed report about industrial establishment",
                    "Technical information & production tools details",
                    "Estimated cost of production",
                    "Proof of funds or financial backing",
                    "Employee accommodation plans",
                  ].map((req, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 bg-white/60 p-4 rounded-xl hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 mt-1">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Report Details Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 text-[#2BDEFA] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Financial Documentation
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Your report must detail financing plans, including proof of
                  funds through bank statements or UAE financial institution
                  guarantees.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 text-[#377CFF] mr-2"
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
                  Employee Requirements
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Documentation must include employee hiring plans and facility
                  accommodation details, with Municipality approval.
                </p>
              </div>
            </div>
          </div>

          {/* Industrial Activities Grid */}
          <div className="mt-16">
            <h4 className="text-2xl font-bold mb-8 text-center">
              Comprehensive List of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] ml-2">
                Industrial Activities
              </span>
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...industrialActivitiesLeft, ...industrialActivitiesRight].map(
                (activity, index) => (
                  <div
                    key={index}
                    className="group relative bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#377CFF]/10 flex items-center justify-center group-hover:bg-[#377CFF] transition-colors duration-300">
                        <Check className="w-4 h-4 text-[#377CFF] group-hover:text-white" />
                      </div>
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16">
            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] opacity-5"></div>
              <div className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <h3 className="text-3xl font-bold">
                    Need Assistance with Your
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF]">
                      Industrial License?
                    </span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our team of specialists is here to guide you through the
                    entire process of obtaining your Industrial Manufacturing
                    License in the UAE.
                  </p>
                  <button onClick={()=> handleModal()} className="px-8 py-4 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] text-white rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                    Contact Our Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <FormModal open={openModal} handleOpen={handleModal} />
    </>
  );
}

export default IndustrialLicense;

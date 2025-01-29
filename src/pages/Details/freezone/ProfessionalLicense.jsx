// import React from "react";

const ProfessionalLicense = () => {
  const activities = [
    "Accountants, Auditors and Financial Advisors",
    "Accounting and Auditing Companies",
    "Advertising professionals and Entertainment Artists",
    "Architectural Consultants",
    "Beauty Salons",
    "Business Consultants",
    "Carpentry and Artisan Activities",
    "Computer Graphic Design",
    "Consultancy Services",
    "Document Clearing",
    "Health and Medical Services",
    "Information Technology Services",
    "Internet and Web Design Services",
    "Lawyers and Legal Advisors",
    "Management Consultancy",
    "Medical Representatives",
    "Printing and Publishing",
    "Teachers and Educational Professors",
    "Technical Services",
    "Security Services",
  ];

  const benefits = [
    "100% foreign ownership allowed",
    "No corporate or personal income taxes",
    "100% repatriation of capital and profits allowed",
    "Easy renewal of Business License",
    "Ease of doing business",
    "Stable business environment",
    "Access to a wide market",
  ];

  const requiredDocuments = [
    "Copy of passport",
    "Copy of visa",
    "Emirates ID, if already resident in the United Arab Emirates",
    "Copies of educational and professional certifications",
    "Two passport-sized photographs",
    "Copy of Jinsiyya or Muwatana of the Local Service Agent",
    "Copy of Ejari or registered Tenancy Contract for your office",
  ];
  return (
    <div>
      <section className="relative h-[1010px] overflow-hidden pt-1">
        {/* Background with proper positioning */}
        <div
          className="absolute -left-36 inset-0 bg-cover bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: "url('/images/otherImages/proLicance.jpg')",
            backgroundPosition: "20% center",
            backgroundSize: "auto 100%",
          }}
        />

        {/* Gradient Overlay - Adjusted to give more space for the image */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white/90"
          style={{ left: "10%" }}
        ></div>

        {/* Content Container - Moved further right */}
        <div className="relative h-full container mx-auto px-4 lg:px-2">
          <div
            className="absolute right-0 lg:right-12 top-1/2 -translate-y-1/2 max-w-2xl text-right"
            style={{ marginRight: "2%" }}
          >
            {/* Decorative Element */}
            <div className="mb-4 flex justify-end">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Professional
              </span>
              <span className="block text-3xl lg:text-4xl mt-4 text-gray-900 font-semibold">
                License in Dubai
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              Start your professional journey in Dubai with our <br />{" "}
              comprehensive licensing solutions.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group">
              Get Started
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
            </button>

            {/* Improved Features/Benefits Section */}
            <div className="mt-12">
              <div className="inline-grid grid-cols-2 gap-x-12 gap-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                {[
                  {
                    number: "01",
                    text: "Quick Processing",
                    description: "Fast-track your license application",
                  },
                  {
                    number: "02",
                    text: "Expert Guidance",
                    description: "Professional consultation throughout",
                  },
                  {
                    number: "03",
                    text: "100% Compliance",
                    description: "Full regulatory adherence",
                  },
                  {
                    number: "04",
                    text: "Dedicated Support",
                    description: "24/7 customer assistance",
                  },
                ].map((feature) => (
                  <div
                    key={feature.number}
                    className="text-right group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-end space-x-3">
                      <div>
                        <div className="text-sm font-bold text-blue-600 mb-1">
                          {feature.number}
                        </div>
                        <div className="font-semibold text-gray-900 text-lg">
                          {feature.text}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {feature.description}
                        </div>
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Refined Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-16 bg-gradient-to-t from-white/80 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30"></div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section with Animation */}
        <div className="relative mb-24 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 to-white p-8 lg:p-12">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)] opacity-10 -skew-x-12 transform-gpu"></div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6 relative">
            What is a Professional License in Dubai?
            <div className="absolute -left-6 top-0 w-1 h-full bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)]"></div>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            A Professional License is granted to professionals who offer
            professional services in the United Arab Emirates. This includes
            architects, product design experts, interior designers, web
            designers, UI/UX designers, and other professionals offering their
            services.
          </p>
        </div>

        {/* Activities Grid with Hover Effects */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Activities Covered Under
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF]">
              Dubai Professional License
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-gray-200 group-hover:text-[#2BDEFA] transition-colors duration-300">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {activity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section with Cards */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Benefits of Professional License
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative group">
                {/* Gradient background - hidden by default, shown on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>

                {/* Card Content */}
                <div className="relative bg-white p-6 rounded-2xl border border-gray-100 group-hover:shadow-lg group-hover:border-transparent transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    {/* Number indicator with hover effect */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                      <span className="text-[#377CFF] font-bold">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>

                    {/* Benefit text with hover effect */}
                    <p className="text-gray-700 mt-2 group-hover:text-gray-900 transition-colors duration-300">
                      {benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section with Timeline Style */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Required Documents</h2>
          <div className="space-y-6">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-px h-full bg-gray-200 group-hover:bg-gradient-to-b from-[#2BDEFA] to-[#377CFF] transition-colors duration-300"></div>
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-white border-2 border-[#377CFF] group-hover:bg-[#377CFF] transition-colors duration-300"></div>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {doc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Renewal Section with Modern Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2BDEFA]/10 to-[#377CFF]/10 p-8 lg:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2BDEFA]/20 to-[#377CFF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#377CFF]/20 to-[#2BDEFA]/20 rounded-full blur-3xl"></div>

          <h2 className="text-3xl font-bold mb-6 relative">
            Renewal of Professional License
          </h2>
          <div className="space-y-4 relative">
            <p className="text-gray-700 leading-relaxed">
              Your Dubai Professional License needs to be renewed every year.
              When doing so, it is important that your training credentials are
              still valid. You can apply for renewal one month before expiration
              to extend validity for another year.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Applying for renewal after expiration may incur late penalties.
              You cannot continue business operations until your Professional
              License has been renewed by the Department of Economic Development
              in your emirate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalLicense;

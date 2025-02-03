function ProServices() {
  return (
    <div>
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: "url('../images/otherImages/proService.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 text-transparent bg-clip-text font-extrabold"
              style={{
                fontWeight: 900,
                letterSpacing: "2px",
              }}
            >
              Professional PRO <br /> Services in UAE
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
              Acquire the most efficient and cost-effective Public Relation
              Officer services in the UAE
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 text-transparent bg-clip-text">
            Benefits of PRO Services in UAE
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Flexible Options for Your Business
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Starting a business in the UAE requires investors to navigate various legal documentation processes. Choose between hiring an in-house PRO (Public Relations Officer) or outsourcing PRO services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Comprehensive Legal Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A skilled PRO can assist with legal formalities such as visa processing, document attestation, and other corporate requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Enhanced Business Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Outsourcing PRO services in the UAE streamlines the business setup process, allowing you to focus on growth and operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Efficient Documentation Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A professional PRO agent ensures efficient documentation handling, saving you time and resources.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Expert Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  If you're establishing a business in the UAE or KSA, having an expert PRO team like Business Link can help you manage legal formalities seamlessly. Their expertise ensures a smooth and hassle-free experience.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]" 
                src="../images/otherImages/requir.jpg" 
                alt="PRO Services in UAE" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProServices;

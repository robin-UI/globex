import { useState } from "react";

function SignupSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="container mx-auto mt-16 sm:mt-32 px-4 sm:px-6 lg:px-8">
      {/* Special Offer Section */}
      <div className="relative ">
        <div className="w-full bg-gradient-to-r from-teal-400 to-blue-600 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 pl-14 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex items-center justify-between">
              {/* Left Column - Text Content */}
              <div className="text-white z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Sign up for
                  <br />
                  Special Offer
                </h2>
              </div>

              <div>
                <img
                  src="./images/homepage/business-woman.png"
                  alt="Special Offer"
                  className="w-full max-w-2xl rounded-lg z-50"
                  style={{
                    width: "auto",
                    // height: "50vh",
                    position: "absolute",
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: "0px"
                    // transform: "translate(0%, 0%)",
                  }}
                />
              </div>

              {/* Right Column - Image and Text/Form */}

              {/* Text and Form */}
              <div className="">
                <p className="text-lg md:text-xl text-white/90 relative z-20">
                  Seasoned advisors analyze your needs <br /> efficiently and
                  devise solutions to <br /> protect your interests.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md pt-4 relative z-20"
                >
                  <div className="flex flex-col sm:flex-row border bottom-1 rounded-full p-1 bg-[#FFFFFF33] focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-grow px-6 py-3 rounded-full text-white placeholder-white bg-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-white text-[#126CD7] rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                             linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* Government Bodies Section */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Text Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold">
              UAE Government Bodies
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mt-4">
              <span className="text-blue-500">We</span> work with
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-7 mt-4">
              Globex simplifies company setup with needs assessment, legal
              registration, and compliance. Our tailored solutions in
              accounting, marketing, and IT support sustainable growth.
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              "../images/homepage/amer.png",
              "../images/homepage/dubai-muncipality.png",
              "../images/homepage/trs-heel.png",
              "../images/homepage/dubai-economy.png",
              "../images/homepage/uae.png",
              "../images/homepage/rera.png",
            ].map((src, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="w-20 sm:w-24 lg:w-32"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupSection;
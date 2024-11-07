import { useState } from "react";

function SignupSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
  };
  return (
    <section
      className="container mx-auto"
      style={{ height: "402px !important", transform: "translate(0%, 0%)" }}
    >
      <div className="relative overflow-hidden">
        <div className="w-full bg-gradient-to-r from-teal-400 to-blue-600 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex items-center justify-between">
              {/* Left Column - Text Content */}
              <div className="text-white space-y-6 relative z-10">
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
                  className="w-full max-w-xs rounded-lg"
                  style={{
                    width: "auto",
                    // height: "50vh",
                    position: "absolute",
                    top: "-30%",
                    right: "570px", // Adjust this value to control how much the image overflows
                    // transform: "translate(0%, 0%)",
                  }}
                />
              </div>

              {/* Right Column - Image and Text/Form */}

              {/* Text and Form */}
              <div className="mr-4">
                <p className="text-lg md:text-xl text-white/90 relative z-20">
                  Seasoned advisors analyze your needs <br /> efficiently and devise
                  solutions to <br /> protect your interests.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md pt-4 relative z-20"
                >
                  <div className="flex flex-col sm:flex-row gap-4 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-grow px-6 py-3 rounded-full text-gray-800 placeholder-gray-500 "
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap"
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

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Government Bodies Section */}
          <div className="">
            <h2 className="text-5xl font-bold mb-2">UAE Government Bodies</h2>
            <h3 className="text-5xl font-bold mb-8">
              <span className="text-blue-500">We</span> work with
            </h3>
            <p className="text-gray-600 text-lg leading-8  max-w-3xl lin">
              Globex simplifies company setup with needs assessment, legal
              registration, and compliance. Our tailored solutions in
              accounting, marketing, and IT support sustainable growth.
            </p>
            {/* <GovernmentPartners /> */}
          </div>

          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="space-y-4">
              <img src="../images/homepage/amer.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/dubai-muncipality.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/trs-heel.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/dubai-economy.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/uae.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/rera.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupSection;

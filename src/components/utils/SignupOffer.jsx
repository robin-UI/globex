import { useState } from "react";

function SignupOffer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
  };

  return (
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
                className=" max-w-80 rounded-lg z-20"
                style={{
                //   width: "auto",
                  // height: "50vh",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "0px",
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
                className=" max-w-[340px] pt-4 relative z-20"
              >
                <div className="flex flex-col sm:flex-row border bottom-1 rounded-full p-1 bg-[#FFFFFF33] focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow w-full  pl-6 py-3 rounded-full text-white placeholder-white bg-transparent"
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
  );
}

export default SignupOffer;

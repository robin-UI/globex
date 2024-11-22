function OurCompany() {
  return (
    <>
      <section className="gradientBackground px-24 py-24">
        <div className="w-1/2">
          <h2 className=" font-semibold text-[64px] text-white leading-[66.02px] mb-[47px]">
            Securing a <br /> Business License
            <br /> in Dubai
          </h2>

          <p className="font-normal text-base text-white mb-[47px]">
            Are you considering starting a company in Dubai? Every business{" "}
            <br />
            needs a license, and savvy entrepreneurs rely on Emirates First for{" "}
            <br />
            comprehensive licensing support. We assist a wide range of <br />
            industries, from startups to established multinational corporations,
            <br />
            to ensure your business license is obtained efficiently and <br />
            effortlessly. <br />
          </p>

          <button className="cursor-pointer px-14 py-2 text-base rounded-lg bg-white">
            Book Free Consultation
          </button>
        </div>
        <div className="w-1/2"></div>
      </section>

      <section className="px-20 py-24 bg-[#F8F8F8]">
        <h2 className="text-[42px] leading-[54px] text-center font-semibold mb-[70px]">
          Business licenses issued by <br />
          Department of Economic Development in Dubai
        </h2>

        <div className="flex gap-4">
          <div className="rounded-lg gradientBackground ">
            <div className="px-9 pt-12 mb-6">
              <h2 className="text-[20.87px] leading-[30.05px] text-white font-semibold mb-5">
                Commercial License in <br />
                Dubai, UAE
              </h2>
              <p className="text-xs leading-[23.37px] text-white">
                A business license is necessary for conducting business in the
                UAE because it ensures compliance with local regulations and
                permits legal operation in the market.
              </p>
            </div>

            <button className="bg-white text-[#377CFF] font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px] ">
              Explore more <img src="../images/homepage/our1.png" alt="" />
            </button>
          </div>

          <div
            className="rounded-lg "
            style={{ boxShadow: "0px 0px 4px 4px #5A9CFE14" }}
          >
            <div className="px-9 pt-12 mb-6">
              <h2 className="text-[20.87px] leading-[30.05px] text-black font-semibold mb-5">
                Professional License in <br />
                Dubai, UAE
              </h2>
              <p className="text-xs leading-[23.37px] text-[#353535]">
                A business license is necessary for conducting business in the
                UAE because it ensures compliance with local regulations and
                permits legal operation in the market.
              </p>
            </div>

            <button className="gradientBackground text-white font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px] ">
              Explore more <img src="../images/homepage/our2.png" alt="" />
            </button>
          </div>

          <div className="rounded-lg gradientBackground ">
            <div className="px-9 pt-12 mb-6">
              <h2 className="text-[20.87px] leading-[30.05px] text-white font-semibold mb-5">
                Commercial License in <br />
                Dubai, UAE
              </h2>
              <p className="text-xs leading-[23.37px] text-white">
                A business license is necessary for conducting business in the
                UAE because it ensures compliance with local regulations and
                permits legal operation in the market.
              </p>
            </div>

            <button className="bg-white text-[#377CFF] font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px] ">
              Explore more <img src="../images/homepage/our1.png" alt="" />
            </button>
          </div>

          <div
            className="rounded-lg "
            style={{ boxShadow: "0px 0px 4px 4px #5A9CFE14" }}
          >
            <div className="px-9 pt-12 mb-6">
              <h2 className="text-[20.87px] leading-[30.05px] text-black font-semibold mb-5">
                Professional License in <br />
                Dubai, UAE
              </h2>
              <p className="text-xs leading-[23.37px] text-[#353535]">
                A business license is necessary for conducting business in the
                UAE because it ensures compliance with local regulations and
                permits legal operation in the market.
              </p>
            </div>

            <button className="gradientBackground text-white font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px] ">
              Explore more <img src="../images/homepage/our2.png" alt="" />
            </button>
          </div>
        </div>
      </section>

      <section
        className="container mx-auto mt-32 pb-32"
        style={{ height: "402px !important", transform: "translate(0%, 0%)" }}
      >
        <div className="relative mb-24">
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
                    // onSubmit={handleSubmit}
                    className="w-full max-w-md pt-4 relative z-20"
                  >
                    <div className="flex flex-col sm:flex-row border bottom-1 rounded-full p-1 bg-[#FFFFFF33] focus:outline-none focus:ring-2 focus:ring-blue-300">
                      <input
                        type="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
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

        <div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[42px] font-semibold leading-[54px] mb-8">Why Dubai</h2>
              <p className="text-[#353535] text-base font-medium tracking-widest leading-6">
                Dubai is located at the crossroads of the world, providing
                access to both hemispheres <br /> through air and sea routes. With a
                growing and diversifying economy, along with a <br /> workforce of
                varying skill levels, Dubai is an ideal destination for
                entrepreneurs looking <br /> to start or expand their businesses.
                Emirates First’s team of business setup <br /> consultants in Dubai
                offers comprehensive support for all types of licensing, whether <br />
                your industry is tourism or trade. We deliver business setup
                services across Dubai and <br /> in all the free zones of the UAE.
              </p>
            </div>

            <div className="w-[427px] h-[235px] bg-[url('./images/homepage/whyDubai.png')]" ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCompany;
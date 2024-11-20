import SignupSection from "../Home/Components/SignupSection";

function OurCompany() {
  return (
    <>
      <section className="gradientBackground px-6 md:px-24 py-12 md:py-24">
        <div className="md:flex">
          <div className="md:w-1/2">
            <h2 className="font-semibold text-4xl md:text-[64px] text-white leading-tight mb-6 md:mb-[47px]">
              Securing a <br /> Business License
              <br /> in Dubai
            </h2>
            <p className="font-normal text-sm md:text-base text-white mb-6 md:mb-[47px]">
              Are you considering starting a company in Dubai? Every business{" "}
              needs a license, and savvy entrepreneurs rely on Emirates First
              for comprehensive licensing support. We assist a wide range of{" "}
              industries, from startups to established multinational
              corporations, to ensure your business license is obtained
              efficiently and effortlessly.
            </p>
            <button className="cursor-pointer px-6 md:px-14 py-2 text-sm md:text-base rounded-lg bg-white">
              Book Free Consultation
            </button>
          </div>
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </section>


      {/* Business licenses */}

      <section className="px-6 md:px-20 py-12 md:py-24 bg-[#F8F8F8]">
        <h2 className="text-2xl md:text-[42px] leading-tight md:leading-[54px] text-center font-semibold mb-12 md:mb-[70px]">
          Business licenses issued by <br className="hidden md:block" />
          Department of Economic Development in Dubai
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Commercial License",
            "Professional License",
            "Commercial License",
            "Professional License"
          ].map((license, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                index % 2 === 0 ? "gradientBackground" : "bg-white shadow-md"
              }`}
            >
              <div className="px-9 pt-12 mb-6">
                <h2  className={`text-lg md:text-[20.87px] leading-tight md:leading-[30.05px] ${
                    index % 2 === 0 ? "text-white" : "text-black"
                  } font-semibold mb-5`}>
                   {license} in <br />
                   Dubai, UAE
                </h2>

                <p  className={`text-xs leading-relaxed ${
                    index % 2 === 0 ? "text-white" : "text-[#353535]"
                  }`}>
                  A business license is necessary for conducting business in the
                  UAE because it ensures compliance with local regulations and
                  permits legal operation in the market.
                </p>
              </div>


              <button 
              // className="bg-white text-[#377CFF] font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px]" 
                 className={`flex items-center ${
                  index % 2 === 0
                    ? "bg-white text-[#377CFF]"
                    : "gradientBackground text-white"
                } font-bold rounded-[0px_30px_30px_0px] gap-4 items-center pl-4 mb-[37px]`}>
              Explore more <img src="../images/homepage/our1.png" alt="" />
            </button>
            </div>
          ))}
        </div>
      </section>



      {/* Sign up for special Offer */}
     <SignupSection/>
    </>
  );
}

export default OurCompany;

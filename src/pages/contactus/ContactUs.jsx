function ContactUs() {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="h-screen w-screen flex items-center justify-center flex-col bg-[url('./images/homepage/contactusBG.png')] bg-cover bg-center"> */}
      <section
        className="flex items-center justify-center flex-col relative"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('./images/homepage/contactusBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "795px",
        }}
      >
        <h1 className="text-[50px] sm:text-[70px] lg:text-[108px] font-semibold text-white text-center">
          Contact Us
        </h1>
        <p className="text-white text-lg sm:text-xl text-center">
          Let’s talk about your dream project
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 sm:px-12 lg:px-20 py-12 sm:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mb-24">
          {/* Left Content */}
          <div className="w-full lg:w-[55%]">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[48px] lg:leading-[52px] mb-6 lg:mb-11">
              Keep in <br /> Touch
            </h2>
            <p className="text-sm sm:text-base">
              Globex Incorporation is a young enterprise admirable in assisting
              aspiring entrepreneurs to set up business in Burjuman Business
              Tower Sheikh Khalifa Bin Zayed St Al Mankhool Dubai, United Arab
              Emirates, UAE.
            </p>
          </div>

          {/* Form Section */}
          <div
            className="rounded-xl bg-white px-6 py-8 sm:px-8 sm:py-12 w-full lg:w-[447px]"
            style={{ boxShadow: "0px 0px 4px 4px #5A9CFE14" }}
          >
            <div className="flex flex-col gap-6 sm:gap-9 mb-8 sm:mb-12">
              {/* Name Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-0 border-b border-b-gray-400 px-2 py-1 text-[#377CFF] placeholder-black"
                />
                <img
                  src="./images/homepage/nameN.png"
                  alt=""
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent"
                />
              </div>

              {/* Email Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border-0 border-b border-b-gray-400 px-2 py-1 text-[#377CFF] placeholder-black"
                />
                <img
                  src="./images/homepage/emailC.png"
                  alt=""
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent"
                />
              </div>

              {/* Phone Number Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border-0 border-b border-b-gray-400 px-2 py-1 text-[#377CFF] placeholder-black"
                />
                <img
                  src="./images/homepage/callBlue.png"
                  alt=""
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent"
                />
              </div>

              {/* Looking For Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="What are you looking for"
                  className="text-[#377CFF] placeholder-black w-full"
                />
                <img
                  src="./images/homepage/downarrowc.png"
                  alt=""
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center w-full">
              <button className="gradientBackground text-white px-8 py-3 sm:px-9 sm:py-4 rounded-full">
                Keep in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Individual Card */}
          {[
            {
              icon: "mapc.png",
              title: "Reach us",
              description: "PO Box 16122, Collins Street Victoria 8007, Dubai",
              button: "View on Google Map",
            },
            {
              icon: "callc.png",
              title: "Call us",
              description: "Monday - Friday\n08 am - 05 pm",
              button: "+971 564 000 123",
            },
            {
              icon: "emailc.png",
              title: "Mail us",
              description: "Have a business idea?\nLet’s work on it.",
              button: "info@globexdubai.in",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="px-6 py-8 rounded-lg w-full sm:w-[287px] bg-white"
              style={{ boxShadow: "0px 0px 0px 2.25px #5A9CFE1F" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 sm:mb-6"
                style={{ boxShadow: "0px 0px 0px 2.25px #5A9CFE1F" }}
              >
                <img src={`./images/homepage/${card.icon}`} alt="" />
              </div>
              <h4 className="text-lg sm:text-[21px] font-bold mb-4 sm:mb-6">
                {card.title}
              </h4>
              <p className="text-[#353535] text-sm sm:text-base mb-4 sm:mb-5 whitespace-pre-line">
                {card.description}
              </p>
              <div className="flex justify-center w-full">
                <button
                  className="px-6 py-2 sm:px-8 sm:py-2 rounded-lg w-full"
                  style={{ boxShadow: "0px 0px 0px 2.25px #5A9CFE1F" }}
                >
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section>
        <img
          src="./images/homepage/mapC.png"
          alt=""
          className="w-full h-auto"
        />
      </section>
    </>
  );
}

export default ContactUs;

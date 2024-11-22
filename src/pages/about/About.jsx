function About() {
  return (
    <>
      <section
        className="w-full h-72 flex items-center justify-center flex-col relative"
        style={{
          backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('./images/homepage/contactusBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "795px",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white text-6xl font-semibold">About us</h1>
          <p className="text-white text-xl">
            Globex: From a bold vision to a global leader
          </p>
        </div>
      </section>
      <section className="">
        <div className="py-14 px-8">
          <div className="mb-5">
            <h2 className="text-center text-xl font-semibold leading-7 mb-7">
              Globex started because the <br /> market needed a key player
            </h2>
            <p className=" text-[#353535] leading-7 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Sed auctor, magna vel convallis
              fermentum, nulla nisi bibendum nisl, a varius elit elit id turpis.
              Curabitur tincidunt quam vitae justo condimentum, sit amet viverra
              ligula egestas. Fusce nec orci id nisi scelerisque dignissim non
              sit amet odio.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="./images/homepage/aboutImage.png" alt="" />
          </div>
        </div>
      </section>

      <section
        className="p-4"
        style={{
          background:
            "linear-gradient(298.19deg, #2BDEFA -14.15%, #377CFF 68.52%)",
        }}
      >
        <h1 className="text-2xl text-white font-semibold">Core Values</h1>
        <hr className="mt-4 mb-6 border-[#FFFFFF32] border-[1px]" />
        <div className="flex flex-col gap-7 mb-6">
          <div className="flex flex-col gap-1">
            <div className="h-10 w-10 p-2 rounded-lg bg-[#FFFFFF32]">
              <img
                className="w-full h-full object-contain"
                src="./images/homepage/quality.png"
                alt=""
              />
            </div>
            <h4 className="font-bold text-base text-white">Quality</h4>
            <p className="text-sm text-white leading-6">
              We are committed to delivering top-notch services that not only
              meet but surpass our clients expectations.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-10 w-10 p-2 rounded-lg bg-[#FFFFFF32]">
              <img
                className="w-full h-full object-contain"
                src="./images/homepage/integrity.png"
                alt=""
              />
            </div>
            <h4 className="font-bold text-base text-white">Integrity</h4>
            <p className="text-sm text-white leading-6">
              We embed integrity into every facet of our services, striving to
              earn and maintain the trust of our clients.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="h-10 w-10 p-2 rounded-lg bg-[#FFFFFF32]">
              <img
                className="w-full h-full object-contain"
                src="./images/homepage/teamwork.png"
                alt=""
              />
            </div>
            <h4 className="font-bold text-base text-white">Teamwork</h4>
            <p className="text-sm text-white leading-6">
              We are committed to delivering top-notch services that not only
              meet but surpass our clients expectations.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="h-10 w-10 p-2 rounded-lg bg-[#FFFFFF32]">
              <img
                src="./images/homepage/competence.png"
                alt="Competence"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="font-bold text-base text-white">Quality</h4>
            <p className="text-sm text-white leading-6">
              We continuously update our processes and systems to ensure
              efficiency and timely delivery for our valued clients.
            </p>
          </div>
        </div>

        <img className="w-full " src="./images/homepage/coreteam.png" alt="" />
      </section>

      <section className="p-6">
        <h2 className="text-center text-xl font-semibold mb-7">
          Empowering Your Business <br />
          Journey to Success
        </h2>

        <div className="flex justify-center items-start gap-2 w-full mb-5">
          <img
            className="w-10 h-10 "
            src="./images/homepage/ourVision.png"
            alt=""
          />
          <div>
            <h4 className="text-base font-semibold text-black mb-2">
              Our Mission
            </h4>
            <p className="text-[#353535] text-[13px] leading-6">
              To become the industry leader in supporting businesses with setup
              and company formation in the UAE, while offering additional
              value-added services to help them achieve their goals.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-start gap-2 w-full ">
          <img
            className="w-10 h-10 "
            src="./images/homepage/ourMission.png"
            alt=""
          />
          <div>
            <h4 className="text-base font-semibold text-black mb-2">
              Our Vision
            </h4>
            <p className="text-[#353535] text-[13px] leading-6">
              To become the industry leader in supporting businesses with setup
              and company formation in the UAE, while offering additional
              value-added services to help them achieve their goals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

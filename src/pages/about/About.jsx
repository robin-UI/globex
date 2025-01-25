function About() {
  const coreValue = [
    {
      title: "Quality",
      text: "We are committed to delivering top-notch services that not only meet but surpass our clients expectations.",
      img: "./images/homepage/quality.svg",
    },
    {
      title: "Integrity",
      text: "We embed integrity into every facet of our services, striving to earn and maintain the trust of our clients.",
      img: "./images/homepage/integrity.svg",
    },
    {
      title: "Teamwork",
      text: "We are committed to delivering top-notch services that not only meet but surpass our clients expectations.",
      img: "./images/homepage/teamwork.svg",
    },
    {
      title: "Competence",
      text: "We continuously update our processes and systems to ensure efficiency and timely delivery for our valued clients.",
      img: "./images/homepage/competence.svg",
    },
  ];
  return (
    <>
      <section
        className="w-full h-72 lg:h-screen flex items-center justify-center flex-col relative"
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
        <div className="py-14 px-8 flex lg:items-center lg:flex-row-reverse flex-col ">
          <div className="mb-5 lg:w-1/2">
            <h2 className="lg:text-left text-center lg:text-4xl text-xl font-semibold leading-7 lg:leading-[54px] mb-7">
              Globex started because the <br /> market needed a key player
            </h2>
            <p className="lg:text-left text-[#353535] leading-7 text-center lg:text-lg">
              At Globex Incorporation, we are dedicated to providing exceptional
              business solutions tailored to your unique needs. With years of
              experience in the industry, our team of experts is here to guide
              you through every step of your business journey, from initial
              setup to ongoing support. <br />
              Our mission is to empower businesses by delivering innovative
              services that drive growth and success. We pride ourselves on our
              commitment to quality, integrity, and customer satisfaction.
            </p>
          </div>
          <div className="flex items-center justify-center  lg:w-1/2">
            <img
              src="./images/homepage/aboutImage.png"
              alt=""
              className="lg:h-[70%] lg:w-[70%]"
            />
          </div>
        </div>
      </section>

      <section
        className="p-4 lg:px-28"
        style={{
          background:
            "linear-gradient(298.19deg, #2BDEFA -14.15%, #377CFF 68.52%)",
        }}
      >
        <h1 className="text-2xl lg:text-[44px] text-white font-semibold">
          Core Values
        </h1>
        <hr className="mt-4 mb-6 border-[#FFFFFF32] border-[1px] lg:my-11" />

        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-10 lg:gap-28">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-7 mb-6">
            {coreValue.map((e, i) => (
              <div className="flex flex-col gap-1" key={i + 1}>
                <div className="h-16 lg:h-26 w-16 lg:w-26 p-2 mb-2 rounded-lg">
                  <img
                    className="w-full h-full object-contain"
                    src={e.img}
                    alt=""
                  />
                </div>
                <h4 className="font-bold text-base text-white lg:text-2xl">
                  {e.title}
                </h4>
                <p className="text-sm text-white leading-6 lg:text-lg lg:leading-8">
                  {e.text}
                </p>
              </div>
            ))}
          </div>

          <img
            className="w-full lg:w-[420px] rounded-lg"
            src="./images/homepage/coreteam1.jpeg"
            alt=""
          />
          {/* <img
            className="w-full "
            src="./images/homepage/coreteam.png"
            alt=""
          /> */}
        </div>
      </section>

      <section className="p-6 lg:px-28 lg:pb-60 lg:pt-40">
        <h2 className="text-center text-xl lg:text-5xl lg:leading-[54px] font-semibold mb-7 lg:mb-24">
          Empowering Your Business <br />
          Journey to Success
        </h2>

        <div className="flex flex-col lg:flex-row lg: gap-10 ">
          <div className="flex justify-center items-start gap-2 w-full mb-5">
            <img
              className="w-10 h-10 lg:w-24 lg:h-24"
              src="./images/homepage/OurMission1.svg"
              alt=""
            />
            <div>
              <h4 className="text-base lg:text-2xl font-semibold text-black mb-2">
                Our Mission
              </h4>
              <p className="text-[#353535] text-[13px] lg:text-[18px] leading-6 lg:leading-[30px]">
                To become the industry leader in supporting businesses with
                setup and company formation in the UAE, while offering
                additional value-added services to help them achieve their
                goals.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-start gap-2 w-full ">
            <img
              className="w-10 h-10 lg:w-24 lg:h-24"
              src="./images/homepage/OurVision1.svg"
              alt=""
            />
            <div>
              <h4 className="text-base lg:text-2xl font-semibold text-black mb-2">
                Our Vision
              </h4>
              <p className="text-[#353535] text-[13px] lg:text-[18px] leading-6 lg:leading-[30px]">
                To become the industry leader in supporting businesses with
                setup and company formation in the UAE, while offering
                additional value-added services to help them achieve their
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;


function ContactUs() {
  return (
    <>
    <section className="h-screen w-screen flex items-center justify-center flex-col bg-[url('./images/homepage/contactusBG.png')]">
      <h1 className="text-[108px] font-semibold text-white">Contact Us</h1>
      <p className="text-white text-xl">
        Let’s talk about your dream project
      </p>
    </section>

    <section className="px-20 py-24">
      <div className="flex justify-between items-start  mb-24 ">
        <div className="w-[55%]">
          <h2 className="text-[50px] leading-[52px] mb-11 ">
            Keep in <br /> Touch
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Sed auctor, magna vel convallis
            fermentum, nulla nisi bibendum nisl, a varius elit elit id turpis.
            Curabitur tincidunt quam vitae justo condimentum, sit amet viverra
            ligula egestas. Fusce nec orci id nisi scelerisque dignissim non
            sit amet odio. auctor, magna vel convallis fermentum, nulla nisi
            bibendum nisl
          </p>
        </div>
        <div
          className="rounded-xl bg-white px-12 py-12 w-[447px]"
          style={{ boxShadow: "0px 0px 4px 4px #5A9CFE14" }}
        >
          <div className="w-full flex flex-col gap-9 mb-12">
            <div className="relative h-full w-full flex items-center">
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

            <div className="relative h-full w-full flex items-center">
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

            <div className="relative h-full w-full flex items-center">
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

            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="What are you looking for"
                className="text-[#377CFF] placeholder-black"
              />
              <img
                src="./images/homepage/downarrowc.png"
                alt=""
                // className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent"
              />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <button className="gradientBackground items-center text-white px-9 py-4 rounded-full ">
              Keep in Touch
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <div
          className=" px-8 py-8 rounded-lg h-full w-[287px]"
          style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center mb-6"
            style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
          >
            <img className="" src="./images/homepage/mapc.png" />
          </div>

          <h4 className="text-[21px] font-bold mb-6 ">Reach us</h4>
          <p className="text-[#353535] mb-5">
            PO Box 16122, Collins Street <br />
            Victoria 8007,Dubai
          </p>

          <div className="flex justify-center w-full">
          <button
            className="px-8 py-2 rounded-lg w-full"
            style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
          >
            View on Google Map
          </button>
          </div>
        </div>

        <div
          className=" px-8 py-8 rounded-lg h-full w-[287px]"
          style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center mb-6"
            style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
          >
            <img className="" src="./images/homepage/callc.png" />
          </div>

          <h4 className="text-[21px] font-bold mb-6 ">Call us</h4>
          <p className="text-[#353535] mb-5">
            Monday - Friday <br />
            08 am - 05 pm
          </p>

          <div className="flex justify-center w-full">
          <button
            className="px-8 py-2 rounded-lg w-full"
            style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
          >
            +971 564 000 123
          </button>
          </div>
        </div>

        <div
          className=" px-8 py-8 rounded-lg h-full w-[287px]"
          style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
            style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
          >
            <img className="" src="./images/homepage/emailc.png" />
          </div>

          <h4 className="text-[21px] font-bold mb-5 ">Mail us</h4>
          <p className="text-[#353535] mb-5">
            Have a business idea ? <br />
            Let’s work on it.
          </p>

          <div className="flex justify-center w-full">
          <button
            className="px-8 py-2 rounded-lg w-full"
            style={{ "box-shadow": "0px 0px 0px 2.25px #5A9CFE1F" }}
          >
            info@globexdubai.in
          </button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <img src="./images/homepage/mapC.png" alt="" />
    </section>
  </>
  )
}

export default ContactUs
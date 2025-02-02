import axios from "axios";
import { useState } from "react";
import BurjumanMap from "./BurjumanMap";

function ContactUs() {
  const [isDisable, setIsDisable] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsDisable(true);
    // Collect form data
    const formData = new FormData(e.target);

    // Convert FormData to a plain object for better control
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios({
        method: "post",
        url: "https://script.google.com/macros/s/AKfycbzRWKb4i1CL1L9SoPgvMu0NRhB2IDuRkTFkSbxRpoTAifqP_zaSU4qlXsyaQEKIecdg/exec",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200 || response.status === 302) {
        alert("Form submitted successfully!");
        e.target.reset(); // Clear the form after successful submission
        setIsDisable(false);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };
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
          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white px-6 py-8 sm:px-8 sm:py-12 w-full lg:w-[447px]"
            style={{ boxShadow: "0px 0px 4px 4px #5A9CFE14" }}
          >
            <div className="flex flex-col gap-6 sm:gap-9 mb-8 sm:mb-12">
              {/* Name Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  name="name"
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
                  id="Email"
                  name="email"
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
                  id="number"
                  name="number"
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
                  id="Lookingfor"
                  name="lookingfor"
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
              <button
                disabled={isDisable}
                type="submit"
                className="gradientBackground text-white px-8 py-3 sm:px-9 sm:py-4 rounded-full"
              >
                Keep in Touch
              </button>
            </div>
          </form>
          {isSubmitted && (
            <p className="text-green-500 mt-4 text-center">
              Form submitted successfully!
            </p>
          )}
        </div>

        {/* Info Cards */}
        {/* Individual Card */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {[
            {
              icon: "mapc.png",
              title: "Reach us",
              description: `Burjuman Business Tower
              Sheikh Khalifa Bin Zayed St, Al Mankhool
              Dubai , United Arab Emirates`,
              button: "View on Google Map",
              link: "https://www.google.com/maps/place/Burjuman+Business+Tower/@25.2516318,55.3001969,17z/data=!4m6!3m5!1s0x3e5f43000ab4b8ed:0xb841c92a2428953c!8m2!3d25.2521752!4d55.3016882!16s%2Fg%2F11vy3_cnnm?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
            },
            {
              icon: "callc.png",
              title: "Call us",
              description: "Monday - Friday\n08: 00 am - 05: 00 pm",
              button: "+97 1529 326 975",
              link: "tel:+971529326975"
            },
            {
              icon: "emailc.png",
              title: "Mail us",
              description: "Have a business idea?\nLet’s work on it.",
              button: "contact@globexincorporation.com",
              link: "mailto:contact@globexincorporation.com"
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="px-6 py-8 rounded-lg w-full sm:w-[300px] bg-white"
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
                <a
                  className=" py-2  sm:py-2 rounded-lg w-full text-center"
                  style={{ boxShadow: "0px 0px 0px 2.25px #5A9CFE1F" }}
                  href={card.link}
                  target="_blank"
                >
                  {card.button}
                </a>
              </div>
            </div>
          ))}
        </div> */}
<div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 sm:gap-8">
  {[
    {
      icon: "mapc.png",
      title: "Reach us",
      description: `Burjuman Business Tower\nSheikh Khalifa Bin Zayed St, Al Mankhool\nDubai, United Arab Emirates`,
      button: "View on Google Map",
      link: "https://www.google.com/maps/place/Burjuman+Business+Tower/@25.2516318,55.3001969,17z/data=!4m6!3m5!1s0x3e5f43000ab4b8ed:0xb841c92a2428953c!8m2!3d25.2521752!4d55.3016882!16s%2Fg%2F11vy3_cnnm?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: "callc.png",
      title: "Call us",
      description: "Monday - Friday\n08:00 am - 05:00 pm",
      button: "+97 1529 326 975",
      link: "tel:+971529326975"
    },
    {
      icon: "emailc.png",
      title: "Mail us",
      description: "Have a business idea?\nLet’s work on it.",
      button: "contact@globexincorporation.com",
      link: "mailto:contact@globexincorporation.com"
    }
  ].map((card, idx) => (
    <div
      key={idx}
      className="flex flex-col px-6 py-8 rounded-lg w-full sm:w-[330px] bg-white shadow-md"
      style={{ boxShadow: "0px 0px 0px 2.25px #5A9CFE1F" }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
        style={{ boxShadow: "0px 0px 0px 2px rgba(90, 156, 254, 0.1)" }}
      >
        <img
          src={`./images/homepage/${card.icon}`}
          alt={`${card.title} icon`}
          className="w-6 h-6"
        />
      </div>

      {/* Title */}
      <h4 className="text-xl font-bold text-gray-800 mb-4">
        {card.title}
      </h4>

      {/* Description */}
      <p
        className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line flex-grow"
        style={{ marginBottom: "1.5rem" }}
      >
        {card.description}
      </p>

      {/* Button */}
      <div className="flex justify-center w-full mt-auto">
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={card.title}
          className="py-2 px-4 rounded-lg w-full text-center text-blue-600 font-medium border border-blue-600"
          style={{ boxShadow: "0px 0px 0px 2px rgba(90, 156, 254, 0.1)" }}
        >
          {card.button}
        </a>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* Map Section */}
      <section>
        {/* <img
          src="./images/homepage/mapC.png"
          alt=""
          className="w-full h-auto"
        /> */}
        <BurjumanMap />
      </section>
    </>
  );
}

export default ContactUs;

import { Dialog, DialogBody, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { CloseIcon } from "../Icons/Icons";
import axios from "axios";

function FormModal({ open, handleOpen }) {
  const [isDisable, setIsDisable] = useState(false);

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
        url: "https://script.google.com/macros/s/AKfycbwbetChaDqK4NBqbRRSpMIKgtHGK3-S62ycFQq1QcR_I2nfwMMDO__xqeAppZMSH45v/exec",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200 || response.status === 302) {
        alert("Form submitted successfully!");
        e.target.reset(); // Clear the form after successful submission
        setIsDisable(false);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    open && (
      // <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">

      // </div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-5 md:p-10 rounded md:rounded-xl shadow-lg w-[90%] md:w-[75%] relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <div className="flex justify-between items-center">
                <p className="bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] bg-clip-text text-transparent text-xs md:text-base md:mb-5">
                  Your trustable partner
                </p>
                <div className="md:absolute top-3 right-3">
                  <IconButton
                    variant="text"
                    size="sm"
                    className="rounded-full "
                    onClick={handleOpen}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-xl md:text-5xl font-bold md:font-black mb-2 md:mb-8">
                Globex Visa’s Simple <br />
                Process To Get <br className="hidden md:block" />
                You Started
              </p>
              <p className="text-sm md:text-base text-[#353535] mb-2 md:mb-8 leading-7">
                Seamless, Fast, and Tailored for Global Entrepreneurs.
                <br /> Globex offers all the services, tools, and resources you
              </p>
              <div className="flex gap-3 mb-2 md:mb-3">
                <img
                  className="w-5 h-5"
                  src="../images/homepage/checkIcon.png"
                  alt=""
                />
                <p className="font-bold">Faster & Reliable Execution</p>
              </div>
              <div className="flex gap-3 mb-4">
                <img
                  className="w-5 h-5"
                  src="../images/homepage/checkIcon.png"
                  alt=""
                />
                <p className="font-bold"> Accurate & Expert Advice</p>
              </div>
            </div>

            <div
              className="p-5 rounded-xl md:mr-4 md:mt-4"
              style={{
                boxShadow: "0px 0px 3.4px 3.4px rgba(90, 156, 254, 0.08)",
              }}
            >
              <div
                className=" w-full h-1 mb-2"
                style={{
                  background:
                    "linear-gradient(298.19deg, #2BDEFA -14.15%, #377CFF 68.52%)",
                }}
              />

              <p className="text-xl mb-2">Feel Free to Contact Us</p>

              <form
                id="gform"
                // method="POST"
                // action="https://script.google.com/macros/s/AKfycbwbetChaDqK4NBqbRRSpMIKgtHGK3-S62ycFQq1QcR_I2nfwMMDO__xqeAppZMSH45v/exec"
                className="flex flex-col gap-2 justify-center items-center"
                onSubmit={handleSubmit}
              >
                <div className="w-full">
                  <label htmlFor="name" className="pb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="bg-[#F4F8FA] w-full rounded-md p-2"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="number" className="pb-2">
                    Phone Number
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="text"
                    className="bg-[#F4F8FA] w-full rounded-md p-2"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="pb-2">
                    Email
                  </label>
                  <input
                    id="Email"
                    name="email"
                    type="email"
                    className="bg-[#F4F8FA] w-full rounded-md p-2"
                  />
                </div>
                <div className="w-full pb-2">
                  <label htmlFor="lookingfor" className="pb-2">
                    Looking for
                  </label>
                  <input
                    id="Lookingfor"
                    name="lookingfor"
                    type="text"
                    className="bg-[#F4F8FA] w-full rounded-md p-2"
                  />
                </div>
                <button
                  disabled={isDisable}
                  type="submit"
                  className="text-white text-sm px-11 py-2 rounded-lg w-full gradientBackground"
                >
                  Book Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
    // <Dialog open={open} handler={handleOpen} size="xs">
    //   <DialogBody>

    //   </DialogBody>
    // </Dialog>
  );
}

export default FormModal;

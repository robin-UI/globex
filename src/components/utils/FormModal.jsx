import { Dialog, DialogBody, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { CloseIcon } from "../Icons/Icons";

import * as XLSX from "xlsx";

function FormModal({ open, handleOpen }) {

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    lookingFor: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.lookingFor) newErrors.lookingFor = "Looking for field is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      // Form data to send to Google Apps Script (Web App)
      const formDataToSend = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        lookingFor: formData.lookingFor,
      };
  
      // Your Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyJLvqKtFeKJbetl_DOHMK5H0eTQ137Q4aVWLTIQM7mIZtGF7wW__AXOf-9l8-u_GKK/exec';
  
      try {
        // Send POST request to Google Apps Script Web App
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
          mode: 'no-cors',  // Disable CORS for local testing
        });
        
  
        const data = await response.json(); // Get the response from the Apps Script
  console.log(data.result,"alsdfhaksjdfhkasdhfkajsdhfkajshfkajshd");
  
        if (data.result === 'success') {
          // Successfully added data
          setFormData({ name: '', phoneNumber: '', email: '', lookingFor: '' });
          setIsSubmitted(true);
        } else {
          console.error("Error adding data:", data.error);
        }
      } catch (error) {
        console.error("Error in form submission:", error);
      }
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
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 justify-center items-center"
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div className="w-full">
                  <label htmlFor="number" className="pb-2">
                    Phone Number
                  </label>
                  <input
                    id="number"
                    name="phoneNumber"
                    type="text"
                    className="bg-[#F4F8FA] w-full rounded-md p-2"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="pb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="bg-[#F4F8FA] w-full rounded-md p-2"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div className="w-full pb-2">
                  <label htmlFor="lookingFor" className="pb-2">
                    Looking for
                  </label>
                  <input
                    id="lookingFor"
                    name="lookingFor"
                    type="text"
                    className="bg-[#F4F8FA] w-full rounded-md p-2"
                    value={formData.lookingFor}
                    onChange={handleChange}
                    required
                  />
                  {errors.lookingFor && (
                    <span className="text-red-500 text-sm">{errors.lookingFor}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="text-white text-sm px-11 py-2 rounded-lg w-full gradientBackground"
                >
                  Book Free Consultation
                </button>
              </form>
              {isSubmitted && (
                <p className="text-green-500 mt-4 text-center">Form submitted successfully!</p>
              )}
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

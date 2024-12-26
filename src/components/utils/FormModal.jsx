import { Dialog, DialogBody, IconButton } from "@material-tailwind/react";
import React from "react";
import { CloseIcon } from "../Icons/Icons";

function FormModal({ open, handleOpen }) {
  return (
    open && (
      // <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">

      // </div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-5 rounded shadow-lg w-[90%] ">
          <div className="flex justify-between items-center">
            <p className="bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] bg-clip-text text-transparent text-xs">
              Your trustable partner
            </p>
            <IconButton variant="text" size="sm" className="rounded-full">
              <CloseIcon />
            </IconButton>
          </div>
          <p className="text-xl mb-2">
            Globex Visa’s simple <br />
            process to get you started
          </p>
          <p className="text-sm text-[#353535] mb-2 leading-7">
            Seamless, Fast, and Tailored for Global Entrepreneurs.
            <br /> Globex offers all the services, tools, and resources you
          </p>
          <div className="flex gap-3 mb-2">
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

          <div
            className="p-5 rounded-xl"
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

            <form action="">
              <div className="mb-2">
                <label htmlFor="name" className="pb-2">Name</label>
                <input id="name" name="name" type="text" className="bg-[#F4F8FA] w-full rounded-md p-2" />
              </div>
            </form>
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

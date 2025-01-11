import { useState } from "react";
import FormModal from "../utils/FormModal";

const SideMedia = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="hidden lg:block side-container bg-gradient-to-r from-blue-600 to-blue-400 rounded-[10px_0px_0px_10px] w-[auto] right-0 fixed mt-28 z-50">
        <div className="media-icons p-2 pl-3 flex flex-col gap-2">
          <a
            href="tel:+971529326975"
            className="hover:bg-gradient-to-r from-blue-100 to-blue-150 hover:rounded hover:scale-105 transition duration-220 ease-in-out w-150px h-auto"
          >
            <img
              className="h-auto w-[40px]"
              src="../images/homepage/maincall.png"
              alt=""
            />
            <p className="text-white text-center text-xs">Call</p>
          </a>

          <a
            href="https://api.whatsapp.com/qr/SUO2DURB5VUDB1?autoload=1&app_absent=0"
            className="hover:bg-gradient-to-r from-blue-100 to-blue-150 hover:scale-105 hover:rounded transition duration-220 ease-in-out w-150px h-auto"
          >
            <img
              className="h-auto w-[40px]"
              src="../images/homepage/whatsappside.png"
              alt=""
            />
            <p className="text-white text-center text-xs">Whatsapp</p>
          </a>

          <button
            onClick={() => setOpen(true)}
            className="hover:bg-gradient-to-r from-blue-100 to-blue-150 hover:rounded hover:scale-105 transition duration-220 ease-in-out w-150px h-auto"
          >
            <img
              className="h-auto w-[40px]"
              src="../images/homepage/letstalk.png"
              alt=""
            />
            <p className="text-white text-center text-xs">Let's talk</p>
          </button>

          <a
            href="mailto:nayeem46.nm@gmail.com"
            className="hover:bg-gradient-to-r from-blue-100 to-blue-150 hover:rounded hover:scale-105 transition duration-220 ease-in-out w-150px h-auto"
          >
            <img
              className="h-auto w-[40px]"
              src="../images/homepage/mailus.png"
              alt=""
            />
            <p className="text-white text-center text-xs">Mail us</p>
          </a>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
      </div>
      <div className="fixed bottom-5 right-[18px] z-50 lg:hidden">
        <div className="group">
          <button
            className="relative h-12 max-h-[48px] w-12 max-w-[48px] select-none overflow-hidden rounded-full bg-[#61dafb] text-center align-middle font-sans text-sm font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50  disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5 transition-transform group-hover:rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
          <div className="absolute top-[-315px] left-[-14px] hidden w-max  flex-col items-center gap-1 group-hover:flex rounded-full border border-blue-gray-50 bg-white p-0.5 shadow-xl shadow-black/10">
            <div data-projection-id={1}>
              <a
                href="tel:+971529326975"
                className="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100"
              >
                <img
                  className="h-auto w-[40px]"
                  src="../images/homepage/maincall.png"
                  alt=""
                />
                <p className="block font-sans text-xs antialiased font-normal text-blue-gray-900 text-center">
                  Call
                </p>
              </a>
            </div>
            <div data-projection-id={2}>
              <a
                href="https://api.whatsapp.com/qr/SUO2DURB5VUDB1?autoload=1&app_absent=0"
                className="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100"
              >
                <img
                  className="h-auto w-[40px]"
                  src="../images/homepage/whatsappside.png"
                  alt=""
                />
                <p className="block font-sans text-xs antialiased font-normal text-blue-gray-900">
                  Whatsapp
                </p>
              </a>
            </div>
            <div data-projection-id={3}>
              <button
                onClick={() => setOpen(true)}
                className="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100"
              >
                <img
                  className="h-auto w-[40px]"
                  src="../images/homepage/letstalk.png"
                  alt=""
                />
                <p className="block font-sans text-xs antialiased font-normal text-blue-gray-900">
                  {"Let's talk"}
                </p>
              </button>
            </div>
            <div data-projection-id={3}>
              <a
                href="mailto:nayeem46.nm@gmail.com"
                className="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100"
              >
                <img
                  className="h-auto w-[40px]"
                  src="../images/homepage/mailus.png"
                  alt=""
                />
                <p className="block font-sans text-xs antialiased font-normal text-blue-gray-900">
                  Mail us
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <FormModal open={open} handleOpen={handleOpen} />
    </>
  );
};

export default SideMedia;

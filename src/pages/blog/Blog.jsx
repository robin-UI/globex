import { useEffect } from "react";

function Blog() {
  //   useEffect(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("[data-tab-target]");
    const contents = document.querySelectorAll("[data-tab-content]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab-target");

        // Remove active class from all tabs and hide all content
        tabs.forEach((t) => t.classList.remove("text-slate-700", "font-bold"));
        contents.forEach((content) => content.classList.add("hidden"));

        // Add active class to clicked tab and show its content
        tab.classList.add("text-slate-700", "font-bold");
        document
          .querySelector(`[data-tab-content="${target}"]`)
          .classList.remove("hidden");
      });
    });

    // Initialize: Show the first tab content
    tabs[0].classList.add("text-slate-700", "font-bold");
    contents[0].classList.remove("hidden");
  });
  //   }, []);

  return (
    <main>
      <section
        className="w-full h-[180px] lg:h-screen p-3 lg:px-24 lg:py-14 mt-20 "
        style={{
          backgroundImage: "url('./images/homepage/blogBackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-between w-full h-full ">
          <div className="flex justify-between">
            <div className="bg-[#00000035] rounded-2xl p-1 px-4 lg:hidden">
              <p className="text-white text-sm">
                21 Dec 2024{" "}
                <span className="text-[1.5rem] leading-[0] px-2">&#9679;</span>{" "}
                15 mins read
              </p>
            </div>

            <div className="bg-[#00000035] rounded-2xl p-1 px-4 lg:hidden">
              <p className="text-white text-sm">Business</p>
            </div>
          </div>

          <div className="lg:flex justify-between">
            <div className="mb-2">
              <h2 className="text-white text-base lg:text-3xl font-semibold">
                Sand of success in the land of dreams
              </h2>
              <p className="text-white text-sm lg:text-base ">
                An iconic landscape, this post unveils the secrets that make
                this land an entrepreneur’s paradise
              </p>
            </div>
            <div className="flex justify-between items-center lg:flex-col">
              <div className="flex items-center gap-2">
                <img
                  className="h-8 w-8"
                  src="./images/homepage/blogUser.png"
                  alt=""
                />
                <p className="text-white text-sm lg:text-base">Usman Khaled</p>
              </div>

              <div className="p-1 px-4 hidden lg:block">
                <p className="text-white text-xs">
                  21 Dec 2024{" "}
                  <span className="text-[1rem] leading-[0] px-2">&#9679;</span>{" "}
                  15 mins read
                </p>
              </div>

              <button className="flex items-center gap-2 lg:gap-4">
                <p className="text-white text-sm lg:text-2xl font-bold ">
                  Read Now
                </p>
                <img
                  className=" h-[10px] lg:h-[15px] w-3 lg:w-[18px]"
                  src="./images/homepage/readNowArrow.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 lg:px-24">
        <div className="flex justify-between items-center mb-2"></div>

        <div className="grid grid-cols-2">
          <p className="col-span-1 text-base lg:text-[32px] font-semibold">
            Blog
          </p>

          <div className="col-span-1 flex items-center justify-end gap-3 mb-4">
            <span>Sort by</span>
            <div className="max-w-sm min-w-[100px]">
              <div className="relative">
                <select
                  value={"brazil"}
                  className="w-full bg-[#F6F6F6] placeholder:text-slate-400 text-slate-700 text-sm rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none appearance-none cursor-pointer"
                  style={{ boxShadow: "0px 0px 4px 0px #126CD740" }}
                >
                  <option value="brazil">Brazil</option>
                  <option value="bucharest">Bucharest</option>
                  <option value="london">London</option>
                  <option value="washington">Washington</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  // className="size-6"
                  className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <p className="col-span-2 text-sm text-[#353535] mb-2 opacity-75 leading-5 lg:mb-6">
            Here we share quick and informative reads that will guide you
            through <br />
            your journey
          </p>

          <div className="col-span-1 w-full">
            <div className="relative right-0">
              <ul
                className="relative flex flex-wrap py-1.5 list-none "
                role="list"
              >
                <li className="z-30 flex-auto text-center rounded-md bg-slate-100">
                  <button
                    className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit"
                    data-tab-target="dashboard"
                    aria-selected="true"
                  >
                    Dashboard
                  </button>
                </li>
                <li className="z-30 flex-auto text-center">
                  <button
                    className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit"
                    data-tab-target="profile"
                  >
                    Profile
                  </button>
                </li>
                <li className="z-30 flex-auto text-center">
                  <button
                    className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                    data-tab-target="settings"
                  >
                    Settings
                  </button>
                </li>
              </ul>
              {/* Tab Content */}
              <div className="mt-4">
                <div
                  className="tab-content hidden"
                  data-tab-content="dashboard"
                >
                  <p>Dashboard Content</p>
                </div>
                <div className="tab-content hidden" data-tab-content="profile">
                  <p>Profile Content</p>
                </div>
                <div className="tab-content hidden" data-tab-content="settings">
                  <p>Settings Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 lg:px-24 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
        {/* {Array.from({ length: 6 }, (e, i) => (
          <div className="col-span-1">
            <div
              className="h-28 p-2 rounded-md"
              style={{
                backgroundImage: "url('./images/homepage/blogBackground.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="text-white text-sm bg-[#00000030] py-[2px] px-3 rounded-md inline-block">
                Busness
              </p>
            </div>
            <p className="text-[#353535] text-xs my-2">
              30 Jan 2024 10 mins read
            </p>
            <p className="text-sm font-medium mb-2">
              Lorem Ipsum dolor ssit amet lorem isum anyat
            </p>

            <div className="flex items-center gap-2 mb-2">
              <img
                className="h-8 w-8"
                src="./images/homepage/blogUser.png"
                alt=""
              />
              <p className="text-black text-sm">Usman Khaled</p>
            </div>
            <p className="text-[#353535] text-sm font-light ">
              Here we share quick and informative reads that...
            </p>
          </div>
        ))} */}
        {Array.from({ length: 6 }, (_, i) => (
          <div className="col-span-1" key={i}>
            <div
              className="h-28 lg:h-52 p-2 rounded-md"
              style={{
                backgroundImage: "url('./images/homepage/blogBackground.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="text-white text-sm bg-[#00000030] py-[2px] px-3 rounded-md inline-block">
                Business
              </p>
            </div>
            <p className="text-[#353535] text-xs my-2">
              30 Jan 2024 <span className="mx-1"> &#9679; </span> 10 mins read
            </p>
            <p className="text-sm lg:text-xl font-medium mb-2">
              Lorem Ipsum dolor ssit amet lorem isum anyat
            </p>

            <div className="flex flex-col lg:flex-col-reverse">
            <div className="flex items-center gap-2 mb-2">
              <img
                className="h-8 w-8"
                src="./images/homepage/blogUser.png"
                alt="Blog Author"
              />
              <p className="text-black text-sm">Usman Khaled</p>
            </div>
            <p className="text-[#353535] text-sm lg:text-base font-light mb-2">
              <span className="lg:hidden" >Here we share quick and informative reads that...</span>
              <span className="hidden lg:block" >Here we share quick and informative reads that will guide you through your journey</span>
            </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Blog;

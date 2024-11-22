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
        className="w-full h-[180px] p-3"
        style={{
          backgroundImage: "url('./images/homepage/blogBackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-between w-full h-full ">
          <div className="flex justify-between">
            <div className="bg-[#00000035] rounded-2xl p-1 px-4">
              <p className="text-white text-sm">
                21 Dec 2024{" "}
                <span className="text-[1.5rem] leading-[0] px-2">&#9679;</span>{" "}
                15 mins read
              </p>
            </div>

            <div className="bg-[#00000035] rounded-2xl p-1 px-4">
              <p className="text-white text-sm">Business</p>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <h2 className="text-white text-base font-semibold">
                Sand of success in the land of dreams
              </h2>
              <p className="text-white text-sm">
                An iconic landscape, this post unveils the secrets that make
                this land
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  className="h-8 w-8"
                  src="./images/homepage/blogUser.png"
                  alt=""
                />
                <p className="text-white text-sm">Usman Khaled</p>
              </div>

              <button className="flex items-center gap-2">
                <p className="text-white text-sm font-bold ">Read Now</p>
                <img
                  className=" h-[10px] w-3"
                  src="./images/homepage/readNowArrow.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3">
        <div className="flex justify-between items-center mb-2">
          <p className="text-base font-semibold">Blog</p>
          <div className="flex items-center gap-2">
            <span>Sort by</span>
            <div className="max-w-sm min-w-[150px]">
              <div className="relative">
                <select
                  value={"brazil"}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
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
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-[#353535] mb-2 opacity-75 leading-5">
          Here we share quick and informative reads that will guide you through
          your journey
        </p>
        <div className="w-full">
          <div className="relative right-0">
            <ul
              className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
              role="list"
            >
              <li className="z-30 flex-auto text-center">
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
              <div className="tab-content hidden" data-tab-content="dashboard">
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
      </section>

      <section className="p-3 grid grid-cols-2 gap-3">
        <div>
          <div
            className="h-28 p-2 rounded-md"
            style={{
              backgroundImage: "url('./images/homepage/blogBackground.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-white text-sm bg-[#00000030] py-[2px] px-3 rounded-md inline-block">Busness</p>
          </div>
          <p className="text-[#353535] text-xs my-2">30 Jan 2024 10 mins read</p>
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
      </section>
    </main>
  );
}

export default Blog;

import TestmonialSection from "../Home/Components/TestmonialSection";

function Services2() {
  const services = [
    { title: "Employment Visa", isLarge: true, img: "./images/homepage/employeeVisa.png" },
    { title: "Resident Visa", isLarge: true, img: "./images/homepage/residentVisa.png"  },
    { title: "Investor Visa", img: "./images/homepage/investorVisa.png"  },
    { title: "Multiple Entry Visa", img: "./images/homepage/multipleEntryVisa.png"  },
    { title: "Urgent Visit Visa", img: "./images/homepage/urgentVisitVisaa.png"  },
    { title: "Servant/maid Visa", img: "./images/homepage/serventVisa.png"  },
    { title: "Renewing/stamping related service", img: "./images/homepage/renewingService.png"  },
  ];
  return (
    <>
      <section
        className="w-full h-60 flex items-center justify-center flex-col "
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('./images/homepage/contactusBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "795px",
        }}
      >
        <h1 className="text-white text-6xl text-center font-semibold">
          Visa Services
        </h1>
        <p className="text-white text-xl text-center">
          Choose from the services tailored for you
        </p>
      </section>
    <main className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* First row - 2 large cards */}

          <div className="col-span-2">
          <div className="text-center lg:text-left mb-10 sm:mb-16">
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl uppercase mb-3">what do we offer</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Outstanding immigration and visa services
              </h1>

              <div className="flex justify-center lg:justify-start w-full mb-5">
                <div className=" w-20 h-1" style={{ backgroundImage: "linear-gradient(270deg, #2BDEFA 0%, #377CFF 100%)"}}></div>
              </div>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
                For visa services in Dubai, Globex simplify the process from
                application to issuance. Our team provides reliable service,
                serving clients trust for their UAE visa needs.
              </p>
            </div>
          </div>
          {services.slice(0, 2).map((service, index) => (
            <div key={index} className="col-span-1">
              <ServiceCard title={service.title} isLarge={false}  img={service.img}/>
            </div>
          ))}

          {/* Middle rows - 4 medium cards */}
          {services.slice(2, 6).map((service, index) => (
            <div key={index + 2} className="col-span-1">
              <ServiceCard title={service.title}  img={service.img}/>
            </div>
          ))}

          {/* Last row - 1 centered card */}
          <div className="lg:col-start-1 lg:col-span-1">
            <ServiceCard title={services[6].title} img={services[6].img}/>
          </div>
          <div className="col-span-full lg:col-start-2 lg:col-span-3">
            <CTASection />
          </div>
        </div>
      </div>

        <TestmonialSection />
      </main>
    </>
  );
}

export default Services2;

function CTASection() {
  return (
    <div style={{background: "linear-gradient(270deg, #2BDEFA 0%, #377CFF 100%)"    }} className="h-full rounded-xl p-6 sm:p-8 lg:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-white max-w-6xl mx-auto">
        <div className="text-center sm:text-left">
          <h2 className="text-left text-xl sm:text-3xl lg:text-4xl font-semibold mb-2">
            Get visa with 100% Success Rate
          </h2>
          <p className="text-left text-white/90 text-sm sm:text-base">
            Best Service in Dubai Page
          </p>
        </div>
        <button
          className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 rounded-full font-semibold 
            hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl
            text-sm sm:text-base whitespace-nowrap"
        >
          Contact Now
        </button>
      </div>
    </div>
  );
}

function ServiceCard({ title, isLarge = false, img }) {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
        hover:-translate-y-1 cursor-pointer overflow-hidden group
        ${isLarge ? "h-[300px] sm:h-[400px]" : "h-[200px] sm:h-[250px]"}`}
        style={{ backgroundImage: `url("${img}")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <img className="absolute right-2 top-2" src="./images/homepage/employeLogo.png" alt="" />

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          {/* <button
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow 
                hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:scale-110"
            aria-label="Learn more"
          >
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
}

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import FormModal from "../../components/utils/FormModal";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function Freezone() {
  const [open, setOpen] = React.useState(0);
  const [open2, setOpen2] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => setOpenModal(!openModal);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);

  const accordionData = [
    {
      id: 1,
      title: "Winning formula",
      content: [
        "The UAE pioneered the concept of free zones in the Middle East in 1985 with the establishment of the Jebel Ali Free Zone Authority (JAFZA). Starting as a modest initiative supporting a few businesses, JAFZA quickly gained global recognition, becoming the first free zone to achieve ISO certification within a decade of its inception.",
        "The success of JAFZA laid the groundwork for the development of numerous free zones across the UAE, each designed to provide unique benefits and strategic opportunities for businesses. These zones have since become thriving hubs, supporting thousands of entrepreneurs and organizations in establishing and growing their ventures in the UAE.",
        "Today, the UAE is home to nearly 50 free zones, catering to a wide range of specialized industries. These include trade, manufacturing, energy and renewables, exports and re-exports, media and communications, metals and commodities, finance, healthcare, and Information and Communications Technology (ICT), among others",
      ],
    },
    {
      id: 2,
      title: "Unique features",
      content: [
        "Built on the foundations of global free trade principles and best practices, UAE free zones play a pivotal role in driving trade, attracting investment, and fostering the exchange of skills, knowledge, and technology. A key advantage of these zones is their strategic location, offering businesses seamless access to over 2 billion consumers within just a 4-hour flight radius.",
        "The presence of a vast number of international companies in UAE free zones is a testament to their unmatched appeal and benefits.",
        "For businesses exploring setup services in Dubai's free zones, the opportunities are plentiful and accessible throughout the country.",
        "For example, the Sharjah Airport International Free Zone (SAIF) addressed investor concerns over time-consuming bureaucratic processes by introducing a 24-hour licensing service, enabling businesses to launch operations almost instantly. Similarly, the Hamriyah Free Zone Authority (HFZA) in Sharjah provides expansive industrial and commercial plots tailored to support large-scale import and re-export operations.",
        "In Abu Dhabi, the Khalifa Industrial Zone Abu Dhabi (KIZAD), a division of Abu Dhabi Ports, has introduced highly affordable business setup packages, with costs starting as low as USD 2,500, making it an attractive choice for entrepreneurs.",
        "With straightforward processes and competitive costs, setting up a business in Dubai free zones is designed to be quick, hassle-free, and cost-effective.",
      ],
    },
    {
      id: 3,
      title: "Better business",
      content: [
        "The core idea behind a free zone is to simplify and streamline the process of doing business, making it accessible and appealing to global entrepreneurs. While setting up a new business or obtaining a trade license in the UAE might seem daunting, the reality is far easier. Processes are straightforward, paperwork is minimal, and the entire framework is tailored to attract international investors and empower them to grow their ventures seamlessly.",
        "Free zones offer a host of benefits, starting with 100% foreign ownership, eliminating the need for local sponsors or service agents. Business owners also enjoy the ability to repatriate 100% of their profits and revenues and transfer funds without restrictions.",
        "Additionally, free zones provide significant financial incentives, including time-limited waivers on corporate taxes, exemptions from import and export duties, and freedom from personal taxation.",
        "Many major free zones operate under their own legal frameworks and courts, inspired by English and common law principles. These systems exist alongside the UAE's evolving mainland business environment, which has also embraced modernization to support entrepreneurship and innovation.The core idea behind a free zone is to simplify and streamline the process of doing business, making it accessible and appealing to global entrepreneurs. While setting up a new business or obtaining a trade license in the UAE might seem daunting, the reality is far easier. Processes are straightforward, paperwork is minimal, and the entire framework is tailored to attract international investors and empower them to grow their ventures seamlessly.",
      ],
    },
    {
      id: 4,
      title: "Speed and simplicity",
      content: [
        "For entrepreneurs worldwide looking to establish a presence in the UAE, free zones offer an optimal pathway to market entry, whether you're planning a small startup or a large-scale enterprise.",
        "The free zone company formation process stands out for its efficiency and streamlined approach. With reduced bureaucracy, simplified documentation requirements, and expedited processing times, businesses can become operational significantly faster than through traditional mainland setups. Free zones also provide comprehensive support services, including assistance with visa processing, banking relationships, and compliance matters.",
        "Free zones accommodate diverse business needs with flexible options - ranging from cost-effective co-working spaces and virtual offices to dedicated commercial units and expansive warehouses. Lease terms are equally flexible, spanning from short-term arrangements to long-term commitments of up to 25 years, allowing businesses to scale their presence according to their growth trajectory.",
      ],
    },
    {
      id: 5,
      title: "Expert assistance",
      content: [
        "Backed by decades of industry expertise and a proven track record of successful client partnerships, our dedicated team delivers exceptional service tailored to your needs.",
        "Our comprehensive solutions serve both UAE residents and international entrepreneurs seeking to establish their presence in UAE free zones.",
        "From strategic zone selection and value proposition development to complete documentation handling and regulatory compliance, our end-to-end support ensures a smooth setup process. We pride ourselves on finding solutions for even the most complex business requirements.",
        "Let us be your trusted partner in establishing your UAE Free Zone company, where excellence in service meets unparalleled results.",
      ],
    },
  ];

  const services = [
    // {
    //   image: "../images/otherImages/sheikhZayedRoad.jpg",
    //   title: "Sheikh Zayed Road",
    //   description:
    //     "Strategic location on Dubai's main artery offering prestigious address, exceptional accessibility, and unparalleled business networking opportunities.",
    // },
    {
      image: "../images/otherImages/Commercial.jpg",
      title: "Commercial License",
      description:
        "Fast-track your trading operations with our comprehensive commercial licensing solutions, including import-export privileges and access to global markets.",
    },
    {
      image: "../images/otherImages/Professional.jpg",
      title: "Professional License",
      description:
        "Launch your consultancy or service-based business with tailored licensing packages designed for professionals, entrepreneurs, and SMEs.",
    },
    {
      image: "../images/otherImages/Industrial.jpg",
      title: "Industrial License",
      description:
        "Set up your manufacturing facility with our industrial licensing expertise, complete with warehouse solutions and logistics support in strategic free zones.",
    },
  ];

  const accordionData2 = [
    {
      id: 1,
      title:
        "What makes Dubai Freezones a strategic choice for international businesses?",
      content: [
        "Dubai Freezones offer unparalleled advantages for international businesses, including 100% foreign ownership, complete repatriation of profits, zero corporate and personal tax for 50 years, no currency restrictions, and streamlined visa processing. These zones also provide state-of-the-art infrastructure, strategic location with excellent connectivity, and access to a skilled workforce. The business-friendly environment, coupled with Dubai's position as a global trade hub, makes Freezones an ideal choice for companies looking to expand their presence in the Middle East, Africa, and South Asia markets.",
      ],
    },
    {
      id: 2,
      title: "What are the prominent Freezone options available in Dubai?",
      content: [
        "Dubai hosts several specialized Freezones catering to diverse industries: Dubai Multi Commodities Centre (DMCC) for trading and commodities, Dubai International Financial Centre (DIFC) for financial services, Dubai Healthcare City for healthcare and medical services, Dubai Internet City for technology and IT companies, Dubai Media City for media and creative industries, Jebel Ali Free Zone (JAFZA) for manufacturing and logistics, and Dubai Airport Free Zone (DAFZA) for aviation and logistics. Each zone offers industry-specific benefits, infrastructure, and networking opportunities tailored to business needs.",
      ],
    },
    {
      id: 3,
      title:
        "What comprehensive services does Globex Incorporation provide for Freezone setup?",
      content: [
        "Globex Incorporation offers end-to-end support for Freezone company formation, including strategic consulting to identify the most suitable Freezone, license type selection, documentation preparation and processing, corporate bank account opening assistance, visa processing for employees and dependents, office space procurement, and ongoing compliance support. Our experienced team provides personalized guidance throughout the setup process, ensuring a smooth and efficient establishment of your business in Dubai's Freezones.",
      ],
    },
    {
      id: 4,
      title:
        "What are the essential steps and documentation needed for Freezone company registration?",
      content: [
        "The Freezone company registration process involves several key steps: choosing a business activity and company name, selecting appropriate office space, submitting incorporation documents (including passport copies, CV, and bank reference letters), obtaining initial approval, signing legal documents, making necessary payments, and receiving the trade license. Additional requirements may include opening a corporate bank account, applying for employee visas, and ensuring compliance with specific Freezone regulations. Our team assists in preparing and organizing all necessary documentation to ensure a seamless registration process.",
      ],
    },
    {
      id: 5,
      title:
        "What investment considerations should be made when planning a Freezone company setup?",
      content: [
        "When planning a Freezone company setup, consider various cost components: initial registration fees (ranging from AED 10,000 to AED 50,000 depending on the zone), license fees (varying by activity type), office space costs (flexible options from virtual offices to physical spaces), visa allocation fees, and working capital requirements. Additional considerations include choosing between different license types (trading, service, or industrial), understanding specific Freezone regulations, and planning for annual renewal costs. We provide detailed cost analysis and help optimize your investment based on your business model and growth plans.",
      ],
    },
  ];

  return (
    <>
    <div className="freezone ">
      <section className="relative py-12 md:py-20 lg:py-24 lg:pt-32 overflow-hidden">
        {/* Gradient Background with improved colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white"></div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-bl-[100px] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-tr-[100px] blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Content - Improved responsive layout */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:sticky lg:top-8">
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Freezone
                  <span className="block text-blue-600 mt-2">
                    Company Formation
                  </span>
                </h2>
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
              </div>

              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <p className="text-lg md:text-xl font-medium text-blue-900 mb-4">
                    Unique advantages of freezone company formation dubai
                  </p>
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      When businesses and entrepreneurs explore their options
                      for establishing a company in Dubai's free zones, one key
                      advantage stands out – the benefits of operating within
                      these specialized areas.
                    </p>
                    <p className="leading-relaxed">
                      Free zones are designated regions designed to attract
                      businesses with incentives such as 0% corporate and
                      personal income tax.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced responsive design with better mobile visibility */}
            <div className="lg:col-span-7 relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent z-10"></div>

                <img
                  src="../images/otherImages/freezone1.jpg"
                  alt="Dubai Freezone"
                  className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Improved floating card with better mobile positioning */}
              <div className="relative mt-6 md:mt-0 md:absolute md:-bottom-8 left-0 right-0 md:left-8 md:right-8 bg-white/90 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl border border-white/20">
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">
                    Selecting the right free zone depends on several factors,
                    including the nature of your business, the availability and
                    flexibility of office spaces, strategic location, and
                    cost-effectiveness.
                  </p>
                  <p className="leading-relaxed">
                    Setting up a company in a Dubai free zone is often quicker
                    and more straightforward than mainland or offshore options,
                    provided you have the right guidance from experienced
                    professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business
              <span className="text-blue-600 block mt-2">
                Vision into Reality
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Partner with Globex Incorporation for expert guidance and
              innovative solutions that will elevate your business in Dubai's
              dynamic market.
            </p>
          </div>

          {/* Accordion Grid - Fixed layout and arrow positioning */}
          <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
            {accordionData.map((item) => (
              <Accordion
                key={item.id}
                open={open === item.id}
                className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-blue-100"
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="relative flex w-full items-center px-6 py-4 text-left"
                >
                  {/* Number Badge */}
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-semibold flex items-center justify-center mr-4">
                    {item.id}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {item.title}
                  </h3>

                  {/* Custom Icon - Positioned to the right */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <Icon id={item.id} open={open} />
                  </div>
                </AccordionHeader>

                <AccordionBody className="px-6 pb-6">
                  <div className="pl-12">
                    {item.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-600 mb-4 last:mb-0 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-4 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-600">Freezone</span> Company Formation
              <span className="block text-2xl mt-2 text-gray-600">
                Dubai, UAE - Insights
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Start your business journey in Dubai's Free Zones with our
              comprehensive company formation services. Our expert team provides
              tailored solutions ensuring a smooth and efficient establishment
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                number: "01",
                title: "Professional License",
                description:
                  "Secure the necessary authorization to offer professional services within the Free Zone. With a simplified and efficient licensing process, you can focus on leveraging your expertise and expanding your business operations seamlessly.",
                link: "/professional-license",
                color: "from-blue-500 to-blue-600",
              },
              {
                number: "02",
                title: "Commercial License",
                description:
                  "Obtain the authorization to trade and engage in commercial activities within the Free Zone. Enjoy simplified processes, efficient operations, and the opportunity to access and grow in new markets.",
                link: "/commercial-license",
                color: "from-purple-500 to-purple-600",
              },
              {
                number: "03",
                title: "Industrial License",
                description:
                  "Acquire the necessary permit to set up and operate industrial activities within the Free Zone. Unlock growth opportunities, enhance production efficiency, and take advantage of a business-friendly environment to scale your operations.",
                link: "/industrial-license",
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
                  {/* Number */}
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                  >
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Link with arrow */}
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div
                  className={`absolute -bottom-2 left-8 right-8 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white lg:px-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Your Gateway to Success
              <span className="block text-blue-600 mt-2">
                Globex Incorporation
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Unlock the potential of Dubai's Free Zones through our
              comprehensive guidance and expertise in business establishment.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Decorative background element */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-50/50 rounded-3xl -skew-y-6 transform-gpu"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl overflow-hidden "
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center z-20">
                      <span className="text-blue-600 font-bold">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Title with line decoration */}
                    <div className="relative mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-500 rounded-full transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">{service.description}</p>


                    {/* Decorative corner */}
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                      <div className="absolute bottom-0 right-0 w-full h-full bg-blue-50 rounded-tl-3xl transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-gradient-to-br from-white to-blue-50">
        {/* Decorative skewed elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-100/30 -skew-x-12 transform-gpu translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-blue-100/30 -skew-y-12 transform-gpu"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">
              Step by Step Guide
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How To Start a Business
              <span className="block mt-2 text-blue-600">
                in Dubai Freezone?
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {accordionData2.map((item) => (
                <div key={item.id} className="group">
                  <Accordion
                    open={open2 === item.id}
                    className="bg-white shadow-sm hover:shadow-md rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen2(item.id)}
                      className="relative flex items-center w-full p-6 cursor-pointer"
                    >
                      {/* Step Number */}
                      <div className="mr-6 flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                          {item.id.toString().padStart(2, "0")}
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex-grow pr-12">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      {/* Custom Arrow Icon */}
                      <div className="absolute right-6 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                          <svg
                            className={`w-4 h-4 text-blue-600 transform transition-transform duration-300 ${open2 === item.id ? "rotate-180" : ""
                              }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="p-6 pt-0 pl-24">
                        {item.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-gray-600 mb-4 last:mb-0 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl text-center relative overflow-hidden group transition-all duration-300 border border-blue-100/50">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-blue-50/30"></div>
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)] rounded-2xl flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
                  Each Freezone in Dubai offers unique advantages and
                  requirements based on your business type and objectives. For
                  personalized guidance and the most current regulations,{" "}
                  <span className="text-[#377CFF] font-semibold">
                    connect with our Globex Incorporation experts
                  </span>{" "}
                  to ensure your business setup aligns perfectly with your
                  goals.
                </p>

                <div className="mt-6">
                  <button onClick={() => handleModal()} className="inline-flex items-center px-6 py-3 bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)] text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                    Contact Our Experts
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <FormModal open={openModal} handleOpen={handleModal} />

    </>
  );
}

export default Freezone;

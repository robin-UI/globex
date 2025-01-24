import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
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
    {
      image: "/api/placeholder/271/189",
      title: "Sheikh Zayed Road",
      description:
        "Strategic location on Dubai's main artery offering prestigious address, exceptional accessibility, and unparalleled business networking opportunities.",
    },
    {
      image: "/api/placeholder/271/189",
      title: "Commercial License",
      description:
        "Fast-track your trading operations with our comprehensive commercial licensing solutions, including import-export privileges and access to global markets.",
    },
    {
      image: "/api/placeholder/271/189",
      title: "Professional License",
      description:
        "Launch your consultancy or service-based business with tailored licensing packages designed for professionals, entrepreneurs, and SMEs.",
    },
    {
      image: "/api/placeholder/271/189",
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
    <div className="freezone ">
      <section className="freezone px-4 md:px-20 lg:px-32 py-12 md:py-20 md:pt-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Freezone
            </h2>
            <img
              src="../images/otherImages/freezone.jpeg"
              alt="Dubai Freezone"
              className="w-full max-w-[400px] h-[250px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
              Freezone Company Formation Dubai, UAE
            </h2>
            <p className="text-lg font-medium text-blue-800 mb-4">
              Unique advantages of freezone company formation dubai
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                When businesses and entrepreneurs explore their options for
                establishing a company in Dubai's free zones, one key advantage
                stands out – the benefits of operating within these specialized
                areas.
              </p>
              <p>
                Free zones are designated regions designed to attract businesses
                with incentives such as 0% corporate and personal income tax.
                Selecting the right free zone depends on several factors,
                including the nature of your business, the availability and
                flexibility of office spaces, strategic location, and
                cost-effectiveness.
              </p>
              <p>
                Setting up a company in a Dubai free zone is often quicker and
                more straightforward than mainland or offshore options, provided
                you have the right guidance from experienced professionals.
                Ultimately, choosing a free zone is all about aligning your
                business needs with the unique benefits these zones offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 px-4 md:px-20 lg:px-32 text-center">
        <div className="container mx-auto max-w-3xl mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6">
            Transform Your Business Vision into Reality
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Partner with Globex Incorporation for expert guidance and innovative
            solutions that will elevate your business in Dubai's dynamic market.
            Let's build your success story together.
          </p>
        </div>

        <div>
          {accordionData.map((item) => (
            <Accordion
              key={item.id}
              open={open === item.id}
              icon={<Icon id={item.id} open={open} />}
              className="mb-4"
            >
              <AccordionHeader
                onClick={() => handleOpen(item.id)}
                className="text-xl md:text-2xl font-semibold text-blue-900 py-4 hover:text-blue-700 transition-colors"
              >
                {item.title}
              </AccordionHeader>
              <AccordionBody className="text-gray-700">
                {item.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 text-base md:text-lg text-left leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">
              <span>Freezone </span>Company Formation Dubai, UAE - Insights
            </h2>
            <p className="mt-4 text-gray-700">
              Start your business journey in Dubai's Free Zones with our
              comprehensive company formation services. Our expert team provides
              tailored solutions for Free Zone, Mainland, and Offshore setups,
              ensuring a smooth and efficient establishment process aligned with
              your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h5 className="text-lg font-bold">01</h5>
              <h3 className="text-xl font-semibold">Professional License</h3>
              <p className="text-gray-600 mt-2">
                Secure the necessary authorization to offer professional
                services within the Free Zone. With a simplified and efficient
                licensing process, you can focus on leveraging your expertise
                and expanding your business operations seamlessly.
              </p>
              <Link
                to="professional-license/"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h5 className="text-lg font-bold">02</h5>
              <h3 className="text-xl font-semibold">Commercial License</h3>
              <p className="text-gray-600 mt-2">
                Obtain the authorization to trade and engage in commercial
                activities within the Free Zone. Enjoy simplified processes,
                efficient operations, and the opportunity to access and grow in
                new markets.
              </p>
              <Link
                to="dubai/commercial-license/"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h5 className="text-lg font-bold">03</h5>
              <h3 className="text-xl font-semibold">Industrial License</h3>
              <p className="text-gray-600 mt-2">
                Acquire the necessary permit to set up and operate industrial
                activities within the Free Zone. Unlock growth opportunities,
                enhance production efficiency, and take advantage of a
                business-friendly environment to scale your operations.
              </p>
              <Link
                to="dubai/industrial-license/"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f9ff] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Gateway to Success: Globex Incorporation
            </h2>
            <p className="mt-4 text-gray-600">
              Unlock the potential of Dubai's Free Zones, Mainland, and
              Offshore regions through our comprehensive guidance and expertise
              in business establishment and expansion strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-5 group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 px-4 md:px-20 lg:px-32 text-center">
        <div className="container mx-auto max-w-3xl mb-20">
          <h2 className="text-2xl md:text-5xl font-extrabold text-black mb-6">
            How To Start a Business in Dubai Freezone?
          </h2>
        </div>
        <div>
          {accordionData2.map((item) => (
            <Accordion
              key={item.id}
              open={open2 === item.id}
              icon={<Icon id={item.id} open={open2} />}
              className="mb-4"
            >
              <AccordionHeader
                onClick={() => handleOpen2(item.id)}
                className="text-xl md:text-2xl font-semibold text-blue-900 py-4 hover:text-blue-700 transition-colors"
              >
                {item.title}
              </AccordionHeader>
              <AccordionBody className="text-gray-700">
                {item.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 text-base md:text-lg text-left leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
        <p className="text-center">
          Each Freezone in Dubai offers unique advantages and requirements
          based on your business type and objectives. For personalized guidance
          and the most current regulations, connect with our Globex Incorporation
          experts to ensure your business setup aligns perfectly with your goals.
        </p>
      </section>
    </div>
  );
}

export default Freezone;

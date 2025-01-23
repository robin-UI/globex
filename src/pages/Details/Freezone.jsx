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
        "The UAE was the first country in the Middle East to establish the concept of the free zone in 1985, with the launch of Jebel Ali Free Zone Authority (JAFZA). Although it was a small operation catering only to a handful of companies, it became the first free zone in the world to be awarded ISO certification within 10 years.",
        "The JAFZA success story became the foundation for several free zones across the country, each offering strategic benefits and business advantages. These free zones are collectively home to many thousands of individuals and institutions who have been successful at new business set up in UAE.",
        "Today, there are roughly 50 free zones in the country catering to specialised sectors including but not limited to: trade, industry, energy and renewable energy, exports and re-exports, media and media communications, metals and commodities, finance, healthcare, and Information and Communications Technology (ICT).",
      ],
    },
    {
      id: 2,
      title: "Unique features",
      content: [
        "Incorporating the principles and international best practices of free trade, free zones help stimulate trade and investment, and facilitate the transfer of skills, knowledge and technology. A unique offering is the easy access to more than 2 billion consumers in multiple markets located within a 4 hour flight.",
        "The staggering number of international firms located at the UAE's free zones are proof of this.",
        "Those who are interested in Business setup services in Dubai UAE Free Zone stand to benefit in many ways, anywhere in the country.",
        "For instance, when Sharjah Airport International Free Zone (SAIF) saw that the prospect of lengthy, bureaucratic procedures was daunting to potential investors, the authorities launched a 24-hour licensing service which enables new entrants to set up a business in the UAE almost instantly. Also in Sharjah, the Hamriyah Free Zone Authority (HFZA) offers huge industrial and commercial plots running into several thousand square feet, and infrastructure specifically designed to facilitate import and re-export.",
        "In the capital, Khalifa Industrial Zone Abu Dhabi (KIZAD), a subsidiary of Abu Dhabi Ports, recently announced a UAE free zone business set-up cost to support entrepreneurs, costing an extremely affordable USD 2,500.",
        "Low Cost Business setup in Dubai free zones is simple, easy and quick.",
      ],
    },
    {
      id: 3,
      title: "Better business",
      content: [
        "The basic premise of a free zone is that it makes it much easier for businesses to conduct business. Setting up new business in UAE or getting a trade license can sound like a long and complicated process, but it is not. Paperwork is simplified, efforts are minimised, and everything is designed to attract international investors and help them build up their business.",
        "The wide and varied choice of free zones comes with 100% foreign ownership, with no requirements for local sponsors or service agents. Business owners can also enjoy 100% repatriation of revenues and profits, and 100% transfer of funds.",
        "More importantly, there is a time-bound waiver of all corporate taxes as well as import and export taxes, and an exemption from all personal taxes.",
        "Many of the larger free zones have their own laws and courts based on both English and common law, sitting alongside the country's mainland business environment which has also modernised in recent years.",
      ],
    },
    {
      id: 4,
      title: "Speed and simplicity",
      content: [
        "For foreigners and resident expatriates with an interest in setting up a business in the UAE (either a small office or full-scale operations), a free zone is the surest route to success.",
        "UAE free zone business setup is easier, simpler, and faster. Documentation is simplified, and recruitment and workforce processes are faster and cheaper than onshore options. Most free zone authorities also extend support for ancillary services such as legal, medical, labour, and immigration processes.",
        "In UAE freezone company formation options in space, style, tenure, and budget are almost unlimited – from individual freelance permits to international branch office licences, and from shared desk space on a 1-year contract to industrial warehouse leasing for up to 25 years.",
      ],
    },
    {
      id: 5,
      title: "Expert assistance",
      content: [
        "With many years of experience and many hundreds of satisfied clients on our roster, our teams continue to offer personalised and professional service.",
        "We cater to both, residents and international investors who are interested in UAE free zone company formation.",
        "We can help you identify the right specialty and choose the best free zone location. We help you create compelling value propositions. We process all the documentation and paperwork while complying with regulations. We will even fulfil unusual requests.",
        "If you are looking for UAE Free Zone company set up, we are happy to serve you – and deliver high levels of satisfaction.",
      ],
    },
  ];

  const services = [
    {
      image: "/api/placeholder/271/189",
      title: "Sheikh Zayed Road",
      description:
        "Prime business location with high visibility and connectivity for your company's growth and success.",
    },
    {
      image: "/api/placeholder/271/189",
      title: "Commercial License",
      description:
        "Establish your business operations smoothly in Dubai's thriving commercial sector with our comprehensive support and expertise.",
    },
    {
      image: "/api/placeholder/271/189",
      title: "Professional License",
      description:
        "Step into the professional services industry in Dubai with ease and efficiency, guided by our knowledgeable team.",
    },
    {
      image: "/api/placeholder/271/189",
      title: "Industrial License",
      description:
        "Explore immense opportunities in Dubai's industrial sector with our assistance in obtaining the necessary licenses for your manufacturing or production business.",
    },
  ];

  const accordionData2 = [
    {
      id: 1,
      title: "What is a Dubai Freezone and why is it beneficial for starting a freezone company formation in Dubai, UAE?",
      content: [
        "A Dubai Freezone is a designated geographic area within the city where foreign investors can set up and operate their businesses with various incentives such as 100% foreign ownership, tax exemptions, and simplified regulations. It provides an attractive environment for international companies to establish their presence in Dubai and access the regional markets.",
      ],
    },
    {
      id: 2,
      title: "What are the main types of Freezones in Dubai, UAE?",
      content: [
        "Dubai has several Freezones, each catering to different industries and offering unique benefits. Some of the most prominent types include:",
      ],
    },
    {
      id: 3,
      title: "How can Globex Incorporation assist with freezone company formation in Dubai, UAE?",
      content: [
        "Globex Incorporation is a trusted business setup and licensing company in Dubai, UAE. We offer comprehensive services to help you navigate the complexities of freezone company formation. Our expert team can guide you through:",
      ],
    },
    {
      id: 4,
      title: "What are the key requirements for freezone company formation in Dubai, UAE?",
      content: [
        "The key requirements for freezone company formation in Dubai include: valid passport copies of shareholders/directors, business plan or project summary, completed application forms, and initial capital requirements which vary by freezone. Additional documentation may be required based on the specific freezone and type of license.",
      ],
    },
    {
      id: 5,
      title: "What are the costs involved in Dubai freezone company setup?",
      content: [
        "The costs for Dubai freezone company setup typically include: license fees, registration fees, visa costs, office or workspace charges, and initial capital requirements. The exact costs vary depending on the chosen freezone, type of license, number of visas required, and office space selection. Contact Globex Incorporation for detailed cost breakdowns specific to your business needs.",
      ],
    }
  ];

  return (
    <div>
      <section className="freezone px-4 md:px-20 lg:px-32 py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
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
                When individuals and institutions weigh the options for freezone
                company formation dubai, one aspect firmly tilts the balance in
                favor – free zones.
              </p>
              <p>
                Freezone areas are those designated business zones where
                corporate and personal income taxes are scaled down to 0%.
                Choosing a free zone can depend on many factors: the nature and
                type of business, the size, flexibility and availability of
                office space, location, and pricing.
              </p>
              <p>
                Obtaining a business license for Dubai freezone company setup is
                easier and faster than offshore and mainland, given you have the
                right set of guidance from experts. The decision to set up
                business in the UAE free zone totally depends on the type of
                business you're looking to form.
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
              Discover the opportunity to start your freezone company setup
              Dubai with our expert assistance. Whether you prefer the
              flexibility of a Free Zone, the advantages of Mainland, or the
              privacy of an Offshore setup, we have the knowledge and resources
              to support you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h5 className="text-lg font-bold">01</h5>
              <h3 className="text-xl font-semibold">Professional License</h3>
              <p className="text-gray-600 mt-2">
                Obtain the authorization needed to provide professional services
                within the Freezone. Benefit from a streamlined process and
                expand your expertise.
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
                Secure the privilege to trade and conduct commercial activities
                within the Freezone. Experience ease of operations and tap into
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
                Attain the permit to establish industrial operations within the
                Freezone. Explore growth opportunities and optimize production
                processes.
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
              Discovery the potential of Dubai's Free Zones, Mainland, and
              Offshore regions with our expert guidance in starting and
              expanding your Dubai free zone company setup.
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
        <p className="text-center">Please note that specifics may vary depending on the chosen Freezone and the nature of your Dubai freezone company formation. It’s advisable to consult with experts like Globex Incorporation for accurate and up-to-date information tailored to your situation.</p>
      </section>
    </div>
  );
}

export default Freezone;

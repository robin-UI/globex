import React from "react";

function ArrowRight() {
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
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

const BenefitCard = ({ title, description }) => (
  <div className="flex items-start space-x-4 mb-4 p-4 bg-white shadow-md rounded-lg">
    <ArrowRight className="text-blue-600 mt-1 flex-shrink-0" size={24} />
    <div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

function Mainland() {
  const benefits = [
    {
      title: "Well established Connections",
      description:
        "Dubai mainland is central to global links – ideal for your business setup.",
    },
    {
      title: "Top-notch Locations",
      description:
        "Get access to prime spots in Dubai for your business. Connect with various markets and people effortlessly.",
    },
    {
      title: "Local & Worldwide Reach",
      description:
        "With mainland business setup Dubai, your business connects easily with local UAE markets and the global business community.",
    },
    {
      title: "No Money Worries",
      description:
        "Unlike free zones, mainland companies have no money limits on business activities. Do more things with your business!",
    },
    {
      title: "More Talented People",
      description:
        "Find the best local and international talents. This helps your business grow and come up with new ideas.",
    },
    {
      title: "Easy Government Interaction",
      description:
        "Say goodbye to complicated processes. Dubai mainland business setup offers simple rules and direct contact with the government.",
    },
    {
      title: "Limitless Growth",
      description:
        "Your business can expand anywhere without problems. Grow as much as you want!",
    },
  ];

  return (
    <>
      <div className="max-w-full mx-auto p-6 bg-gray-50 pt-32 lg:px-24">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Why Dubai Mainland is Perfect for Your Business?
        </h2>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
        <div className="text-center mt-6 text-gray-700 italic">
          A&A Associate LLC makes starting your Dubai mainland company formation
          easy. Let's make your business dreams come true!
        </div>
      </div>
      <div className="max-w-full p-6 lg:px-24 bg-white shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Steps to Set Up a New Business in the UAE Mainland
        </h2>

        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            Our team of experienced{" "}
            <span className="italic">
              lawyers, chartered accountants, and consultants
            </span>{" "}
            specialize in establishing various types of companies, including{" "}
            <span className="italic">
              Trading Consulting & 100% expat owned companies
            </span>{" "}
            on the UAE mainland.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            We help hundreds of individuals and institutions worldwide to
            procure new business licenses, rent office space, and start a
            successful new life in the UAE.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Select Business Activity
          </h3>
          <p className="text-gray-700">
            Our specialists will advise you on:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Specific business activities matching your requirements</li>
              <li>Suitable jurisdiction for your chosen activities</li>
              <li>Cost-effective options within your budget</li>
            </ul>
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium text-blue-700 mb-2">
            License Types We Offer
          </h4>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <ul className="list-disc list-inside">
                <li>Commercial Trading License</li>
                <li>Consultancy License</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc list-inside">
                <li>E-commerce License</li>
                <li>Real Estate License</li>
                <li>Manufacturing License</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-gray-800 font-medium">
            Ready to start your business journey in the UAE?
          </p>
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default Mainland;

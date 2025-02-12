// import React from "react";

import { Helmet } from "react-helmet";
import SignupOffer from "../../components/utils/SignupOffer";

function CheckIcon() {
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
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function Info() {
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
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  );
}

function Globe() {
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
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function Briefcase() {
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
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    </svg>
  );
}

const InvestorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
    />
  </svg>
);
const WorkVisaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);
const ResidenceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
    />
  </svg>
);
const LicensingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
    />
  </svg>
);
const LabourCardsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
    />
  </svg>
);
const ImmigrationCardsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
    />
  </svg>
);
const ApprovalsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6h.008v.008H6V6Z"
    />
  </svg>
);
const RenewalIcon = () => (
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
      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
    />
  </svg>
);

const services = [
  { Icon: InvestorIcon, title: "Investor\nVisa" },
  { Icon: WorkVisaIcon, title: "Work Visa\nfor your team" },
  { Icon: ResidenceIcon, title: "Residence Permits\nfor your family" },
  { Icon: LicensingIcon, title: "Licensing\n& Documentation" },
  { Icon: LabourCardsIcon, title: "Labour\nCards" },
  { Icon: ImmigrationCardsIcon, title: "Immigration\nCards" },
  { Icon: ApprovalsIcon, title: "Approvals from\nGovernment" },
  { Icon: RenewalIcon, title: "Renewal of\nBusiness License" },
];

const benefits = [
  "Strategic hub for global commerce with comprehensive corporate tax exemptions",
  "Enhanced privacy protection with confidential shareholder and director information",
  "Streamlined compliance with exemption from annual financial reporting requirements",
  "Efficient banking solutions with expedited corporate account establishment",
  "Flexible financial operations with unrestricted fund transfers and multi-currency capabilities",
  "Guaranteed 100% ownership rights with complete operational autonomy",
  "Robust business privacy framework ensuring confidential commercial operations",
  "Liberalized trade environment free from exchange controls and trade restrictions",
];

const ServiceCard = ({ Icon, title }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="absolute top-0 right-0 h-20 w-20 -translate-x-4 -translate-y-4 transform rounded-full bg-blue-500 opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-300"></div>
    <div className="relative z-10">
      <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
        <Icon />
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-800">
        {title.split("\n")[0]}
      </h3>
      {title.split("\n")[1] && (
        <p className="text-sm text-gray-600">{title.split("\n")[1]}</p>
      )}
      <div className="mt-4 h-0.5 w-10 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
    </div>
  </div>
);

function Offsore() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offshore Company Formation in Dubai | Fast & Easy Setup</title>
        <meta
          name="description"
          content="Looking to set up an offshore company in Dubai? We offer expert
          offshore company formation services in Dubai, simplifying the process
          and ensuring compliance. Get started today! "
        />
      </Helmet>

      <section className="relative py-28 overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-100/30 -skew-x-12 transform-gpu"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Column with Floating Effect */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <img
                  src="../images/otherImages/dubaiCompany.jpg"
                  alt="Start your offshore Company with Globex Incorporation"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                />
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-blue-600 text-sm font-semibold">
                    Strategic Business Solutions
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-100/80 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#2BDEFA]/20 rounded-full blur-2xl"></div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="text-[#377CFF] font-semibold text-sm tracking-wider uppercase">
                  International Business Hub
                </span>
                <h2 className="text-4xl font-bold text-gray-900">
                  Offshore Company Registration in Dubai
                </h2>
                <div className="w-20 h-2 bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)] rounded-full"></div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <h6 className="text-lg font-semibold text-gray-800 mb-3">
                  Unique features of offshore company formation Dubai, UAE
                </h6>
                <h3 className="text-xl font-bold text-[#377CFF] mb-4">
                  Scope and scale
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Offshore company establishment provides a strategic
                  alternative to UAE mainland and free zone operations. Premier
                  jurisdictions include RAK Offshore (Ras Al Khaimah
                  International Corporate Centre or RAK ICC), alongside
                  prestigious international locations such as the{" "}
                  <a
                    href="#"
                    className="text-[#377CFF] font-medium hover:underline inline-flex items-center"
                  >
                    British Virgin Islands
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  ,{" "}
                  <a
                    href="#"
                    className="text-[#377CFF] font-medium hover:underline inline-flex items-center"
                  >
                    Cayman Islands
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  , and{" "}
                  <a
                    href="#"
                    className="text-[#377CFF] font-medium hover:underline inline-flex items-center"
                  >
                    Mauritius
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  .
                </p>
              </div>

              {/* Additional Info Box */}
              <div className="bg-[linear-gradient(270deg,#2BDEFA_0%,#377CFF_100%)] p-6 rounded-2xl text-white">
                <p className="leading-relaxed">
                  An offshore company in Dubai represents a legally structured
                  entity designed to operate beyond its registered jurisdiction.
                  While these entities typically benefit from virtual office
                  arrangements, they face certain operational restrictions
                  within their country of incorporation when{" "}
                  <strong>establishing your offshore presence</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Strategic Advantages of Dubai Offshore Company Formation
            </h2>

            <div className="relative pl-6 border-l-2 border-blue-500">
              <p className="text-gray-600 leading-relaxed">
                Dubai distinguishes itself among global jurisdictions through
                its world-class financial infrastructure, state-of-the-art
                business facilities, advanced digital ecosystem, and strategic
                position as a gateway to emerging markets.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-4">
              {[
                "Stable and business-friendly legal system",
                "Flexible regulatory regime",
                "Tax neutrality",
                "Separation and protection of assets",
                "Gateway to international markets",
                "Access to global funding",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                >
                  <CheckIcon className="text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full"></div>
              <div className="relative">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Offshore entities offer flexible ownership structures,
                  accommodating both individual entrepreneurs and institutional
                  investors, with seamless share transfer capabilities through
                  formal documentation.
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-bl-full"></div>
              <div className="relative">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Offshore company formation in Dubai</strong>{" "}
                  represents one of the UAE's most dynamic business sectors.
                  These entities are strategically structured to optimize tax
                  efficiency across multiple areas, including real estate
                  transactions, investment gains, value-added taxation (VAT),
                  inheritance planning, and commercial profits.
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full"></div>
              <div className="relative">
                <p className="text-gray-700 leading-relaxed">
                  Global investors seeking{" "}
                  <strong>offshore company registration in Dubai</strong>{" "}
                  benefit from comprehensive advantages: sophisticated wealth
                  management solutions, robust asset protection frameworks, and
                  centralized operational capabilities for international trade,
                  consultancy, and contractual services.
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-bl-full"></div>
              <div className="relative">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Dubai's offshore company framework</strong> ensures
                  paramount discretion in corporate ownership structures while
                  maintaining the highest standards of financial privacy and
                  operational security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-20 py-12">
        <SignupOffer />
      </section>

      <section className="container mx-auto px-4 lg:px-20 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end solutions for offshore company formation,
            ensuring a smooth and efficient process
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Benefits of Offshore Company Formation in Dubai, UAE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
              >
                {/* Number indicator - bigger size */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-base z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                {/* Simple border animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-500 ease-out"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="h-12 w-12 mb-6 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offsore;

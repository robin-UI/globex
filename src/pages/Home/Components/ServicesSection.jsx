import { AttestationIcon, CompanyIcon, LabourIcon, ProIcon, TradeIcon, VisaIcon } from "../../../components/Icons/Icons";

function ServicesSection() {
  return (
    <section>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Services provided by
              <br />
              Globex Incorporation
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Empowered by deep expertise and a team of accomplished
              professionals, Globex delivers a distinguished portfolio of
              tailored services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ServiceCard
                icon={<CompanyIcon />}
                title="COMPANY FORMATION"
                isActive={true}
              />
              <ServiceCard icon={<TradeIcon />} title="TRADE LICENSE" />
              <ServiceCard icon={<VisaIcon />} title="VISA SERVICES" />
              <ServiceCard icon={<ProIcon />} title="PRO SERVICES" />
              <ServiceCard
                icon={<AttestationIcon />}
                title="ATTESTATION SERVICES"
              />
              <ServiceCard icon={<LabourIcon />} title="LABOUR SERVICES" />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">COMPANY FORMATION</h2>
              <p className="text-gray-600 mb-6">
                Globex simplifies company setup with needs assessment, legal
                registration, and compliance. Our tailored solutions in
                accounting, marketing, and IT support sustainable growth.
              </p>
              <img
                src="https://placehold.co/600x400"
                alt="Company Formation"
                className="w-full rounded-lg mb-6"
              />
              <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                Read more
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

function ServiceCard({ icon, title, isActive = false }) {
    return (
      <div
        className={`flex items-center justify-between p-6 rounded-xl transition-all cursor-pointer
        ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            : "bg-white hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center space-x-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center
            ${isActive ? "bg-white text-blue-600" : "bg-blue-100 text-blue-600"}`}
          >
            {icon}
          </div>
          <span className="font-semibold">{title}</span>
        </div>
        <svg
          className="w-6 h-6"
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
      </div>
    );
  }
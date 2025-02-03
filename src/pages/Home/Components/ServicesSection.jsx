import { useState } from "react";
import {
  AttestationIcon,
  CompanyIcon,
  LabourIcon,
  ProIcon,
  TradeIcon,
  VisaIcon,
} from "../../../components/Icons/Icons";
import { useNavigate } from "react-router";

function ServicesSection() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState({ status: true, title: "COMPANY FORMATION" });
  return (
    <section>
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-24 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{
                fontWeight: 900,
                fontSize: "50px",
                lineHeight: "54px",
                letterSpacing: "2px",
                // fontFamily:"sansarif"
              }}
            >
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
                onMouseEnter={() =>
                  setIsActive({ status: true, title: "COMPANY FORMATION" })
                }
                onMouseLeave={() =>
                  setIsActive({ status: false, title: "COMPANY FORMATION" })
                }
                icon={<CompanyIcon />}
                title="COMPANY FORMATION"
                isActive={isActive}
              />
              <ServiceCard
                onMouseEnter={() =>
                  setIsActive({ status: true, title: "TRADE LICENSE" })
                }
                onMouseLeave={() =>
                  setIsActive({ status: false, title: "TRADE LICENSE" })
                }
                icon={<TradeIcon />}
                title="TRADE LICENSE"
                isActive={isActive}
              />
              <ServiceCard
                onMouseEnter={() =>
                  setIsActive({ status: true, title: "VISA SERVICES" })
                }
                onMouseLeave={() =>
                  setIsActive({ status: false, title: "VISA SERVICES" })
                }
                icon={<VisaIcon />}
                title="VISA SERVICES"
                isActive={isActive}
              />
              <ServiceCard
                onMouseEnter={() =>
                  setIsActive({ status: true, title: "PRO SERVICES" })
                }
                onMouseLeave={() =>
                  setIsActive({ status: false, title: "PRO SERVICES" })
                }
                icon={<ProIcon />}
                title="PRO SERVICES"
                isActive={isActive}
              />
              <ServiceCard
                onMouseEnter={() =>
                  setIsActive({ status: true, title: "ATTESTATION SERVICES" })
                }
                onMouseLeave={() =>
                  setIsActive({ status: false, title: "ATTESTATION SERVICES" })
                }
                icon={<AttestationIcon />}
                title="ATTESTATION SERVICES"
                isActive={isActive}
              />
              <ServiceCard
                onMouseEnter={() =>
                  setIsActive({ status: true, title: "LABOUR SERVICES" })
                }
                onMouseLeave={() =>
                  setIsActive({ status: false, title: "LABOUR SERVICES" })
                }
                icon={<LabourIcon />}
                isActive={isActive}
                title="LABOUR SERVICES"
              />
            </div>

            {isActive.title === "COMPANY FORMATION" && (
              <div className="bg-white p-3">
                <h2 className="text-2xl font-bold mb-4">COMPANY FORMATION</h2>
                <p className="text-gray-600 mb-6">
                  Globex simplifies company setup with needs assessment, legal
                  registration, and compliance. Our tailored solutions in
                  accounting, marketing, and IT support sustainable growth.
                </p>
                <img
                  src="./images/homepage/services1.png"
                  alt="Company Formation"
                  className="w-full rounded-lg mb-6"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button className="text-blue-600 font-semibold flex hover:text-blue-800" onClick={() => navigate("/business-setup")}>
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
            )}

            {/* TRADE LICENSE */}

            {isActive.title === "TRADE LICENSE" && (
              <div className="bg-white p-3">
                <h2 className="text-2xl font-bold mb-4">TRADE LICENSE</h2>
                <p className="text-gray-600 mb-6">
                  Globex streamlines company setup with needs assessment, legal
                  registration, and compliance. Our tailored solutions in
                  accounting, marketing, and IT support sustainable growth.
                </p>
                <img
                  src="./images/homepage/service2.png"
                  alt="TRADE LICENSE"
                  className="w-full rounded-lg mb-6"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button className="text-blue-600 font-semibold flex hover:text-blue-800" onClick={() => navigate("/commercial-license")}>
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
            )}

            {/* VISA SERVICES */}

            {isActive.title === "VISA SERVICES" && (
              <div className="bg-white p-3">
                <h2 className="text-2xl font-bold mb-4">VISA SERVICES</h2>
                <p className="text-gray-600 mb-6">
                  Globex simplifies company setup with needs assessment, legal
                  registration, and compliance. Our tailored solutions in
                  accounting, marketing, and IT support sustainable growth.
                </p>
                <img
                  src="./images/homepage/service3.png"
                  alt="VISA SERVICES"
                  className="w-full rounded-lg mb-6"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button className="text-blue-600 font-semibold flex hover:text-blue-800" onClick={() => navigate("/year-uae-visa")}>
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
            )}

            {/* PRO SERVICES */}

            {isActive.title === "PRO SERVICES" && (
              <div className="bg-white p-3">
                <h2 className="text-2xl font-bold mb-4">PRO SERVICES</h2>
                <p className="text-gray-600 mb-6">
                  Globex simplifies company setup with needs assessment, legal
                  registration, and compliance. Our tailored solutions in
                  accounting, marketing, and IT support sustainable growth.
                </p>
                <img
                  src="./images/homepage/service4.png"
                  alt="PRO SERVICES"
                  className="w-full rounded-lg mb-6"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button onClick={() => navigate("pro-services")} className="text-blue-600 font-semibold flex hover:text-blue-800">
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
            )}

            {/* ATTESTATION SERVICES */}
            {isActive.title === "ATTESTATION SERVICES" && (
              <div className="bg-white p-3">
                <h2 className="text-2xl font-bold mb-4">
                  {" "}
                  ATTESTATION SERVICES
                </h2>
                <p className="text-gray-600 mb-6">
                  Globex simplifies company setup with needs assessment, legal
                  registration, and compliance. Our tailored solutions in
                  accounting, marketing, and IT support sustainable growth.
                </p>
                <img
                  src="./images/homepage/service5.png"
                  alt=" ATTESTATION SERVICES"
                  className="w-full rounded-lg mb-6"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button onClick={() => navigate('attestation-services')} className="text-blue-600 font-semibold flex hover:text-blue-800">
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
            )}

            {/* LABOUR SERVICES */}

            {isActive.title === "LABOUR SERVICES" && (
              <div className="bg-white p-3">
                <h2 className="text-2xl font-bold mb-4">LABOUR SERVICES</h2>
                <p className="text-gray-600 mb-6">
                  Globex simplifies company setup with needs assessment, legal
                  registration, and compliance. Our tailored solutions in
                  accounting, marketing, and IT support sustainable growth.
                </p>
                <img
                  src="./images/homepage/service6.png"
                  alt="LABOUR SERVICES"
                  className="w-full rounded-lg mb-6"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button onClick={() => navigate('labour-services')} className="text-blue-600 font-semibold flex hover:text-blue-800">
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

function ServiceCard({ icon, title, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`flex items-center justify-between p-2 rounded-xl transition-all cursor-pointer
        ${
          isActive?.status && isActive?.title === title
            ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            : "bg-white hover:bg-gray-50"
        }`}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center
            ${
              isActive?.status && isActive?.title === title
                ? "bg-white text-blue-600"
                : "bg-blue-100 text-blue-600"
            }`}
        >
          {icon}
        </div>
        <span className="font-semibold">{title}</span>
      </div>
      <img
        src="./images/homepage/upArrow.svg"
        alt=""
        style={{
          width: "55px",
          height: "55px",
          border: "1px solid rgba(90, 156, 254, 0.35)",
          borderRadius: "105px 105px 105px 105px",
        }}
      />
    </div>
  );
}

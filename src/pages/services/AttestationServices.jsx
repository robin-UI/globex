import {
  Building2,
  FileCheck,
  Stamp,
  ShieldCheck,
  ScrollText, // Changed from Certificate
  GraduationCap,
  Baby,
  Heart,
} from "lucide-react";

function AttestationServices() {
  const services = [
    {
      icon: <Building2 size={40} className="text-blue-600" />,
      title: "UAE Embassy Attestation",
      description: "UAE, Portuguese, Egypt, KSA",
      link: "/uae-embassy-attestation",
    },
    {
      icon: <FileCheck size={40} className="text-blue-600" />,
      title: "MOFA Attestation",
      description: "Degree, Birth, Marriage or Transfer",
      link: "/mofa-attestation-uae",
    },
    {
      icon: <Stamp size={40} className="text-blue-600" />,
      title: "Apostille Services",
      description: "UK, USA, Canada, Australia, Saudi",
      link: "/apostille-services-uae",
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-600" />,
      title: "Police Clearance Certificate",
      description: "Dubai Pcc issuance & Attestation",
      link: "/police-clearance-certificate-dubai",
    },
    {
      icon: <ScrollText size={40} className="text-blue-600" />, // Changed from Certificate
      title: "Certificate Attestation",
      description: "Degree, Birth, Marriage or Transfer",
      link: "/certificate-attestation",
    },
    {
      icon: <GraduationCap size={40} className="text-blue-600" />,
      title: "Degree Certificate Attestation",
      description: "UK, USA, Indian, Canada, Australia",
      link: "/degree-certificate-attestation",
    },
    {
      icon: <Baby size={40} className="text-blue-600" />,
      title: "Birth Certificate Attestation",
      description: "UK, USA, Indian, Canada, Australia",
      link: "/birth-certificate-attestation",
    },
    {
      icon: <Heart size={40} className="text-blue-600" />,
      title: "Marriage Certificate Attestation",
      description: "UK, USA, Indian, Canada, Australia",
      link: "/marriage-certificate-attestation",
    },
  ];
  return (
    <section>
      <div className="relative overflow-hidden">
        {/* Enhanced Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-[#2BDEFA]/20 via-[#377CFF]/10 to-transparent rounded-bl-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-t from-[#377CFF]/20 via-[#2BDEFA]/10 to-transparent rounded-tr-full animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 pt-28">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] relative z-10">
                    Certificate Attestation Services in UAE
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA]/20 to-[#377CFF]/20 blur-xl -z-10 transform scale-150"></div>
                </h1>
              </div>
            </div>
            <span className="block text-2xl text-gray-600 mt-2">
              Quick, Reliable & Cost-Effective Attestation Services in Dubai,
              Sharjah, and Abu Dhabi.
            </span>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mt-6">
              Dubai is renowned for its efficient and trusted attestation
              services, making it a top choice for individuals and businesses
              seeking seamless document authentication.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-12 text-gray-800">
            Best Attestation Services in UAE
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <a
                  href={service.link}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="mb-4">
                    <div className="w-20 h-20 object-contain">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-blue-600">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttestationServices;

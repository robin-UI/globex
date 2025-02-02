import React from 'react';
import { Plane, Map, Bus, Globe, Building, CreditCard, FileText, Users, Award, Calendar, Navigation, PlaneLanding } from 'lucide-react'

const Card = ({ className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
      {...props}
    />
  );
};

const CardHeader = ({ className = '', ...props }) => {
  return <div className={`p-6 ${className}`} {...props} />;
};

const CardTitle = ({ className = '', ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
};

const CardContent = ({ className = '', ...props }) => {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
};

const TourismGuide = () => {
  const licenseTypes = [
    {
      title: "Inbound Tourism License",
      description: "Essential for businesses organizing local events or providing transportation services within Dubai.",
      icon: <Bus className="w-6 h-6" />,
      features: [
        { text: "Arrange tours and excursions within Dubai", icon: <Navigation className="w-4 h-4" /> },
        { text: "Handle travel accommodations and logistics", icon: <Building className="w-4 h-4" /> },
        { text: "Organize local cultural tours", icon: <Calendar className="w-4 h-4" /> }
      ]
    },
    {
      title: "Outbound Tourism License",
      description: "Designed for businesses selling travel packages to destinations outside the UAE.",
      icon: <Plane className="w-6 h-6" />,
      features: [
        { text: "Create and sell international travel packages", icon: <Globe className="w-4 h-4" /> },
        { text: "Organize flights and accommodations", icon: <PlaneLanding className="w-4 h-4" /> },
        { text: "Work with international partners", icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      title: "Travel Agency License",
      description: "Required for entities operating as travel agencies in Dubai.",
      icon: <Map className="w-6 h-6" />,
      features: [
        { text: "Sell airline tickets", icon: <CreditCard className="w-4 h-4" /> },
        { text: "Make hotel reservations", icon: <Building className="w-4 h-4" /> },
        { text: "Arrange visas and travel insurance", icon: <FileText className="w-4 h-4" /> }
      ]
    }
  ];

  const requiredDocuments = [
    { text: "Completed application form", icon: <FileText className="w-4 h-4" /> },
    { text: "Passport copies of shareholders", icon: <Users className="w-4 h-4" /> },
    { text: "Professional qualifications", icon: <Award className="w-4 h-4" /> },
    { text: "No criminal record certificate", icon: <FileText className="w-4 h-4" /> },
    { text: "Civil Aviation Authority NOC", icon: <Plane className="w-4 h-4" /> },
    { text: "Manager's qualifications", icon: <Award className="w-4 h-4" /> }
  ];

  return (
    <section>
      <div className="relative overflow-hidden">
        {/* Enhanced Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-[#2BDEFA]/20 via-[#377CFF]/10 to-transparent rounded-bl-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-t from-[#377CFF]/20 via-[#2BDEFA]/10 to-transparent rounded-tr-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 py-16 pt-28">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] relative z-10">
                    Tourism License
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA]/20 to-[#377CFF]/20 blur-xl -z-10 transform scale-150"></div>
                </h1>
              </div>
            </div>
            <span className="block text-2xl text-gray-600 mt-2">Dubai</span>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mt-6">
              Dubai is globally celebrated as a premier travel destination and a vibrant business hub, 
              drawing entrepreneurs and investors from around the world.
            </p>
          </div>

          {/* Enhanced License Types Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {licenseTypes.map((license, index) => (
              <div key={index} className="relative group transform transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {license.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#377CFF] transition-colors duration-300">
                    {license.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{license.description}</p>
                  <div className="space-y-3">
                    {license.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center p-3 bg-gray-50 rounded-lg group/item hover:bg-gradient-to-r hover:from-[#2BDEFA]/5 hover:to-[#377CFF]/5 transition-all duration-300">
                        <div className="text-[#377CFF] mr-3 group-hover/item:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Required Documents Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                Required Documents
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="group/doc relative transform transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] rounded-xl opacity-0 group-hover/doc:opacity-5 transition-opacity duration-300"></div>
                    <div className="relative p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#2BDEFA]/10 to-[#377CFF]/10 flex items-center justify-center mr-3 group-hover/doc:bg-gradient-to-r group-hover/doc:from-[#2BDEFA] group-hover/doc:to-[#377CFF] transition-all duration-300">
                          <div className="text-[#377CFF] group-hover/doc:text-white transition-colors duration-300">
                            {document.icon}
                          </div>
                        </div>
                        <span className="text-gray-700">{document.text}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default TourismGuide;
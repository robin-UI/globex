const Services = () => {
  const visaServices = [
    { title: 'Employment Visa', id: 1 },
    { title: 'Resident Visa', id: 2 },
    { title: 'Investor Visa', id: 3 },
    { title: 'Multiple Entry Visa', id: 4 },
    { title: 'Urgent Visit Visa', id: 5 },
    { title: 'Servant/maid Visa', id: 6 },
    { title: 'Renewing/stamping related service', id: 7 },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Outstanding immigration and visa services</h2>
        <p className="text-gray-600 text-lg">
          For visa services in Dubai, Globex simplify the process from application to issuance. Our team provides reliable service, serving clients' trust for their UAE visa needs.
        </p>
      </div>

      {/* Grid Layout for Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {visaServices.slice(0, 6).map((service) => (
          <Card key={service.id} className="relative group hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 rounded-t-lg mb-4"></div>
            <CardContent>
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-xl">{service.title}</h3>
                <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center transition-colors hover:bg-blue-200">
                  <span className="text-blue-600 text-2xl">→</span>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Row for Renewing Service and CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="relative group hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200 rounded-t-lg mb-4"></div>
          <CardContent>
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-xl">{visaServices[6].title}</h3>
              <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center transition-colors hover:bg-blue-200">
                <span className="text-blue-600 text-2xl">→</span>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <CardContent className="p-8 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold mb-4">Get visa with 100% Success Rate</h3>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg w-fit hover:bg-blue-50 transition-colors">
              Contact Now
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};


const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
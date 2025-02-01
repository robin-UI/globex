import React from 'react';

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
  return (
    <div className="flex flex-col max-w-4xl mx-auto mt-32">
      {/* Header Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-900">
            Tourism License in Dubai
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700 mb-4">
            Dubai is globally celebrated as a premier travel destination and a vibrant business hub, 
            drawing entrepreneurs and investors from around the world. The city's allure as an investment 
            hotpot is particularly pronounced in the tourism sector, which offers numerous profitable opportunities.
          </p>
          
          {/* Main License Types Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Types of Tourism Licenses</h2>
            <div className="space-y-6">
              {/* Inbound License */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Inbound Tourism License</h3>
                <p className="text-sm text-gray-700">
                  Essential for businesses organizing local events or providing transportation services within Dubai.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm text-gray-700">• Arrange tours and excursions within Dubai</li>
                  <li className="text-sm text-gray-700">• Handle travel accommodations and logistics</li>
                  <li className="text-sm text-gray-700">• Organize local cultural tours</li>
                </ul>
              </div>

              {/* Outbound License */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Outbound Tourism License</h3>
                <p className="text-sm text-gray-700">
                  Designed for businesses selling travel packages to destinations outside the UAE.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm text-gray-700">• Create and sell international travel packages</li>
                  <li className="text-sm text-gray-700">• Organize flights and accommodations</li>
                  <li className="text-sm text-gray-700">• Work with international partners</li>
                </ul>
              </div>

              {/* Travel Agency License */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Travel Agency License</h3>
                <p className="text-sm text-gray-700">
                  Required for entities operating as travel agencies in Dubai.
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm text-gray-700">• Sell airline tickets</li>
                  <li className="text-sm text-gray-700">• Make hotel reservations</li>
                  <li className="text-sm text-gray-700">• Arrange visas and travel insurance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Required Documents Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700">• Completed application form</li>
                  <li className="text-sm text-gray-700">• Passport copies of shareholders</li>
                  <li className="text-sm text-gray-700">• Professional qualifications</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700">• No criminal record certificate</li>
                  <li className="text-sm text-gray-700">• Civil Aviation Authority NOC</li>
                  <li className="text-sm text-gray-700">• Manager's qualifications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          {/* <div className="mt-8 border-t pt-4">
            <p className="text-sm text-gray-600">
              Author: <span className="font-bold">RENU SURESH</span>
            </p>
            <p className="text-sm text-gray-600">
              Updated on: <span className="font-bold">January 28th, 2025</span>
            </p>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default TourismGuide;
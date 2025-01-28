const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-2xl font-bold text-gray-800 ${className}`}>
    {children}
  </h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const Check = () => (
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

function IndustrialLicense() {
  const industrialActivities = [
    "Manufacturing of paper and/or paper-based products",
    "Production of bread on a commercial scale",
    "Anything involving the production or mixing of chemicals on a large scale",
    "Casting of metals",
    "Forging and/or assembly of machines / equipment / engines",
    "Packaging of food products, including bottling of carbonated drinks",
  ];

  const industrialActivitiesLeft = [
    "Raw materials processing",
    "Petroleum and metal extraction",
    "Fabric production & Textiles manufacturing",
    "The casting of metals such as iron & steel",
    "Appliances and machinery manufacturing",
    "Bread production and food products production",
    "Manufacturing of paper products",
    "Metal casing, containers & boxes manufacturing",
    "Structural steel, steel workshop and tool manufacturing",
    "Coating, insulations, seals & protection materials manufacturing",
    "Waste collection and treatment",
    "Manufacturing of wood, wood products and Furniture",
    "Adhesive & paper slitting",
  ];

  const industrialActivitiesRight = [
    "Glass industries & chinaware manufacturing",
    "Agricultural equipment & accessories manufacturing",
    "Lenses cutting & glass repairing",
    "Manufacture of gold and precious stones cutting",
    "Light aircraft manufacturing & maintenance",
    "Meat processing",
    "Manufacture of batteries",
    "Plastic industries manufacturing home appliances",
    "Air conditioning units assembly",
    "Advertising & decorative models manufacturing",
    "Production of petroleum products",
    "Manufacture of motor vehicles, motorcycles & its spare parts",
    "Processing like filling, segregating and packaging of products",
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              What is an Industrial Manufacturing License in Dubai?
            </h2>

            <p className="text-gray-600">
              An Industrial Manufacturing License in Dubai or anywhere else in
              the United Arab Emirates is granted when the commercial activity
              undertaken is of an industrial nature, such as manufacturing or
              refining of petrochemicals. If you are unsure of whether a
              particular business activity is industrial or not, the rule of
              thumb is that it is most likely to be industrial if it involves
              the use of specialized plant equipment.
            </p>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-700">
                Examples of industrial activity include:
              </h3>
              <ul className="space-y-2">
                {industrialActivities.map((activity, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* </div>
        <div className="max-w-4xl mx-auto p-6 space-y-8"> */}
        <Card>
          <CardHeader>
            <CardTitle>Industrial Manufacturing License in Dubai</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Why do you need an Industrial Manufacturing License in Dubai?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All business entities into manufacturing or industrial activity
                need an Industrial Manufacturing License. Although it is issued
                by the Department of Economic Development in the emirate you
                plan to set up your company in, there are several clearances and
                mandatory approvals that need to be obtained before one can
                apply for an Industrial Manufacturing License in Dubai.
              </p>
              <div className="mt-4 space-y-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Key requirements include:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Necessary firefighting equipment with certification</li>
                    <li>Worker health protection plans</li>
                    <li>Appropriate electrical power connections</li>
                    <li>
                      Failsafe electrical protection equipment meeting UAE
                      standards
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                About Industrial Manufacturing License in United Arab Emirates
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600">
                    Once your Industrial Manufacturing License has been
                    sanctioned:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Construction must start within six months</li>
                    <li>
                      DED permission required to start functioning after
                      construction
                    </li>
                    <li>Must notify authorities of any operational changes</li>
                    <li>Registration in Industrial Register required</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 font-semibold mb-2">
                    Ongoing Requirements:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Maintain accurate worker records</li>
                    <li>
                      Ensure workers are qualified for machinery operation
                    </li>
                    <li>Proper use of imported materials</li>
                    <li>Notify DED of Director appointments</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    Special Requirement for Abu Dhabi:
                  </p>
                  <p className="mt-2 text-gray-600">
                    25% of all workers must be of Emirati nationality
                  </p>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img
                  src="/api/placeholder/448/325"
                  alt="UAE industrial license"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Requirements to Get Industrial Manufacturing License in Dubai
                </h3>
                <div className="text-gray-600 leading-relaxed">
                  You need to submit a report which includes all the details
                  about the industrial establishment, including the reason for
                  starting it or expanding current industrial operations. The
                  latter assumes significance if you already own an industrial
                  establishment, but your current Industrial Manufacturing
                  License does not include the scope of activity that you
                  propose to undertake.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Report Requirements Section */}
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              This report must include everything possible about the production
              tools, including detailed technical information, as well as the
              estimated cost of production. Your report must also contain how
              you plan to finance this industrial operation – whether you plan
              to set up the industrial unit with your own funds or with help
              from a financial institution. Since the objective behind this is
              to see to it that you are successfully able to continue operations
              after you have established your unit, you must show proof of
              funds, such as a bank statement or a letter of credit / bank
              guarantee from a bank or financial institution in the United Arab
              Emirates.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              The report should include the number of employees that you plan to
              hire for the operation of the industrial establishment. It is
              important that your establishment be large enough to accommodate
              all of them. Additionally, the consent of the Municipality must be
              obtained and included along with the report in your application
              for an Industrial Manufacturing License. You must also be a member
              of the local Chamber of Commerce and Industry; and documentation
              to this effect needs to be enclosed.
            </p>
          </div>

          {/* Requirements Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Requirements to Get Industrial Manufacturing License in Dubai
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The Government will provide land for free or at reduced rates,
              plus assistance in R&D if your product is expected to add value to
              the UAE economy. You will need to get permission from the local
              Municipality to build your plant, if it is located outside of a
              free zone. Electricity and water will be provided at subsidized
              rates to your plant as per its needs.
            </p>
          </div>

          {/* Industrial Activities Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              A more detailed list of industrial activities in the United Arab
              Emirates:
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {industrialActivitiesLeft.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {industrialActivitiesRight.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Procedure Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Procedure to Get Industrial Manufacturing License
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For more information on securing an Industrial Manufacturing
              License in Dubai or elsewhere in the United Arab Emirates, please
              get in touch with us.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Need Help Getting an Industrial Manufacturing License in UAE?
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                We are a team of passionate company formation specialists
                dedicated to helping entrepreneurs establish businesses in the
                UAE. We help foreign investors through the array of paperwork
                and everything needed for setting up an industrial unit,
                including securing all the necessary permissions from the
                respective Government agencies concerned.
              </p>
              <p className="text-gray-600">
                If you would like us to assist you procure an Industrial
                Manufacturing License in the UAE, please give us a call or use
                the form to send us a message. We can also be contacted over
                email, and a senior member of A&A Associate will get in touch
                with you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndustrialLicense;

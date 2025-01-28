
function CommercialLicense() {
  const activities = [
    "Automobiles",
    "Computer Systems and Communication Equipment",
    "Contracting",
    "Foodstuffs",
    "Furniture",
    "Medical and Surgical Equipment",
    "Readymade Garments",
    "Software",
  ];

  const advantages = [
    "You can undertake up to ten allied commercial activities with a single Commercial License",
    "You are allowed to fully repatriate your capital and profits",
    "You can hire as many foreign workers as you want, as long as you have the commercial space to employ them",
    "You can import items from abroad and/or export them overseas",
  ];

  const requiredDocuments = [
    "Application form with company name in English & Arabic",
    "Original leasing contract for registered office",
    "Permission letter from Dubai municipality to use the office as a business address",
    "Department of Economic Development approval letter of the trade name",
    "Payment proof for the license",
    "Passport size color photos of the applicants",
    "NOC certificate",
    "Letter of intent of business",
    "Complete business plan",
    "Shared capital details",
    "Financial statements",
    "Notarized copy of Registry Identification form",
  ];
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Dubai Commercial License
            </h1>

            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                This type of Trade License is issued to those who are into
                commercial trading. The difference between a General Trading
                License and a Commercial License is that a Commercial License
                Dubai is more specific in nature and covers a limited number of
                products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Activities Covered
                </h2>
                <ul className="space-y-2">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
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
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Advantages
                </h2>
                <ul className="space-y-2">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Required Documents
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  {requiredDocuments.map((document, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="h-5 w-5 text-indigo-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      {document}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/* </div>

      <div className="max-w-4xl mx-auto space-y-8"> */}
        <section className="border-b pb-6 mt-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            How to Get a Commercial License Dubai
          </h1>

          <div className="prose text-gray-600 space-y-4">
            <p>
              The first step is to decide on the name of your company. It may
              happen that the name that you have in mind has already been
              registered, so a good business setup consultant can run a search
              for you and see if the name is available. You can then proceed to
              form a company under this trade name. This step requires a company
              formation expert who can draw up the Memorandum of Association /
              Articles of Association and get the documents registered.
            </p>

            <p>
              Once you have established your company, the next step is to get a
              Dubai Commercial License for your company, paying the requisite
              fees. The fees vary, depending on the number of business
              activities included in the Commercial License for your
              establishment and also on the type of company.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Important Fee Considerations:
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Higher number of business partners increases fees</li>
              <li>
                More activities included in the Commercial License increases
                cost
              </li>
              <li>Fees vary by emirate</li>
            </ul>
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Which is the best Business Setup Consultant in Dubai, UAE?
          </h2>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 mb-4">
              The best business setup consultant in Dubai listens to you and
              your needs, advising you on company formation. At A&A Associate
              LLC, we work closely with our in-house team of legal experts and
              company formation specialists to ensure that everything is done
              just the way it should be.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Our Additional Services:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="bg-white p-4 rounded shadow-sm text-center">
                  <span className="font-medium text-blue-600">Bookkeeping</span>
                </li>
                <li className="bg-white p-4 rounded shadow-sm text-center">
                  <span className="font-medium text-blue-600">Accounting</span>
                </li>
                <li className="bg-white p-4 rounded shadow-sm text-center">
                  <span className="font-medium text-blue-600">
                    Audit Solutions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CommercialLicense;

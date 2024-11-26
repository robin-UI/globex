import SignupOffer from "../../../components/utils/SignupOffer";

function SignupSection() {

  return (
    <section
      className="container mx-auto mt-32"
      style={{ height: "402px !important", transform: "translate(0%, 0%)" }}
    >
      <SignupOffer />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Government Bodies Section */}
          <div className="">
            <h2 className="text-5xl font-bold mb-2">UAE Government Bodies</h2>
            <h3 className="text-5xl font-bold mb-8">
              <span className="text-blue-500">We</span> work with
            </h3>
            <p className="text-gray-600 text-lg leading-8  max-w-3xl lin">
              Globex simplifies company setup with needs assessment, legal
              registration, and compliance. Our tailored solutions in
              accounting, marketing, and IT support sustainable growth.
            </p>
            {/* <GovernmentPartners /> */}
          </div>

          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="space-y-4">
              <img src="../images/homepage/amer.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/dubai-muncipality.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/trs-heel.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/dubai-economy.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/uae.png" alt="" />
            </div>
            <div className="space-y-4">
              <img src="../images/homepage/rera.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupSection;

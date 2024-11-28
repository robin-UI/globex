import SignupOffer from "../../../components/utils/SignupOffer";

function SignupSection() {

  return (
    <section
      className="container mx-auto mt-32 lg:px-14 lg:py-11"
      style={{ height: "402px !important", transform: "translate(0%, 0%)" }}
    >
      <SignupOffer />

      {/* Government Bodies Section */}
      <div className="p-12 mt-11">
        <div className="max-w-7xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Text Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold">
              UAE Government Bodies
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mt-4">
              <span className="text-blue-500">We</span> work with
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-7 mt-4">
              Globex simplifies company setup with needs assessment, legal
              registration, and compliance. Our tailored solutions in
              accounting, marketing, and IT support sustainable growth.
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              "../images/homepage/amer.png",
              "../images/homepage/dubai-muncipality.png",
              "../images/homepage/trs-heel.png",
              "../images/homepage/dubai-economy.png",
              "../images/homepage/uae.png",
              "../images/homepage/rera.png",
            ].map((src, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="w-20 sm:w-24 lg:w-32"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupSection;
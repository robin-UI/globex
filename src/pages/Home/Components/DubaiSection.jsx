import { BuildingIcon, GlobeIcon, MapIcon } from "../../../components/Icons/Icons";

function DubaiSection() {
  return (
    <section>
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="block sm:inline">
              Uncover the ideal business setup that
            </span>{" "}
            <span className="block sm:inline">
              fits your vision in Dubai.
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Seasoned advisors analyze your needs efficiently and devise
            tailored business setup solutions to adequately protect your
            interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-0">
          <BusinessCard2
            title="Freezone"
            description="Setting up your company in a UAE free zone is beneficial for companies looking for more freedom in how they run."
            icon={<GlobeIcon />}
            gradient={true}
          />
          <BusinessCard2
            title="Offshore"
            description="the biggest benefit of opening an offshore company is not having to pat any taxes."
            icon={<BuildingIcon />}
          />
          <BusinessCard2
            title="Mainland"
            description="A mainland business is a good choice for companies that are comfortable with functioning within an emirate."
            icon={<MapIcon />}
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default DubaiSection


function BusinessCard2({ title, description, icon, gradient = false }) {
    return (
      <div className={`p-6 sm:p-8 rounded-xl ${gradient ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-white'} transition-transform hover:scale-105`}>
        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${gradient ? 'bg-white' : 'bg-blue-600'} flex items-center justify-center mb-4 sm:mb-6`}>
          <div className={gradient ? 'text-blue-600' : 'text-white'}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{title}</h3>
        <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">{description}</p>
        <button className={`px-4 sm:px-6 py-2 rounded-md font-medium text-sm sm:text-base ${gradient ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'} transition-colors hover:opacity-90`}>
          LEARN MORE
        </button>
      </div>
    );
  }
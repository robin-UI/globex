function LandingSection() {
  return (
    <section className="px-28 h-[840px]">
      <div className="flex items-center w-full   ">
        <div className="w-1/2">
          <p className="text-xl font-medium">Begin your journey</p> 
          {/* <hr /> */}
          <h3 className="text-6xl">Launch Your </h3>
          <h3 className="text-6xl font-bold">Dream Company</h3>
          <h3 className="text-6xl">in Dubai</h3>
          <p className="text-lg">
            Seamless, Fast, and Tailored for Global Entrepreneurs. Globex offers
            all the services, tools, and resources you need to succeed worldwide
            effortlessly and efficiently.
          </p>
          <button>Excellent 4.7 out of 5 Trustpilot</button>
        </div>

        <div className="relative w-1/2 h-full pl-2">
          <img className="absolute top-[10px] left-[50px] w-[215px] h-[255px]" src="../images/homepage/banner-img-1.png" alt="brand-1" />
          <img className="absolute top-[50px] left-[283px] w-[297px] h-[254px] rounded-3xl" src="../images/homepage/banner-img-2.png" alt="brand-2" />
          <img className="absolute top-[292px] left-[-10px] w-[297px] h-[243px]" src="../images/homepage/banner-img-4.png" alt="brand-3" />
          <img className="absolute top-[258px] left-[68px] w-[215px] h-[255px]" src="../images/homepage/banner-img-3.png" alt="brand-4" />
        </div>
      </div>
    </section>
  );
}

export default LandingSection;

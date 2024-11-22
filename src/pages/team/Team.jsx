function Team() {
  return (
    <>
      <section
        className="w-full h-64 flex items-center justify-center flex-col relative"
        style={{
          backgroundImage: "url('./images/homepage/pexels-mo-ismail.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl font-semibold mb-4">Meet our <br />
          beautiful team</h1>
          <div className="relative">
            <img className="absolute -top-1 -left-4" src="./images/homepage/comaRight.png" alt="" />
            <p className="text-white text-[16px]">
            Our philosophy is simple: hire great people and <br />
            give them the resources to do their best work
            </p>
            <img className="absolute -bottom-1 -right-3" src="./images/homepage/comaLeft.png" alt="" />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="grid grid-cols-2 gap-4 p-5 ">
            <div 
              className="bg-white rounded-lg p-2 flex flex-col items-center gap-3" 
              style={{ boxShadow: "0px 0px 2.76px 2.76px #5A9CFE14" }}
            >
              <img src="./images/homepage/andrew.png" alt="" className="w-full " />  
                <button className="text-white w-full rounded-lg py-1" style={{ background: "linear-gradient(270deg, #2BDEFA 0%, #377CFF 100%)" }}>
                    <p className="text-lg font-semibold">Andrew Garphield</p>
                    <p className="text-sm">Marketing Manager</p>
                </button>
            </div>

            <div 
              className="bg-white rounded-lg p-2 flex flex-col items-center gap-3" 
              style={{ boxShadow: "0px 0px 2.76px 2.76px #5A9CFE14" }}
            >
              <img src="./images/homepage/andrew.png" alt="" className="w-full " />  
                <button className="text-white w-full rounded-lg py-1" style={{ background: "linear-gradient(270deg, #2BDEFA 0%, #377CFF 100%)" }}>
                    <p className="text-lg font-semibold">Simon Taufel</p>
                    <p className="text-sm">Marketing Manager</p>
                </button>
            </div>

            <div 
              className="bg-white rounded-lg p-2 flex flex-col items-center gap-3" 
              style={{ boxShadow: "0px 0px 2.76px 2.76px #5A9CFE14" }}
            >
              <img src="./images/homepage/andrew.png" alt="" className="w-full " />  
                <button className="text-white w-full rounded-lg py-1" style={{ background: "linear-gradient(270deg, #2BDEFA 0%, #377CFF 100%)" }}>
                    <p className="text-lg font-semibold">Andrew Garphield</p>
                    <p className="text-sm">Marketing Manager</p>
                </button>
            </div>

            <div 
              className="bg-white rounded-lg p-2 flex flex-col items-center gap-3" 
              style={{ boxShadow: "0px 0px 2.76px 2.76px #5A9CFE14" }}
            >
              <img src="./images/homepage/andrew.png" alt="" className="w-full " />  
                <button className="text-white w-full rounded-lg py-1" style={{ background: "linear-gradient(270deg, #2BDEFA 0%, #377CFF 100%)" }}>
                    <p className="text-lg font-semibold">Andrew Garphield</p>
                    <p className="text-sm">Marketing Manager</p>
                </button>
            </div>
        </div>
      </section>

      <section className="px-6 text-2xl text-center">
        <p className="mb-3" style={{fontFamily: "autography"}}>
        Globex truly values work-life balance. We work <br />
        hard, but at the end of the day you can switch off
        </p>
        <p className="text-lg font-semibold" >Alec Stewert</p>
        <p className="text-xs " >CEO and Founder</p>
      </section>
    </>
  );
}

export default Team;

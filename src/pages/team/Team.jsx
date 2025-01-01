import SignupOffer from "../../components/utils/SignupOffer";

function Team() {
  const teamArray = [
    {
      img: "./images/homepage/andrew.png",
      name: "Andrew Garphield",
      position: "Marketing Manager",
    },
    {
      img: "./images/homepage/andrew.png",
      name: "Simon Taufel",
      position: "Marketing Manager",
    },
    {
      img: "./images/homepage/andrew.png",
      name: "Geraint James",
      position: "Marketing Manager",
    },
    {
      img: "./images/homepage/andrew.png",
      name: "Benjamin Bruno",
      position: "Marketing Manager",
    },
    {
      img: "./images/homepage/andrew.png",
      name: "Alisson Baker",
      position: "Marketing Manager",
    },
    {
      img: "./images/homepage/andrew.png",
      name: "Elisa Healy",
      position: "Marketing Manager",
    },
  ];
  return (
    <>
      <section
        className="w-full h-64 lg:h-96 lg:pb-20 mt-20 lg:mt-0 flex items-center lg:justify-end justify-center flex-col relative"
        style={{
          backgroundImage: "url('./images/homepage/teamBackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl lg:text-6xl font-semibold mb-4">
            Meet our <br className="lg:hidden" />
            beautiful team 
          </h1>
          <div className="relative inline-block">
            <img
              className="absolute -top-1 -left-4"
              src="./images/homepage/comaRight.png"
              alt=""
            />
            <p className="text-white text-[16px] lg:text-xl">
              Our philosophy is simple: hire great people and <br />
              give them the resources to do their best work
            </p>
            <img
              className="absolute -bottom-1 -right-3"
              src="./images/homepage/comaLeft.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="py-5 lg:px-52 lg:mb-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10 p-5 ">
          {teamArray.map((e, i) => (
            <div
              key={i + 1}
              className="bg-white rounded-lg p-2 flex flex-col items-center gap-3"
              style={{ boxShadow: "0px 0px 2.76px 2.76px #5A9CFE14" }}
            >
              <img src={e.img} alt="" className="w-full " />
              <button
                className="text-white w-full rounded-lg py-1"
                style={{
                  background:
                    "linear-gradient(270deg, #2BDEFA 0%, #377CFF 100%)",
                }}
              >
                <p className="text-lg font-semibold">{e.name}</p>
                <p className="text-sm">{e.position}</p>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 text-center">
        <p
          className="mb-3 text-2xl lg:text-3xl lg:mb-7"
          style={{ fontFamily: "autography" }}
        >
          Globex truly values work-life balance. We work <br />
          hard, but at the end of the day you can switch off
        </p>
        <p className="text-lg lg:text-xl font-semibold">Nayeem</p>
        <p className="text-xs lg:text-base">CEO and Founder</p>
      </section>

      <section className="lg:px-28 lg:py-0 my-24">
        <SignupOffer />
      </section>
    </>
  );
}

export default Team;

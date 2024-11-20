function About() {
  return (
    <>
      <section
        className="w-full h-screen flex items-center justify-center flex-col "
        style={{
          backgroundImage: "url('./images/homepage/pexels-mo-ismail.png')",
        }}
      >
        <h1 className="text-white text-6xl text-center font-semibold">
          About us
        </h1>
        <p className="text-white text-xl text-center">
          Globex: From a bold vision to a global leader
        </p>
      </section>
      <section>
        <div>
          <div>
            <h2 className="mb-2 ">Globex started because the market needed a key player</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Sed auctor, magna vel convallis
              fermentum, nulla nisi bibendum nisl, a varius elit elit id turpis.
              Curabitur tincidunt quam vitae justo condimentum, sit amet viverra
              ligula egestas. Fusce nec orci id nisi scelerisque dignissim non
              sit amet odio.
            </p>
          </div>
          <img src="./images/homepage/aboutImage.png" alt="" />
        </div>
      </section>

      <section style={{ background: "linear-gradient(298.19deg, #2BDEFA -14.15%, #377CFF 68.52%)"}}>
        <h1 className="text-2xl font-medium">Core Values</h1>
        <hr />
        <div className="flex flex-col">
            <div className="flex flex-col gap-1">
                <img className="h-10 w-10 opacity-20" src="./images/homepage/quality.png" alt="" />
                <h4 className="font-bold text-base text-white" >Quality</h4>
                <p className="text-sm text-white" >We are committed to delivering top-notch services that not only meet but surpass our clients expectations.</p>
            </div>
            <div className="flex flex-col gap-1">
                <img className="h-10 w-10 opacity-20 bg-white" src="./images/homepage/integrity.png" alt="" />
                <h4 className="font-bold text-base text-white" >Integrity</h4>
                <p className="text-sm text-white" >We embed integrity into every facet of our services, striving to earn and maintain the trust of our clients.</p>
            </div>

            <div className="flex flex-col gap-1">
                <img className="h-10 w-10 opacity-20 bg-white" src="./images/homepage/teamwork.png" alt="" />
                <h4 className="font-bold text-base text-white" >Teamwork</h4>
                <p className="text-sm text-white" >We are committed to delivering top-notch services that not only meet but surpass our clients expectations.</p>
            </div>

            <div className="flex flex-col gap-1">
                <div className="h-10 w-10 p-2">
                  <img
                    // className="opacity-100"
                    src="./images/homepage/competence.png"
                    alt="Competence"
                    // style={{ opacity: 1 }}
                  />
                </div>
                <h4 className="font-bold text-base text-white" >Quality</h4>
                <p className="text-sm text-white" >We continuously update our processes and systems to ensure efficiency and timely delivery for our valued clients.</p>
            </div>
        </div>

        <img src="./images/homepage/coreteam.png" alt="" />
      </section>
    </>
  );
}

export default About;

import { useNavigate } from "react-router-dom";
import SignupOffer from "../../components/utils/SignupOffer";
import { useState } from "react";
import FormModal from "../../components/utils/FormModal";

function OurCompany() {

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false)

  const handleModal = () =>  setOpenModal(!openModal);
  
  return (
    <>
      <section
        style={{
          background: "linear-gradient(270deg, #2BDEFA 0%, #377CFF 100%)",
        }}
        className="relative"
      >
        <div className=" w-full lg:w-[55%] px-8 py-10 pt-28 lg:px-24 lg:py-32">
          <h2 className=" text-[46px] lg:text-[64px] text-white leading-[50px] lg:leading-[66.02px] mb-[32px] lg:mb-[47px]">
            Securing a <br /> Business License
            <br /> in Dubai
          </h2>

          <p className="font-normal text-sm lg:text-base text-white mb-[47px]">
            Are you considering starting a company in Dubai? Every business{" "}
            <br />
            needs a license, and savvy entrepreneurs rely on for <br />
            comprehensive licensing support. We assist a wide range of <br />
            industries, from startups to established multinational corporations,
            <br />
            to ensure your business license is obtained efficiently and <br />
            effortlessly. <br />
          </p>

          <div className=" h-[280px] lg:h-0 "></div>
          <div className="flex items-center justify-center lg:justify-start mt-5">
            <button className="cursor-pointer px-14 py-2 text-base rounded-lg bg-white" onClick={handleModal}>
              <samp className="bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] bg-clip-text text-transparent">
                Book Free Consultation
              </samp>
            </button>
          </div>
        </div>
        <img
          className="absolute lg:right-0 lg:bottom-0 bottom-28 w-full lg:w-auto"
          src="./images/homepage/buildingCompany.png"
          alt=""
        />
        {/* <div className="w-1/2"></div>
        <img
          className="absolute top-0 left-0 -z-10"
          src="./images/homepage/netdivider.png"
          alt=""
        /> */}
      </section>

      <section className="px-5 py-16 lg:px-20 lg:py-24 bg-[#F8F8F8]">
        <h2 className="text-sm lg:text-[42px] lg:leading-[54px] text-center font-semibold mb-[70px]">
          Business licenses issued by <br className="hidden lg:block" />
          Department of Economic Development in Dubai
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg gradientBackground ">
            <div className="px-9 pt-12 mb-6">
              <h2 className="text-[20.87px] leading-[30.05px] text-white font-semibold mb-5">
                Commercial License in <br />
                Dubai, UAE
              </h2>
              <p className="text-xs leading-[23.37px] text-white">
                A business license is necessary for conducting business in the
                UAE because it ensures compliance with local regulations and
                permits legal operation in the market.
              </p>
            </div>

            <button onClick={() => navigate("/commercial-license") } className="bg-white text-[#377CFF] font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px] ">
              Explore more <img src="../images/homepage/our1.png" alt="" />
            </button>
          </div>

          <div
            className="rounded-lg "
            style={{ boxShadow: "0px 0px 4px 4px #5A9CFE14" }}
          >
            <div className="px-9 pt-12 mb-6">
              <h2 className="text-[20.87px] leading-[30.05px] text-black font-semibold mb-5">
                Professional License in <br />
                Dubai, UAE
              </h2>
              <p className="text-xs leading-[23.37px] text-[#353535]">
                A business license is necessary for conducting business in the
                UAE because it ensures compliance with local regulations and
                permits legal operation in the market.
              </p>
            </div>

            <button onClick={() => navigate("/professional-license")} className="gradientBackground text-white font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px] ">
              Explore more <img src="../images/homepage/our2.png" alt="" />
            </button>
          </div>

          <div className="rounded-lg gradientBackground ">
            <div className="px-9 pt-12 mb-6">
              <h2 className="text-[20.87px] leading-[30.05px] text-white font-semibold mb-5">
                Dive into the Tourism <br />
                Market in Dubai.
              </h2>
              <p className="text-xs leading-[23.37px] text-white">
                A business license is necessary for conducting business in the
                UAE because it ensures compliance with local regulations and
                permits legal operation in the market.
              </p>
            </div>

            <button onClick={() => navigate("/tourism-guide")} className="bg-white text-[#377CFF] font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px] ">
              Explore more <img src="../images/homepage/our1.png" alt="" />
            </button>
          </div>

          <div
            className="rounded-lg "
            style={{ boxShadow: "0px 0px 4px 4px #5A9CFE14" }}
          >
            <div className="px-9 pt-12 mb-6">
              <h2 className="text-[20.87px] leading-[30.05px] text-black font-semibold mb-5">
                Industrial License In <br /> Dubai, UAE
              </h2>
              <p className="text-xs leading-[23.37px] text-[#353535]">
                A business license is necessary for conducting business in the
                UAE because it ensures compliance with local regulations and
                permits legal operation in the market.
              </p>
            </div>

            <button onClick={() => navigate('/industrial-license')} className="gradientBackground text-white font-bold flex items-center gap-4 rounded-[0px_30px_30px_0px] pl-4 mb-[37px] ">
              Explore more <img src="../images/homepage/our2.png" alt="" />
            </button>
          </div>
        </div>
      </section>

      <section
        className="container mx-auto mt-32 pb-32 px-5 lg:px-12 "
        style={{ height: "402px !important", transform: "translate(0%, 0%)" }}
      >
        <SignupOffer />

        <div>
          <div className="lg:flex justify-between items-center mt-5 lg:mt-10">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-[42px] font-semibold leading-[54px] lg:mb-8">
                Why Dubai
              </h2>
              <p className="text-[#353535] text-sm lg:text-base font-medium tracking-widest leading-6">
                Dubai is located at the crossroads of the world, providing
                access to both hemispheres <br className="hidden lg:block" />{" "}
                through air and sea routes. With a growing and diversifying
                economy, along with a <br className="hidden lg:block" />{" "}
                workforce of varying skill levels, Dubai is an ideal destination
                for entrepreneurs looking <br className="hidden lg:block" /> to
                start or expand their businesses. Emirates team of business
                setup <br className="hidden lg:block" /> consultants in Dubai
                offers comprehensive support for all types of licensing, whether{" "}
                <br className="hidden lg:block" />
                your industry is tourism or trade. We deliver business setup
                services across Dubai and <br className="hidden lg:block" /> in
                all the free zones of the UAE.
              </p>
            </div>

            <div className="h-52 lg:w-[427px] lg:h-[235px] rounded-lg bg-[url('./images/homepage/whyDubai.png')] bg-center bg-no-repeat bg-cover"></div>
          </div>
        </div>
      </section>

      <FormModal open={openModal} handleOpen={handleModal} />

    </>
  );
}

export default OurCompany;

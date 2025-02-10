import { useState } from "react";
import OnecontinuousLine from "../../assets/images/dubainSectionBG.png";
import CheckEllgibllity from "../../components/utils/CheckEllgibllity";
import { Helmet } from "react-helmet";

const sections = [
  {
    title: "Investors",
    content:
      "For investors, the Dubai Golden Visa requires meeting specific investment thresholds set by the UAE government. Eligible investments include real estate purchases, business ventures, or capital contributions to UAE-based enterprises, all demonstrating a commitment to the country’s economic growth.",
  },
  {
    title: "Entrepreneurs",
    content:
      "Entrepreneurs seeking the Golden Visa must showcase the viability and growth potential of their business ventures in the UAE. The focus is on innovative business ideas that contribute to Dubai’s economic diversification and development, highlighting the city as a hub for entrepreneurial excellence.",
  },
  {
    title: "Professionals",
    content:
      "Skilled professionals aiming for the Golden Visa need to possess recognized qualifications and relevant work experience in their respective fields. Endorsements from relevant UAE government entities or industry associations may also be necessary to validate professional credentials and ensure they meet the country’s standards.",
  },
  {
    title: "Students",
    content:
      "Students aspiring to secure the Golden Visa must gain admission to accredited educational institutions in Dubai or elsewhere in the UAE. Additionally, they must provide proof of financial means to cover tuition fees and living expenses throughout their studies, ensuring they can fully focus on their education.",
  },
  {
    title: "Good Conduct and Compliance",
    content:
      "Applicants must also demonstrate good conduct and adherence to UAE laws and regulations. This includes undergoing background checks and screening processes to ensure compliance with the country’s immigration and security standards.",
  },
  {
    title: "Additional Documentation",
    content: `Passport Copies: Clear copies of the passport bio page for the applicant and accompanying family members.
  <br />
  Passport Photos: Recent passport-sized photographs of the applicant and family members.
  <br />
  Proof of Relationship: Documentation proving family relationships for accompanying family members.`,
  },
];

function GoldenVisa() {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => setOpenModal(!openModal);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UAE Golden Visa & Company Formation | 10-Year Residency</title>
        <meta
          name="description"
          content="Secure your UAE Golden Visa and establish your business. We assist
with both company formation in Dubai and obtaining 10-year residency
through the Golden Visa program. Learn more!"
        />
      </Helmet>
      <main className="pt-24 md:pt-32 ">
        <section className="flex justify-between flex-col md:flex-row md:items-center mb-8 gap-5 px-3 lg:px-16">
          <div className="md:w-1/2 flex flex-col gap-1 lg:gap-3">
            <h1 className="text-2xl lg:text-4xl font-semibold leading-5 tracking-wide">
              A Decade of Opportunities, with <br className="hidden md:block" />
              <samp className="bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] bg-clip-text text-transparent">
                10 Years UAE Golden Visa
              </samp>
            </h1>
            <p className="text-base lg:text-lg text-gray-600 tracking-widest">
              Live, work, thrive and experience unmatched freedom
            </p>
            <div>
              <button
                className="flex justify-between items-center gap-3 cursor-pointer px-4 py-2 text-base rounded-lg text-white bg-gradient-to-r from-[#2BDEFA] to-[#377CFF]"
                onClick={() => handleModal()}
              >
                <samp className="">Check your Ellgibllity</samp>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              className="rounded-lg "
              src="https://www.echuae.com/wp-content/uploads/2024/03/golden-visa.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="flex justify-between flex-col md:flex-row md:items-center mb-8 lg:mb-24 gap-5 lg:gap-8 px-3 lg:px-16">
          <div className="lg:w-1/2">
            <img
              className="rounded-lg "
              src="https://www.echuae.com/wp-content/uploads/2024/03/dubai-1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1 lg:gap-3 lg:w-1/2">
            <h4 className="text-2xl lg:text-4xl font-semibold leading-loose tracking-wider">
              A golden opportunity in Dubai awaits you!
            </h4>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed tracking-widest">
              Explore the UAE’s premier pathway to long-term residency with the
              UAE Golden Visa program. Secure your future in the vibrant city of
              Dubai, where the Golden Visa offers up to 10 years of residency.
              This visa provides unparalleled freedom to live, work, study, or
              establish your business without the need for a local Emirati
              sponsor. Enjoy the benefits of full business ownership and a
              multi-entry permit, allowing you and your family to thrive in one
              of the world’s most dynamic cities. Discover these exclusive
              privileges and more with the Golden Visa in Dubai. Globex is your
              trusted partner for Golden Visa services, ensuring a smooth and
              rewarding experience in the UAE.
            </p>
          </div>
        </section>

        <section className="text-white bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] px-3 lg:px-16 lg:py-24">
          <h4 className="text-2xl lg:text-5xl font-semibold text-center lg:mb-10">
            {/* <samp className="bg-clip-text text-transparent"> */}
            Understanding the Dubai Golden Visa
            {/* </samp> */}
          </h4>
          <div className="flex flex-col gap-3">
            <p className="text-lg lg:text-xl text-center font-semibold tracking-widest">
              The Dubai Golden Visa is a gateway to unparalleled opportunities,
              aimed at attracting and retaining top talent in the United Arab
              Emirates. This prestigious visa is a cornerstone of the UAE’s
              efforts to foster economic growth and innovation, offering
              long-term residency to investors, entrepreneurs, professionals,
              and students. With over 45,000 recipients, the Golden Visa program
              has successfully cultivated a thriving community of individuals
              who contribute to the nation’s dynamic landscape
            </p>
            <p className="text-lg lg:text-xl text-center font-semibold tracking-widest">
              Eligibility for the Dubai Golden Visa is determined by relevant
              government agencies and tailored to meet diverse needs. Whether
              you aspire to launch a business, excel in your profession, or
              pursue advanced studies, the Golden Visa provides a streamlined
              pathway to achieving your goals in the UAE
            </p>
            <p className="text-lg lg:text-xl text-center font-semibold tracking-widest">
              The application process is designed to accommodate a range of
              requirements, taking into account the nature of the visa, desired
              services, and duration of stay. This flexibility ensures that each
              applicant can navigate their journey with ease, making the
              transition to life in Dubai as smooth as possible
            </p>
            <p className="text-lg lg:text-xl text-center font-semibold tracking-widest">
              By securing a Dubai Golden Visa, individuals not only open doors
              to personal and professional growth but also contribute to the
              UAE’s vibrant and prosperous society. This visa program is more
              than just a residency option; it’s an invitation to become a part
              of a forward-thinking community that values innovation and
              excellence.
            </p>
          </div>
        </section>

        <section className="my-5 px-3 lg:px-16 lg:py-10">
          <h4 className="text-2xl lg:text-4xl font-semibold text-center lg:mb-6">
            <samp className="bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] bg-clip-text text-transparent">
              UAE Golden Visa Advantages
            </samp>
          </h4>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:mb-10  tracking-widest">
            Delve into a world of benefits and open the door to a prosperous
            future with the UAE’s Golden Visa program.{" "}
            <br className="hidden md:block" /> Here are five key reasons why the
            Golden Visa is an excellent choice for your residency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-8 mt-2">
            <div>
              <h6 className="text-[#377CFF] text-lg lg:text-xl font-semibold mb-2 ">
                Long-Term Residency
              </h6>
              <p className="text-lg lg:text-lg tracking-widest">
                Gain the security and peace of mind that comes with long-term
                residency in the UAE for you and your family. This visa provides
                the freedom to live, work, and achieve your dreams in one of the
                world’s most dynamic and forward-thinking countries.
              </p>
            </div>

            <div>
              <h6 className="text-[#377CFF] text-lg lg:text-xl font-semibold mb-2 ">
                Business and Investment Potential
              </h6>
              <p className="text-lg lg:text-lg tracking-widest">
                Take advantage of the UAE’s booming business landscape, with
                ample opportunities for investment across various sectors.
                Whether you’re looking to start or expand your business, the
                Golden Visa offers the perfect platform, supported by the
                country’s investor-friendly environment and strategic location
              </p>
            </div>

            <div>
              <h6 className="text-[#377CFF] text-lg lg:text-xl font-semibold mb-2 ">
                Global Mobility
              </h6>
              <p className="text-lg lg:text-lg tracking-widest">
                Ensure your children receive a top-tier education with access to
                some of the world’s leading schools and universities in the UAE.
                This visa allows you to invest in their future, providing them
                with quality learning experiences that nurture both their
                academic and personal growth.
              </p>
            </div>

            <div>
              <h6 className="text-[#377CFF] text-lg lg:text-xl font-semibold mb-2 ">
                Education Excellence
              </h6>
              <p className="text-lg lg:text-lg tracking-widest">
                Provide your children with access to world-class education from
                renowned institutions, fostering their academic and personal
                growth. Invest in their future with confidence, knowing that
                they have access to quality educational opportunities within the
                UAE.
              </p>
            </div>

            <div>
              <h6 className="text-[#377CFF] text-lg lg:text-xl font-semibold mb-2 ">
                Luxurious Lifestyle
              </h6>
              <p className="text-lg lg:text-lg tracking-widest">
                Experience the best of luxury living with access to exclusive
                amenities, world-class shopping, and gourmet dining. The UAE
                offers a rich cultural tapestry and a vibrant lifestyle, with
                endless options for entertainment and leisure to suit all
                tastes.
              </p>
            </div>

            <div>
              <h6 className="text-[#377CFF] text-lg lg:text-xl font-semibold mb-2 ">
                Tax Advantages
              </h6>
              <p className="text-lg lg:text-lg tracking-widest">
                Benefit from a favourable tax regime, with no personal income
                tax, corporate tax, or capital gains tax on certain investments.
                The Golden Visa allows you to maximise your financial returns,
                keeping more of your hard-earned income and enhancing your
                overall financial security.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-14 px-3 lg:px-16 bg-[#F8F8F8] ">
          <h4 className="text-2xl lg:text-4xl font-semibold text-center lg:mb-6 ">
            <samp className="bg-gradient-to-r from-[#2BDEFA] to-[#377CFF] bg-clip-text text-transparent">
              What’s the eligibility for UAE Golden Visa?
            </samp>
          </h4>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:mb-10 tracking-widest">
            Embark on your journey towards residency in the vibrant city of
            Dubai with the prestigious Dubai Golden Visa.{" "}
            <br className="hidden md:block" /> Designed to attract and retain
            top talent from around the world, the Golden Visa offers
            unparalleled opportunities for <br className="hidden md:block" />{" "}
            investors, entrepreneurs, professionals, and students. Here are the
            requirements to obtain the coveted Dubai Golden Visa:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-8 my-3">
            {sections.map((section, index) => (
              <div key={index}>
                <h6 className="text-xl font-semibold mb-3">{section.title}</h6>
                <p
                  className="lg:text-lg"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                ></p>
              </div>
            ))}
          </div>
          <img
            className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-bottom-48"
            src={OnecontinuousLine}
            alt=""
            aria-hidden="true"
          />
        </section>

        <section className="flex flex-col gap-3 py-3 lg:py-14 lg:px-16 ">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Begin Your Golden Visa Journey Today:
          </h2>
          <p className="lg:text-lg">
            Start your Golden Visa journey today with our expert team guiding
            you through the application process. We ensure a smooth and seamless
            experience, helping you navigate the requirements and secure your
            future in one of the world’s most dynamic and prosperous cities.
            Contact us now to learn more about the Dubai Golden Visa and take
            the first step toward your new life in Dubai
          </p>
          <div>
            <button
              onClick={handleModal}
              className="flex justify-between items-center gap-3 cursor-pointer px-4 py-2 text-base rounded-lg text-white bg-gradient-to-r from-[#2BDEFA] to-[#377CFF]"
            >
              <samp className="">Check your Ellgibllity</samp>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </section>
      </main>
      <CheckEllgibllity open={openModal} handleOpen={handleModal} />
    </div>
  );
}

export default GoldenVisa;

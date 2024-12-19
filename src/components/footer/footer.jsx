import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient">
      <div className="footer-sections lg:px-10 py-10 lg:py-24 flex justify-center gap-2 lg:gap-20 flex-col lg:flex-row">
        {/* Logo Section */}
        <div className="logo-sec ">
          <div className="flex justify-between items-center px-6 lg:px-0">
            <img
              className="w-[124px] h-[43px] md:w-[185px] md:h-[64px] lg:mx-0"
              src="../images/mainLogo.png"
              alt=""
            />
            <button className="text-base text-blue-400 bg-white px-9 h-10 rounded-3xl lg:hidden ">
              Get a Quote
            </button>
          </div>
          <p className="pt-5 text-lg text-white text-center lg:text-left">
            Globex Incorporation is a young enterprise{" "}
            <br className="hidden lg:block" />
            admirable in assisting aspiring entrepreneurs{" "}
            <br className="hidden lg:block" />
            to set up business in Burjuman Business Tower Sheikh Khalifa{" "}
            <br className="hidden lg:block" />
            Bin Zayed St Al Mankhool Dubai, United Arab Emirates, UAE.{" "}
            <br className="hidden lg:block" />
          </p>
          <div className="socialmedia-icons hidden lg:flex justify-center lg:justify-start py-3 ">
            <img
              className="white w-10 h-10 mx-2"
              src="../images/homepage/facebook.png"
              alt=""
            />
            <img
              className="white w-10 h-10 mx-2"
              src="../images/homepage/twitter.png"
              alt=""
            />
            <img
              className="white w-10 h-10 mx-2"
              src="../images/homepage/instagram.png"
              alt=""
            />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-quicklinks px-2 min-w-[200px]">
          <h1 className="text-white text-2xl lg:text-left flex justify-between items-center">
            <span>Quick Links </span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h1>
          <div className="py-3">
            <hr className="text-[#FFFFFF]" />
          </div>
          <ul className="py-5 space-y-2 text-center lg:text-left">
            <li className="text-white text-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link to="about">About Us</Link>
            </li>
            <li className="text-white text-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link to="services">Our Services</Link>
            </li>
            <li className="text-white text-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link to="blog">Blog</Link>
            </li>
            <li className="text-white text-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className="footer-recentposts px-2">
          <h1 className="text-white text-2xl lg:text-left flex items-center justify-between">
            <span>Recent Posts</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </h1>
          <div className="py-3">
            <hr />
          </div>
          <div className="img-building flex justify-start flex-wrap lg:flex-nowrap items-center py-3">
            <img
              className="w-[68px] h-[75px] lg:mx-0 rounded-lg"
              src="../images/homepage/footer-building.png"
              alt=""
            />
            <div className="text-white pl-3 text-left">
              <div className="calender flex lg:justify-start items-center">
                <img
                  className="w-[30px] h-[23px]"
                  src="../images/homepage/footer-calender.png"
                  alt=""
                />
                <p className="pl-3">Sept 30, 2024</p>
              </div>
              <p className="py-2">Start your business, hassle free</p>
            </div>
          </div>
          <div className="img-document flex flex-wrap lg:flex-nowrap items-center py-3">
            <img
              className="w-[68px] h-[75px] lg:mx-0 rounded-lg"
              src="../images/homepage/footer-image.png"
              alt=""
            />
            <div className="text-white pl-3 text-left">
              <div className="calender flex lg:justify-start items-center">
                <img
                  className="w-[30px] h-[23px]"
                  src="../images/homepage/footer-calender.png"
                  alt=""
                />
                <p className="pl-3">Sept 29, 2024</p>
              </div>
              <p className="py-2">Document processing faster than ever</p>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="footer-contactus px-2 ">
          <div className="py-3 lg:hidden">
            <hr />
          </div>
          <h1 className="text-white text-2xl lg:text-left">Contact Us</h1>
          <div className="py-3 hidden lg:block">
            <hr />
          </div>
          <div className="location flex lg:justify-start items-center pt-5">
            <img
              className="white w-[20px] h-[20px]"
              src="../images/homepage/footer-location.png"
              alt=""
            />
            <p className="text-white pl-3 text-center lg:text-left">
              Burjuman Business Tower Sheikh Khalifa Bin Zayed St Al Mankhool
              Dubai, United Arab Emirates
            </p>
          </div>
          <div className="mobile flex lg:justify-start items-center pt-2">
            <img
              className="white w-[20px] h-[20px]"
              src="../images/homepage/footer-call.png"
              alt=""
            />
            <p className="text-white pl-3">+971529326975</p>
          </div>
          <div className="email flex lg:justify-start items-center pt-2">
            <img
              className="white w-[20px] h-[20px]"
              src="../images/homepage/footer-email.png"
              alt=""
            />
            <p className="text-white pl-3">nayeem46.nm@gmail.com</p>
          </div>
          <button className="text-blue-700 rounded-full mt-4 bg-white w-[160px] h-[50px] mx-auto lg:mx-0">
            Get a Quote
          </button>
        </div>

        <div className="block p-2 md:hidden">
          <div className="py-3">
            <hr />
          </div>
          <p className="text-white">Follow Us</p>
          <div className="socialmedia-icons flex justify-start py-3 gap-4 ">
            <img
              className="white w-10 h-10 "
              src="../images/homepage/facebook.png"
              alt=""
            />
            <img
              className="white w-10 h-10 "
              src="../images/homepage/twitter.png"
              alt=""
            />
            <img
              className="white w-10 h-10 "
              src="../images/homepage/instagram.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

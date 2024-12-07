import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient">
      <div className="footer-sections py-10 lg:py-24 flex justify-center gap-28 flex-col lg:flex-row">
        {/* Logo Section */}
        <div className="logo-sec ">
          <div className="flex justify-between items-center px-6 lg:px-0">
            <img
              className="w-[124px] h-[43px] md:w-[185px] md:h-[64px] lg:mx-0"
              src="../images/mainLogo.png"
              alt=""
            />
            <button className="text-base text-blue-400 bg-white px-9 h-10 rounded-3xl lg:hidden ">Get a Quote</button>
          </div>
          <p className="pt-5 text-lg text-white text-center lg:text-left">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. Sed <br />
            do eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua.
          </p>
          <div className="socialmedia-icons flex justify-center lg:justify-start py-3">
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
        <div className="footer-quicklinks ">
          <h1 className="text-white text-2xl text-center lg:text-left">
            Quick Links
          </h1>
          <div className="py-3">
            <hr />
          </div>
          <ul className="py-5 space-y-2 text-center lg:text-left">
            <li className="text-white text-lg">
              <Link to="about">About Us</Link>
            </li>
            <li className="text-white text-lg">
              <Link to="services">Our Services</Link>
            </li>
            <li className="text-white text-lg">
              <Link to="blog">Blog</Link>
            </li>
            <li className="text-white text-lg">
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className="footer-recentposts ">
          <h1 className="text-white text-2xl text-center lg:text-left">
            Recent Posts
          </h1>
          <div className="py-3">
            <hr />
          </div>
          <div className="img-building flex flex-wrap lg:flex-nowrap items-center py-5">
            <img
              className="w-[68px] h-[75px] mx-auto lg:mx-0"
              src="../images/homepage/footer-building.png"
              alt=""
            />
            <div className="text-white pl-3 text-center lg:text-left">
              <div className="calender flex justify-center lg:justify-start items-center">
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
          <div className="img-document flex flex-wrap lg:flex-nowrap items-center py-5">
            <img
              className="w-[68px] h-[75px] mx-auto lg:mx-0"
              src="../images/homepage/footer-image.png"
              alt=""
            />
            <div className="text-white pl-3 text-center lg:text-left">
              <div className="calender flex justify-center lg:justify-start items-center">
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
        <div className="footer-contactus ">
          <h1 className="text-white text-2xl text-center lg:text-left">
            Contact Us
          </h1>
          <div className="py-3">
            <hr />
          </div>
          <div className="location flex justify-center lg:justify-start items-center pt-5">
            <img
              className="white w-[20px] h-[20px]"
              src="../images/homepage/footer-location.png"
              alt=""
            />
            <p className="text-white pl-3 text-center lg:text-left">
              Lorem Ipsum, dolor street <br />
              Calicut
            </p>
          </div>
          <div className="mobile flex justify-center lg:justify-start items-center pt-2">
            <img
              className="white w-[20px] h-[20px]"
              src="../images/homepage/footer-call.png"
              alt=""
            />
            <p className="text-white pl-3">+97145 655 65</p>
          </div>
          <div className="email flex justify-center lg:justify-start items-center pt-2">
            <img
              className="white w-[20px] h-[20px]"
              src="../images/homepage/footer-email.png"
              alt=""
            />
            <p className="text-white pl-3">Globex@gmail.com</p>
          </div>
          <button className="text-blue-700 rounded-2xl mt-4 bg-white w-[160px] h-[50px] mx-auto lg:mx-0">
            Get a Quote
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
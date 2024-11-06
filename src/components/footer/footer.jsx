import React from 'react'

const footer = () => {
  return (
    
    <footer className='bg-custom-gradient'>
       <div className="footer-sections flex">
        <div className="logo-sec pt-[90px] pl-[139px] ">
            <img className='w-[185px] h-[64px]' src="../images/mainLogo.png" alt="" />
            <p className='pt-10 text-white '>Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. Sed <br />
            do eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua.</p>
           <div className="socialmedia-icons flex py-3">
           <img className='white w-10 h-10' src="../images/homepage/facebook.png" alt="" />
            <img className='white w-11 h-10 pl-2' src="../images/homepage/twitter.png" alt="" />
            <img className='white w-11 h-10 pl-2' src="../images/homepage/instagram.png" alt="" />
           </div>
        </div>
        <div className="footer-quicklinks pt-[90px] pl-[139px]">
            <h1 className=' text-white  text-2xl'>Quick Links</h1>
            <div className='py-3'>
                <hr />
            </div>
            <ul className='py-9'> 
                <li className=' text-white  text-1xl py-2'><a href="about us">About Us</a></li>
                <li className=' text-white  text-1xl py-1'><a href="our services">Our Services</a></li>
                <li className=' text-white  text-1xl py-1'><a href="blog">Blog</a></li>
                <li className=' text-white  text-1xl py-1'><a href="contact">Contact Us</a></li>
            </ul>
        </div>
       
        <div className="footer-recentposts  pt-[90px] pl-[139px]">
            <h1 className=' text-white  text-2xl'>Recent Posts</h1>
            <div className='py-3'>
                <hr />
            </div>
           <div className="img-building flex pt-5">
            <img className='w-[68px] h-[75px]' src="../images/homepage/footer-building.png" alt="" />
           <div>
           <div className="calender flex pl-3">
            <img className='w-[30px] h-[23px]  ' src="../images/homepage/footer-calender.png" alt="" />
           <p className='text-white pl-3'>Sept 30, 2024</p>
           </div>
            <p className='text-white pl-3 py-2'>Start your business, hassle <br />
            free</p>
           </div>
           </div>
           <div className="img-document flex pt-5">
            <img className='w-[68px] h-[75px]' src="../images/homepage/footer-image.png" alt="" />
            <div>
            <div className="calender flex pl-3">
                <img  className='w-[30px] h-[23px] ' src="../images/homepage/footer-calender.png" alt="" />
            <p className='text-white pl-3'>Sept 29, 2024</p>
            </div>
            <p className='text-white pl-3 py-2'>Document processing<br />
            faster than ever</p>
            </div>
           </div>
        </div>
        <div className="footer-contactus pt-[90px] pl-[139px]">
            <h1 className=' text-white  text-2xl'>Contact Us</h1>
            <div className='py-3'>
                <hr />
            </div>
           <div className="location flex pt-5">
            <img className='white w-[20px] h-[20px]' src="../images/homepage/footer-location.png" alt="" />
           <p className='text-white pl-3 '>Lorem Ipsum, dolor street <br />
           Calicut</p>
           </div>
           <div className="mobile flex pt-2">
            <img className='white w-[20px] h-[20px]' src="../images/homepage/footer-call.png" alt="" />
           <p className='text-white pl-3 '>+97145 655 65</p>
           </div>
           <div className="email flex pt-2">
            <img className='white w-[20px] h-[20px]' src="../images/homepage/footer-email.png" alt="" />
           <p className='text-white pl-3 '>Globex@gmail.com</p>
           </div>
            
            <button className='text-blue-700 rounded-2xl mt-4 bg-white w-[160px] h-[50px]'>Get a Quote</button>
        </div>
       </div>
    </footer>
  )
}

export default footer
import { useParams } from "react-router";
import Blogs from "./blogData.json";
import { useEffect, useState } from "react";

function BlogDetails() {
  const { blogId } = useParams();
  const [blogDetais, setBlogDetais] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    tag: "",
    img: "",
  });

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let detail = Blogs[blogId];
    setBlogDetais({
      title: detail.title,
      description: detail.description,
      date: detail.date,
      time: detail.time,
      tag: detail.tag,
      img: detail.img,
    });
  }, [blogId]);

  return (
    <div className="min-h-screen bg-white pt-32 mb-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="flex items-center gap-2 text-blue-500 font-medium">
            <span className="text-xl">📝</span> Blog Post
          </p>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-4 mb-6">
            {blogDetais.title}
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <img
                src="../images/homepage/blogUser.png"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-medium">Usman Khaled</span>
            </div>
            <div className="flex items-center gap-2">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>

              <span>{blogDetais.date}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
          <img src={blogDetais.img} className="w-full h-full object-cover" />
        </div>

        <article className="prose lg:prose-lg max-w-none">
          <p
            className="text-lg leading-relaxed text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: blogDetais.description }}
          ></p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Dubai?</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            The emirate's strategic location, world-class infrastructure, and
            business-friendly policies make it an ideal destination for
            companies looking to expand their global footprint.
          </p>

          <blockquote className="my-8 pl-6 border-l-4 border-blue-500 bg-gray-50 p-6 italic text-gray-600">
            "Dubai's vision for the future continues to attract innovative
            businesses and talented entrepreneurs from around the world."
          </blockquote>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Tax-friendly environment</li>
            <li>Strategic geographic location</li>
            <li>Modern infrastructure</li>
            <li>Diverse business community</li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default BlogDetails;

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "JEFF THOMPSON",
    company: "Steel Industries",
    image: "https://placehold.co/100x100",
    content:
      "Globex simplifies company setup with needs assessment, legal registration, and compliance. Our tailored solutions in accounting, marketing, and IT support sustainable growth.",
  },
  {
    id: 2,
    name: "MARENA JOHNS",
    company: "Gold Medal Electricals",
    image: "https://placehold.co/100x100",
    content:
      "Globex simplifies company setup with needs assessment, legal registration, and compliance. Our tailored solutions in accounting, marketing, and IT support sustainable growth.",
  },
  {
    id: 3,
    name: "MICHAEL SMITH",
    company: "Tech Solutions",
    image: "https://placehold.co/100x100",
    content:
      "Globex simplifies company setup with needs assessment, legal registration, and compliance. Our tailored solutions in accounting, marketing, and IT support sustainable growth.",
  },
];

function TestmonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <section>
   <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
        <div className="mb-4">
          <div className="mb-6">
            <h3 className="text-blue-600 text-xl mb-4">Testimonials</h3>
            <h2 className="text-4xl sm:text-5xl font-bold max-w-xl">
              Our clients and their satisfaction are our top priorities.
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative w-1/2">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mb-6 object-cover"
                      />
                      <div className="text-6xl text-blue-600 leading-none mb-6">&quot;</div>
                      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                        {testimonial.content}
                      </p>
                      <div className="text-center">
                        <h4 className="font-bold text-xl mb-1">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default TestmonialSection;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      name: "Riya Sharma",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I lost my wallet near the metro station, but thanks to this platform, I got it back within 24 hours!",
    },
    {
      id: 2,
      name: "Amit Verma",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      text: "The lost & found system here is so reliable. I found my phone thanks to a kind stranger!",
    },
    {
      id: 3,
      name: "Neha Kapoor",
      image: "https://randomuser.me/api/portraits/women/72.jpg",
      text: "Highly recommend for anyone who’s lost something important.",
    },
    {
      id: 4,
      name: "Sahil Singh",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "I found my laptop through this platform. It was a smooth and trustworthy process.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Success Stories
        </h2>
        <p className="text-center text-yellow-700 max-w-2xl mx-auto mb-12">
          Real stories from users who reunited with their belongings.
        </p>

        <Slider {...settings}>
          {testimonials.map((story) => (
            <div key={story.id} className="px-3">
              <div className=" rounded-2xl shadow-lg p-6 md:p-8 text-center hover:shadow-yellow-400 transition-shadow duration-300 h-full flex flex-col justify-between bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">&ldquo;{story.text}&rdquo;</p>
                <h4 className="text-blue-800 font-semibold text-lg">{story.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;

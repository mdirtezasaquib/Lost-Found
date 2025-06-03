import { FaKey, FaShippingFast } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";

export default function Features() {
  const features = [
    {
      icon: <FaKey />,
      title: "Easy to Use",
      description: "Intuitive design, fast learning curve, video guides, and WCAG accessibility.",
    },
    {
      icon: <GiArtificialHive />,
      title: "Cutting-Edge",
      description: "AI-powered recognition, matching algorithms, and secure data protection.",
    },
    {
      icon: <BsGraphUpArrow />,
      title: "Return More!",
      description: "Smart matching tech improves your return rate with minimal effort.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description: "Integrated with top logistics and payment systems globally.",
    },
  ];

  return (
    <div className="w-full bg-yellow-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mt-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Simply Foundtastic!</h2>
        <p className="text-gray-600 text-lg mb-10">
          We offer you the <span className="font-semibold">best Lost and Found experience worldwide</span> with our{" "}
          <span className="font-semibold">leading Lost and Found Services</span>!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:bg-yellow-200 group border-2 border-dashed border-yellow-500"
            >
              <div className="text-yellow-500 text-4xl mb-4 transition-all duration-300 group-hover:text-yellow-700 group-hover:scale-125">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

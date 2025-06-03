import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearchLocation,
} from "react-icons/fa";
import iso from "../assets/iso-icon.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600 text-white pt-14 pb-0 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        
        <div>
          <div className="flex items-center mb-4">
            <FaSearchLocation className="text-3xl mr-2 text-blue-600" />
            <h2 className="text-3xl font-bold">RetrivO</h2>
          </div>
          <p className="text-sm mb-4">
            Revolutionizing lost and found with AI-based matching, real-time tracking, and seamless recovery experience.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-black transition-all duration-300"><FaFacebookF /></a>
            <a href="#" className="text-black hover:text-black transition-all duration-300"><FaTwitter /></a>
            <a href="#" className="text-blue-600 hover:text-black transition-all duration-300"><FaLinkedinIn /></a>
          </div>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black transition-all duration-300">Home</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-300">Report Item</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-300">Claim Item</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><FaPhone /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@retrivo.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> New Delhi, India</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to get the latest updates and recovery tips.</p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border border-white rounded-md w-full sm:w-auto text-black mb-2 sm:mb-0 sm:mr-2"
            />
            <button className="bg-white text-yellow-600 font-semibold px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="w-full bg-white text-yellow-900 mt-10 py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Retrivo Technologies Pvt. Ltd.
        </p>

        <div className="flex items-center space-x-3">
          <img
            src={iso}
            alt="ISO Logo"
            className="w-8 h-8"
          />
          <div className="text-sm font-semibold">
            ISO 27001:2022 <br className="md:hidden" /> Certified
          </div>
        </div>
      </div>
    </footer>
  );
}

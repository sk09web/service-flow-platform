
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Nest Care</h3>
            <p className="text-gray-600 mb-4">
              Connecting you with trusted professionals for all your household service needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary">Services</Link>
              </li>
              <li>
                <Link to="/professionals" className="text-gray-600 hover:text-primary">Find Professionals</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cleaning" className="text-gray-600 hover:text-primary">Cleaning</Link>
              </li>
              <li>
                <Link to="/services/plumbing" className="text-gray-600 hover:text-primary">Plumbing</Link>
              </li>
              <li>
                <Link to="/services/electrical" className="text-gray-600 hover:text-primary">Electrical</Link>
              </li>
              <li>
                <Link to="/services/carpentry" className="text-gray-600 hover:text-primary">Carpentry</Link>
              </li>
              <li>
                <Link to="/services/gardening" className="text-gray-600 hover:text-primary">Gardening</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary shrink-0 mt-1" />
                <span className="text-gray-600">123 Service Street, Home City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary shrink-0" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary shrink-0" />
                <span className="text-gray-600">contact@nestcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Nest Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

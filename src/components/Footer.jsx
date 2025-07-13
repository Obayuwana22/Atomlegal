import { Clock, Mail, MapPin, Phone, Scale } from "lucide-react";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            {/* <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Scale className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-lg font-semibold text-gray-900">
                    Morrison & Associates
                  </span>
                  <div className="text-sm text-gray-600">Attorneys at Law</div>
                </div>
              </div> */}
            <p className="text-gray-600 text-sm">
              Providing exceptional legal representation to our community since
              1995.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Business Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Family Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Civil Litigation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Criminal Defense
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-900 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-blue-900 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@morrisonlaw.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Main Street, Suite 400</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri 8AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Morrison & Associates. All rights
            reserved. | Privacy Policy | Terms of Service | Attorney Advertising
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

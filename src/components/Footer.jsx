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

            <p className="text-gray-600 text-sm">
              Providing exceptional legal representation to our community
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Corporate & Commercial Advisory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Deal Structuring & Transaction Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Regulatory & Public Policy Advisory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-900 transition-colors">
                  Dispute Resolution
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="space-y-4">
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
          </div> */}

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 906 049 0067</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>advisory@atom-energylaw.com</span>
              </li>
              <li className="flex md:items-center space-x-2">
                <MapPin className="h-4 w-4" />
                No. 32 Obi Okosi, Gwarinpa-FCT
              </li>
              {/* <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri 8AM-6PM</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Atom. All rights reserved. |
            Privacy Policy | Terms of Service | Attorney Advertising
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

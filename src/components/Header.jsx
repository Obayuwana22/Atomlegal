import { Calendar, Calendar1, Menu, Scale, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white fixed top-0 z-50 w-full">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary-clr transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary-clr transition-colors"
            >
              About
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-primary-clr transition-colors"
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary-clr transition-colors"
            >
              Contact
            </a>
            <button className="flex items-center justify-center px-5 py-2 rounded-md bg-primary-clr hover:bg-primary-dull transition duration-300 text-white cursor-pointer">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="text-gray-700 hover:text-blue-900">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-900">
                About
              </a>
              <a href="#team" className="text-gray-700 hover:text-blue-900">
                Our Team
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">
                Contact
              </a>
              <button className="flex items-center justify-center py-2 rounded-md bg-primary-clr hover:bg-primary-dull transition duration-300 text-white w-full">
                <Calendar1 className="w-4 h-4 mr-2" />
                Schedule Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

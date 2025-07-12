import { Calendar, Calendar1, Menu, Scale, X } from "lucide-react";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200  bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-semibold text-gray-900">
                Morrison
              </span>
              <div className="text-sm text-gray-600">Attorneys at Law</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              About
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Contact
            </a>
            <button className="flex items-center justify-center px-5 py-2 rounded-md bg-blue-900 hover:bg-blue-800 text-white">
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
              <button className="flex items-center justify-center py-2 rounded-md bg-blue-900 hover:bg-blue-800 text-white w-full">
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

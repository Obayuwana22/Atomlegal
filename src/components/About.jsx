import React from "react";
import { assets } from "../../data";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Committed to Excellence in Legal Representation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a boutique energy law advisory firm offering exclusive
                tier 1 legal, and strategic advisory services to clients across
                the energy and natural resources value chain.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work at the intersection of law, regulation, and commercial
                operations—supporting both government bodies, private sector
                entities, infrastructure investors, and project developers
                operating across the oil and gas, power, mining, and maritime
                sectors.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our value lies in our sector-specific insight, transactional
                fluency, and policy awareness—allowing us to provide not just
                legal advice, but commercially sound guidance tailored to
                Nigeria’s evolving energy landscape.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-primary-clr mb-2">
                  AV Rated
                </div>
                <div className="text-sm text-gray-600">Martindale-Hubbell</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-primary-clr mb-2">
                  Top Lawyers
                </div>
                <div className="text-sm text-gray-600">Local Recognition</div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <img
              src={assets.placeholder}
              alt="Law office"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

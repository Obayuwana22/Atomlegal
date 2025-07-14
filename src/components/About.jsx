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
                Driven by Expertise. Committed to Excellence. Atom is a full-service Nigerian law firm offering strategic
                legal support to clients across key sectors of the economy. With
                a deep understanding of industry dynamics and a strong grasp of
                regulatory environments, we provide practical, commercially
                focused legal solutions. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our multidisciplinary team blends legal
                proficiency with sector-specific knowledge, enabling us to
                support clients through every stage of the value chain from
                project development and financing to compliance, operations, and
                dispute resolution. We are proud to partner with corporations,
                government institutions, investors, and entrepreneurs committed
                to success in Nigeria’s dynamic business and regulatory
                environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
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
            </div>
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

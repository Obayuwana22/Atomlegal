import {
  Award,
  Building,
  CheckCircle,
  Gavel,
  Heart,
  Shield,
  Users,
} from "lucide-react";
import React from "react";
// import { services } from "../../data";

const PracticeAreas = () => {
  return (
    <section id="practice" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full suite of legal and strategic advisory services
            spanning the entire energy value chain:
          </p>
        </div>

        <div className="border border-gray-200 bg-blue-50 rounded-lg">
          <div className="p-6">
            <ul className="space-y-2 text-xl text-gray-600">
              <li className="flex  items-center">
                <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                Regulatory Consulting & Compliance
              </li>
              <li className="flex items-center">
                <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                Corporate & Commercial Advisory
              </li>
              <li className="flex items-center">
                <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                Project Structuring & Transaction Support
              </li>
              <li className="flex items-center">
                <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                Policy & Legislative Advisory
              </li>
              <li className="flex items-center">
                <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                Energy Disputes & Conflict Management
              </li>
              <li className="flex items-center">
                <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                Public Sector & Government Relations
              </li>
              <li className="flex items-center">
                <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                Local Content Advisory
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow p-5"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary-clr" />
                </div>
                <div className="text-gray-900">{service.title}</div>
                <div className="text-gray-600">{service.description}</div>
              </div>
              <div className="mt-5">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-clr mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PracticeAreas;

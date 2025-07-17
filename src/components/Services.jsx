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
import { services } from "../../data";

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We support our clients across every stage of their project
            lifecycle:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-5"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary-clr" />
                </div>
                <div className="text-gray-900 mb-2 font-semibold">{service.title}</div>
                <div className="text-gray-600">{service.description}</div>
              </div>
              {/* <div className="mt-5">
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
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

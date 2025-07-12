import { Award, Calendar, Phone } from "lucide-react";
import React from "react";
import blueLine from "../assets/png/blue line.png";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            {/* <div className="bg-blue-100 text-blue-900 border-blue-200 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Serving the Community Since 1995
                </div> */}

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Partner on
              <br />
              <div className="relative mb-16 w-full">
                <span>the Path to Justice.</span>
                <img
                  src={blueLine}
                  alt=""
                  className="absolute right-1/2 translate-x-[130px] -translate-y-[] w-52 md:translate-x-[250px] md:w-96"
                />
              </div>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For nearly three decades, we've provided exceptional legal
              representation to individuals, families, and businesses. Our
              experienced team is here to guide you through your legal
              challenges with expertise and care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex rounded-md bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </button>
            <button className="flex rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 bg-transparent">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

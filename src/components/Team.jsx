import React from "react";
import { assets } from "../../data";

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Attorneys
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced legal team brings decades of combined experience and
            a commitment to achieving the best results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "David Morrison",
              title: "Managing Partner",
              specialties: ["Business Law", "Civil Litigation"],
              experience: "28 years",
              education: "Harvard Law School",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Sarah Chen",
              title: "Senior Partner",
              specialties: ["Family Law", "Estate Planning"],
              experience: "22 years",
              education: "Stanford Law School",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Michael Rodriguez",
              title: "Partner",
              specialties: ["Criminal Defense", "Personal Injury"],
              experience: "18 years",
              education: "Columbia Law School",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((attorney, index) => (
            <div
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow p-5"
            >
              <div className="text-center">
                <img
                  src={assets.placeholder || "/placeholder.svg"}
                  alt={attorney.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="text-gray-900">{attorney.name}</div>
                <div className="text-gray-600 font-medium">
                  {attorney.title}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Practice Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {attorney.specialties.map((specialty, idx) => (
                      <div
                        key={idx}
                        variant="secondary"
                        className="bg-blue-100 text-primary-clr px-3 rounded-full"
                      >
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <strong>Experience:</strong> {attorney.experience}
                  </div>
                  <div>
                    <strong>Education:</strong> {attorney.education}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

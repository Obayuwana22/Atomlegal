import { Award, Building, CheckCircle, Gavel, Heart, Shield, Users } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
        <section id="services" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Practice Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive legal services across multiple practice
                areas, ensuring you receive expert representation for your
                specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Building,
                  title: "Business Law",
                  description:
                    "Corporate formation, contracts, and business transactions",
                  features: [
                    "Entity Formation",
                    "Contract Review",
                    "Business Transactions",
                    "Compliance",
                  ],
                },
                {
                  icon: Users,
                  title: "Family Law",
                  description:
                    "Divorce, custody, and family-related legal matters",
                  features: [
                    "Divorce Proceedings",
                    "Child Custody",
                    "Adoption",
                    "Prenuptial Agreements",
                  ],
                },
                {
                  icon: Gavel,
                  title: "Civil Litigation",
                  description:
                    "Representing clients in civil disputes and court proceedings",
                  features: [
                    "Personal Injury",
                    "Contract Disputes",
                    "Employment Law",
                    "Appeals",
                  ],
                },
                {
                  icon: Shield,
                  title: "Criminal Defense",
                  description:
                    "Aggressive defense for criminal charges and investigations",
                  features: [
                    "DUI Defense",
                    "White Collar Crime",
                    "Drug Charges",
                    "Appeals",
                  ],
                },
                {
                  icon: Heart,
                  title: "Estate Planning",
                  description:
                    "Wills, trusts, and estate administration services",
                  features: [
                    "Wills & Trusts",
                    "Probate",
                    "Estate Administration",
                    "Tax Planning",
                  ],
                },
                {
                  icon: Award,
                  title: "Real Estate Law",
                  description:
                    "Property transactions and real estate legal services",
                  features: [
                    "Property Transactions",
                    "Title Issues",
                    "Zoning",
                    "Commercial Leases",
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-blue-900" />
                    </div>
                    <div className="text-gray-900">
                      {service.title}
                    </div>
                    <div className="text-gray-600">
                      {service.description}
                    </div>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Services
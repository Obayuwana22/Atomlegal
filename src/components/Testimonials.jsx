import { Star } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
  return (
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud of the relationships we've built and the results
                we've achieved for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  text: "Morrison & Associates handled my business acquisition with professionalism and expertise. They made a complex process straightforward and stress-free.",
                  author: "Jennifer Adams",
                  role: "Business Owner",
                  rating: 5,
                },
                {
                  text: "During my divorce, Sarah Chen provided compassionate guidance while fighting for my interests. I couldn't have asked for better representation.",
                  author: "Robert Thompson",
                  role: "Client",
                  rating: 5,
                },
                {
                  text: "The team's criminal defense work was exceptional. They were thorough, responsive, and achieved an outcome better than I hoped for.",
                  author: "Maria Garcia",
                  role: "Client",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="border border-gray-200 p-5">
                  <div>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <blockquote className="text-gray-600 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Testimonials
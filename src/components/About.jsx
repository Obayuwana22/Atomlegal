import React from 'react'

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
                    Since 1995, Morrison & Associates has been dedicated to
                    providing exceptional legal services to our community. We
                    understand that legal issues can be overwhelming, which is
                    why we're committed to making the process as clear and
                    straightforward as possible.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our approach combines deep legal expertise with genuine care
                    for our clients. We take the time to understand your unique
                    situation and work tirelessly to achieve the best possible
                    outcome for your case.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-900 mb-2">
                      AV Rated
                    </div>
                    <div className="text-sm text-gray-600">
                      Martindale-Hubbell
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-900 mb-2">
                      Top Lawyers
                    </div>
                    <div className="text-sm text-gray-600">
                      Local Recognition
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Law office"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default About
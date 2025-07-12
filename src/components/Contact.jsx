import { CheckCircle, Mail, MapPin, Phone,Calendar } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get Started Today
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to discuss your legal needs? Contact us for a free
                consultation and let us help you navigate your legal challenges.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="border border-gray-200">
                    <div className="p-6 text-center">
                      <Phone className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <div className="text-gray-600">(555) 123-4567</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Mon-Fri 8AM-6PM
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200">
                    <div className="p-6 text-center">
                      <Mail className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                      <div className="font-semibold text-gray-900">
                        Email Us
                      </div>
                      <div className="text-gray-600">info@morrisonlaw.com</div>
                      <div className="text-sm text-gray-500 mt-1">
                        24hr Response
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-2">
                          Visit Our Office
                        </div>
                        <div className="text-gray-600">
                          123 Main Street, Suite 400
                          <br />
                          Downtown City, State 12345
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                          Free parking available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 bg-blue-50">
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Why Choose Morrison & Associates?
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Free initial consultation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Transparent, upfront pricing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Regular case updates
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        28+ years of experience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200">
                <div>
                  <div className="text-gray-900">
                    Schedule Your Free Consultation
                  </div>
                  <div className="text-gray-600">
                    Tell us about your legal needs and we'll get back to you
                    within 24 hours.
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      {/* <Input placeholder="John" /> */}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      {/* <Input placeholder="Doe" /> */}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    {/* <Input type="email" placeholder="john@example.com" /> */}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    {/* <Input type="tel" placeholder="(555) 123-4567" /> */}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Legal Matter
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Select a practice area</option>
                      <option>Business Law</option>
                      <option>Family Law</option>
                      <option>Civil Litigation</option>
                      <option>Criminal Defense</option>
                      <option>Estate Planning</option>
                      <option>Real Estate Law</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      How can we help you?
                    </label>
                    <textarea
                      placeholder="Please briefly describe your legal situation..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                  </button>

                  <div className="text-xs text-gray-500 text-center">
                    All consultations are confidential. We'll never share your
                    information.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Contact
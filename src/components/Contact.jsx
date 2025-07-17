import { CheckCircle, Mail, MapPin, Phone, Calendar } from "lucide-react";
import React, { useState } from "react";
import FormInput from "./FormInput";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const serviceID = "service_eaju41s";
    const templateID = "template_ynxmyji";
    const publicKey = "wvNwPwVjg22NbwRbb";

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      legal_matter: formData.legalMatter,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setLoading(false);
        toast.success("Message sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          legalMatter: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong. Please try again later.");
      });
  };
  return (
    <section id="contact" className="py-20 md:py-32">
      <ToastContainer />
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let’s talk about how we can support your energy project or legal advisory needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg">
                <div className="p-6 text-center">
                  <Phone className="w-8 h-8 text-primary-clr mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-600">+234 906 049 0067</div>
                  {/* <div className="text-sm text-gray-500 mt-1">
                    Mon-Fri 8AM-6PM
                  </div> */}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <div className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary-clr mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-600">
                    advisory@atom-energylaw.com
                  </div>
                  {/* <div className="text-sm text-gray-500 mt-1">
                    24hr Response
                  </div> */}
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-clr mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">
                      Visit Our Office
                    </div>
                    <div className="text-gray-600">
                      No. 32 Obi Okosi, Gwarinpa-FCT
                    </div>
                    {/* <div className="text-sm text-gray-500 mt-2">
                      Free parking available
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="border border-gray-200 bg-blue-50 rounded-lg">
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Why Choose Atom?
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex  items-center">
                    <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                    Industry-specific legal expertise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                    Proven track record in complex transactions and disputes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                    Deep understanding of Nigeria’s legal and regulatory
                    frameworks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                    Strategic, client-focused approach
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="max-w-4 h-4 text-primary-clr mr-2" />
                    Nationwide and international reach through trusted networks
                  </li>
                </ul>
              </div>
            </div> */}
          </div>

          <form onSubmit={handleOnSubmit}>
            <div className="bg-white p-5 border border-gray-200 rounded-lg">
              <div className="mb-8">
                <div className="text-slate-900 font-bold text-2xl mb-2">
                  Send Us a Message
                </div>
                <div className="text-slate-500 text-sm">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <FormInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {/* Last Name */}
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                {/* Email */}
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {/* Phone */}
                <FormInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {/* Legal Matter */}
                <FormInput
                  label="Legal Matter"
                  name="legalMatter"
                  type="text"
                  placeholder="Brief description of your legal needs"
                  value={formData.legalMatter}
                  onChange={handleChange}
                />
                {/* Message*/}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    How can we help you?
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    placeholder="Please briefly describe your legal situation"
                    className="text-gray-600 px-4 py-2 text-sm border border-gray-300 rounded-md w-full placeholder:text-gray-400 focus:border-2 focus:border-black focus:outline-offset-5 focus:outline-gray-400 focus:rounded-md"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 w-full bg-primary-clr hover:bg-primary-dull text-white font-semibold rounded-md py-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  {loading ? "Sending message....." : "Send Message"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  All consultations are confidential. We'll never share your
                  information
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

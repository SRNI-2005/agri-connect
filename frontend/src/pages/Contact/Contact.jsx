import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Left() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-green-50 to-green-100 w-full min-h-[90vh] mx-auto">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="text-4xl font-extrabold text-gray-800 mb-5 animate-text-shadow"
      >
        Contact BharathHarvest
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow duration-300"
            placeholder="Enter your full name"
          />
        </div>
        <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow duration-300"
            placeholder="Enter your email address"
          />
        </div>
        <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow duration-300"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-subtle font-semibold"
        >
          <div className="flex items-center justify-center gap-2">
            <span>Send Message</span>
            <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
          </div>
        </button>
      </form>
    </div>
  );
}

function Right() {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      text: "vssreenivaas@bharathharvest.com",
      action: "Email Us",
    },
    {
      icon: faPhone,
      title: "Phone",
      text: "+91 7892781710",
      action: "Call Now",
    },
    {
      icon: faMapMarkerAlt,
      title: "Address",
      text: "Mysuru Road, RVCE, Bengaluru, 560059",
      action: "View on Map",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-around p-8 bg-gradient-to-br from-green-500 to-green-600 w-full min-h-[90vh]">
      <div
        data-aos="zoom-in"
        data-aos-duration="1200"
        className="mb-6 animate-float"
      >
        <div className="flex items-center justify-center w-32 h-32 bg-green-100 rounded-full shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-6xl text-green-600 transform hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="w-full max-w-lg">
        <ul className="space-y-4 text-xl text-white">
          {contactInfo.map((contact, index) => (
            <li
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 150}
              className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-green-400/20 backdrop-blur-sm hover:bg-green-400/30 transition-all duration-300 transform hover:translate-x-2 group"
              tabIndex="0"
              role="button"
              aria-label={contact.title}
            >
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={contact.icon}
                  className="text-2xl animate-spin-slow"
                />
                <div>
                  <div className="font-semibold">{contact.title}</div>
                  <div className="text-sm opacity-90">{contact.text}</div>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-[85vh] flex flex-col md:flex-row w-full mx-auto overflow-hidden">
      <div className="w-full md:w-1/2">
        <Left />
      </div>
      <div className="w-full md:w-1/2">
        <Right />
      </div>
    </div>
  );
}

import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#1e1e2c] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b-2 border-[#dbca2f] inline-block">
            Contact
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📞</span>
              <div>
                <p>01902131906</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📧</span>
              <div>
                <p>sabbir15-4180@diu.edu.bd</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📍</span>
              <div>
                <p>Ashulia Model Town, Savar</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <p className="text-lg font-light mb-8">
            I'm always open to discussing product <br />
            <span className="font-bold text-[#dbca2f]">
              design work or partnerships.
            </span>
          </p>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring focus:ring-[#dbca2f]"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring focus:ring-[#dbca2f]"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring focus:ring-[#dbca2f]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#dbca2f] text-white rounded hover:bg-pink-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

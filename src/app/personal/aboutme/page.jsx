import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-[#dbca2f] text-center">
          About Me
        </h2>
        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
          {/* <Image
              src="/" // Replace with your image path
              alt="Profile"
              className="rounded-lg shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
            /> */}
          </div>
          {/* Info Section */}
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold text-[#dbca2f] mb-4">
              Who am I?
            </h3>
            <p className="text-gray-300 text-lg">
              I’m a Creative Developer and Designer from Dhaka, Bangladesh,
              specializing in crafting intuitive user experiences and 
              efficient digital solutions. My expertise lies in web and 
              mobile development, UI/UX design, and digital marketing. 
              I enjoy solving problems with creativity and innovation.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-[#dbca2f] mb-4">
                Personal Info
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-[#dbca2f] text-2xl">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-400">Phone</h5>
                    <p className="text-lg font-semibold text-white">
                      +8801902131906
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-[#dbca2f] text-2xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-400">
                      Location
                    </h5>
                    <p className="text-lg font-semibold text-white">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-[#dbca2f] text-2xl">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-400">Email</h5>
                    <p className="text-lg font-semibold text-white">
                      sabbir15-4180@diu.edu.bd
                    </p>
                  </div>
                </div>
                {/* Birthday */}
                <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-[#dbca2f] text-2xl">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-400">
                      Birthday
                    </h5>
                    <p className="text-lg font-semibold text-white">
                      November 10, 2001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#dbca2f] text-center">
            What I Do
          </h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "UI/UX Design",
                description:
                  "Creating user-centered designs with intuitive interfaces and experiences.",
                icon: "🎨",
              },
              {
                title: "App Development",
                description:
                  "Building efficient and robust mobile and web applications.",
                icon: "📱",
              },
              {
                title: "Photography",
                description:
                  "Capturing moments and visuals that tell compelling stories.",
                icon: "📸",
              },
              {
                title: "Management",
                description:
                  "Leading projects with a focus on productivity and effective collaboration.",
                icon: "📊",
              },
              {
                title: "Web Development",
                description:
                  "Developing responsive and scalable websites with cutting-edge technologies.",
                icon: "💻",
              },
              {
                title: "Digital Marketing",
                description:
                  "Crafting strategies to enhance brand presence and drive growth.",
                icon: "📈",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:bg-gray-700 transition duration-300"
              >
                <div className="text-4xl">{service.icon}</div>
                <h4 className="mt-4 text-lg font-semibold">{service.title}</h4>
                <p className="mt-2 text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

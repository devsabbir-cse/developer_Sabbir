import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#dbca2f] text-center mb-12">
          Resume
        </h2>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#dbca2f] mb-6">
              <i className="fas fa-graduation-cap mr-2"></i>Education
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">B.Sc in Computer Science</h4>
                <p className="text-gray-400">2021 - 2025</p>
                <p className="text-gray-300">
                  Daffodil International University, Dhaka
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">HSC in Science</h4>
                <p className="text-gray-400">2017-2019</p>
                <p className="text-gray-300">Mount Everest college, Dinajpur</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">SSC in Science</h4>
                <p className="text-gray-400">2015-2016</p>
                <p className="text-gray-300">Royal Residential School</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#dbca2f] mb-6">
              <i className="fas fa-briefcase mr-2"></i>Experience
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">Sr. Software Engineer</h4>
                <p className="text-gray-400">2024 - Present</p>
                <p className="text-gray-300">Google Inc.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">Web Developer</h4>
                <p className="text-gray-400">2022 - 2023</p>
                <p className="text-gray-300">Creative Agency</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">Junior Developer</h4>
                <p className="text-gray-400">2020 - 2021</p>
                <p className="text-gray-300">Freelance</p>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#dbca2f] mb-6">
              <i className="fas fa-award mr-2"></i>Awards
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">Best Developer</h4>
                <p className="text-gray-400">2024</p>
                <p className="text-gray-300">Tech Awards</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">Top Freelancer</h4>
                <p className="text-gray-400">2023</p>
                <p className="text-gray-300">Upwork</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">Innovative Project Award</h4>
                <p className="text-gray-400">2023</p>
                <p className="text-gray-300">Startup Showcase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Working Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#dbca2f] mb-6 text-center">
            Working Skills
          </h3>
          <div className="space-y-4">
            {[
              { skill: "Web Design", percentage: 85 },
              { skill: "Mobile App Development", percentage: 90 },
              { skill: "UI/UX Design", percentage: 80 },
              { skill: "Digital Marketing", percentage: 75 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>{item.skill}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#dbca2f] mb-6 text-center">
            Knowledge
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Digital Design",
              "Marketing",
              "Social Media",
              "Time Management",
              "Teamwork",
              "Leadership",
            ].map((knowledge, index) => (
              <div
                key={index}
                className="bg-gray-800 text-[#dbca2f] px-4 py-2 rounded-lg shadow-md"
              >
                {knowledge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

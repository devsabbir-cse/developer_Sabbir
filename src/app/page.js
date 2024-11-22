'use client';
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white dark:bg-black">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
                {/* Profile Image */}
                <div className="w-64 h-64 overflow-hidden rounded-full border-4 border-gray-700">
                    <Image
                        src="/myimg.jpg" // Replace with your image URL
                        alt="Profile"
                        className="object-cover w-full h-full"
                        height={250} width={250}
                    />
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-[#dbca2f]">Md SABBIR ISLAM</h1>
                    <div className="mt-2 mb-4">
                        <span className="text-xl text-gray-400">Creative </span>
                        <span className="text-xl font-bold text-gray-100">
                            <Typewriter
                                words={["Web Designer", "Developer", "Freelancer"]}
                                loop
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

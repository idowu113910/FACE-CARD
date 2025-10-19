import React, { useEffect, useState } from "react";
import { MessageCircle, Linkedin, Github } from "lucide-react";
import dan from "../assets/dan.jpg";

const ProfileCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 500); // Update every 500ms (half a second)

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return currentTime.getTime(); // Returns Unix timestamp in milliseconds
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        {/* Card Container */}
        <div className="w-full max-w-md md:max-w-lg bg-white rounded-[40px] overflow-hidden shadow-lg">
          {/* Red Top Section */}
          <div className="bg-gradient-to-br from-red-400 to-red-500 h-64 md:h-80 relative">
            {/* Profile Image - positioned to overlap */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20">
              <div className="relative">
                {/* Outer white circle */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white p-2">
                  {/* Inner circle with image */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-red-400 to-purple-600 flex items-center justify-center">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-4xl text-gray-600">
                      <img src={dan} alt="" />
                    </div>
                  </div>
                </div>
                {/* Small circle indicator (top right of profile) */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full border-4 border-red-100"></div>
              </div>
            </div>
          </div>

          {/* White Bottom Section */}
          <div className="bg-white pt-24 pb-8 px-8 text-center">
            {/* Name */}
            <div className="text-gray-600 text-sm md:text-base mb-3 font-mono">
              Current time:{" "}
              <span className="text-gray-800 font-semibold">
                {formatTime()}
              </span>{" "}
              ms
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Idowu Daniel
            </h1>

            {/* Title */}
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              I’m a front-end developer passionate about building clean,
              responsive, and user-friendly web experiences. I love turning
              designs into functional interfaces using tools like React,
              Tailwind CSS, and JavaScript to bring ideas to life.
            </p>

            {/* Red divider line */}
            <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-red-400 to-red-500 rounded-full mb-6"></div>

            {/* Description */}
            <div className="flex justify-between gap-8 mb-8 max-w-md mx-auto text-center">
              {/* Hobbies */}
              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold text-base md:text-lg mb-3">
                  Hobbies
                </h3>
                <ul className="text-gray-500 text-sm md:text-base space-y-2">
                  <li>• Exercising</li>
                  <li>• Reading</li>
                  <li>• Coding</li>
                </ul>
              </div>

              {/* Dislikes */}
              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold text-base md:text-lg mb-3">
                  Dislikes
                </h3>
                <ul className="text-gray-500 text-sm md:text-base space-y-2">
                  <li>• Laziness</li>
                  <li>• Slow internet</li>
                  <li>• Less work</li>
                </ul>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 md:gap-8">
              <a
                href="https://wa.me/2349121801655"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <MessageCircle size={28} strokeWidth={2} />
              </a>
              <a
                href="http://linkedin.com/in/idowu-daniel-144a17363"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={28} strokeWidth={2} fill="currentColor" />
              </a>
              <a
                href="https://github.com/idowu113910"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <Github size={28} strokeWidth={2} fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

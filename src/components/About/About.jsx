import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/my_profile.jpeg";

const roles = ["Fullstack Developer", "UI/UX Designer", "DSA Enthusiast"];

const About = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setIsDeleting(true);
          }
        } else if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 45 : 90,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-12 md:mt-12 lg:mt-12"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Yashin Ansari
          </h2>
          {/* Skills Heading with custom Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">{displayText}</span>
            <span className="text-[#8245ec] animate-pulse">|</span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Full-Stack MERN Developer with a passion for building
            scalable, secure, and user-friendly web applications. Experienced in
            MongoDB, Express.js, React.js, and Node.js, I have developed
            real-world projects ranging from house listing platforms to
            real-time video conferencing applications. I enjoy problem solving,
            learning modern technologies, and creating software that delivers
            seamless user experiences.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1hROqCxv6_MybHWCQStLVNHBH1FPnJyjJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            My Resume
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-[clamp(12rem,40vw,30rem)] aspect-square overflow-hidden rounded-full border-4 border-purple-700"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={false}
          >
            <img
              src={profileImage}
              alt="Yashin Ansari"
              className="h-full w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

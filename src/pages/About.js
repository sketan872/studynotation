import React from 'react';
import AboutImage from '../assets/AboutImage.webp'; // Image for the About Us section/

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* About Us Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16">
        <div className="text-center lg:text-left max-w-lg lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold">About Us</h1>
          <p className="mt-6 text-lg text-green-200">
            Welcome to our day care! We are a team of dedicated professionals
            who believe in nurturing the growth of every child in a loving and
            supportive environment. Our mission is to provide a safe, fun, and
            educational space where children can explore, learn, and flourish.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            className="rounded-lg w-[600px] border border-white"
            src={AboutImage}
            alt="About Us"
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Mission</h2>
        <p className="text-center max-w-4xl mx-auto text-lg">
          Our mission is to provide a safe, nurturing environment that encourages
          the holistic development of each child. We aim to inspire curiosity, foster
          creativity, and promote social interaction through play-based learning.
          Every child deserves the best start in life, and we are committed to making
          that happen through our dedicated team and enriching programs.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-gray-700 p-6 rounded-lg text-center w-80">
            <h3 className="text-2xl mb-4">Love & Care</h3>
            <p>
              Every child is unique, and we provide the personalized attention
              and care that each child needs to grow and thrive.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center w-80">
            <h3 className="text-2xl mb-4">Learning Through Play</h3>
            <p>
              Our programs are designed to promote learning through fun and
              interactive activities that stimulate cognitive and emotional
              development.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center w-80">
            <h3 className="text-2xl mb-4">Community & Connection</h3>
            <p>
              We believe in building strong relationships with families and
              fostering a sense of community that helps children feel connected
              and supported.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-16 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-10">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-700 p-6 rounded-lg text-center w-80">
            <img
              className="rounded-full w-[150px] h-[150px] mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
            />
            <h3 className="text-xl">Mr.Naveen</h3>
            <p className="text-sm">Founder & Director</p>
            <p></p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center w-80">
            <img
              className="rounded-full w-[150px] h-[150px] mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
            />
            <h3 className="text-xl">Mrs.Rinku</h3>
            <p className="text-sm">Principle</p>
            <p></p>
          </div>
          
          
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Day Care. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-4">
            Facebook
          </a>
          <a href="#" className="mx-4">
            Twitter
          </a>
          <a href="#" className="mx-4">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import Homepage from '../assets/HomePageImage.webp';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
const Home = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
  
      <div className='flex flex-col lg:flex-row items-center justify-between px-10 py-16'>
        <div className='text-center lg:text-left max-w-lg lg:w-1/2'>
          <h1 className='text-4xl lg:text-4xl font-bold'>
            <Typewriter
              options={{
                strings: [
                  'A Day Care With a Heart❤️.',
                  'A Great place to Grow🪴.',
                  'Every child is teachable🏫.'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className='mt-6 text-lg text-green-200'>
            We provide the best care and learning environment for children to
            grow, learn, and thrive. With a de  dicated team of caregivers and
            educators, every child’s development is our top priority.
          </p>
          <button className='mt-6 px-6 py-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-300' >
            Learn More
          </button>
        </div>

        <div className='mt-10 lg:mt-0 lg:w-1/2 flex justify-center'>
          <img
            className='rounded-full w-[600px] border border-white'
            src={Homepage}
            alt='Not Found'
          />
        </div>
      </div>

      
      <div className='py-16 bg-gray-800'>
        <h2 className='text-3xl font-semibold text-center mb-10'>
          Why Choose Us?
        </h2>
        <div className='flex flex-wrap justify-center gap-10'>
          <div className='bg-gray-700 p-6 rounded-lg text-center w-80'>
            <h3 className='text-2xl mb-4'>Nurturing Environment</h3>
            <p>
              Our day care offers a warm, loving environment where children feel
              safe and cared for, allowing them to grow with confidence.
            </p>
          </div>
          <div className='bg-gray-700 p-6 rounded-lg text-center w-80'>
            <h3 className='text-2xl mb-4'>Experienced Educators</h3>
            <p>
              Our teachers and staff are certified and experienced, providing
              the best learning experiences for young minds.
            </p>
          </div>
          <div className='bg-gray-700 p-6 rounded-lg text-center w-80'>
            <h3 className='text-2xl mb-4'>Fun & Engaging Activities</h3>
            <p>
              We believe in learning through play, and our day care is full of
              fun activities designed to foster creativity and social skills.
            </p>
          </div>
        </div>
      </div>

      
      <div className='py-16 bg-gray-900'>
        <h2 className='text-3xl font-semibold text-center mb-10'>
          Our Happy Moments
        </h2>
        <div className='flex flex-wrap justify-center gap-6'>
          <img
            className='rounded-lg w-[300px] h-[200px] object-cover'
            src={photo1}
            alt='Gallery Image 1'
          />
          <img
            className='rounded-lg w-[300px] h-[200px] object-cover'
            src={photo2}
            alt='Gallery Image 2'
          />
          <img
            className='rounded-lg w-[300px] h-[200px] object-cover'
            src={photo3}
            alt='Gallery Image 3'
          />
          
        </div>
      </div>
      <footer className='bg-gray-800 py-8 text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Day Care. All rights reserved.
        </p>
        <div className='flex justify-center mt-4'>
          <a href='#' className='mx-4'>
            <FaFacebook/>
          </a>
          <a href='#' className='mx-4'>
            <FaTwitter/>
          </a>
          <a href='#' className='mx-4'>
            <FaInstagram/>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

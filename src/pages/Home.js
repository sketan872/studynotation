import React from 'react';

const Home = () => {
  return (
    <div>
    <div className=''>
       <header className="bg-gray-100 flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome </h2>
          <p className="text-xl text-gray-600 mb-6">
    
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Get Started</button>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
   </div>
);
};
 
  


export default Home

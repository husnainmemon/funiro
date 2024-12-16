import React from 'react';

const RoomInspiration = () => {
  return (
    <section className="bg-gray-50 py-12 px-8">
      <div className="max-w-6xl mx-auto md:flex md:items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mt-4">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600">
            Explore More
          </button>
        </div>

        {/* Right Image Carousel Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 relative">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="images/image-5.png"
              alt="Room Inspiration"
              className="w-full"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow">
              <span className="text-sm text-gray-500">01 — Bed Room</span>
              <h3 className="text-lg font-bold text-gray-800">Inner Peace</h3>
            </div>
          </div>
          {/* Dots and Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            <button className="w-2.5 h-2.5 bg-gray-400 rounded-full"></button>
            <button className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></button>
            <button className="w-2.5 h-2.5 bg-gray-400 rounded-full"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomInspiration;
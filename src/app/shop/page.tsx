import React from "react";

const ShopPage = () => {
  return (
    <div className="font-sans text-gray-700">
      {/* Hero Section */}
      <div
        className="w-full h-64 flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('images/bg-image.png')" }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
        <nav className="mt-2 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-800">
            Home
          </a>{" "}
          <span>&gt;</span>{" "}
          <span className="text-gray-800 font-medium">Shop</span>
        </nav>
      </div>

      {/* Filter and Sorting Controls */} 
      < div className="w-full bg-orange-100 py-4 px-8 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Filter Button */}
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
            <span>☰</span>
            <span className="font-medium">Filter</span>
          </button>
          {/* Layout Icons */}
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <img src="images/grid-image.png" alt="" />
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <img src="images/list-image.png" alt="" />
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">1–16</span> of{" "}
          <span className="font-semibold">32</span> results
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <span className="text-sm">Show</span>
          <input
            type="text"
            value="16"
            readOnly
            className="w-12 border border-gray-300 rounded-md text-center py-1"
          />
          <span className="text-sm">Short by</span>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>Default</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

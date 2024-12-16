const Hero = () => {
  return (
    <section className="bg-gray-100 py-12 px-8 md:flex md:justify-center md:items-center">
      <div className="md:flex md:max-w-6xl md:items-center">
        {/* Left Image Section */}
        {/* <div className="md:w-1/2"> */}
          <img 
            src="/hero-image.png" 
            alt="Furniture Showcase" 
            className="rounded-md shadow-md w-full"
          />
        {/* </div> */}

        {/* Right Text Section */}
        <div className="bg-white rounded-lg shadow-md p-6 md:w-1/2 md:ml-8 absolute left-[40%]">
          <p className="text-sm text-gray-500">New Arrival</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">Discover Our New Collection</h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero
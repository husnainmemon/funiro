const GallerySection = () => {
    const images = [
      "images/image-6.png",
      "images/image-7.png",
      "images/image-10.png",
      "images/image-12.png",
      "images/image-8.png",
      "images/image-9.png",
      "images/image-11.png",
    ];
  
    return (
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Share your setup with <span className="text-gold">#FuniroFurniture</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default GallerySection
const ProductCard = ({ image, name, description, price, oldPrice, label }) => {
    return (
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
        />
        {label && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {label}
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-800">{price}</span>
            {oldPrice && (
              <span className="text-sm text-gray-500 line-through">{oldPrice}</span>
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-gold text-white py-2 px-4 rounded-md hover:bg-yellow-600">
            Add to cart
          </button>
        </div>
      </div>
    );
  };

  export default ProductCard
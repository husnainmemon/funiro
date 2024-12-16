import products from "./product";

const ProductCard = ({ product }) => {
    return (
      <div className="relative group bg-white border rounded-lg shadow hover:shadow-lg overflow-hidden">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {product.badge && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </div>
          )}
        </div>
  
        {/* Product Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-800">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>
  
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="text-sm text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
            Add to cart
          </button>
          <div className="flex mt-2 space-x-4 text-white text-sm">
            <button>Share</button>
            <button>Compare</button>
            <button>Like</button>
          </div>
        </div>
      </div>
    );
  };
  
  const ProductGrid = () => {
    return (
      <div className="p-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 3 }).map((_, index) =>
            products.map((Products) => (
              <ProductCard key={`${products.id}-${index}`} product={products} />
            ))
          )}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="px-4 py-2 rounded bg-yellow-600 text-white">1</button>
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-800">2</button>
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-800">3</button>
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-800">Next</button>
        </div>
      </div>
    );
  };
  
  export default ProductGrid;
// import Image from "next/image";

import ProductCard from "./ProductCard";

// export default function Products() {
//   const products = [
//     {
//       name: "Syltherine",
//       description: "Stylish cafe chair",
//       price: "Rp 2.500.000",
//       discount: "-30%",
//       isNew: true,
//       image: "/images/image-1.png"
//     },
//     {
//       name: "Leviosa",
//       description: "Stylish cafe chair",
//       price: "Rp 3.500.000",
//       discount: "-30%",
//       isNew: true,
//       image: "/images/image-1.png"
//     },
//     {
//       name: "Lolito",
//       description: "Luxury big sofa",
//       price: "Rp 7.000.000",
//       discount: "-50%",
//       isNew: true,
//       image: "/images/image-1.png"
//     },
//     {
//       name: "Respira",
//       description: "Outdoor bar table and stool",
//       price: "Rp 500.000",
//       discount: "-50%",
//       isNew: true,
//       image: "/images/image-1.png"
//     },
//   ];

//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4 text-center">
//         <h3 className="text-3xl font-semibold mb-8">Our Products</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map((product, idx) => (
//             <div
//               key={idx}
//               className="relative bg-white p-4 shadow rounded transition hover:shadow-lg"
//             >
//               {/* Badge */}
//               <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                 {product.discount}
//               </div>
//               {product.isNew && (
//                 <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
//                   New
//                 </div>
//               )}

//               {/* Product Image Placeholder */}
//               <div className="h-40 bg-gray-200 flex items-center justify-center mb-4">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={100}
//                   height={100}
//                   className="object-cover"
//                 />
//               </div>

//               {/* Product Info */}
//               <h4 className="text-lg font-bold">{product.name}</h4>
//               <p className="text-sm text-gray-500">{product.description}</p>
//               <p className="text-gray-700 font-semibold mb-2">{product.price}</p>

//               {/* Actions */}
//               <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">
//                 Add to cart
//               </button>
//               <div className="flex justify-around mt-2 text-sm text-gray-500">
//                 <button className="hover:text-gray-700">Share</button>
//                 <button className="hover:text-gray-700">Compare</button>
//                 <button className="hover:text-gray-700">Like</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



const Product = () => {
  const products = [
    {
      image: "images/image-2.png",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      label: "-30%",
    },
    {
      image: "images/image-1.png",
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: "images/image-3.png",
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      label: "-50%",
    },
    {
      image: "images/image-4.png",
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      label: "New",
    },
    // Add other products here
  ];

  return (
    <section className="py-12 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="border-orange-400 border-2 w-52 text-orange-400 py-2 px-6  hover:bg-yellow-600">
          Show More
        </button>
      </div>
    </section>
  );
};

export default Product
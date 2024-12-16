
import Head from "next/head";
import Image from "next/image";



import Products from "./component/product";
import Footer from "./component/Footer";
import Hero from "./component/Hero"
import Navbar from "./component/Navbar";
import RoomInspiration from "./component/Roominspiration";
import GallerySection from "./component/ProductGrid";
import ShopPage from "./shop/page";
import ProductCard from "./component/ProductCard";
import ProductGrid from "./shop/productcard";


export default function Home() {
  return (
   <div>
 <Navbar />
<Hero/>


<Products />
<RoomInspiration/>
<GallerySection/>
<Footer />
<ShopPage/>
<Products/>
<ProductGrid/>

   </div>
  );
}

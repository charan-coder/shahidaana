"use client";


import { useEffect, useState } from "react";
import NextImage from "next/image";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

type SliderImage = {
  src: string;
  alt: string;
};

function ProductImageSlider({ images, interval = 4000 }: { images: SliderImage[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return undefined;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  if (!images.length) return null;

  const current = images[index] ?? images[0];

  return (
    <div className="relative w-full h-full">
   <img
  src={current.src}
  alt={current.alt}
  className="absolute inset-0 w-full h-full object-cover rounded-3xl transition duration-700 ease-in-out"
/>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050A1A]/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? "bg-[#D4AF37]" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const categories: Category[] = [
    { id: 1, name: "Almonds", image: "/almonds.jfif" },
    { id: 2, name: "Cashews", image: "/cashew.jfif" },
    { id: 3, name: "Raisins", image: "/raisin.jfif" },
    { id: 4, name: "Pistachios", image: "/pistachio.jfif" },
  ];

  const products: Product[] = [
    { id: 1, name: "California Almonds Premium", price: "₹599", image: "/california.jfif" },
    { id: 2, name: "Cashew Nuts Deluxe", price: "₹799", image: "/cashew-01.jfif" },
    { id: 3, name: "Green Pistachios", price: "₹899", image: "/greenpistachio.jfif" },
    { id: 4, name: "Black Raisins Premium", price: "₹399", image: "/raisin.jfif" },
    { id: 5, name: "Premium Walnuts", price: "₹649", image: "/walnuts.jfif" },
    { id: 6, name: "Trail Mix Blend", price: "₹499", image: "/berry.jfif" },
    { id: 7, name: "Healthy Seeds Mix", price: "₹349", image: "/seed.jfif" },
    { id: 8, name: "Gift Pack Assorted", price: "₹1299", image: "/gift.jfif" },
  ];
  
 
  

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#050A1A] via-[#0A1F3C] to-[#050A1A]">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A1F3C]/80 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
           
          <img
  src="/logo.jfif"
  alt="Shahidaana Logo"
  className="w-[60px] h-[60px] drop-shadow-lg"
/>
            <h1 className="text-2xl font-bold text-white tracking-wider hidden sm:block">SHAHIDAANA</h1>
          </div>
          <nav className="hidden md:flex items-center gap-12">
            <a href="#" className="text-white text-sm font-medium hover:text-[#D4AF37] transition duration-300">Categories</a>
            <a href="#" className="text-white text-sm font-medium hover:text-[#D4AF37] transition duration-300">Products</a>
            <a href="#" className="text-white text-sm font-medium hover:text-[#D4AF37] transition duration-300">Contact</a>
          </nav>
          <button className="hidden md:block bg-gradient-to-r from-[#D4AF37] to-[#F5D98C] text-[#0A1F3C] px-8 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#D4AF37]/50 transition duration-300 transform hover:scale-105">Shop Now</button>
          <button className="md:hidden text-[#D4AF37]">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-0 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="text-white">Healthy.</span>
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D98C] bg-clip-text text-transparent">Premium.</span>
              <br />
              <span className="text-white">Handpicked.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed">
              Discover our finest hand-curated collection of premium dry fruits sourced from the world's best farms. Every piece is selected for exceptional quality and authentic taste.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#F5D98C] text-[#0A1F3C] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition duration-300 transform hover:scale-105">Shop Now</button>
              <button className="border-2 border-[#D4AF37] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#D4AF37]/10 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition duration-300">Explore Collection</button>
            </div>
          </div>

          {/* Right Hero Image / Slider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#D4AF37]/10 rounded-3xl blur-3xl"></div>
            <div className="relative w-full h-96 md:h-[450px] bg-gradient-to-br from-[#1A3A52] to-[#0A1F3C] rounded-3xl p-1 shadow-2xl shadow-[#D4AF37]/30">
              <div className="w-full h-full bg-gradient-to-br from-[#050A1A] to-[#0A1F3C] rounded-3xl overflow-hidden flex items-center justify-center relative">
                <ProductImageSlider
                  images={[
                    { src: "/date.jfif", alt: "Mixed Dry Fruits Bowl - Premium" },
                    { src: "/almonds.jfif", alt: "Premium almonds" },
                    { src: "/gift.jfif", alt: "Deluxe Gifts" },
                  ]}
                />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-xl px-6 py-4 shadow-2xl">
                  <p className="text-[#0A1F3C] font-bold text-center">
                    <span className="text-sm">Mixed Dry Fruits Bowl</span>
                    <br />
                    <span className="text-xs text-gray-600">1 kg · <span className="text-[#D4AF37] font-bold">₹1499</span></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 md:px-0 bg-gradient-to-b from-[#0A1F3C] via-[#050A1A] to-[#050A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Premium <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D98C] bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore our carefully curated selection of premium dry fruits</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition duration-500 cursor-pointer transform hover:-translate-y-3">
                <div className="relative h-72 overflow-hidden">
                  <NextImage src={category.image} alt={category.name} fill className="object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C] via-transparent to-transparent"></div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition duration-300">{category.name}</h3>
                  <p className="text-gray-400 text-sm mt-2">Premium Selection</p>
                  <button className="mt-4 text-[#D4AF37] font-semibold text-sm hover:text-[#F5D98C] transition duration-300 flex items-center gap-2">Explore →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 md:px-0 bg-gradient-to-b from-[#050A1A] via-[#0A1F3C] to-[#050A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Featured <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D98C] bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Hand-picked premium dry fruits for the finest taste and health benefits</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <NextImage src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#F5D98C] text-[#0A1F3C] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Premium</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0A1F3C] mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition duration-300">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">Premium • 500g Pack</p>
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-xs text-gray-500">(127)</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-3xl font-bold text-[#D4AF37]">{product.price}</p>
                      <p className="text-xs text-gray-500 mt-1">Per pack</p>
                    </div>
                    <button className="bg-gradient-to-r from-[#0A1F3C] to-[#1A3A52] text-white p-3 rounded-full hover:from-[#D4AF37] hover:to-[#F5D98C] hover:text-[#0A1F3C] transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"><span className="text-xl font-bold">+</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D4AF37]/20 bg-[#050A1A] text-gray-400 py-16 px-6 md:px-8 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-[#D4AF37] font-bold mb-4 text-lg">Shahidaana</h4>
            <p className="text-sm leading-relaxed">Premium dry fruits hand-curated for your wellness and taste.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Returns</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Follow Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold text-[#D4AF37]">Contact:</span> <a href="tel:+917496074907" className="hover:text-[#D4AF37] transition duration-300">+91 7496074907</a>
              </li>
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Instagram</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Facebook</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition duration-300">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#D4AF37]/20 pt-8 text-center text-sm">
          <p>&copy; 2025 Shahidaana. All rights reserved. | Premium Dry Fruits.</p>
        </div>
      </footer>
    </div>
  );
}

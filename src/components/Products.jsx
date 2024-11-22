import React from "react";
import ProductCard from "./ProductCard"; // Import the ProductCard component

const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Categories Section */}
      <section className="py-10 px-6 lg:px-16">
        <h2 className="text-lg font-bold text-red-500 mb-2">Categories</h2>
        <h3 className="text-2xl font-bold mb-6">Browse By Category</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-gray-100">
            <span className="text-2xl">📱</span>
            <p className="mt-2 text-sm font-medium">Phones</p>
          </div>
          <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-gray-100">
            <span className="text-2xl">💻</span>
            <p className="mt-2 text-sm font-medium">Computers</p>
          </div>
          <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-gray-100">
            <span className="text-2xl">⌚</span>
            <p className="mt-2 text-sm font-medium">SmartWatch</p>
          </div>
          <div className="flex flex-col items-center justify-center border rounded-lg p-4 bg-red-500 text-white">
            <span className="text-2xl">📷</span>
            <p className="mt-2 text-sm font-medium">Camera</p>
          </div>
          <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-gray-100">
            <span className="text-2xl">🎧</span>
            <p className="mt-2 text-sm font-medium">HeadPhones</p>
          </div>
          <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-gray-100">
            <span className="text-2xl">🎮</span>
            <p className="mt-2 text-sm font-medium">Gaming</p>
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="py-10 px-6 lg:px-16">
        <h2 className="text-lg font-bold text-red-500 mb-2">Product</h2>
        <h3 className="text-2xl font-bold mb-6">Product Listing</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <ProductCard
            image="src/assets/chair.jpeg"
            discount={25}
            name="HANDMADE CHAIR"
            price="10,000"
            originalPrice="14,000"
            rating={4.5}
            reviews={99}
          />
          {/* Product 2 */}
          <ProductCard
            image="src/assets/chair.jpeg"
            discount={40}
            name="SAFFRON"
            price="11,000"
            originalPrice="13,000"
            rating={4.4}
            reviews={88}
          />
          {/* Product 3 */}
          <ProductCard
            image="src/assets/chair.jpeg"
            discount={35}
            name="ASSAMESE TEA"
            price="3,440"
            originalPrice="5,000"
            rating={4.2}
            reviews={75}
          />
          {/* Product 4 */}
          <ProductCard
            image="src/assets/chair.jpeg"
            discount={30}
            name="KASHMIRI SHAWL"
            price="5,000"
            originalPrice="5,500"
            rating={4.6}
            reviews={89}
          />
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <ProductCard
            image="src/assets/chair.jpeg"
            discount={25}
            name="HANDMADE CHAIR"
            price="10,000"
            originalPrice="14,000"
            rating={4.5}
            reviews={99}
          />
          {/* Product 2 */}
          <ProductCard
            image="src/assets/chair.jpeg"
            discount={40}
            name="SAFFRON"
            price="11,000"
            originalPrice="13,000"
            rating={4.4}
            reviews={88}
          />
          {/* Product 3 */}
          <ProductCard
            image="src/assets/chair.jpeg"
            discount={35}
            name="ASSAMESE TEA"
            price="3,440"
            originalPrice="5,000"
            rating={4.2}
            reviews={75}
          />
          {/* Product 4 */}
          <ProductCard
            image="src/assets/chair.jpeg"
            discount={30}
            name="KASHMIRI SHAWL"
            price="5,000"
            originalPrice="5,500"
            rating={4.6}
            reviews={89}
          />
        </div>
      </section>
    </div>
  );
};

export default Products;

import React from "react";

const ProductCard = ({ image, discount, name, price, originalPrice, rating, reviews }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="rounded-t-lg object-cover h-60 w-full"
        />
        {/* Discount Tag */}
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
            {discount}%
          </div>
        )}
        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A3.5 3.5 0 018.5 15h7a3.5 3.5 0 013.379 2.804M15 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-9 0a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
              />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.447-2.724A2 2 0 0121 9.618v4.764a2 2 0 01-.553 1.724L15 18m-6 0H3a2 2 0 01-2-2V9.618a2 2 0 01.553-1.724L9 4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-red-500 font-bold text-lg">₹{price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through">₹{originalPrice}</span>
          )}
        </div>
        {/* Ratings */}
        <div className="flex items-center mt-2 space-x-1">
          <div className="flex text-yellow-500">
            {[...Array(Math.floor(rating))].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.978a1 1 0 00.95.69h4.09c.969 0 1.371 1.24.588 1.81l-3.3 2.4 1.286 3.978c.3.921-.755 1.688-1.538 1.156L10 13.011l-3.3 2.4c-.783.532-1.838-.235-1.538-1.156l1.286-3.978-3.3-2.4c-.783-.57-.381-1.81.588-1.81h4.09a1 1 0 00.95-.69L9.05 2.927z" />
              </svg>
            ))}
            {/* Half Star */}
            {rating % 1 !== 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.978a1 1 0 00.95.69h4.09c.969 0 1.371 1.24.588 1.81l-3.3 2.4 1.286 3.978c.3.921-.755 1.688-1.538 1.156L10 13.011l-3.3 2.4c-.783.532-1.838-.235-1.538-1.156l1.286-3.978-3.3-2.4c-.783-.57-.381-1.81.588-1.81h4.09a1 1 0 00.95-.69L9.05 2.927z" />
              </svg>
            )}
          </div>
          <span className="text-gray-500 text-sm">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

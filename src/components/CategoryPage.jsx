import React from "react";
import worldMap from "../assets/world-map.png";
const CategoryPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Category Selection */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white">
        <h1 className="text-3xl font-bold mb-6">CATEGORY</h1>
        <form className="w-3/4 max-w-md space-y-4">
          {/* Category List */}
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-black"
                />
                <span className="text-gray-700 text-lg">CATEGORY - {index + 1}</span>
              </label>
            ))}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Right Side - World Map */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${worldMap})`,
        }}
      ></div>
    </div>
  );
};

export default CategoryPage;

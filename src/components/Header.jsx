import React from "react";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#">DHWANI</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-700">
            HOME
          </a>
          <a href="#" className="hover:text-gray-700">
            CATEGORY
          </a>
          <a href="#" className="hover:text-gray-700">
            WHOUSE
          </a>
          <a href="#" className="hover:text-gray-700">
            INVOICES
          </a>
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="what you are looking for"
              className="px-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="absolute right-3 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </button>
          </div>

          {/* Analytics Icon */}
          <a href="#" className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 20l-5.447-2.724A2 2 0 013 15.382V8.618a2 2 0 01.553-1.724L9 4m6 0h3a2 2 0 012 2v14a2 2 0 01-2 2h-3M6 10h.01M6 18h.01M6 14h.01"
              />
            </svg>
          </a>

          {/* User Icon */}
          <a href="#" className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p className="mb-4">Subscribe</p>
          <p className="text-gray-400 mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-black focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 hover:bg-gray-300">
              &gt;
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <p className="text-gray-400 mb-2">1100788, NSIT, DELHI</p>
          <p className="text-gray-400 mb-2">exclusive@gmail.com</p>
          <p className="text-gray-400">+88015-88888-9XXX</p>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Download App</h2>
          <p className="text-gray-400 mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-4 mb-4">
            <img
              src="path-to/qr-code.png"
              alt="QR Code"
              className="w-16 h-16"
            />
            <div className="flex flex-col space-y-2">
              <img
                src="path-to/google-play.png"
                alt="Google Play"
                className="w-32"
              />
              <img
                src="path-to/app-store.png"
                alt="App Store"
                className="w-32"
              />
            </div>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400">
        &copy; Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

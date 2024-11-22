import React from "react";
import worldMap from "../assets/world-map.png";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-gray-500 mb-6">Enter your Credentials to access your account</p>
        <form className="w-3/4 max-w-md space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Password Input */}
          <div>
            <label className="flex justify-between text-gray-700 text-sm font-bold mb-2">
              Password
              <a href="#" className="text-blue-500 text-sm">
                Forgot password?
              </a>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="form-checkbox" />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember for 30 days
            </label>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            Login
          </button>
        </form>
        {/* Sign in options */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 mb-4">Or</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
              <img
                src="https://img.icons8.com/color/24/google-logo.png"
                alt="Google"
                className="mr-2"
              />
              Sign in with Google
            </button>
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
              <img
                src="https://img.icons8.com/ios-filled/24/000000/mac-os.png"
                alt="Apple"
                className="mr-2"
              />
              Sign in with Apple
            </button>
          </div>
          <p className="mt-4">
            Dont have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${worldMap})`,
        }}
      >
        
      </div>
    </div>
  );
};

export default LoginPage;

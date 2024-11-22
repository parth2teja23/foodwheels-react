import React from "react";
import worldMap from "../assets/world-map.png";
const Documents = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Document List */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white px-6">
        <div className="w-full max-w-lg">
          <h1 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-blue-500 text-2xl mr-2">📄</span>
            IMPORTANT DOCUMENTS
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-600 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Upload Document
          </button>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-2">File Name</th>
                  <th className="px-4 py-2">File Size</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">DOCUMENTS 1</td>
                    <td className="px-4 py-2">28.50 KB</td>
                    <td className="px-4 py-2">16/11/2022</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12h.01M12 15v.01M9 12h.01m3-2h.01M15 9h.01M12 7v.01M9 9h.01m2 0h-.01m3-2h-.01m-1 0v0"
                          />
                        </svg>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="bg-white text-black border border-black px-4 py-2 rounded-lg mt-6 hover:bg-gray-100">
            RETURN
          </button>
        </div>
      </div>

      {/* Right Side - World Map */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:  `url(${worldMap})`,
        }}
      ></div>
    </div>
  );
};

export default Documents;

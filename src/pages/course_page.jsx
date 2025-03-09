import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Code, Layers, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import CP31 from "./cp31_page";
import A2oJ from "./A2oj_page";

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(<CP31 />);
  const navigate = useNavigate();

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex === 0) {
      setPage(<CP31 />);
    } else {
      setPage(<A2oJ />);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl p-8 mb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-3 rounded-full shadow-md">
              <Code className="h-8 w-8 text-indigo-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Competitive Programming Resources
            </h1>
          </div>
          <p className="text-blue-100 mt-3 text-lg max-w-2xl">
            Master algorithmic challenges with our curated collection of practice problems
          </p>
          <div className="mt-6 flex space-x-4">
            <a 
              href="#resources" 
              className="px-4 py-2 bg-white text-indigo-700 rounded-md shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium flex items-center"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Learning Resources
            </a>
            <a 
              href="#contests" 
              className="px-4 py-2 bg-indigo-900 bg-opacity-30 text-white rounded-md hover:bg-opacity-40 transition-all duration-200 text-sm font-medium flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Upcoming Contests
            </a>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => handleTabChange(0)}
            className={`flex items-center px-6 py-4 rounded-xl transition-all duration-300 ${
              activeTab === 0
                ? "bg-indigo-600 text-white shadow-lg transform -translate-y-1"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-indigo-200"
            }`}
          >
            <div className={`p-2 rounded-lg mr-3 ${activeTab === 0 ? "bg-indigo-500" : "bg-indigo-50"}`}>
              <Code className={`h-5 w-5 ${activeTab === 0 ? "text-white" : "text-indigo-600"}`} />
            </div>
            <div className="text-left">
              <div className="font-bold">CP31 Sheet</div>
              <div className={`text-xs ${activeTab === 0 ? "text-indigo-100" : "text-gray-500"}`}>Structured problem set</div>
            </div>
            {activeTab === 0 && <ArrowRight className="h-4 w-4 ml-4 text-white animate-pulse" />}
          </button>
          
          <button
            onClick={() => handleTabChange(1)}
            className={`flex items-center px-6 py-4 rounded-xl transition-all duration-300 ${
              activeTab === 1
                ? "bg-indigo-600 text-white shadow-lg transform -translate-y-1"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-indigo-200"
            }`}
          >
            <div className={`p-2 rounded-lg mr-3 ${activeTab === 1 ? "bg-indigo-500" : "bg-indigo-50"}`}>
              <Layers className={`h-5 w-5 ${activeTab === 1 ? "text-white" : "text-indigo-600"}`} />
            </div>
            <div className="text-left">
              <div className="font-bold">A2OJ Ladder</div>
              <div className={`text-xs ${activeTab === 1 ? "text-indigo-100" : "text-gray-500"}`}>Difficulty-based problems</div>
            </div>
            {activeTab === 1 && <ArrowRight className="h-4 w-4 ml-4 text-white animate-pulse" />}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-50">
          <div className="overflow-hidden">
            <Outlet />
            {page}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-all duration-200">
          <div className="text-4xl font-bold text-blue-600">1800+</div>
          <div className="text-gray-600 mt-2">Curated Problems</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500 hover:shadow-lg transition-all duration-200">
          <div className="text-4xl font-bold text-indigo-600">50+</div>
          <div className="text-gray-600 mt-2">Algorithm Types</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-all duration-200">
          <div className="text-4xl font-bold text-purple-600">16+</div>
          <div className="text-gray-600 mt-2">Difficulty Levels</div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-2xl mx-auto text-center mt-16 px-4">
        <div className="text-lg font-medium text-indigo-600 mb-2">Ready to improve your skills?</div>
        <p className="text-gray-600">Enhance your problem-solving abilities through structured practice and consistent effort</p>
        
      </div>
    </div>
  );
};

export default CoursePage;
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Code, Layers, Calendar, ExternalLink, BookOpen } from "lucide-react";
import Cp_Sheets from "./cp_sheets";
import UpcomingContestsPage from "./upcoming_contest";

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  // Import the ArrowRight icon that was missing
  const ArrowRight = ({ className }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Sticky Hero Section */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl p-6">
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
            <button 
              onClick={() => handleTabChange(0)} 
              className="px-4 py-2 bg-white text-indigo-700 rounded-md shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium flex items-center"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Learning Resources
            </button>
            <button 
              onClick={() => handleTabChange(1)} 
              className="px-4 py-2 bg-indigo-900 bg-opacity-30 text-white rounded-md hover:bg-opacity-40 transition-all duration-200 text-sm font-medium flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Upcoming Contests
            </button>
          </div>
        </div>
      </div>


      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 mt-8 pb-12">
        {activeTab === 0 ? (
          <Cp_Sheets />
        ) : (
          <UpcomingContestsPage />
        )}
      </div>


      {/* Footer Info */}
      <div className="max-w-2xl mx-auto text-center mt-16 px-4 pb-8">
        <div className="text-lg font-medium text-indigo-600 mb-2">Ready to improve your skills?</div>
        <p className="text-gray-600">Enhance your problem-solving abilities through structured practice and consistent effort</p>
      </div>
    </div>
  );
};

export default CoursePage;
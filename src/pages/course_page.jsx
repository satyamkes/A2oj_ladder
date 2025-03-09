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
    {/* Header Content with enhanced visual design */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Left side: Logo and title */}
      <div className="flex items-center">
        <div className="bg-white p-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Code className="h-8 w-8 text-indigo-700" />
        </div>
        <div className="ml-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            <span className="text-blue-200">Competitive</span> Programming
          </h1>
          <p className="text-blue-100 mt-2 text-lg max-w-2xl">
            Master algorithmic challenges with our curated collection
          </p>
        </div>
      </div>
      
      {/* Right side: Stats counter */}
      <div className="hidden md:flex space-x-6 mt-4 md:mt-0">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">1800+</div>
          <p className="text-blue-200 text-sm">Problems</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">50+</div>
          <p className="text-blue-200 text-sm">Algorithms</p>
        </div>
      </div>
    </div>
    
    {/* Navigation buttons with enhanced styling */}
    <div className="mt-6 flex flex-wrap gap-4">
      <button
        onClick={() => handleTabChange(0)}
        className="px-5 py-2.5 bg-white text-indigo-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm font-medium flex items-center border-2 border-white hover:bg-blue-50"
      >
        <BookOpen className="h-4 w-4 mr-2" />
        CP Sheets
      </button>
      <button
        onClick={() => handleTabChange(1)}
        className="px-5 py-2.5 bg-indigo-900 bg-opacity-30 text-white rounded-lg hover:bg-opacity-40 transition-all duration-200 text-sm font-medium flex items-center border-2 border-blue-300 border-opacity-30 hover:border-opacity-50 shadow-lg"
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Upcoming Contests
      </button>
      
      {/* Added a third button for visual balance */}
      <button
        className="px-5 py-2.5 bg-blue-500 bg-opacity-30 text-white rounded-lg hover:bg-opacity-40 transition-all duration-200 text-sm font-medium flex items-center border-2 border-blue-300 border-opacity-30 hover:border-opacity-50 shadow-lg"
      >
        <Layers className="h-4 w-4 mr-2" />
        Learning Paths
      </button>
    </div>
    
    {/* Decorative element */}
    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 opacity-20 hidden md:block">
      <div className="w-full h-full rounded-full bg-white blur-xl"></div>
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
import React, { useState } from "react";
import { Code, Layers, BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import CP31 from "./cp31_page";
import A2oJ from "./A2oj_page";

const Cp_Sheets = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(<CP31 />);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex === 0) {
      setPage(<CP31 />);
    } else {
      setPage(<A2oJ />);
    }
  };

  // Content card component to match the style of ContestCard from UpcomingContests
  const SheetCard = ({ title, icon, description, isActive, onClick }) => (
    <div 
      className={`bg-white rounded-xl shadow-md border ${isActive ? 'border-indigo-200' : 'border-indigo-50'} overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer h-full`}
      onClick={onClick}
    >
      <div className="h-full flex flex-col">
        {/* Top: Icon and indicator */}
        <div className={`p-4 ${isActive ? 'bg-indigo-100' : 'bg-indigo-50'} flex justify-center items-center`}>
          <div className="text-center">
            <div className={`p-3 rounded-full ${isActive ? 'bg-indigo-600' : 'bg-white'} inline-flex mb-2`}>
              {React.cloneElement(icon, { 
                className: `h-6 w-6 ${isActive ? 'text-white' : 'text-indigo-600'}`
              })}
            </div>
            <p className={`font-bold text-lg ${isActive ? 'text-indigo-800' : 'text-indigo-600'}`}>
              {title}
            </p>
            {isActive && (
              <div className="mt-2 bg-indigo-200 text-indigo-800 py-1 px-3 rounded-full inline-block text-sm">
                Active
              </div>
            )}
          </div>
        </div>

        {/* Bottom: Sheet details */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <p className="text-gray-600 text-sm">{description}</p>
          </div>

          <div className="mt-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className={`w-full ${
                isActive 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-white hover:bg-indigo-50 text-indigo-600 border border-indigo-200'
              } py-2 px-4 rounded-md text-sm transition-colors duration-200`}
            >
              {isActive ? 'Currently Viewing' : 'View Sheet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">
        Competitive Programming Resources
      </h2>

      {/* Sheet Selection Section - Now Horizontal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <SheetCard 
          title="CP31 Sheet" 
          icon={<Code />}
          description="A structured problem set covering key competitive programming concepts. Perfect for systematic practice."
          isActive={activeTab === 0}
          onClick={() => handleTabChange(0)}
        />
        
        <SheetCard 
          title="A2OJ Ladder" 
          icon={<Layers />}
          description="Difficulty-based problem sets organized as a ladder. Great for progressive skill improvement."
          isActive={activeTab === 1}
          onClick={() => handleTabChange(1)}
        />
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-md border border-indigo-50 p-6 mt-6">
        {page}
      </div>

      {/* Stats Section */}
      <div className="mt-12">
        <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-50">
          <h2 className="text-xl font-bold text-indigo-800 mb-4">
            Resource Statistics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">1800+</div>
              <p className="text-gray-600">Curated Problems</p>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
              <p className="text-gray-600">Algorithm Types</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-1">16+</div>
              <p className="text-gray-600">Difficulty Levels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-12">
        <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-50">
          <h2 className="text-xl font-bold text-indigo-800 mb-4">
            Practice Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Beginner
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Focus on basic algorithms</li>
                <li>• Solve problems regularly</li>
                <li>• Learn time complexity</li>
                <li>• Master common patterns</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Intermediate
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Implement advanced algorithms</li>
                <li>• Analyze your solutions</li>
                <li>• Participate in contests</li>
                <li>• Review others' code</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Advanced
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Create algorithm templates</li>
                <li>• Solve diverse problems</li>
                <li>• Optimize your solutions</li>
                <li>• Teach others to solidify knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Enhance your problem-solving abilities through structured practice and consistent effort
        </p>
      </div>
    </div>
  );
};

export default Cp_Sheets;
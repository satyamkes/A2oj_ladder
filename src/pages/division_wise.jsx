import React, { useState, useEffect } from "react";
import { CheckCircle, Award, ArrowLeft, Code, BarChart } from "lucide-react";
import { useLocation, Link } from 'react-router-dom';

const Division_Ladder = () => {
  const [solvedProblems, setSolvedProblems] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [problemsView, setProblemsView] = useState([]);
  const location = useLocation();
  const receivedData = location.state?.data || [];
  
  useEffect(() => {
    setProblemsView(receivedData);
  }, [receivedData]);

  const handle = "sarafarajnasardi";
  useEffect(() => {
    loadSolvedProblems(handle);
  }, []);

  const loadSolvedProblems = async (handle) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.status?handle=${handle.trim()}`
      );
      const data = await response.json();

      if (data.status === "OK") {
        const solvedSet = new Set();
        data.result.forEach((submission) => {
          if (submission.verdict === "OK") {
            solvedSet.add(
              `${submission.problem.contestId}${submission.problem.index}`
            );
          }
        });
        setSolvedProblems(solvedSet);
      } else {
        alert("Could not find user. Please check the handle and try again.");
      }
    } catch (error) {
      alert("Failed to fetch solved problems. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getRatingColor = (rating) => {
    if (rating < 1200) return "text-gray-700 bg-gray-50 border-gray-200";
    if (rating < 1400) return "text-green-700 bg-green-50 border-green-200";
    if (rating < 1600) return "text-cyan-700 bg-cyan-50 border-cyan-200";
    if (rating < 1900) return "text-blue-700 bg-blue-50 border-blue-200";
    if (rating < 2100) return "text-purple-700 bg-purple-50 border-purple-200";
    if (rating < 2400) return "text-orange-700 bg-orange-50 border-orange-200";
    return "text-red-700 bg-red-50 border-red-200";
  };

  // Calculate progress
  const totalProblems = problemsView.length;
  const solvedCount = problemsView.filter(problem => 
    solvedProblems.has(`${problem[2]}${problem[3]}`)
  ).length;
  const progressPercentage = totalProblems > 0 ? (solvedCount / totalProblems) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6 border border-gray-200">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Ladder Selection
          </Link>
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Code className="h-12 w-12 text-black" />
            </div>
            <h1 className="text-4xl font-bold text-black mb-3 tracking-tight">
              A2OJ Ladder
            </h1>
            <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
              Track your progress through programming problems
            </p>
          </div>

          {/* User info and progress */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-lg font-medium">User: {handle}</h2>
                  <p className="text-gray-600">
                    Solved {solvedCount} out of {totalProblems} problems
                  </p>
                </div>
              </div>
              
              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm flex items-center gap-2">
                <BarChart className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{Math.round(progressPercentage)}% Complete</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div 
                className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Problems list */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Problems List
          </h2>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading problems...</p>
            </div>
          ) : (
            <div className="space-y-3">
              {problemsView.map((problem) => {
                const problemId = `${problem[2]}${problem[3]}`;
                const isSolved = solvedProblems.has(problemId);
  
                return (
                  <div
                    key={problemId}
                    className={`flex items-center p-4 rounded-lg border ${
                      isSolved ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
                    } hover:shadow-md transition-all group`}
                  >
                    <div
                      className={`text-sm font-medium px-3 py-1 rounded-full border ${getRatingColor(
                        problem[0]
                      )}`}
                    >
                      {problem[0]}
                    </div>
                    <a
                      href={`https://codeforces.com/problemset/problem/${problem[2]}/${problem[3]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow ml-4 font-medium text-black group-hover:text-blue-600 transition-colors"
                    >
                      {problem[1]}
                      <span className="ml-2 text-gray-500 text-sm">
                        ({problem[2]}{problem[3]})
                      </span>
                    </a>
                    <div className="flex items-center gap-3 ml-4">
                      {isSolved ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm border border-emerald-200">
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-medium">Solved</span>
                        </div>
                      ) : (
                        <div className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-200">
                          <span className="font-medium">Unsolved</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Division_Ladder;
import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useLocation } from 'react-router-dom';
const Division_Ladder = () => {
  const [solvedProblems, setSolvedProblems] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [problemsView, setProblemsView] = useState([]);
  const location = useLocation();
  const receivedData = location.state?.data || [];
 console.log(receivedData);
  useEffect(() => {
    setProblemsView(receivedData);
  }, []);

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
    return "text-green-700 bg-green-50 border-green-200";
  };

  return (
      <>
        <div className="body problems bg-gray-50">
          <div className="box cp-box mx-auto max-w-4xl">
          <div className="text-center mb-12 py-8 border-b-2 border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              A2OJ-Ladder
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light">
              Track your progress through programming problems
            </p>
          </div>
  
            <div className="space-y-3">
              {problemsView.map((problem) => {
                const problemId = `${problem[2]}${problem[3]}`;
                const isSolved = solvedProblems.has(problemId);
  
                return (
                  <div
                    key={problemId}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm 
                          border border-gray-200 hover:shadow-md transition-all group"
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
                      className="flex-grow ml-4 font-medium text-black group-hover:text-gray-600 transition-colors"
                    >
                      {problem[1]}
                      <span className="ml-2 text-gray-500 text-sm">
                        ({problem[2]}
                        {problem[3]})
                      </span>
                    </a>
                    <div className="flex items-center gap-3 ml-4">
                      {isSolved && (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm border border-emerald-200">
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-medium">Solved</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Division_Ladder;
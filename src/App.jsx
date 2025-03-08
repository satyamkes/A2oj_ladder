import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodeforceRatingLadder from "./pages/home_page";
import Rating_Ladder from "./pages/rating_wise";
import Division_Ladder from "./pages/division_wise";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CodeforceRatingLadder />} />
        <Route path="/Rating_ladder" element={<Rating_Ladder/>} />
        <Route path="/Division_ladder" element={<Division_Ladder/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

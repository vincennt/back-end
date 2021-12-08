import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

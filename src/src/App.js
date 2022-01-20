import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";


import Box01 from './Lessons/F_Layout/01)Box/01';

function Home() {
  return (
    <>
      <h1>F) Layout:</h1>
      <h2>F-1) Boxes:</h2>
      <nav>
        <Link to="/f-1-1">F-1-1: MainBox</Link>
      </nav>
    </>
  );
}



function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/f-1-1" element={<Box01 />} />
  </Routes>
  );
}

export default App;

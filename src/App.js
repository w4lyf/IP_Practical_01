
import React from "react"
import INTEREST from './Interest/interest';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/interest" element={<INTEREST />} />
      </Routes>
    </Router>
  );
}

export default App;

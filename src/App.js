import React from 'react';
import LandingPage from './pages/LandingPage';
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <LandingPage />
    </div>
    </Router>
  );
}

export default App;

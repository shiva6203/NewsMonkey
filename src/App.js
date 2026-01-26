import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;

  // ✅ USE DIRECT KEY (required for GitHub Pages)
  const apiKey = "87b33fc4d9eaf8052a0d166053e9150f";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router basename="/NewsMonkey">
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
        />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          />

          <Route path="/about" element={<About />} />

          <Route
            path="/business"
            element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" />}
          />

          <Route
            path="/entertainment"
            element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" />}
          />

          <Route
            path="/general"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general2" pageSize={pageSize} category="general" />}
          />

          <Route
            path="/health"
            element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" />}
          />

          <Route
            path="/science"
            element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" />}
          />

          <Route
            path="/sports"
            element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" />}
          />

          <Route
            path="/technology"
            element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" />}
          />

          {/* fallback */}
          <Route
            path="*"
            element={<News setProgress={setProgress} apiKey={apiKey} key="fallback" pageSize={pageSize} category="general" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

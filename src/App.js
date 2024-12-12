import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import Welcome from './pages/Welcome';
import Resume1 from './pages/Resume1';
import Resume2 from './pages/Resume2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route index element={<Welcome />} />
          <Route path="resume1" element={<Resume1 />} />
          <Route path="resume2" element={<Resume2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import resume1 from '../images/resume1_screenshot.png';
import resume2 from '../images/resume2_screenshot.png';

function IndexPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Resume Viewer</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Recent Projects</Link> {/* Add the link to projects */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Left Panel */}
          <div className="col-md-3 bg-light py-4 shadow-sm left-panel">
            <h4 className="text-center mb-4">Select a Resume</h4>

            {/* Card for Resume 1 */}
            <div className="card mb-3">
              <Link to="/resume1">
                <img src={resume1} className="card-img-top" alt="Resume 1" />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center">Resume 1</h5>
                <p className="card-text text-center">Preview of Resume 1</p>
              </div>
            </div>

            {/* Card for Resume 2 */}
            <div className="card mb-3">
              <Link to="/resume2">
                <img src={resume2} className="card-img-top" alt="Resume 2" />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center">Resume 2</h5>
                <p className="card-text text-center">Preview of Resume 2</p>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-md-9 py-4 right-panel">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../images/profile_pic.jpeg';

const Resume2 = () => {
    return (
        <div className="container bg-light rounded my-5 p-4">
            {/* Card Component for Profile Header */}
            <div className="card mb-4 text-center pt-2">
                <img
                    src={profilePic}
                    alt="Profile Picture"
                    className="card-img-top rounded-circle mx-auto d-block"
                    style={{ width: '150px' }}
                />
                <div className="card-body">
                    <h3 className="card-title">Awais Nazir</h3>
                    <p className="card-text fw-bold">Software Developer</p>
                    <a
                        href="/awais_nazir_cv.pdf"
                        download="awais_nazir_resume"
                        target="_blank"
                        className="btn btn-outline-primary"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            {/* Row Component for Layout */}
            <div className="row">
                {/* Column for About Me */}
                <div className="col-md-7">
                    <div className="accordion" id="aboutAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    About Me
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#aboutAccordion"
                            >
                                <div className="accordion-body">
                                    I am a 5th-semester Software Engineering student at NUST with a deep passion for artificial intelligence. Currently, I am engaged in research on causal inference in computer vision, exploring the integration of causality to improve the effectiveness of AI models.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column for Contact Info */}
                <div className="col-md-5">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Email:</strong> <a href="mailto:owaisnazir2228@gmail.com">owaisnazir2228@gmail.com</a>
                        </li>
                        <li className="list-group-item">
                            <strong>GitHub:</strong> <a href="https://github.com/awaisnazir08" target="_blank" rel="noopener noreferrer">github.com/awaisnazir08</a>
                        </li>
                        <li className="list-group-item">
                            <strong>Phone:</strong> +92 3219834547
                        </li>
                    </ul>
                </div>
            </div>

            {/* Tabs Component for Skills and Languages */}
            <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
                <li className="nav-item">
                    <button
                        className="nav-link active"
                        id="skills-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#skills"
                        type="button"
                        role="tab"
                        aria-controls="skills"
                        aria-selected="true"
                    >
                        Skills
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className="nav-link"
                        id="languages-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#languages"
                        type="button"
                        role="tab"
                        aria-controls="languages"
                        aria-selected="false"
                    >
                        Languages
                    </button>
                </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content" id="myTabContent">
                {/* Skills Tab */}
                <div
                    className="tab-pane fade show active"
                    id="skills"
                    role="tabpanel"
                    aria-labelledby="skills-tab"
                >
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">OpenCV</li>
                        <li className="list-group-item">PyTorch</li>
                    </ul>
                </div>

                {/* Languages Tab */}
                <div
                    className="tab-pane fade"
                    id="languages"
                    role="tabpanel"
                    aria-labelledby="languages-tab"
                >
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">English</li>
                        <li className="list-group-item">Urdu</li>
                        <li className="list-group-item">German</li>
                    </ul>
                </div>
            </div>

            {/* Progress Component for Language Proficiency */}
            <div className="mt-4">
                <h5>Language Proficiency</h5>
                <div className="progress mb-2">
                    <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: '100%' }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        English - Fluent
                    </div>
                </div>
                <div className="progress mb-2">
                    <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: '100%' }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        Urdu - Fluent
                    </div>
                </div>
                <div className="progress">
                    <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: '40%' }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        German - Intermediate
                    </div>
                </div>
            </div>

            {/* Badge Component for Certifications */}
            <div className="my-4">
                <h5>Certifications</h5>
                <span className="badge text-bg-primary">Machine Learning</span>
                <span className="badge text-bg-secondary">Data Science</span>
                <span className="badge text-bg-success">Web Development</span>
            </div>
        </div>
    );
};

export default Resume2;
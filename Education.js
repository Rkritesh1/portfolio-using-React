import React from "react";
import './Education.css';

const Education = () => {
    return (
        <section id="Education" className="education-section">
            <h2>My Education</h2>
            <div className="education-list">
            <div className="education-item">
                    <h3>Master Of Computer Application (MCA)</h3>
                    <p>D.Y Patil University Ambi Pune</p>
                    <p>2023 - 2025</p>
                    <p>CGPA: 7.55/10</p>
                    <ul>
                        <li> Coursework: JavaScript,Database Management Systems,  </li>
                        <li>Capstone Project: Developed a Portfolio Using Wordpress</li>
                    </ul>
                </div>
                <div className="education-item">
                    <h3>Bachelor of  Computer Application (BCA) </h3>
                    <p>G.H Raisoni Instutute Of Bussiness Management Jalgoan(Autonomus)</p>
                    <p>2020 - 2023</p>
                    <p>CGPA: 7.32/10</p>
                    <ul>
                        <li> Coursework: Programing langwayges</li>
                        <li>Capstone Project: Developed a Mini projects</li>
                    </ul>
                </div>
                <div className="education-item">
                    <h3>High School (HSC)</h3>
                    <p>D.E.S junior collage Dharangoa</p>
                    <p>2018 - 2020</p>
                    <p>Persentage%: 69.54%</p>
                    <ul>
                        <li>12th(Science)</li>
                       <li>In State Board</li>
                    </ul>
                </div>

                <div className="education-item">
                    <h3> School(SSC) </h3>
                    <p>Laxmi Vidyalay Mhaiswadi</p>
                    <p>2018</p>
                    <p>Persentage%: 62.40%</p>
                    <ul>
                        <li>10th</li>
                        <li>In State Board</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;

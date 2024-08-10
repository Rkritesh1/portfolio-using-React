import React from "react";
import './Projects.css';

const Projects=()=>{
    return(
        <section id='projects' className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project">
                <h3>Portfolio Using React</h3>
                <p>description of projects</p>
                <p>in this project i have create a portfolio 
                    using React in this portfolio i use javaScript,Css,Html Also
                    code editor use VS code in this portfolio 
                    i showed information of myself
                 </p>
                </div>
                <div className="project">
                <h3>Zoo Management System</h3>
                <p>description of projects</p>
                <p>in this project I have created a website to handle all zoo paper work  in online mode like 
                 ticket booking and checking what is in actual in zoo before coming to zoo this is help 
                 people to time saving and other.  
                 In this project I used language is PHP  , JavaScript.  
                 Used database is MY SQL  
                 Used Tools : XAMPP  
                 </p>
                </div>
                <div className="project">
                <h3>Portfolio2 Using WordPress</h3>
                <p>description of projects</p>
                <p>created as a minor project of collage</p>
                <p> created ankur warikoo portfolio as minor project of collage   
                    This portfolio I insert information about ankur warikoo 
                    and their career 
                    Used tool in this project is :  WordPress   
                 </p>
                </div>
                
            </div>
        </section>
        
    );

};

export default Projects;
import React from "react";
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <img src={`${process.env.PUBLIC_URL}/Ritesh Kinge_1.jpg`} alt="Ritesh Kinge" className="profile-pic" />
            <p>Hi there,</p>
            <p>I am Ritesh Vilas Kinge.</p>
            <p>I am currently pursuing my Master's degree (MCA) in Pune.</p>
            <p>I live in Pune to focus on my studies.</p>
            <p>My parents are farmers, and I belong to a small village Name Mhaiswadi.</p>
            <p>My address is: At. Post Mhaiswadi, Ta. Malkapur, Dist. Buldhana.</p>
        </section>
    );
};

export default About;

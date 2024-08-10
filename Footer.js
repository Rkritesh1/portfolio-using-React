import React, { useState, useEffect } from "react";
import './Footer.css';  // Import the CSS file

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.body.scrollHeight;

            // Show footer when the user scrolls down past a certain point
            if (scrollPosition < documentHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className={`footer ${isVisible ? "visible" : ""}`}>
            <p>&copy; {new Date().getFullYear()} Ritesh Kinge.</p>
        </footer>
    );
};

export default Footer;

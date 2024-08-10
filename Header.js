import React, { useState, useEffect } from "react";
import './Header.css'; 

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 10) {
                // Scrolling down and past 50px
                setIsVisible(false);
            } else if (window.scrollY < lastScrollY) {
                // Scrolling up
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`header ${isVisible ? "visible" : "hidden"}`}>
            <h1>Ritesh Kinge</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;

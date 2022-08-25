import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Navbar/noun-truck-1076812.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isActive, setActive] = useState(false);
    console.log(isActive);
    const ToggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className="Navbar">
            <div className="Logo_container">
                <Link to="#" className="logo">
                    <img src={logo} alt="Logo" />
                    <h3 className="Logo_title">Transport Society</h3>
                </Link>
            </div>
            <ul className={isActive ? "nav-list nav-active ms-auto" : "nav-list ms-auto"}>
                <li className="nav-item">
                    <Link to="#" className="nav_link" onClick={() => ToggleClass()}>Our vehicules</Link>
                </li>
                <li className="nav-item">
                    <Link to="#About" className="nav_link" onClick={() => ToggleClass()}>About transport society</Link>
                </li>
                <li className="nav-item">
                    <Link to="#Projets" className="nav_link" onClick={() => ToggleClass()}>The refrigeration specialist</Link>
                </li>
                <li className="nav-item">
                    <Link to="#Contact" className="nav_link" onClick={() => ToggleClass()}>Full service!</Link>
                </li>
                <li className="nav-item flex gap-1">
                    <Link to="#Contact" className="nav_link" onClick={() => ToggleClass()}>Our agencies</Link>
                </li>
                <li className="nav-item nav-item_south_africa flex gap-1">
                    <div className="flag"></div>
                    <Link to="#Contact" className="nav_link south_africa" onClick={() => ToggleClass()}>South Africa
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.0} stroke="currentColor" className="arrow w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

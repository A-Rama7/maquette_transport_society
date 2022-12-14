import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Navbar/noun-truck-1076812.png";
import {HashLink as Link} from "react-router-hash-link";

export default function Navbar() {
    const [isActive, setActive] = useState(false);
    console.log(isActive);
    const ToggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <nav className="Navbar_not_resp">
                <div className="Logo_container">
                    <Link to="#" className="logo">
                        <img src={logo} alt="Logo" />
                        <h3 className="Logo_title">Transport society</h3>
                    </Link>
                </div>
                <ul className="nav-list ms-auto">
                    <li className="nav-item">
                        <Link to="#Vehicules" className="nav_link">Our vehicules</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#About" className="nav_link">About transport society</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#Ref_specialist" className="nav_link">The refrigeration specialist</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#Full_service" className="nav_link">Full service!</Link>
                    </li>
                    <li className="nav-item flex gap-1">
                        <Link to="#Map" className="nav_link">Our agencies</Link>
                    </li>
                    <li className="nav-item nav-item_south_africa flex gap-1">
                        <div className="flag"></div>
                        <Link to="#Contact" className="nav_link south_africa">South Africa
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.0} stroke="currentColor" className="arrow w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </Link>
                    </li>
                </ul>
            </nav>

            <nav className="Navbar_resp">
                <div className="Logo_container">
                    <Link to="#" className="logo">
                        <img src={logo} alt="Logo" />
                        <h3 className="Logo_title">Transport Society</h3>
                    </Link>
                </div>
                <ul className={isActive ? "nav-list-resp nav-active ms-auto" : "nav-list-resp ms-auto"}>
                    <li className="nav-item-resp">
                        <Link to="#Vehicules" className="nav_link_resp" onClick={() => ToggleClass()}>Our vehicules</Link>
                    </li>
                    <li className="nav-item-resp">
                        <Link to="#About" className="nav_link_resp" onClick={() => ToggleClass()}>About transport society</Link>
                    </li>
                    <li className="nav-resp">
                        <Link to="#Ref_specialist" className="nav_link_resp" onClick={() => ToggleClass()}>The refrigeration specialist</Link>
                    </li>
                    <li className="nav-item-resp">
                        <Link to="#Full_service" className="nav_link_resp" onClick={() => ToggleClass()}>Full service!</Link>
                    </li>
                    <li className="nav-item-resp">
                        <Link to="#Map" className="nav_link_resp" onClick={() => ToggleClass()}>Our agencies</Link>
                    </li>
                    <li className="nav-item-resp nav-item_south_africa">
                        <div className="flag"></div>
                        <Link to="#Contact" className="nav_link_resp south_africa" onClick={() => ToggleClass()}>South Africa
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.0} stroke="currentColor" className="arrow w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </Link>
                    </li>
                </ul>
                <svg>
            <defs>
              <filter id="gooeyness">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
                <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
              </filter>
            </defs>
          </svg>
            <div className={isActive ? "plate plate2 active" : "plate plate2"} onClick = {() =>ToggleClass()}>
              <svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                <path className="line line1" d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475" />
                <path className="line line2" d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034" />
                <path className="line line3" d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254" />
                <path className="line line4" d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525" />
                <path className="line line5" d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441" />
                <path className="line line6" d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695" />
              </svg>
              <svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                <path className="line" d="M 34,32 L 66,68" />
                <path className="line" d="M 66,32 L 34,68" />
              </svg>
            </div>
            </nav>
        </div>

    );
}

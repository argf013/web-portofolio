import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Navbar from './components/Navbar';
import 'animate.css';

function App() {
    const navItems = ["Home", "Experience & Education", "Portfolio"];
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <Navbar brandName="Muhammad Arfa." navItems={navItems} activeNavItem={0} />
            <div className='introduction animate__animated animate__zoomIn'>
                Hi, I'm Arfa. <br />
                I'm a Web Developer and<br />
                Graphic Designer with a strong focus <br />
                on problem solving and innovation.
            </div>
        </div>
    );
}

export default App;

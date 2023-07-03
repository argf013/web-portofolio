import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

import '../styles/Portfolio.css'
const Portfolio = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    return (
        <div className='portfolio'>
            <Particles options={particlesOptions} init={particlesInit} />
            <h1>Portfolio</h1>
        </div>
    )
}

export default Portfolio


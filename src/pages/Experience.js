import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

import '../styles/Experience.css'
const Experience = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    return (
        <div className='experience'>
            <Particles options={particlesOptions} init={particlesInit} />
            <h1>Experience</h1>
        </div>
    )
}

export default Experience


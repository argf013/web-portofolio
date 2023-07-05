import React, {useEffect} from 'react'
import cv from '../assets/images/CV.png'

import '../styles/Experience.css'
const Experience = () => {
    useEffect(() => {
        document.title = 'Experience & Education | Muhamad Arfa'
    }, [])
    return (
        <div className='experience animate__animated animate__slideInLeft'>
            <div className='resume'>
                <img src={cv} className='cv-image' alt='cv-muhamad-arfa'/>
            </div>
        </div>
    )
}

export default Experience


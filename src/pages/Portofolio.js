import React, {useEffect} from 'react'

import '../styles/Portfolio.css'
const Portfolio = () => {
    useEffect(() => {
        document.title = 'Portfolio | Muhamad Arfa'
    }, [])
    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
        </div>
    )
}

export default Portfolio


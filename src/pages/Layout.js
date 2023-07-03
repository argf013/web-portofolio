import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

const Layout = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    return (
        <>
            <Navbar
                brandName="Muhamad Arfa."
                navItems={["Home", "Experince & Education", "Portfolio"]}
            />
            <Particles options={particlesOptions} init={particlesInit} />

            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;
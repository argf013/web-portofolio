import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar
        brandName="Muhamad Arfa."
        navItems={["Home", "Experince & Education", "Portfolio"]}
      />
     

      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;
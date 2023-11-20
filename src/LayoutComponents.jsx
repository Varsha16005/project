import React from "react";
import NavBar from "./Home/NavBar";
import Footer from "./Home/Footer";

const LayoutComponents = ({ children }) => (
  <div
    style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Navbar */}
    <NavBar />

    {/* Content area */}
    <div style={{ flex: 1 }}>{children}</div>

    {/* Footer */}
    <Footer />
  </div>
);

export default LayoutComponents;

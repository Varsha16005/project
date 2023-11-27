import React, { Component } from "react";
import NavBar from "./Project/NavBar";
import Footer from "./Project/Footer";
import Astheticplants from "./Project/Astheticplants";
import Vegetables from "./Project/Vegetables";
import Herbs from "./Project/Herbs";
const LayoutComponents = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      //padding: " 20px" /* Add padding to create space on both sides */,
    }}
  >
    <NavBar />
    <br></br>
    <h1
      style={{
        zIndex: 1,
        color: "white",
      }}
    >
      <center>Life is better with a touch of green🌱💚</center>
    </h1>

    {/* <Popup /> */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "80px",
      }}
    >
      <Astheticplants />
      <Herbs />
      <Vegetables />
    </div>
    <Footer />
  </div>
);

export default LayoutComponents;

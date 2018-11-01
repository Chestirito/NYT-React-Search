import React from "react";
import "./Jumbotron.css";
const Jumbotron = ({ children }) => (
  <div
    style={{ 
      height: 300, 
      clear: "both", 
      paddingTop: 120, 
      textAlign: "center", 
     // backgroundImage : `url(./Images/background.jpeg)` 
    }}
    className="titleBox"
  >
    {children}
  </div>
);

export default Jumbotron;

import React from "react";
import Card from "../components/card/card"
import "../styles/home.css"


const Home = () => {
  return (
    <>
      <h1 className="title1">Screend</h1>
      <div className="cardetails">
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      
      
      
    </>
  );
};

export default Home;

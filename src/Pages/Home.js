import React, { useEffect, useState } from "react";
import Card from "../components/card/card"
import "../styles/home.css"
import { fetchShows } from "../components/api/api";


const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows().then((data) => setShows(data));
  }, []);
  return (
    <>
    <h1 className="title1">Screend</h1>
    <div className="cardetails">
      {shows.map((show) => {
        return (
          <Card
            key={show.id}
            name={show.name}
            image={show.image ? show.image.medium : ""}
          />
        );
      })}
    </div>
    
  </>
  );
};

export default Home;

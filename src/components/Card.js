import React from "react";
import "../styles/Card.css";

export default function Card() {
  return (
    <div className="Card">
      <div className="card-content">
        <div className="card-image">
          <img src="https://source.unsplash.com/WLxQvbMyfas" alt="Mount Fuji" />
        </div>
        <div className="card-stats">
          <span className="card-location">
            <img src="../images/location.png" alt="location pin" />
            Japan
          </span>
          <span>
            <a href="#" target="_blank" rel="noreferrer" className="card-link">
              View on Google Maps
            </a>
          </span>
          <h2 className="card-header">Mount Fuji</h2>
          <p className="card-dates">12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="card-description">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

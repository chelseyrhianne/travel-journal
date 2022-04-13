import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  console.log(props);
  return (
    <div className="Card">
      <div className="card-content">
        <div className="card-image">
          <img src={props.data.imageUrl} alt="{props.data.title}" />
        </div>
        <div className="card-stats">
          <span className="card-location">
            <img src="../images/location.png" alt="location pin" />
            {props.data.location}
          </span>
          <span>
            <a
              href={props.data.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              View on Google Maps
            </a>
          </span>
          <h2 className="card-header">{props.data.title}</h2>
          <p className="card-dates">
            {props.data.startDate} - {props.data.endDate}
          </p>
          <p className="card-description">{props.data.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

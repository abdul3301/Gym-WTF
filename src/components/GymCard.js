import React from "react";
import "./GymCard.css";
import { Rate } from "antd";
import location from "../assets/location.PNG";
import { useNavigate } from "react-router-dom";

const GymCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="gym_card"
      onClick={() => {
        navigate("/gym", {
          state: {
            gym_id: props.id,
            gym_name: props.title,
            gym_rating: props.rating,
            gym_address: props.address,
          },
        });
      }}
    >
      <div className="cardImage"></div>
      <div className="cardContent">
        <div className="contentMain">
          <h2 className="cardTitle">{props.title}</h2>
          <h4 className="cardRating">
            <Rate value={props.rating} disabled allowHalf />
          </h4>
          <h4 className="cardAddress">{props.address}</h4>
          <p className="cardDuration">
            <img
              src={location}
              alt="location"
              style={{ height: "15px", marginBottom: "3px" }}
            />
            {props.duration} away | {props.distance}
          </p>
        </div>
        <div className="contentSubMain">
          <h3 style={{ color: "orange", marginTop: "20px" }}>
            3600 for 3 Months
          </h3>
          <button className="cardBtn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default GymCard;

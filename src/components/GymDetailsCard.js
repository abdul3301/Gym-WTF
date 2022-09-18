import { Card } from "antd";
import React from "react";
import "./GymDetailsCard.css";
import pinkWtf from "../assets/pink_wtf.PNG";

const GymDetailsCard = (props) => {
  return (
    <div className="gdCard">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: "700" }}>PLAN 1</span>
        <div style={{ display: "flex", gap: "5px" }}>
          <img src={pinkWtf} alt="" />
          <span
            style={{
              color: "yellow",
              fontWeight: "800",
              fontSize: "20px",
            }}
          >
            {props.name} ({props.duration})
          </span>
          {props.description && <span>{props.description}</span>}
        </div>
      </div>
      <div
        style={{
          boxShadow: "0 0 10px rgb(126, 155, 126) ",
          height: "fit-content",
          padding: "2px 5px",
          background: "rgb(124, 155, 124)",
          color: "white",
          fontWeight: "700",
        }}
      >
        {props.price}
      </div>
    </div>
  );
};

export default GymDetailsCard;

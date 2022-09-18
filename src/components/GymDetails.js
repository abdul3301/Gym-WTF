import React, { useEffect, useState } from "react";
import GymDetailsCard from "./GymDetailsCard";
import "./GymDetails.css";
import why1 from "../assets/why1.PNG";
import why2 from "../assets/why2.PNG";
import why3 from "../assets/why3.PNG";
import why4 from "../assets/why4.PNG";
import how from "../assets/howImage.PNG";
import Footer from "./Footer";
import BuyNow from "./BuyNow";
import { Rate } from "antd";
import { getGymDetailByID } from "../functions/methods";
import { useNavigate, useLocation } from "react-router-dom";

export const GymDetails = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { gym_id, gym_name, gym_address, gym_rating } = location.state;

  const [membershipData, setMemberShipData] = useState([]);
  useEffect(() => {
    getGymDetailByID({ gym_id }).then((res) => {
      let data = res.data.data.map((d) => ({
        planName: d.plan_name,
        planPrice: d.plan_price,
        duration: parseInt(d.duration),
        description: d.description,
      }));
      setMemberShipData(data);
    });
  });

  return (
    <div>
      <div className="scrollImage"></div>
      <div className="part1">
        <div className="nameAdd">
          <h1>{gym_name}</h1>
          <h3>{gym_address}</h3>
        </div>
        <div>
          <section>
            <Rate disabled value={gym_rating} />
          </section>
        </div>
      </div>
      <div className="part2">
        <div className="decription">
          <h1>Description</h1>
          <br />
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
            repudiandae temporibus iure repellendus fuga commodi, sapiente
            soluta aspernatur possimus dolorem libero aperiam aliquam laudantium
            totam perspiciatis quas nobis! Odit, iure?
          </h3>
          <br />
          <div className="facilities">
            <h1>Facilities</h1>
            <div className="facilities-sec">
              <p>Sanitized gym</p>
              <p>Sanitized gym</p>
              <p>Sanitized gym</p>
              <p>Sanitized gym</p>
              <p>Sanitized gym</p>
            </div>
          </div>
          <div className="why">
            <h1>Why to choose WTF?</h1>
            <br />
            <div className="whyImages">
              <img src={why1} alt="" />
              <img src={why2} alt="" />
              <img src={why3} alt="" />
              <img src={why4} alt="" />
            </div>
          </div>
          <br />
          <div className="how">
            <h1>How it works?</h1>
            <div className="how1">
              <img src={how} alt="" />

              <p>
                pick membership start date and complete your subscription
                process by clicking BUY NOW below
              </p>
            </div>
            <div className="how1">
              <img src={how} alt="" />
              <p>
                A dedicated general trainer will be assigned after you have
                taken your subscription
              </p>
            </div>
            <div className="how1">
              <img src={how} alt="" />
              <p>Explore WTF and start your fitness journey</p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------------------- */}
        <div className="membershipCard">
          <h1 style={{ color: "white", fontWeight: "500" }}>
            Choose Membership
          </h1>
          {membershipData.map((d) => (
            <GymDetailsCard
              name={d.planName}
              price={d.planPrice}
              duration={d.duration}
              description={d.description}
            />
          ))}
        </div>
      </div>
      <BuyNow />
    </div>
  );
};

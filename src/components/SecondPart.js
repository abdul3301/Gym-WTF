import React, { useEffect, useState } from "react";
import { filterGym, getGyms } from "../functions/methods";
import GymCard from "./GymCard";
import "./SecondPart.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";

const SecondPart = () => {
  const { Option } = Select;
  const [gymData, setGymData] = useState([]);
  useEffect(() => {
    getGyms()
      .then((res) => {
        setGymData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="SecondPart">
      <div className="content1">
        <Input
          className="searchBar"
          size="large"
          placeholder="Search gym name here..."
          prefix={
            <SearchOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
          }
        />
      </div>
      <div className="content2">
        <div className="filterPart">
          <p>
            <strong>Filters</strong>
          </p>
          <br />
          <h3>
            <strong>Location</strong>
          </h3>
          <Input
            className="filter-searchBar"
            size="large"
            placeholder="Enter Location"
            prefix={<SearchOutlined style={{ fontSize: "20px" }} />}
          />
          <br />
          <br />
          <h3 style={{ color: "white" }}>
            <strong>Price</strong>
          </h3>
          <div style={{ display: "flex" }}>
            <Input className="min-searchBar" size="large" placeholder="Min" />
            <Input className="max-searchBar" size="large" placeholder="Max" />
          </div>
          <br />
          <h3>
            <strong>Cities</strong>
          </h3>
          <Select
            onChange={(e) => {
              gymData.filter((d) => d.city === e);

              console.log(gymData);
              setGymData(gymData);
            }}
            className="cityDropdown"
            defaultValue="Select City"
            style={{ width: "100%" }}
          >
            <Option value="Mumbai">Mumbai</Option>
            <Option value="New Delhi">New Delhi</Option>
            <Option value="Gaziabad">Gaziabad</Option>
            <Option value="Greater Noida">Greater Noida</Option>
            <Option value="Noida"> Noida</Option>
          </Select>
        </div>

        <div className="gymCardData">
          {gymData.map((d) => (
            <GymCard
              id={d.user_id}
              title={d.gym_name}
              rating={d.rating}
              address={`${d.address1} ${d.address2}`}
              duration={d.duration_text}
              distance={d.distance_text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPart;

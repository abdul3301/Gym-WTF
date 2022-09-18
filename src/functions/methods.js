import axios from "axios";

export const getGyms = () =>
  axios.get(
    `${process.env.REACT_APP_SERVER_BASE}/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
  );

export const getGymDetailByID = (option) =>
  axios.post(`${process.env.REACT_APP_SERVER_BASE}/gym/plan`, option);

export const filterGym = () =>
  axios.get(`${process.env.REACT_APP_SERVER_BASE}/gym/places`);

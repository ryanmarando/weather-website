import { RequestHandler } from "express";

export const getWeatherConditions: RequestHandler = async (req, res) => {
  const lat = 39.91;
  const long = -84.22;
  getPoints(lat, long);
  res.json({ output: "Get Current Weather Conditions" });
  return;
};

const getPoints = async (lat: number, long: number) => {
  try {
    const userPoints = await fetch(
      `https://api.weather.gov/points/${lat},${long}`
    );
    const userPointsResponse = await userPoints.json();
    return userPointsResponse;
  } catch (error) {
    console.log("Error getting points in NWS API...", error);
  }
};

const getObservationStations = async () => {};

export const postWeatherActivities: RequestHandler = async (req, res) => {
  res.json({ output: "Post Weather Activites To Be Alerted For" });
  return;
};

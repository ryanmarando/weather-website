import { RequestHandler } from "express";

export const getWeatherConditions: RequestHandler = async (req, res) => {
  res.json({ output: "Get Current Weather Conditions" });
  return;
};

export const postWeatherActivities: RequestHandler = async (req, res) => {
  res.json({ output: "Post Weather Activites To Be Alerted For" });
  return;
};

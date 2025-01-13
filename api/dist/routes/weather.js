import express from "express";
import * as weatherController from "../controllers/weather.js";
const router = express.Router();
router.get("/", weatherController.getWeatherConditions);
router.post("/", weatherController.postWeatherActivities);
export default router;

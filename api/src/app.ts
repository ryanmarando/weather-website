import express from "express";
import logging from "./middleware/logging.js";
import weatherRouter from "./routes/weather.js";
import userRouter from "./routes/user.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(logging.logRequest);

app.get("/", (req, res) => {
  res.send("Welcome To The Weather Website!");
});

app.use("/weather", weatherRouter);
app.use("/user", userRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`API listening on http://localhost:${port}`);
});

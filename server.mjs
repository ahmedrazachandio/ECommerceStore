// const express = require('express')
console.log("i am server file");
import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     console.log("request ip:",req.ip);
//   res.send('Hello World' + new Date().toDateString())
// });
app.get("/weather", (req, res) => {
  // console.log("request ip:", req.ip);
  res.send({
    city: "Karachi",
    text: "Clear",
    tempC: 22,
    tempF: 71,
    ftempC: 20,
    ftempF: 68,
    humidity: 83,
    visibility: "6KM",
    windKPH: 6.8,
    windMPH: 4.3,
  });
});
app.get("/quizapp", (req, res) => {
  // console.log("request ip:", req.ip);
  res.send({
    que: "what is your current Prime Minister",
    option1: "Imran Khan",
    option2: "Bilawal Bhutto",
    option3: "Shahbaz Shareef",
    ans: "Shahbaz Shareef",
    
  });
});





const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./web/build")));
app.use("*", express.static(path.join(__dirname, "./web/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


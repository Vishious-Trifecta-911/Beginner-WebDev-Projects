import express from "express";
import mongoose from "mongoose";
import Employee from "./employeeSchema.js";

const app = express();

const getRandom = (arr) => {
  let random = Math.floor(Math.random() * (arr.length - 1));
  return arr[random];
};

app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1/my_database")
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(() => {
    console.error("Failed to connect to MongoDB!");
  });

app.get("/", function (req, res) {
  res.render("index", { foo: "bar" });
});

let randomNames = ["Jack", "Jill", "John", "Joe"];
let randomLanguages = ["Python", "Rust", "Go", "Java"];
let randomCities = ["Pune", "Mumbai", "Goa", "Hyderabad"];

app.get("/generate", async (req, res) => {
  await Employee.deleteMany({});
  for (let index = 0; index < 10; index++) {
    let data = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 100000),
      language: getRandom(randomLanguages),
      city: getRandom(randomCities),
      isManager: Math.random() > 0.5 ? true : false,
    });

    await data.save();
  }
});

app.listen(3000);

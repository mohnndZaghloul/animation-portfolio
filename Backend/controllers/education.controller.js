const fs = require("node:fs");
let education = JSON.parse(fs.readFileSync("./data/education.json", "utf-8"));

const { validationResult } = require("express-validator");

const getAllEducation = (req, res) => {
  res.json({ status: "success", data: [...education] });
};

const findEducation = (req, res) => {
  const id = +req.params.id;

  const selectedEducation = education.find((edu) => edu.id === id);
  if (!education) {
    return res
      .status(404)
      .json({ status: "error", data: null, msg: "Not Found" });
  }
  res.json(selectedEducation);
};

const addEducation = (req, res) => {
  //validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ status: "fail", errors });
  }
  //create and push
  education.push({ id: education.length + 1, ...req.body });
  fs.writeFileSync("./data/education.json", JSON.stringify(education));
  res.status(201).json({ status: "success", data: [...education] });
};

const updateEducation = (req, res) => {
  const id = +req.params.id;

  const index = education.findIndex((edu) => edu.id === id);
  if (!education[index]) {
    return res
      .status(404)
      .json({ status: "error", data: null, msg: "Not Found" });
  }

  education[index] = { ...education[index], ...req.body };
  fs.writeFileSync("./data/education.json", JSON.stringify(education));

  res.status(200).json({ status: "success", data: [...education] });
};

const deleteEducation = (req, res) => {
  const id = +req.params.id;
  if (!education.find((edu) => edu.id === id)) {
    return res
      .status(404)
      .json({ status: "error", data: null, msg: "Not Found" });
  }
  education = education.filter((edu) => edu.id !== id);
  fs.writeFileSync("./data/education.json", JSON.stringify(education));

  res.status(200).json({ status: "success", data: [...education] });
};

module.exports = {
  getAllEducation,
  findEducation,
  addEducation,
  updateEducation,
  deleteEducation,
};

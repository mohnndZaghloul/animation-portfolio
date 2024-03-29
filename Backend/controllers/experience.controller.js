const fs = require("node:fs");
let experience = JSON.parse(fs.readFileSync("./data/experience.json", "utf-8"));

const { validationResult } = require("express-validator");

const getAllExperience = (req, res) => {
  res.json({ status: "success", data: [...experience] });
};

const findExperience = (req, res) => {
  const id = +req.params.id;

  const selectedExperience = experience.find((edu) => edu.id === id);
  if (!selectedExperience) {
    return res
      .status(404)
      .json({ status: "error", message: "Not Found", data: null });
  }
  res.json({ status: "success", data: { ...selectedExperience } });
};

const addExperience = (req, res) => {
  //validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ status: "fail", errors });
  }
  //create and push
  experience.push({ id: experience.length + 1, ...req.body });
  fs.writeFileSync("./data/experience.json", JSON.stringify(experience));
  res.status(201).json({
    status: "success",
    data: { experience },
    message: "experience has been created ",
  });
};

const updateExperience = (req, res) => {
  const id = +req.params.id;

  const index = experience.findIndex((edu) => edu.id === id);
  if (!experience[index]) {
    return res
      .status(404)
      .json({ status: "error", data: null, msg: "Not Found" });
  }

  experience[index] = { ...experience[index], ...req.body };
  fs.writeFileSync("./data/experience.json", JSON.stringify(experience));

  res.status(200).json({ status: "success", data: [...experience] });
};

const deleteExperience = (req, res) => {
  const id = +req.params.id;
  if (!experience.find((edu) => edu.id === id)) {
    return res
      .status(404)
      .json({ status: "error", data: null, msg: "Not Found" });
  }
  experience = experience.filter((edu) => edu.id !== id);
  fs.writeFileSync("./data/experience.json", JSON.stringify(experience));

  res.status(200).json({ status: "success", data: [...experience] });
};

module.exports = {
  getAllExperience,
  findExperience,
  addExperience,
  updateExperience,
  deleteExperience,
};

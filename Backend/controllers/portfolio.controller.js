const fs = require("node:fs");
let portfolio = JSON.parse(
  fs.readFileSync("./Backend/data/portfolio.json", "utf-8")
);

const { validationResult } = require("express-validator");

const getAllPortfolio = (req, res) => {
  res.json({ status: "success", data: [...portfolio] });
};

const findPortfolio = (req, res) => {
  const id = +req.params.id;

  const selectedPortfolio = portfolio.find((edu) => edu.id === id);
  if (!selectedPortfolio) {
    return res
      .status(404)
      .json({ status: "error", message: "Not Found", data: null });
  }
  res.json({ status: "success", data: { ...selectedPortfolio } });
};

const addPortfolio = async (req, res) => {
  //validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ status: "fail", errors });
  }
  if (req.files.length === 0 || req.files.length === undefined) {
    return res
      .status(401)
      .json({ status: "fail", error: "at least upload one image" });
  }

  //create and push
  portfolio.push({ id: portfolio.length + 1, ...req.body, images: req.files });
  fs.writeFileSync("./Backend/data/portfolio.json", JSON.stringify(portfolio));
  res.status(201).json({
    status: "success",
    data: [...portfolio],
    message: "portfolio has been created ",
  });
};

const updatePortfolio = (req, res) => {
  const id = +req.params.id;

  const index = portfolio.findIndex((edu) => edu.id === id);
  if (!portfolio[index]) {
    return res
      .status(404)
      .json({ status: "error", data: null, msg: "Not Found" });
  }
  if (req.files.length === 0 || req.files.length === undefined) {
    return res
      .status(401)
      .json({ status: "fail", error: "at least upload one image" });
  }

  portfolio[index] = { ...portfolio[index], ...req.body, images: req.files };
  fs.writeFileSync("./Backend/data/portfolio.json", JSON.stringify(portfolio));

  res.status(200).json({ status: "success", data: [...portfolio] });
};

const deletePortfolio = (req, res) => {
  const id = +req.params.id;
  if (!portfolio.find((edu) => edu.id === id)) {
    return res
      .status(404)
      .json({ status: "error", data: null, msg: "Not Found" });
  }
  portfolio = portfolio.filter((edu) => edu.id !== id);
  fs.writeFileSync("./Backend/data/portfolio.json", JSON.stringify(portfolio));

  res.status(200).json({ status: "success", data: [...portfolio] });
};

module.exports = {
  getAllPortfolio,
  findPortfolio,
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
};

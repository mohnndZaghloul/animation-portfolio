const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const portfolioController = require("../controllers/portfolio.controller");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: (res, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const upload = multer({ storage }).array("images", 12);

router
  .route("/")
  .get(portfolioController.getAllPortfolio)
  .post(
    upload,
    [body("title").notEmpty().withMessage("title is required")],
    portfolioController.addPortfolio
  );

router
  .route("/:id")
  .get(portfolioController.findPortfolio)
  .patch(
    upload,
    [body("title").notEmpty().withMessage("title is required")],
    portfolioController.updatePortfolio
  )
  .delete(portfolioController.deletePortfolio);
module.exports = router;

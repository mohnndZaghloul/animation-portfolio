const { body } = require("express-validator");
const express = require("express");
const router = express.Router();

const educationController = require("../controllers/education.controller");

router
  .route("/")
  .get(educationController.getAllEducation)
  .post(
    [
      body("period")
        .notEmpty()
        .withMessage("period is required")
        .isLength({ min: 10 })
        .withMessage("right this schema month year - month year"),
      body("description")
        .notEmpty()
        .withMessage("description is required")
        .isLength({ min: 2 })
        .withMessage("min length should be 2 digits"),
    ],
    educationController.addEducation
  );

router
  .route("/:id")
  .get(educationController.findEducation)
  .patch(educationController.updateEducation)
  .delete(educationController.deleteEducation);

module.exports = router;

const { body } = require("express-validator");
const express = require("express");
const router = express.Router();

const experienceController = require("../controllers/experience.controller");

router
  .route("/")
  .get(experienceController.getAllExperience)
  .post(
    [
      body("period")
        .notEmpty()
        .withMessage("period is required")
        .isLength({ min: 10 })
        .withMessage("right this schema month year - month year"),
      body("company").notEmpty().withMessage("company is required"),
      body("position").notEmpty().withMessage("position is required"),
      body("description")
        .notEmpty()
        .withMessage("description is required")
        .isLength({ min: 2 })
        .withMessage("min length should be 2 digits"),
    ],
    experienceController.addExperience
  );

router
  .route("/:id")
  .get(experienceController.findExperience)
  .patch(experienceController.updateExperience)
  .delete(experienceController.deleteExperience);

module.exports = router;

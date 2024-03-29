const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts.controller");

router
  .route("/")
  .get(contactsController.getAllContacts)
  .patch(contactsController.updateContacts);

router.route("/:social").get(contactsController.findContacts);

module.exports = router;

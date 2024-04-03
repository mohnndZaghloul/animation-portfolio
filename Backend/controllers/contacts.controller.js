const fs = require("node:fs");
let contacts = JSON.parse(fs.readFileSync("./data/contacts.json", "utf-8"));

const getAllContacts = (req, res) => {
  res.json({ status: "success", data: { ...contacts } });
};

const findContacts = (req, res) => {
  const social = req.params.social;
  if (!contacts[social]) {
    return res
      .status(404)
      .json({ status: "error", data: null, msg: "Not Found" });
  }
  res.json({ status: "success", [social]: contacts[social] });
};

const updateContacts = (req, res) => {
  contacts = { ...contacts, ...req.body };
  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));

  res.status(200).json({ status: "success", data: { ...contacts } });
};

module.exports = {
  getAllContacts,
  findContacts,
  updateContacts,
};

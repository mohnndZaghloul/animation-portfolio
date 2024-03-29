const express = require("express");

const app = express();

const cors = require("cors");
const path = require("path");

app.use(express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(cors());

const educationRouter = require("./routes/education.route");
const contactsRouter = require("./routes/contacts.route");
const experienceRouter = require("./routes/experience.route");
const portfolioRouter = require("./routes/portfolio.route");

app.use("/api/education", educationRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/portfolio", portfolioRouter);

app.listen(process.env.PORT || 5050, () => {
  console.log("listening on port : 5050");
});

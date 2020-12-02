// =======================================
//              DEPENDENCIES
// =======================================
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

// =======================================
//                DATABASE
// =======================================
const budgets = require("./models/budget.js");

// =======================================
//               MIDDLEWARE
// =======================================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// =======================================
//                ROUTES
// =======================================

// Route Handler | Index ==> GET ==> Presentational Route
// ==> /budgets
app.get("/budgets/", (req, res) => {
  res.render("Index", {
    budgets: budgets,
  });
});

// Route Handler | New ==> GET ==> Presentational Route
// ==> /budgets/new

// Route Handler | Create ==> POST ==> Functional Route
// ==> /budgets

// Route Handler | Show ==> GET ==> Presentational Route
// ==> /budgets/:id

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
  console.log(`Budgtr App listening on port: ${PORT}`);
});

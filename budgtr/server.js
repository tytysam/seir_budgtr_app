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
app.get("/budgets/", (req, res) => {
  let bankAccount = 0; // Initialize bankAccount variable with default value of the nubmer 0
  budgets.forEach((budget) => {
    bankAccount += parseInt(budget.amount); // for each entry in our data table, add the Amount property to our bankAccount
  });

  // Can't use document since it isn't HTML..? Maybe. But how else can we select
  // and modify the H2 that is in our Index.jsx...?
  // let display = document.querySelector(".money-display");
  // if (bankAccount > 0) {
  //   display.classList.remove(".negative");
  //   display.classList.add(".positive");
  // } else {
  //   display.classList.remove(".positive");
  //   display.classList.add(".negative");
  // }

  res.render("Index", {
    budgets: budgets, // THIS IS HOW WE ACCESS OUR individual budget objects in our JSX(!!!) | by passing the object budgets as our props, we can then map over the array and then look at each 'budget'
    totalMoney: bankAccount,
  });
});

// Route Handler | New ==> GET ==> Presentational Route
app.get("/budgets/new", (req, res) => {
  res.render("New");
});

// Route Handler | Create ==> POST ==> Functional Route
app.post("/budgets/", (req, res) => {
  budgets.push(req.body); // then push our data to our model
  res.redirect("/budgets/"); // then redirect the user to the index
});

// Route Handler | Show ==> GET ==> Presentational Route
app.get("/budgets/:indexOfBudgetsArray", (req, res) => {
  res.render("Show", {
    budget: budgets[req.params.indexOfBudgetsArray],
  });
});

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
  console.log(`Budgtr App listening on port: ${PORT}`);
});

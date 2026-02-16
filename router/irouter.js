const express = require("express");
const {
  getItems,
  addItem,
  fetchItemById,
  updateItem,
  deleteItem,
} = require("../controller/itemController");

const iroute = express.Router();

const isAuth = (req, resp, next) => {
  if (!req.session.userData) {
    return resp.redirect("/login");
  }
  next();
};

const isAdmin = (req, resp, next) => {
  if (req.session.userData.role !== "admin") {
    return resp.status(403).send("Access Denied!");
  }
  next();
};

iroute.get("/", getItems);

iroute.get("/add", isAuth, (req, resp) => {
  resp.render("add", {
    user: req.session.userData,
  });
});

iroute.post("/add", isAuth, addItem);

iroute.get("/edit/:id", isAuth, isAdmin, fetchItemById);
iroute.patch("/edit/:id", isAuth, isAdmin, updateItem);

iroute.delete("/delete/:id", isAuth, isAdmin, deleteItem);

module.exports = iroute;

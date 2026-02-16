const itemModel = require("../model/itemModel");

// Dashboard
const getItems = async (req, resp) => {
  try {
    const items = await itemModel.find().populate("addedBy", "username");
    resp.render("dashboard", { items, user: req.session.userData });
  } catch (err) {
    console.log(err);
  }
};

// Add Item
const addItem = async (req, resp) => {
  try {
    const { itemName, itemImage, sku, category, quantity, location, supplier } = req.body;

    await itemModel.create({
      itemName,
      itemImage,
      sku,
      category,
      quantity,
      location,
      supplier,
      addedBy: req.session.userData.id
    });

    resp.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

// Fetch by ID (Admin)
const fetchItemById = async (req, resp) => {
  try {
    const item = await itemModel.findById(req.params.id);
    resp.render("edit", { item });
  } catch (err) {
    console.log(err);
  }
};

// Update Item
const updateItem = async (req, resp) => {
  try {
    await itemModel.findByIdAndUpdate(req.params.id, req.body);
    resp.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

// Delete Item (Admin only)
const deleteItem = async (req, resp) => {
  try {
    await itemModel.findByIdAndDelete(req.params.id);
    resp.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getItems,
  addItem,
  fetchItemById,
  updateItem,
  deleteItem
};

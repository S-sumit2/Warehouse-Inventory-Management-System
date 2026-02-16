const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  itemName: {
    type: String,
    lowercase: true,
    minlength: 3,
    required: true
  },

  itemImage: {
    type: String,
    required: true
  },

  sku: {
    type: String,
    unique: true,
    required: true
  },

  category: {
    type: String,
    enum: ["Raw", "Finished", "Electronics", "Food"],
    required: true
  },

  quantity: {
    type: Number,
    min: 0,
    required: true
  },

  location: {
    type: String, // Rack / Section
    required: true
  },

  supplier: {
    type: String,
    required: true
  },

  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);

const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const answerSchema = new Schema(
  {
    __v: { type: Number, select: false },
  },
  { timestamps: true }
);

module.exports = model("betItem", answerSchema, 'betItem');

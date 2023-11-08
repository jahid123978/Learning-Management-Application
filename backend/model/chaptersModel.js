const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chaptersSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    duration:{
      type: String,
      required: true,
    },
    teacher:{
      type: String,
    },
    description:{
      type: String,
    },
    img: {
      type: String,
      default: "null",
    },
    file: [
      {
        title: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
    links: [
      {
        title: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("chapters", chaptersSchema);

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    releaseDate: Date,
    category: String,
    actors: [{ name: String }],
    image: String,
    ratings: [
      {
        value: { type: Number, min: 0, max: 10 },
      },
    ],
    comments: [
      {
        text: String,
      },
    ],
    addedBy: String,
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;

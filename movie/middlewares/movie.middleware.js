const isValid = (req, res, next) => {
  if (!title || !description || !releaseDate || !category || !actors) {
    return res.status(400).json({ error: "All fields are required" });
  }
  next();
};

module.exports = isValid;

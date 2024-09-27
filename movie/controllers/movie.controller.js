const movie = require("../Models/movie.schema");

const createMovie = async (req, res) => {
  const {
    title,
    description,
    releaseDate,
    category,
    actors,
    image,
    ratings,
    comments,
    addedBy,
  } = req.body;

  const isExists = await movie.findOne({ title });
  if (isExists) {
    res.send("Movie already exists");
  } else {
    const movie = new movie({
      title,
      description,
      releaseDate,
      category,
      actors,
      image,
      ratings,
      comments,
      addedBy,
    });
    const data = await movie.create(movie);
    res.send(data);
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;

  const data = await movie.findByIdAndUpdate(id, req.body, { new: true });
  res.send(data);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const data = await movie.findByIdAndDelete(id);
  res.send(data);
};

const rattingMovie = async (req, res) => {
  const movie = await movie.findById(req.params.id);
  if (!movie) {
    return res.status(404).send("movie not found");
  }
  movie.ratings.push(req.body);
  const data = await movie.save();
  res.send(data);
};

const commentMovie = async (req, res) => {
  const movie = await movie.findById(req.params.id);
  if (!movie) {
    return res.status(404).send("movie not found");
  }
  movie.comments.push(req.body);
  const data = await movie.save();
  res.send(data);
};

const filterMovie=async(req,res)=>{
  const {title,category,addedBy,releaseDate}=req.query;
  const query={};
  if(title){
    query.title=title
  }
  if(category){
    query.category=category
  }
  if(addedBy){
    query.addedBy=addedBy
  }
  if(releaseDate){
    query.releaseDate=releaseDate
  }
  const data=await movie.find(query);
  res.send(data)


}

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  rattingMovie,
  commentMovie,
  filterMovie
};

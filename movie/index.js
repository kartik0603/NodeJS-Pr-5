const express = require('express');
const connectDB = require('./config/db');
const app = express();

const userRoute = require('./Routes/user.route');
const movieRoute = require('./Routes/movie.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoute);
app.use('/movie', movieRoute);

const PORT = 8090;


app.get('/', (req, res) => {
    res.send("Welcome to the movie API")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
})

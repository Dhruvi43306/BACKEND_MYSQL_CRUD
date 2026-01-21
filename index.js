const express = require("express")
const routerUser = require("./routes/users.route")
const routerMovies = require("./routes/movies.route")
const routerMovieRating = require("./routes/moviesRating.route")

const app = express()

app.use(express.json())

app.use("/users",routerUser)
app.use("/movies",routerMovies)
app.use("/movieRating",routerMovieRating)


app.listen(3000,()=>{
    console.log("Server Startde at 3000")
})
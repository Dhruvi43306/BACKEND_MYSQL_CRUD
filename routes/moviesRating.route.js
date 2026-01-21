const express = require("express")
const { getAllMoviesRating, getMovieRatingById, insertMovieRating,checkMovieRating,updateMovieRatingById,deleteMovieRatingById } = require("../services/moviesRating.service")
const { authMiddlewearMovieRating } = require("../middlewear/auth.middlewear")

const routerMovieRating = express.Router()



routerMovieRating.use(authMiddlewearMovieRating)

//Get All
routerMovieRating.get("/",async(req,res)=>{
    const data = await getAllMoviesRating()
    console.log(data)
    res.send(data)
})



//get By id
routerMovieRating.get("/:id",async(req,res)=>{
   const data = await getMovieRatingById(req.params.id)
   res.send(data) 
})

//login
routerMovieRating.post("/loginmovieRating",async(req,res)=>{
    const data = await checkMovieRating(req.body)
    res.send(data)
})

//insert
routerMovieRating.post("/",async(req,res)=>{
    req.body.UserID = req.user.UserID;         
    const data = await insertMovieRating(req.body)
    res.send(data)
})




//edit
routerMovieRating.put("/:id",async(req,res)=>{
    const data = await updateMovieRatingById(req.params.id,req.body)
    res.send(data)
})


//delete
routerMovieRating.delete("/:id",async(req,res)=>{
    const data = await deleteMovieRatingById(req.params.id)
    res.send(data)
})


module.exports = routerMovieRating
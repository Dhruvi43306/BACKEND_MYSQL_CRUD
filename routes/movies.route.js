const express = require("express")
const { getAllMovies, insertMovies, getByIdMovies, updateByIdMovies, deleteByIdMovies,checkLoginMovie } = require("../services/movie.service")
const { authMiddlewearMovie } = require("../middlewear/auth.middlewear")
const routerMovies = express.Router()
routerMovies.use(authMiddlewearMovie)
//get all
routerMovies.get("/",async(req,res)=>{
    const data = await getAllMovies()
    res.send(data)
})


//get by id
routerMovies.get("/:id",async(req,res)=>{
  const data = await getByIdMovies(req.params.id)
  res.send(data)

})

//login
routerMovies.post("/loginmovie",async(req,res)=>{
     const data = await checkLoginMovie(req.body)
    res.send(data)
})

//insert
routerMovies.post("/",async(req,res)=>{
    const data = await insertMovies(req.body)
    res.send(data)
})


//edit
routerMovies.put("/:id",async(req,res)=>{
   const data = await updateByIdMovies(req.params.id,req.body)
   res.send(data)
})


//delete
routerMovies.delete("/:id",async(req,res)=>{
   const data = await deleteByIdMovies(req.params.id)
   res.send(data)

})

module.exports = routerMovies
const express = require("express")
const { getAllUsers, getUserById, updateUSer, deleteUSer, insertUser,checkLogin } = require("../services/user.service")
const {authMiddlewear} = require("../middlewear/auth.middlewear");

const routerUser = express.Router()
routerUser.use(authMiddlewear)

//Get all
routerUser.get("/",async(req,res)=>{
    const data = await getAllUsers()
    res.send(data)
})


//Get by id
routerUser.get("/:id",async(req,res)=>{
    const data = await getUserById(req.params.id)
    res.send(data)
})


//login
routerUser.post("/login",async(req,res)=>{
     const data = await checkLogin(req.body)
    res.send(data)
})

//Insert 
routerUser.post("/",async(req,res)=>{
     const data = await insertUser(req.body)
    res.send(data)
})


//Edit
routerUser.put("/:id",async(req,res)=>{
    const data = await updateUSer(req.params.id,req.body)
    res.send(data)
})

//Delete
routerUser.delete("/:id",async(req,res)=>{
     const data = await deleteUSer(req.params.id)
    res.send(data)
})







module.exports = routerUser

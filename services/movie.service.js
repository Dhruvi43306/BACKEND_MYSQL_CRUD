const { getAllmovie, getByIdmovie, updatemovie, deleteIdmovie,insertmovie, getByMoviesName } = require("../models/movies.model")
var jwt = require('jsonwebtoken');

async function getAllMovies(){
    const data = await getAllmovie()
    if(data){
        return{
            error:false,
            data,
            message:"All Movie feched sucessFully"
 
        }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching the All Movie"
 
        }
    }
}

async function getByIdMovies(id){
    const data = await getByIdmovie(id)
     if(data){
        return{
            error:false,
            data,
            message:" Movie feched by id sucessFully"
 
        }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching By id Movie"
 
        }
    }
}

async function insertMovies(formdata){
    const data = await insertmovie(formdata)
     if(data){
        return{
            error:false,
            data,
            message:"inserted All Movie fetched sucessFully"
 
        }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching the insert Movie"
 
        }
    }
}

async function updateByIdMovies(id,formdata){
    const data = await updatemovie(id,formdata)
     if(data){
        return{
            error:false,
            data,
            message:"All Movie Updated sucessFully"
 
        }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching the Update Movie"
 
        }
    }
}

async function deleteByIdMovies(id){
    const data = await deleteIdmovie(id)
    if(data){
        return{
            error:false,
            data,
            message:"All Movie Delete sucessFully"
 
        }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching the Delete Movie"
 
        }
    }
}
async function checkLoginMovie(formdata){
    const data = await getByMoviesName(formdata.MovieName)
    if(data){
        if(data.MovieName == formdata.MovieName){
            var token = jwt.sign(data, 'shhhhh');
             return{
                error:false,
                data:token,
                message:" Movie feched sucess"
            }
        }
         return{
            error:true,
            message:"Moviename/password does not match"
        }; 
    }
     else{
        return{
            error:true,
            message:"Moviename/password does not match"
        };
     }

}
module.exports = {getAllMovies,getByIdMovies,insertMovies,updateByIdMovies,deleteByIdMovies,checkLoginMovie}
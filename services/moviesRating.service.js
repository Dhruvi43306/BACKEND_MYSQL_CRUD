const { getAllmovieRating, getByIDmovieRating, insertmovieRating, updateByIdmovieRating, deleteByIDmovieRating,getMovivesUSerName } = require("../models/moviesRating.model");
var jwt = require('jsonwebtoken');

async function getAllMoviesRating(){
    const data = await getAllmovieRating()
    if(data){
        return{
            error:false,
            data,
            message:"All MovieRating feched sucessFully"
 
        }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching the All MovieRating"
 
        }
    }
}

async function getMovieRatingById(id){
    const data = await getByIDmovieRating(id)
    if(data){
        return{
            error:false,
            data,
            message:" MovieRating feched by id sucessFully"
 
        }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching By id MovieRating"
 
        }
    }
}

async function insertMovieRating(formdata){
    const data = await insertmovieRating(formdata)
    if(data){
        return{
            error:false,
            data,
            message:"inserted All MovieRating fetched sucessFully"
 
        }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching the insert MovieRating"
 
        }
    }
}

async function updateMovieRatingById(id,formdata){
    const data = await updateByIdmovieRating(id,formdata)
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


async function deleteMovieRatingById(id){
    const data = await deleteByIDmovieRating(id)
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

async function checkMovieRating(formdata){
    const data =await getMovivesUSerName(formdata.UserID)
     if(data){
            if(data.UserID == formdata.UserID){
                var token = jwt.sign(data, 'shhhhh');
                 return{
                    error:false,
                    data:token,
                    message:" MovieRating feched sucess"
                }
            }
             return{
                error:true,
                message:"MovieRating/password does not match"
            }; 
        }
         else{
            return{
                error:true,
                message:"MovieRating/password does not match"
            };
         }

}
module.exports = {getAllMoviesRating,getMovieRatingById,insertMovieRating,updateMovieRatingById,deleteMovieRatingById,checkMovieRating}
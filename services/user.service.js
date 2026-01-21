const { getAll, getById,insert,update, deleteById,getByUserName } = require("../models/users.model")
var jwt = require('jsonwebtoken');
async function getAllUsers(){
    
    const data = await getAll()
    if(data){
        return{
        error:false,
        data,
        message:"All User feched sucess"
    }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fetching the All user"
        };
    }
}

async function checkLogin(formdata){
    
    const data = await getByUserName(formdata.UserName)
    
    if(data){
        if(data.Password === formdata.Password){
            var token = jwt.sign(data, 'shhhhh');

            return{
                error:false,
                data:token,
                message:" User feched sucess"
            }
        }
        return{
            error:true,
            message:"Username/password does not match"
        };   
    }
    else{
        return{
            error:true,
            message:"Username/password does not match"
        };
     }
}


async function getUserById(id){
 const data = await getById(id)
    if(data){
        return{
        error:false,
        data,
        message:"User fechedByID sucessFully"
    }
    }
    else{
        return{
            error:true,
            message:"Some error occured while fechedByID the user"
        };
    }}

async function insertUser(formdata){
   const data = await insert(formdata)
    if(data){
        return{
        error:false,
        data,
        message:"User Inserted sucessFully"
    }
    }
    else{
        return{
            error:true,
            message:"Some error occured while Inserted the user"
        }};
}

async function updateUSer(id,formdata){
    const data = await update(id,formdata)
    if(data){
        return{
        error:false,
        data,
        message:"User Updated sucessFully"
    }
    }
    else{
        return{
            error:true,
            message:"Some error occured while Updated the user"
        }};
}


async function deleteUSer(id){
   const data = await deleteById(id)
    if(data){
        return{
        error:false,
        data,
        message:"User Deleted sucessFully"
    }
    }
    else{
        return{
            error:true,
            message:"Some error occured while Deleted the user"
        }};
    }

module.exports = {getAllUsers,getUserById,insertUser,updateUSer,deleteUSer,checkLogin}
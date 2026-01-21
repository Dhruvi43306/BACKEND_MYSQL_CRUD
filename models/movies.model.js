const db = require("../db/mysql")

async function getAllmovie(){
    try{
    const [data,fields] =await db.query("SELECT * FROM movies")
    return data
    }
    catch(err){
        return false
    }
}


async function getByIdmovie(id){
    try{
        const [data,fields] = await db.query(`SELECT * FROM movies where MovieID = ${id}`)
        return data
    }
    catch(err){
        return false
    }
}



async function insertmovie(formdata){
    try{
    const [data,fields] = await db.query(`INSERT INTO movies (MovieID, MovieName, MovieImage) VALUES (NULL, '${formdata.MovieName}', '${formdata.MovieImage}')`)
        return data
    }
    catch(err){
        return false
    }
}



async function updatemovie(id,formdata){
    try{
        const [data,fields] = await db.query(`UPDATE movies SET MovieName = '${formdata.MovieName}', MovieImage = '${formdata.MovieImage}' WHERE movies.MovieID = ${id}`)
            return data
    }
    catch(err){
        return false
    }
}



async function deleteIdmovie(id){
    try{
        const [data,fields] = await db.query(`DELETE FROM movies WHERE movies.MovieID = ${id}`)
            return data
    }
    catch(err){
        return false
    }
}

async function getByMoviesName(mn){
try{
    const [data,fields] = await db.query(`SELECT * FROM movies WHERE MovieName='${mn}'`)
    return data[0];
    }
    catch(err){
        return false
    }
}

module.exports = {getAllmovie,getByIdmovie,insertmovie,updatemovie,deleteIdmovie,getByMoviesName}


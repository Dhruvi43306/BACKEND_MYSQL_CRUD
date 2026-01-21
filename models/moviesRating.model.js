const db = require("../db/mysql")

async function getAllmovieRating(){
    try{
        const [data,field] = await db.query(
    `SELECT m.MovieName, u.UserName, mr.RatingStar
    FROM movie_rating mr
    JOIN movies m ON mr.MovieID = m.MovieID
    JOIN users u ON mr.UserID = u.UserID`)
    console.log(data)
        return data
    }
    catch(err){
        return false
    }
}
async function getByIDmovieRating(id){
    try{
        const [data,field] = await db.query(
    `SELECT m.MovieName, u.UserName, mr.RatingStar
    FROM movie_rating mr
    JOIN movie m ON mr.MovieID = m.MovieID
    JOIN users u ON mr.UserID = u.UserID
    where mr.UserID = ${id}`)
        return data
    }
    catch(err){
        return false
    }
}
async function insertmovieRating(formdata){
    try{
        const [data,field] = await db.query(
            `INSERT INTO movie_rating 
            (MovieID, UserID, RatingStar, RatingComment)
            VALUES (?, ?, ?, ?)`,
            [
                formdata.MovieID,
                formdata.UserID,
                formdata.RatingStar,
                formdata.RatingComment
            ])
                console.log(data)

        return data
    }
    catch(err){
        return false
    }
}
async function updateByIdmovieRating(id,formdata){
    try{
        const [data,field] = await db.query(
            `UPDATE movie_rating 
             SET RatingStar = ?, RatingComment = ?
             WHERE RatingID = ?`,
            [formdata.RatingStar, formdata.RatingComment, id])
        return data
    }
    catch(err){
        return false
    }
}
async function deleteByIDmovieRating(id){
    try{
        const [data,field] = await db.query(`DELETE FROM movie_rating WHERE movie_rating.RatingID = ${id}`)
        return data
    }
    catch(err){
        return false
    }
}

async function getMovivesUSerName(id){
    try{
    const [data,fields] = await db.query(`SELECT * FROM users where UserID='${id}'`)
    return data[0];
    }
    catch(err){
        return false
    }
}

module.exports = {getAllmovieRating,getByIDmovieRating,insertmovieRating,updateByIdmovieRating,deleteByIDmovieRating,getMovivesUSerName}
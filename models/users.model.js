const db = require("../db/mysql")

async function getAll(){
    try{
    const [data,fields] = await db.query("SELECT * FROM users")
    return data;
    }
    catch(err){
        return false
    }
}


async function getById(id){
    try{
    const [data,fields] = await db.query(`SELECT * FROM users where UserID=${id}`)
    return data[0];
    }
    catch(err){
        return false
    }
}


async function getByUserName(un){
    try{
    const [data,fields] = await db.query(`SELECT * FROM users where UserName='${un}'`)
    return data[0];
    }
    catch(err){
        return false
    }
}

async function insert(id,formdata){
    try{
    const [data,fields] = await db.query(`INSERT INTO users (UserID, UserName, Password) VALUES (NULL, '${formdata.UserName}', '${formdata.Password}')`)
    return data;
    }
    catch(err){
        return false
    }
}

async function update(id,formdata){
    try{
    const [data,fields] = await db.query(`UPDATE users SET UserName = '${formdata.UserName}', Password = '${formdata.Password}' WHERE users.UserID = ${id};`)
    return data;
    }
    catch(err){
        return false
    }
}

async function deleteById(id){
    try{
    const [data,fields] = await db.query(`DELETE FROM users WHERE userID = ${id}`)
    return data;
    }
    catch(err){
        return false
    }
}
module.exports = {getAll,getById,insert,update,deleteById,getByUserName}
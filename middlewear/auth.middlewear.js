var jwt = require('jsonwebtoken');

function authMiddlewear(req,res,next){
     try{
        if(req.url.toString().indexOf('login')>-1){
            next();
        }
        else{
         var decoded = jwt.verify(req.headers.authorization.split(" ")[1], 'shhhhh');
         next()
        }
    }
    catch(err){
        res.status(401).send({error:true,message:"Unauthorized"})
    }
}

function authMiddlewearMovie(req,res,next){
     try{
        if(req.url.toString().indexOf('loginmovie')>-1){
            next();
        }
        else{
         var decoded = jwt.verify(req.headers.authorization.split(" ")[1], 'shhhhh');
         next()
        }
    }
    catch(err){
        res.status(401).send({error:true,message:"Unauthorized"})
    }
}

function authMiddlewearMovieRating(req,res,next){
     try{
        if(req.url.toString().indexOf('loginmovieRating')>-1){
            next();
        }
        else{
         var decoded = jwt.verify(req.headers.authorization.split(" ")[1], 'shhhhh');
         req.user = decoded;
        next()
        }
    }
    catch(err){
        res.status(401).send({error:true,message:"Unauthorized"})
    }
}
module.exports = {authMiddlewear,authMiddlewearMovie,authMiddlewearMovieRating}
let jwt = require('jsonwebtoken')
let { SECRET_KEY } = require('../config')

async function createToken(userId){
    try{

        let payload = {
            userId : userId,
            isAuth : true
        }

        let token = jwt.sign(payload, SECRET_KEY, {expiresIn : '1h'})
        return token
    }catch(err){
        return err
    }   
}

function authenticateToken(req, res, next){
    try{
        let {token} = req.body
        jwt.verify(token, SECRET_KEY)
        return next()
    }catch(err){
        return next(err)
    }
}




module.exports = {
    createToken,
    authenticateToken
}


const express = require("express");

const jsonSchema = require("jsonschema")

const { createToken, authenticateToken } = require("../Middleware/JWT")

const userRegisterValidation = require("../JSON_schema/UserRegisterValidation.json")
const userLoginValidation = require("../JSON_schema/UserLoginValidation.json")
const userApartmentAuthValidation = require("../JSON_schema/UserApartmentAuthValidation.json")

const Users = require("../models/users")


const router = express.Router()

// user routes for login, register, update user, rent apartment, delete user, user apartment
// use of JSONWEBTOKENS for authorization
// jwt information found in middleware folder
// json schema used to verify req.body is correct else it wont work



router.post("/login", async (req, res, next) => {
    try{
        const validator = jsonSchema.validate(req.body, userLoginValidation)
        if(validator.valid){
            const { username, password } = req.body
            const user = await Users.getUser(username, password)
            if(user) {
                let token = await createToken(user.id)
                return res.json({token, user})
            }else res.json({ 'msg' : 'username or password is incorrect/non existent'})
        }else{
            return res.json({ 'msg' : validator.errors.map(e => e.stack)})
        }
    }catch(err){
        return next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try{
        const validator = jsonSchema.validate(req.body, userRegisterValidation)
        if(validator.valid){
            let { firstname, lastname, username, password, email } = req.body
            const user = await Users.addUser(firstname, lastname, username, password, email)
            let token = await createToken(user.id)
            return res.status(201).json({user, token})
        }else{
            return res.json({ 'msg' : validator.errors.map(e => e.stack)})
        }
    }catch (err){
        return next(err)
    }
})

router.patch("/user/user-info", authenticateToken, async (req, res, next) => {
    try{
        const { username, isAuthenticated, data } = req.body
        if(isAuthenticated){
            let userChange = await Users.updateUser(username, data)
            return res.json({userChange})
        }else{
            return res.json({'msg' : 'you are not authorized'})
        }
    }catch (err){
        return next(err)
    }
})

router.delete("/user/delete-user", authenticateToken, async (req, res, next) => {
    try{
        const {username, isAuthenticated } = req.body
        if(isAuthenticated){
            let deletedUser = await Users.deleteUser(username)
            return res.json({deletedUser, 'msg' : 'Deleted Successfully'})
        }else{
            return res.json({ 'msg' : 'User is not authorized to delete'})
        }
    }catch (err){
        console.log('here')
        return next(err)
    }
})

router.post("/user/apartment/rental-application", authenticateToken, async (req, res, next) => {
    try{
        let { username, apt_style, apt_num, monthly_income, credit_score, lease_start, lease_end, lease_term } = req.body
        let rentedApartment = await Users.rentApartment(username, apt_style, apt_num, monthly_income, credit_score,lease_term, lease_start, lease_end )
        return res.json(rentedApartment)
    }catch (err){
        return next(err)
    }
})

router.post("/user/apartment", authenticateToken, async (req, res, next) => {
    try{
        const validator = jsonSchema.validate(req.body, userApartmentAuthValidation)
        if(validator.valid){
            let { username, isAuthenticated } = req.body
            if(isAuthenticated){
                const userApartmentInfo = await Users.getUserApartmentInfo(username)
                return userApartmentInfo ? res.json(userApartmentInfo) : res.json({ 'msg' : 'user does not have an apartment'})
            }else{
                return res.json({ 'msg' : ''})
            }
        }else{
            return res.json({ 'msg' : validator.errors.map(e => e.stack)})
        }
    }catch(err){
        return next(err)
    }
})




module.exports = router
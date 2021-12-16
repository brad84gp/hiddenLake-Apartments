

const express = require("express");

const Apartments = require("../models/apartments")


const router = express.Router()


router.get("/", async function (req, res, next) {
    try{
        const apartments = await Apartments.getApartments()
        return res.json({apartments})
    }catch (err){
        return next(err)
    }
})



module.exports = router;

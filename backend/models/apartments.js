"use strict";

const db = require("../db");


class Apartments{

    // gets all apartments listed in database for front end viewing

    static async getApartments(){
        const result = await db.query(
            `SELECT * FROM apartments`
        )

        return result.rows
    }

    static async getApartmentDetails(){
        const results = await db.query(`SELECT * FROM apartmentDetails`)
        return results.rows
    }


    // updates apartment rent status to true if apt exists in apartments table and monthly income, credit score are correct
    // if aparmtnet is already rented, returns false
    
    static async adjustApartmentTableRentStatusTrue(aptName, aptNum, monthlyIncome, creditScore){
        
        
        let selectedApartment = await db.query(`SELECT * FROM apartments WHERE apt_style = $1 AND apt_num = $2`, [aptName, aptNum])
        
        let aptInfo = selectedApartment.rows[0]

        if(aptInfo.apt_rented === true) return false

        if(aptInfo && monthlyIncome >= aptInfo.unit_cost * 2 && creditScore > 600){
            try{
                await db.query(`UPDATE apartments SET apt_rented = true WHERE apt_num = $1`, [aptInfo.apt_num])
                return aptInfo
            }catch(err){
                return err
            }
        }
    

    }


    // updates apartment rent status to false and returns true

    static async adjustApartmentTableRentStatusFalse(aptNum){

        
        let selectedApartment = await db.query(`SELECT * FROM apartments WHERE apt_num = $1`, [aptNum])
        
        let aptInfo = selectedApartment.rows[0]

        if(aptInfo){
            try{
                await db.query(`UPDATE apartments SET apt_rented = false WHERE apt_num = $1`, [aptInfo.apt_num])
                return true
            }catch(err){
                return err
            }
        }
    

    }

    
}

module.exports = Apartments
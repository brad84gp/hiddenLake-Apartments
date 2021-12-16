
"use strict";

const db = require("../db");

const bcrypt = require("bcrypt")

const { BCRYPT_WORK_FACTOR } = require("../config.js");

const Apartments = require('./apartments')

class Users{

    // POST RELATED ROUTES FOR USERS
    // addUser() adds new user information to the database. First checks if users exists, if not, then hash password and store information in database

    static async addUser(firstName, lastName, userName, password, email){

        let userCheck = await db.query(
            `SELECT * FROM users WHERE firstname = $1 AND lastname = $2`, [firstName, lastName]
        )
    
        if(!userCheck.rows.length) {

            const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

            let result = await db.query(
                `INSERT INTO users (firstname, lastname, username, password, email) VALUES ($1, $2, $3, $4, $5) RETURNING firstname, lastname, username, email`,
                [
                    firstName,
                    lastName,
                    userName,
                    hashedPassword,
                    email
                ]
            )
            return result.rows[0]
        }else return { 'user' : userCheck.rows[0], 'msg' : 'user exists' }
    }

    // getUser() will check and see if username is in database, if it is, pwd is compared to given password. If password is true, everything but user password is returned

    static async getUser(userName, password){
        console.log(userName, password)
            let response = await db.query(`SELECT * FROM users WHERE username = $1`, [userName])

            let user = response.rows[0]

            if(user) {

                let pwd = await bcrypt.compare(password, user.password)
                
                if(pwd === true){
                    delete user.password
                    let userAptInfo = await this.getUserApartmentInfo(user.username)
                    return {user, userAptInfo}
                }
            }else return null
        
            
    }

    // updateUser() finds user, and then imputs the user data if data is null being passed in. Then users row is updated with object data 

    static async updateUser(username, data){
        
        let userInfo = await db.query('SELECT * FROM users WHERE username = $1', [username])

        let user = userInfo.rows[0]

        let userData = {
            "firstname" : data.firstname != null ? data.firstname : user.firstname,
            "lastname" : data.lastName != null ? data.lastname : user.lastname,
            "username" : data.username != null ? data.username : user.username,
            "email" : data.email != null ? data.email : user.email
        }

        let result = await db.query(`UPDATE users SET firstname = '${userData.firstname}', lastname = '${userData.lastname}', username = '${userData.username}', email = '${userData.email}'
                                     WHERE id = $1 RETURNING firstname, lastname, username, email`, [user.id])

        return result.rows[0]


    }

    // deleteUser() this finds the users and then deltes them. When users is deleted, their apartment data is deleted and apartment rented status updated in apartments table

    static async deleteUser(username){
        try{ 
            let result = await db.query('SELECT * FROM users WHERE username = $1', [username])

            let user = result.rows[0]

            let apartment = await db.query(`SELECT * FROM user_apt WHERE user_id = $1`, [user.id])

            let userApt = apartment.rows[0]

            await Apartments.adjustApartmentTableRentStatusFalse(userApt.unit_number)

            let deleteResult = await db.query('DELETE FROM users WHERE username = $1', [username])

            return deleteResult.rows[0]
        }catch (err){
            return err
        }
    }

    // getUsreApartmentInfo() return users apartment information 

    static async getUserApartmentInfo(userName){
        let user = await db.query(`SELECT * FROM users WHERE username = $1`, [userName])

        if(user.rows[0]) {
            const userApartment = await db.query(`SELECT * FROM user_apt WHERE user_id = $1`, [user.rows[0].id])
            return userApartment.rows[0]
        }
    }


    // first user is verified, then apartment rent status is updated if income and credit are correct
    // if apartment object is returned, user apartment information is added, else nothing is returned 

    static async rentApartment(username, aptName, aptNum, monthlyIncome, creditScore, leaseTerm, leaseStartDate, leaseEndDate){
        let userInfo = await db.query(`SELECT * FROM users WHERE username = $1`, [username])

        const user = userInfo.rows[0]

        let apartment = await Apartments.adjustApartmentTableRentStatusTrue(aptName, aptNum, monthlyIncome, creditScore)

        if(apartment){
            let updateUserApartment = await db.query(`INSERT INTO user_apt (user_id, lease_term_months, monthly_rent, lease_start_date, lease_end_date, unit_number, unit_style) 
                                                        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING user_id, lease_term_months, monthly_rent, lease_start_date, lease_end_date, unit_number, unit_style`
                                                        ,[
                                                            user.id,
                                                            leaseTerm,
                                                            apartment.unit_cost,
                                                            leaseStartDate,
                                                            leaseEndDate,
                                                            apartment.apt_num,
                                                            apartment.apt_style
                                                        ])
            return updateUserApartment.rows[0]
            }                                                    
        }
    
}

module.exports = Users
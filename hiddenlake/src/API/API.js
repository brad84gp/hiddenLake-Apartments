const axios = require("axios")

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class ApartmentAPI {

    static async request(route, data = {}, method = 'GET'){
        console.log(route, data, method)

        try{
            return await axios({
                method : method,
                url : `${BASE_URL}/${route}`,
                headers : {
                    'Content-Type' : 'application/json'
                },
                data : JSON.stringify(data)
            })
        }catch (err){
            console.log(err)
        }
     
    }

    static async registerUser(userData){
        let response = await this.request('users/register', userData, 'POST')
        return response.data
    }

    static async loginUser(userData){
        let response = await this.request('users/login', userData, 'POST')
        return response.data
    }

    static async getApartmentInfo(){
        let response = await this.request('apartments')
        return response.data
    }


}

export default ApartmentAPI
import React from "react";

import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import ApartmentAPI  from "../API/API";

const RegisterForm = () => {


    async function handleSubmit(el){
        el.preventDefault()
        let userData = {
            'firstname' : el.target[0].value,
            'lastname' : el.target[1].value,
            'username' : el.target[2].value,
            'email' : el.target[3].value,
            'password' : el.target[4].value
        }
        let response = await ApartmentAPI.registerUser(userData)
        // fix me //
        // once redux store is added, correct path data handling and dispatch updatad userinfo and keep logged in

    }


    return (
        <Form style={{border : '2px solid white', padding : '10%', marginTop : '2.5em'}} onSubmit={handleSubmit}>
            <FormGroup >
                <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                type="text"
                />
            </FormGroup>
            <FormGroup style={{marginTop : '2em'}}>
                <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                />
            </FormGroup>
            <FormGroup style={{marginTop : '2em'}}>
                <Input
                id="ususernamerEmail"
                name="username"
                placeholder="Username"
                type="text"
                />
            </FormGroup>
            <FormGroup style={{marginTop : '2em'}}>
                <Input
                id="userEmail"
                name="userEmail"
                placeholder="User Email"
                type="email"
                />
            </FormGroup>
            <FormGroup style={{marginTop : '2em'}}>
                <Input
                id="userPassword"
                name="userPassword"
                placeholder="Password"
                type="password"
                />
            </FormGroup>
            <Button color='success' style={{width : '100%'}}>Submit</Button>
        </Form>
    )
}

export default RegisterForm
import React from "react";

import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import ApartmentAPI from "../API/API";


const LoginForm = () => {

    async function handleSubmit(el){
        el.preventDefault()
        let userData = {
            'username' : el.target[0].value,
            'password' : el.target[1].value
        }
        let response = await ApartmentAPI.loginUser(userData)
         // fix me //
        // once redux store is added, correct path data handling and dispatch updatad userinfo and keep logged in
    }

    return (
        <Form style={{border : '2px solid white', padding : '10%', marginTop : '2.5em'}} onSubmit={handleSubmit}>
            <FormGroup >
                <Input
                id="username"
                name="username"
                placeholder="Username"
                type="text"
                />
            </FormGroup>
            <FormGroup style={{marginTop : '2em'}}>
                <Input
                id="userPassword"
                name="password"
                placeholder="Password"
                type="password"
                />
            </FormGroup>
            <Button color="success" style={{width : '100%'}}>Submit</Button>
        </Form>
    )
}

export default LoginForm
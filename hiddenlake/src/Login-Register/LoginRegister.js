import React, { useEffect, useState } from 'react'

import './LoginRegister.css'

import { Row, Col } from 'reactstrap'
import LoginForm from './Login'
import RegisterForm from './Regiser'


const LoginRegisterComponent = () => {

    const [loginRegiser, setLoginRegister] = useState(false)

    return (
        <div>
            <Row style={{marginTop : '5em'}}>
                <Col>
                </Col>

                <Col>
                    <Row>
                        <Col>
                            <input type="checkbox" name="switch" id="switch" onClick={ el => setLoginRegister(el.target.checked)}/>
                            <label className="slider" for="switch"></label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {loginRegiser ? <RegisterForm /> :  <LoginForm />}
                        </Col>
                    </Row>
                </Col>

                <Col>
                </Col>
            </Row>
          
            
        </div>
    )
}

export default LoginRegisterComponent
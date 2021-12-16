import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import AptImages from './aptImages'

import './homePage.css'




import IntroVideo from './introVideo'

const HomePage = () => {


    return (
       <Container fluid>
           <Row>
               <Col>
                    <IntroVideo />
               </Col>
            </Row>
            
            <Row xs='2'>
                <Col>
                    <h1>RELAXATION STARTS HERE</h1>
                </Col>
                <Col>
                    <p>Here at the hidden lake apartments, we garuntee that you will find your paradise. You will instantly be swept
                        away by our breathtaking views that over look hidden lake. Having your home feel like a getaway is something
                        we pride ourselves on. Whether it is our friendly concierge, amazing views, waterside activites, etc. We garuntee
                        that you will be nothing less than satisfied in your new home!
                    </p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <AptImages />
                </Col>
            </Row>
       </Container>
    )
}

export default HomePage
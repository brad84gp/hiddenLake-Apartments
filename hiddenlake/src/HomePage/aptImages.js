import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import oneBedroom from '../Videos&Images/1bed1bath.png'
import twoBedroom from '../Videos&Images/2bed2bath.png'
import threeBedroom from '../Videos&Images/3bed2bath.png'

const AptImages = () => {


    return (
        <Container fluid>
            <Row xs='1' md='2' >
                <Col style={{display : 'flex', justifyContent : 'center'}}>
                    <img id="aptImg" src={oneBedroom} alt='' />
                </Col>
                <Col style={{display : 'flex', justifyContent : 'center'}}>
                    <img id="aptImg" src={twoBedroom} alt='' />
                </Col>
                <Col style={{display : 'flex', justifyContent : 'center'}}>
                    <img id="aptImg" src={threeBedroom} alt='' />
                </Col>
            </Row>
        </Container>
    )
}

export default AptImages
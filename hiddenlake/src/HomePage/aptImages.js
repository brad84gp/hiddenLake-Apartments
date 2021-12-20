import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import oneBedroom from '../Videos&Images/1bed1bath.svg'
import twoBedroom from '../Videos&Images/2bed2bath.svg'
import threeBed2Bath from '../Videos&Images/3bed2bath.svg'
import twoBed2BathDen from '../Videos&Images/2bed2bathden.svg'
import oneBedOneBath650 from '../Videos&Images/1bed1bath650.svg'
const AptImages = () => {


    return (
        <Container fluid>
            <Row xs='1'  sm='2' md='3' >
                <Col style={{display : 'flex', justifyContent : 'center'}}>
                    <img id="aptImg" src={oneBedOneBath650} alt='' />
                </Col>
                <Col style={{display : 'flex', justifyContent : 'center'}}>
                    <img id="aptImg" src={oneBedroom} alt='' />
                </Col>
                <Col style={{display : 'flex', justifyContent : 'center'}}>
                    <img id="aptImg" src={twoBed2BathDen} alt='' />
                </Col>
                <Col style={{display : 'flex', justifyContent : 'center'}}>
                    <img id="aptImg" src={twoBedroom} alt='' />
                </Col>
                <Col style={{display : 'flex', justifyContent : 'center'}}>
                    <img id="aptImg" src={threeBed2Bath} alt='' />
                </Col>
            </Row>
        </Container>
    )
}

export default AptImages
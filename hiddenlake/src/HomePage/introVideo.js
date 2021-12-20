import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import './homePage.css'

import introVideo from '../Videos&Images/into_video.mp4'

const IntroVideo = () => {


    return (
        <Container fluid className='videoContainer'>
            <Row>
                <Col>
                    <video id="video" muted loop controls video="true" autoPlay >
                        <source src={introVideo} type='video/mp4'></source>
                    </video>
                </Col>
            </Row>
        </Container>
    )
}

export default IntroVideo
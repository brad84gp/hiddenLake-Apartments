import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { Button, Row, Col } from 'reactstrap'

import toggleContext  from '../Context/context'

import './aptInfo.css'

function AptInfo(props) {
    const { handleClick }= useContext(toggleContext)
    
    const { apartment, aptImage } = props
    console.log(apartment[0].apt_style)

    useEffect(() =>{
        let div = document.getElementById('aptInfoSideView')
        div.style.width = '1000px'
    }, [])

    function handleBtnClick(evt){
        let div = document.getElementById('aptInfoSideView')
        div.style.width = '0'
        setTimeout(() => {
            handleClick()
        }, 2000);
    }

    function findNumAvailable(){
        let arr = apartment.map( el => {
            if(el.apt_rented == false) return el
        })

        return arr.length
    }

    return (
        <div id='aptInfoSideView'>
            <Button id="btn" onClick={handleBtnClick}>X</Button>
            <Row>
                <Col>
                    <img id="overlayImg" src={aptImage} alt="" />
                </Col>
                <Col>
                    {/* <h1><b><u>{aptInfo[0].apt_style}</u></b></h1>
                    <ul id="aptData">
                        <li>Available: {findNumAvailable()}</li>
                        <li>Unit Cost: ${aptInfo[0].unit_cost}</li>
                        <li>Rooms: {aptInfo[0].rooms}</li>
                        <li>Bathrooms: {aptInfo[0].bathrooms}</li>
                        <li>Square Ft: {aptInfo[0].square_ft}</li>
                    </ul> */}
                </Col>
            </Row>
        </div>
    )
}

export default AptInfo
import React, { useState } from 'react'

import {  Row, Col } from 'reactstrap'


const AptImage = ({apartmentData, images}) => {

    const [apartment, setApartment] = useState({
        'apartmentData' : apartmentData,
        'images' : images
    })

    console.log(apartment)

    function handleHover(el){
        let aptImg = el.target
        let aptInfo = aptImg.nextElementSibling
        let aptData = aptInfo.nextElementSibling
        aptImg.style.opacity = .5
        aptInfo.style.top = '90%'
        aptInfo.style.color = 'red'
        aptData.style.height = '50%'
        
    }

    function handleLeave(el){
        let aptImg = el.target
        let aptInfo = aptImg.nextElementSibling
        let aptData = aptInfo.nextElementSibling
        aptImg.style.opacity = 1
        aptInfo.style.top = '75%'
        aptInfo.style.color = 'black'
        aptData.style.height = '0%'
    }

    return(
        <Col style={{display : 'flex', justifyContent : 'center', position : 'relative'}}>
            <img id="aptImg" src={apartment.images.image} alt='' onMouseOver={handleHover} onMouseLeave={handleLeave}  />
            <div id="aptTitle">
                <h2>{apartment.apartmentData.apt_style}</h2>
            </div>
            <div id="aptData" disable>
                <ul >
                    <li>Unit Cost: ${apartment.apartmentData.unit_cost}</li>
                    <li>Rooms: {apartment.apartmentData.rooms}</li>
                    <li>Bathrooms: {apartment.apartmentData.bathrooms}</li>
                    <li>Square Ft: {apartment.apartmentData.square_ft}</li>
                </ul>
            </div>
        </Col>
    )

}

export default AptImage
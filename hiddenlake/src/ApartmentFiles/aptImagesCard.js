import React, { useContext, useState } from 'react'

import {  Row, Col } from 'reactstrap'

import toggleContext from '../Context/context'


const AptImage = ({apartmentData, images}) => {

    const { handleClick } = useContext(toggleContext)

    const [apartment, setApartment] = useState({
        'apartmentData' : apartmentData,
        'images' : images
    })


    function handleHover(el){
        let aptImg = el.target
        let aptInfo = aptImg.nextElementSibling
        aptImg.style.opacity = .5
        aptInfo.style.top = '90%'
        aptInfo.style.color = 'red'
        
    }

    function handleLeave(el){
        let aptImg = el.target
        let aptInfo = aptImg.nextElementSibling
        aptImg.style.opacity = 1
        aptInfo.style.top = '75%'
        aptInfo.style.color = 'black'
    }

    return(
        <Col style={{display : 'flex', justifyContent : 'center', position : 'relative'}}>
            <img id="aptImg" src={apartment.images.image} alt='' onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={() => handleClick(apartment.apartmentData.apt_style)} />
            <div id="aptTitle">
                <h2>{apartment.apartmentData.apt_style}</h2>
            </div>
        </Col>
    )

}

export default AptImage
import React, { useEffect, useState } from 'react'

import './aptImages.css'

import { Container, Row, Col } from 'reactstrap'

import oneBedroom from '../Videos&Images/1bed1bath.svg'
import twoBedroom from '../Videos&Images/2bed2bath.svg'
import threeBed2Bath from '../Videos&Images/3bed2bath.svg'
import twoBed2BathDen from '../Videos&Images/2bed2bathden.svg'
import oneBedOneBath650 from '../Videos&Images/1bed1bath650.svg'

import oneBedOneBath650Zoomed from '../Videos&Images/1bed1bath650Zoomed.png'
import oneBedroomZoomed from '../Videos&Images/1bed1bathZoomed.png'
import twoBed2BathDenZoomed from '../Videos&Images/2bed2bathdenZoomed.png'
import twoBedroomZoomed from '../Videos&Images/2bed2bathZoomed.png'
import threeBed2BathZoomed from '../Videos&Images/3bed2bathZoomed.png'



import ApartmentAPI from '../API/API'
import AptImage from './aptImagesCard'

const AptImages = () => {
    
    const [apartmentInfo, setApartmentInfo] = useState()

    useEffect(() =>{
        async function getApartmentData(){

            let response = await ApartmentAPI.getApartmentInfo()
            setApartmentInfo(response)
        }

        getApartmentData()
    }, [])

    console.log(apartmentInfo)


    function fetchImages(name){
        switch(name){
            case 'the pebble' :
                return { 'image' : oneBedOneBath650, 'zoomed' : oneBedOneBath650Zoomed}
            case 'the shoreline' :
                return { 'image' : oneBedroom, 'zoomed' :oneBedroomZoomed }
            case 'the gentle breeze' :
                return { 'image' : twoBed2BathDen, 'zoomed' :twoBed2BathDenZoomed }
            case 'the cove' : 
                return { 'image' : twoBedroom, 'zoomed' :twoBedroomZoomed }
            case 'the aquatic' :
                return { 'image' : threeBed2Bath, 'zoomed' :threeBed2BathZoomed }
        }
    }


    return (
        <Container fluid>
            
                <Row xs='1'  sm='2' md='3' >
                    {apartmentInfo && apartmentInfo.map((el, idx) => (
                        <AptImage key={idx} apartmentData={el} images={fetchImages(el.apt_style)} />)
                    )}

                </Row>
        </Container>
    )
}

export default AptImages
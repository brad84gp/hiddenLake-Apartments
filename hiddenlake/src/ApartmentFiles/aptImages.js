import React, { useEffect, useState } from 'react'

import './aptImages.css'

import { Container, Row, Col, Button } from 'reactstrap'

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

import toggleContext from '../Context/context'

import ApartmentAPI from '../API/API'
import AptImage from './aptImagesCard'

const AptImages = () => {
    
    const [apartmentInfo, setApartmentInfo] = useState()

    const [apartment, setApartment] = useState()

    useEffect(() =>{
        async function getApartmentData(){

            let response = await ApartmentAPI.getApartmentInfo()
            setApartmentInfo(response)
        }

        getApartmentData()
    }, [])

    console.log(apartmentInfo, apartment)


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

    async function handleClick(name){
        for(let apt in apartmentInfo){
             if(apartmentInfo[apt].apt_style === name){
                setApartment({ 'apartment' : apartmentInfo[apt], 'image' : fetchImages(name)})
            }
        }
        setTimeout(() => {
            let aptDiv = document.getElementById('aptData')
            aptDiv.style.width = '500px'
        }, 25);
        
    }

    function closeData(){
        setApartment()
    }


    return (
        <Container fluid>
                
                <Row>

                     
                    {apartment && <Col xs={4} id="aptData">
                        <Row id="row1">
                            <Button id="aptInfoBtn" onClick={closeData}>X</Button>
                            <img id="aptInfoImg" src={apartment && apartment.image.zoomed} alt=""/>
                        </Row>
                        <Row id="row2">
                            <h5><b>{apartment.apartment.apt_style.toUpperCase()}</b></h5>
                            <p>{apartment && apartment.apartment.rooms} rooms, {apartment && apartment.apartment.bathrooms} baths, with {apartment && apartment.apartment.square_ft} square ft of space. This unit starts at ${apartment && apartment.apartment.unit_cost} per month!</p>
                        </Row>
                        <Row id="row3">
                            <h5>Interested? if so Apply here!</h5>
                            <Button color="primary" style={{width :'50%'}}>Apply</Button>
                        </Row>
                    </Col>}

                    <Col>
                        <Row xs='1'  sm='2' md='3' >
                            <toggleContext.Provider value={{handleClick}}>
                                {apartmentInfo && apartmentInfo.map((el, idx) => (
                                    <AptImage key={idx} apartmentData={el} images={fetchImages(el.apt_style)} />)
                                )}
                            </toggleContext.Provider>
                        </Row>
                    </Col>
                   
                   
                </Row>
        </Container>
    )
}

export default AptImages
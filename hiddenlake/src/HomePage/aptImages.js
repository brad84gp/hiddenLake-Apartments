import React, { useEffect, useState } from 'react'

import './aptImages.css'

import { Container, Row, Col } from 'reactstrap'

import oneBedroom from '../Videos&Images/1bed1bath.svg'
import twoBedroom from '../Videos&Images/2bed2bath.svg'
import threeBed2Bath from '../Videos&Images/3bed2bath.svg'
import twoBed2BathDen from '../Videos&Images/2bed2bathden.svg'
import oneBedOneBath650 from '../Videos&Images/1bed1bath650.svg'
import ApartmentAPI from '../API/API'



const AptImages = () => {

    const [apartmentInfo, setApartmentInfo] = useState()


    useEffect(() =>{
        async function getApartmentData(){

            let response = await ApartmentAPI.getApartmentInfo()
            let apartments = {}
            for(let i = 0; i<response.apartments.length; i++){
                let name = response.apartments[i].apt_style
                if(!apartments[name]) apartments[name] = [response.apartments[i]]
                else apartments[name].push(response.apartments[i])
            }
            setApartmentInfo(apartments)
        }

        getApartmentData()
    }, [])

    console.log(apartmentInfo)

    

    function numberAvailable(aptStyle){
        let numAvail = apartmentInfo[aptStyle].filter(el => {
            if(el.apt_rented === false) return el
        })
        return numAvail.length
    }

    function unitCost(aptStyle){
        return apartmentInfo[aptStyle][0].unit_cost
    }

    function aptRooms(aptStyle){
        return apartmentInfo[aptStyle][0].rooms
    }

    function aptBathrooms(aptStyle){
        return apartmentInfo[aptStyle][0].bathrooms
    }

    function aptSqaureFt(aptStyle){
        return apartmentInfo[aptStyle][0].square_ft
    }


    return (
        <Container fluid>
            <Row xs='1'  sm='2' md='3' >
                <Col style={{display : 'flex', justifyContent : 'center', position : 'relative'}}>
                    <img id="aptImg" src={oneBedOneBath650} alt='' />
                    <div id="aptInfoDiv">
                        <h4>The Shoreline</h4>
                        <ul id="aptData">
                            <li>Available: {apartmentInfo ? numberAvailable('the shoreline') : null}</li>
                            <li>Unit Cost: {apartmentInfo ? unitCost('the shoreline') : null}</li>
                            <li>Rooms: {apartmentInfo ? aptRooms('the shoreline') : null}</li>
                            <li>Bathrooms: {apartmentInfo ? aptBathrooms('the shoreline') : null}</li>
                            <li>Square Ft: {apartmentInfo ? aptSqaureFt('the shoreline') : null}</li>
                        </ul>
                    </div>
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
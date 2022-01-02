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




import ApartmentAPI from '../API/API'
import AptInfo from './aptInfo'

import toggleContext from '../Context/context'


const AptImages = () => {
    
    const [apartmentInfo, setApartmentInfo] = useState()

    const [toggle, setToggle] = useState(false)

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


    function handleHover(el){
        let aptImg = el.target
        let aptInfo = aptImg.nextElementSibling
        aptInfo.style.top = '90%'
        aptInfo.style.color = 'red'
    }

    function handleLeave(el){
        let aptImg = el.target
        let aptInfo = aptImg.nextElementSibling
        aptInfo.style.top = '75%'
        aptInfo.style.color = 'black'
    }

    function handleClick(){
        setToggle(!toggle)
    }
    

    return (
        <Container fluid>
            
            <toggleContext.Provider value={{handleClick}}>
                <Row xs='1'  sm='2' md='3' >

                    <Col style={{display : 'flex', justifyContent : 'center', position : 'relative'}}>
                        <img id="aptImg" src={oneBedOneBath650} alt='' onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleClick} />
                        <div id="aptInfoDiv">
                            <h2>The Pebble</h2>
                        </div>
                        {toggle && <AptInfo apartment={apartmentInfo['the pebble']} aptImage={oneBedOneBath650Zoomed}/>}
                    </Col>


                    <Col style={{display : 'flex', justifyContent : 'center', position : 'relative'}}>
                        <img id="aptImg" src={oneBedroom} alt='' onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleClick}/>
                        <div id="aptInfoDiv">
                            <h2>The Shoreline</h2>
                            {toggle && <AptInfo apartment={apartmentInfo['the shoreline']} aptImage={oneBedroomZoomed}/>}
                        </div>
                    </Col>


                    <Col style={{display : 'flex', justifyContent : 'center', position : 'relative'}}>
                        <img id="aptImg" src={twoBed2BathDen} alt='' onMouseOver={handleHover} onMouseLeave={handleLeave}/>
                        <div id="aptInfoDiv">
                            <h2>The Gentle Breeze</h2>
                            {/* <ul id="aptData">
                                <li>Available: {apartmentInfo ? numberAvailable('the shoreline') : null}</li>
                                <li>Unit Cost: {apartmentInfo ? unitCost('the shoreline') : null}</li>
                                <li>Rooms: {apartmentInfo ? aptRooms('the shoreline') : null}</li>
                                <li>Bathrooms: {apartmentInfo ? aptBathrooms('the shoreline') : null}</li>
                                <li>Square Ft: {apartmentInfo ? aptSqaureFt('the shoreline') : null}</li>
                            </ul> */}
                        </div>
                    </Col>
                    <Col style={{display : 'flex', justifyContent : 'center', position : 'relative'}}>
                        <img id="aptImg" src={twoBedroom} alt='' onMouseOver={handleHover} onMouseLeave={handleLeave}/>
                        <div id="aptInfoDiv">
                            <h2>The Cove</h2>
                            {/* <ul id="aptData">
                                <li>Available: {apartmentInfo ? numberAvailable('the shoreline') : null}</li>
                                <li>Unit Cost: {apartmentInfo ? unitCost('the shoreline') : null}</li>
                                <li>Rooms: {apartmentInfo ? aptRooms('the shoreline') : null}</li>
                                <li>Bathrooms: {apartmentInfo ? aptBathrooms('the shoreline') : null}</li>
                                <li>Square Ft: {apartmentInfo ? aptSqaureFt('the shoreline') : null}</li>
                            </ul> */}
                        </div>
                    </Col>
                    <Col style={{display : 'flex', justifyContent : 'center', position : 'relative'}}>
                        <img id="aptImg" src={threeBed2Bath} alt='' onMouseOver={handleHover} onMouseLeave={handleLeave}/>
                        <div id="aptInfoDiv">
                            <h2>The Aquatic</h2>
                            {/* <ul id="aptData">
                                <li>Available: {apartmentInfo ? numberAvailable('the shoreline') : null}</li>
                                <li>Unit Cost: {apartmentInfo ? unitCost('the shoreline') : null}</li>
                                <li>Rooms: {apartmentInfo ? aptRooms('the shoreline') : null}</li>
                                <li>Bathrooms: {apartmentInfo ? aptBathrooms('the shoreline') : null}</li>
                                <li>Square Ft: {apartmentInfo ? aptSqaureFt('the shoreline') : null}</li>
                            </ul> */}
                        </div>
                    </Col>
                </Row>
            </toggleContext.Provider>
        </Container>
    )
}

export default AptImages
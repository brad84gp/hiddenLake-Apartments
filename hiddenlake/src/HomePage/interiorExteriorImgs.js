import React, { useState } from 'react'

import './interiorExterior.css'

import { Button } from 'reactstrap'

import image1 from '../Videos&Images/gallery1.jpg'
import image2 from '../Videos&Images/gallery2.jpg'
import image3 from '../Videos&Images/gallery3.jpg'
import image4 from '../Videos&Images/gallery4.jpg'
import image5 from '../Videos&Images/gallery5.jpg'
import image6 from '../Videos&Images/gallery6.jpg'
import image7 from '../Videos&Images/gallery7.jpg'
import image8 from '../Videos&Images/gallery8.jpg'
import image9 from '../Videos&Images/gallery9.jpg'
import image10 from '../Videos&Images/gallery10.jpg'
import image11 from '../Videos&Images/gallery11.jpg'
import image12 from '../Videos&Images/gallery12.jpg'
import image13 from '../Videos&Images/gallery13.jpg'
import image14 from '../Videos&Images/gallery14.jpg'
import image15 from '../Videos&Images/gallery15.jpg'
import image16 from '../Videos&Images/gallery16.jpg'
import image17 from '../Videos&Images/gallery17.jpg'
import image18 from '../Videos&Images/gallery18.jpg'




const imgObj = {
    1 : image1,
    2 : image2,
    3 : image3,
    4 : image4,
    5 : image5,
    6 : image6,
    7 : image7,
    8 : image8,
    9 : image9,
    10 : image10,
    11 : image11,
    12 : image12,
    13 : image13,
    14 : image14,
    15 : image15,
    16 : image16,
    17 : image17,
    18 : image18
}


const InteriorExteriorImages = () => {

    const [imgState, setImageState] = useState(1)


    function prevSlide(){
        let currNum = imgState
        if(currNum === 1) setImageState(18)
        else setImageState(currNum -= 1)
    }

    function nextSlide(){
        let currNum = imgState
        if(currNum === 18) setImageState(1)
        else setImageState(currNum += 1)
    }




    return (
        <div id='imgsDiv'>
            <Button id="prev" onClick={prevSlide}>Prev</Button>
                <img src={imgObj[imgState]} alt="" />
            <Button id="next" onClick={nextSlide}>Next</Button>
        </div>
    )
}

export default InteriorExteriorImages
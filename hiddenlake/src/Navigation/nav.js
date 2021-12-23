import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, 
    NavItem, NavLink, Button } from 'reactstrap'

const Navigation = () => {

    function scrollToGallery(){
       document.querySelector("#imgsDiv").scrollIntoView({ behavior: 'smooth' })
    }

    function scrollToContact(){
        document.querySelector(".formDiv").scrollIntoView({ behavior: 'smooth' })
     }

    //  fix me //
    // need to fix the gallery and contact scroll fuctions to only work when on home page
    

    return (
        <div >
            <Navbar
                color="light"
                expand="md"
                fixed="top"
                full
                light
                style={{position : 'fixed'}}
                
            >
                <NavbarBrand href="/" style={{paddingLeft : '2%'}}>
                HIDDEN LAKE 
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>

                <Nav
                    className="me-auto"
                    navbar
                    style={{position : 'fixed', right : '2%'}}
                >
                    
                    <NavItem>
                        <NavLink href="/Login&Register">
                            Login/Register
                        </NavLink>
                    </NavItem>
                   
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
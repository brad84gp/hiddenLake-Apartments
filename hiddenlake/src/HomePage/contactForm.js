import React from 'react'

import './contactForm.css'

import { Form, Label, Input, FormGroup, Button, legend} from 'reactstrap'

const ContactForm = () => {

    return (
        <div className='formDiv'>
            <Form inline>
                <FormGroup>
                <Label
                    for="email"
                    hidden
                >
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                </FormGroup>
                {' '}
                <FormGroup>
                <Label
                    for="phoneNumber"
                    hidden
                >
                    Phone Number
                </Label>
                <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    type="tel"
                />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="textArea">
                    Questions / Comments
                    </Label>
                    <Input
                    id="textArea"
                    name="text"
                    placeholder='Share any questions you might have!'
                    type="textarea"
                    />
                </FormGroup>
                <FormGroup tag="fieldset" >
                    <legend>
                        Select apartments you're interested in
                    </legend>
                    <FormGroup check id="radioBtns">
                        <Input
                        name="the pebble"
                        type='checkbox'
                        />
                        {' '}
                        <Label check>
                            The Pebble
                        </Label>
                    </FormGroup>
                    <FormGroup check id="radioBtns">
                        <Input
                        name="the shoreline"
                        type='checkbox'
                        />
                        {' '}
                        <Label check>
                            The Shoreline
                        </Label>
                    </FormGroup>
                    <FormGroup check id="radioBtns">
                        <Input
                        name="the gentle breeze"
                        type='checkbox'
                        />
                        {' '}
                        <Label check>
                            The Gentle Breeze
                        </Label>
                    </FormGroup>
                    <FormGroup check id="radioBtns">
                        <Input
                        name="the cove"
                        type='checkbox'
                        />
                        {' '}
                        <Label check>
                            The Cove
                        </Label>
                    </FormGroup>
                    <FormGroup check id="radioBtns">
                        <Input
                        name="the aquatic"
                        type='checkbox'
                        />
                        {' '}
                        <Label check>
                            The Aquatic
                        </Label>
                    </FormGroup>

                </FormGroup>
                <Button color='primary'>
                Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm
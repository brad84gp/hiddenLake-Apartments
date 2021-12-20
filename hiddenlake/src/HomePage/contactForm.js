import React from 'react'

import { Form, Label, Input, FormGroup, Button} from 'reactstrap'

const ContactForm = () => {

    return (
        <div>
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
                    <Label for="exampleText">
                    Questions / Comments
                    </Label>
                    <Input
                    id="exampleText"
                    name="text"
                    placeholder='Share any questions you might have!'
                    type="textarea"
                    />
                </FormGroup>
                <Button>
                Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm
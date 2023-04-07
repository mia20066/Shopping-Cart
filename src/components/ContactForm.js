import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from './validateContactForm';
import React from 'react';

// we will define the handleSubmit fumction above the return statement, it will have two parameters and the arguments passed into both parameters will be provided to this function by the Formik component when it calls this function
// the first one will be a prop named values  this will be a javascript object that looks a lot like the initialValues object with the same properties but the property values will be whatever was submitted in the form
//the second value will be destructured function called resetForm ,this is a utility function that formic provides to reset thr form values , inside this function will not work now, in backend we will work in it 
// we transform the object to json in order to send it from one computer to another one to recreat the object in its end, we used json.stringify(values) to turn our values object into a json text string
// resetForm() so whenever the form is submitted  the fields reset
const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''

            }}
            onSubmit={handleSubmit}
            validate={validateContactForm} // between curly braces since it is a javascript function
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'> 
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>

                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'> 
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone

                    </Label>
                    <Col md='10'>
                        <Field
                            name='phoneNum'
                            placeholder='Phone'
                            className='form-control'
                        />
                        <ErrorMessage name='phoneNum'> 
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>

                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email

                    </Label>
                    <Col md='10'>
                        <Field
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'> 
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>

                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }}>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{' '}
                        May we contact you?
                    </Label>
                    <Col md='4'>

                        <Field
                            name='contactType'
                            as='select'

                            className='form-control'
                        >

                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>

                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                        Your Feedback
                    </Label>
                    <Col md='10'>
                        <Field
                            name='feedback'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />

                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='primary'>
                            Send Feedback
                        </Button>
                    </Col>

                </FormGroup>

            </Form>

        </Formik>
    )
};

export default ContactForm;
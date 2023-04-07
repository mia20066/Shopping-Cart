import { Container ,Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./ContactForm";
import React from "react";

const ContactPage = () => {
    return (
        <Container>
           
            <Row className="row-content align-items-center">
                <Col sm='4'>
                    <h4>Our Address</h4>
                    <address>
                    6383 Peters Rest
                        <br />
                    St Croix
                        <br />
                        USVI
                    </address>
                </Col>
                <Col class='bp'sm='4'>
                <br/>
                <br/>
                <br/>
                <br/>
                
              <h4 > Business Hours</h4> 
              <p>
                                        Monday - 9AM To 6PM<br />
                                        Tuesday - 9AM To 6PM <br />
                                        wednesday - 9AM To 6PM <br />
                                        Thursday - 9AM To 6PM <br />
                                        Friday - 9AM To 11PM <br />
                                        Saturday - 9AM To 11PM <br />
                                        Sunday - Closed




                                    </p>
                </Col>
                <Col>
                <br/>
                <a
                    role='button'
                    className='btn btn-link'
                    href='tel:+1-406-559-1234'
                >
                    
                    <i className='fa fa-phone' /> 1-406-559-1234
                </a>
                <br />
                <br />
                <a
                    role='button'
                    className='btn btn-link'
                    href='mailto:LebaneseBreeze@gmail.com'
                >
                    <i className='fa fa-envelope-o' /> Lebanon-breeze@res.co
                </a>
                
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>

                <Col md='10'>
                   <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
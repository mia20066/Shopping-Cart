import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';
//import '../index.css'


 const Footer = () => { //list-unstyled remove butllet points that are created nec=xt each link
return(
<footer className ='site-footer'>
    <Container>
        <Row>
            <Col className="text-center" sm='4'>
                <h5>Links</h5>
                <ul className='list-unstyled'>
                    <li>
                        <Link to='/'>Order Online</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                   
                </ul>
                </Col>
            <Col  sm='4' className='text-center'><h5>Social</h5>
                       <a
                           className='btn btn-social-icon btn-instagram'
                           href='http://instagram.com/'
                           >

                           <i className='fa fa-instagram' />
                       </a>{' '}
                       <a
                           className='btn btn-social-icon btn-facebook'
                           href='http://www.facebook.com/'
                           >

                           <i className='fa fa-facebook' />
                       </a>{' '}
                       <a
                           className='btn btn-social-icon btn-twitter'
                           href='http://twitter.com/'
                           >

                           <i className='fa fa-twitter' />
                       </a>{' '}
                       <a
                           className='btn btn-social-icon btn-google'
                           href='http://youtube.com/'
                           >

                           <i className='fa fa-youtube' />
                       </a></Col>
            <Col sm='4'  className='text-center'><h5>Contact Us</h5><a
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

                           <i className='fa fa-envelope-o' />
                           Lebanon-breeze@res.co
                       </a></Col>
        </Row>
    </Container>

</footer>
);
}

export default Footer;
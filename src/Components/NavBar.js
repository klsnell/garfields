import React from 'react';
import Services from './Services';
import Home from './Home';
import Contact from './Contact';
import Estimate from './Estimate';
import { Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import ScrollToTop from './wrapper';
import Gallery from './Gallery';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbarlinks'>
                
                <Container className='navcontainer'>
                    <Row >
                        <Col>
                            <Link className='navitem' to='/'><button className='navbutton' id='homebtn'></button></Link>
                        </Col>
                        <Col>
                            <Link className='navitem' to='/services'><button className='navbutton'>Services</button></Link>
                        </Col>
                        <Col>
                            <Link className='navitem' {...window.ScrollToTop} to='/gallery'><button className='navbutton'>Gallery</button></Link>
                        </Col>
                        <Col>
                            <Link className='navitem' {...window.ScrollToTop} to='/contact'><button className='navbutton'>Contact Us</button></Link>
                        </Col>
                        <Col>
                            <Link className='navitem' to='/estimate'><button className='navbutton' id='estimatebtn'>Request Your Free Estimate</button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
            <ScrollToTop>
                <Routes>
                    
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/services' element={<Services />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/estimate' element={<Estimate />} />
                    <Route exact path='/gallery' element={<Gallery />} />
                    
                </Routes>
                </ScrollToTop>

            </div>
        </div>
    )
};
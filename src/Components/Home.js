import React from 'react';
import About from './About';
import { Container, Row, Col } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Card } from 'reactstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Gallery from './Gallery';
import { Route, Routes, Link } from 'react-router-dom';
import Title from './Title';
import ControlledCarousel from './ReviewCarousel';

const Home = () => {
    return (
        <div className='about'>
            
            <Title />
            <About />
            <ControlledCarousel />
            
<h2 className='testimonials'>Some of Our Work</h2>
            <div className='imagecards'>
               
                <CarouselProvider className='carousel'
                    naturalSlideWidth={500}
                    naturalSlideHeight={75}
                    totalSlides={6}
                    orientation={'horizontal'}
                    visibleSlides={1}
                    touchEnabled={true}
                    infinite={true}
                >
                    <Container className='carouselcontainer'>
                        <div className='nextback'>
                            <br />
                            <Card>
                                <ButtonBack className='backbutton'> <FaAngleLeft className='backarrow' /></ButtonBack>

                                <ButtonNext className='nextbutton'> <FaAngleRight className='frontarrow' /></ButtonNext>
                            </Card>
                        </div>
                        <Slider className='cc'>
                            <Row>

                                <Slide index={0}>
                                    <Col>
                                        <Card>
                                            <div className='card1'>

                                            </div>
                                        </Card>
                                    </Col>
                                </Slide>

                                <Slide index={1}>
                                    <Col>
                                        <Card>
                                            <div className='card2'>

                                            </div>
                                        </Card>
                                    </Col>
                                </Slide>

                                <Slide index={2}>
                                    <Col>
                                        <Card>
                                            <div className='card3'>

                                            </div>
                                        </Card>
                                    </Col>
                                </Slide>

                                <Slide index={3}>
                                    <Col>
                                        <Card>
                                            <div className='card4'>

                                            </div>
                                        </Card>
                                    </Col>
                                </Slide>

                                <Slide index={4}>
                                    <Col>
                                        <Card>
                                            <div className='card5'>

                                            </div>
                                        </Card>
                                    </Col>
                                </Slide>

                                <Slide index={5}>
                                    <Col>
                                        <Card>
                                            <div className='card6'>

                                            </div>
                                        </Card>
                                    </Col>
                                </Slide>


                            </Row>
                        </Slider>
                    </Container>
                </CarouselProvider>
                <Col>
                    <Link className='navitem' to='/gallery'><button className='estimatebutton' id='viewgallerybtn'>View Full Gallery</button></Link>
                </Col>
                <div>
                    <Routes>
                        <Route exact path='/gallery' element={<Gallery />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
};
export default Home;
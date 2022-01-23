import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card, CardGroup } from 'reactstrap';

const Gallery = () => {
    return (
        <div className='gallerydiv'>
            {/* <h1>Gallery</h1> */}
            <Container className='gallery'>
                <h1 className='h1color'>Gallery</h1>


                <Card className='gallerycard' >
                    <h2>Stone Work & Gravel</h2>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card className='gallery2-0' >
                                </Card>

                                <Card className='gallery2-2' >
                                </Card>

                                <Card className='gallery2-5' >
                                </Card>
                            </CardGroup>
                        </Col>

                        <Col>
                            <CardGroup>
                                <Card className='gallery2'>
                                </Card>

                                <Card className='gallery2-3'>
                                </Card>

                                <Card className='gallery2-6'>
                                </Card>
                            </CardGroup>
                        </Col>

                        <Col>
                            <CardGroup>
                                <Card className='gallery2-1'>
                                </Card>

                                <Card className='gallery2-4'>
                                </Card>

                                <Card className='gallery2-7'>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <CardGroup>
                                <Card className='gallery2-8'>
                                </Card>

                                <Card className='gallery2-11'> {/*2-9*/}
                                </Card>

                                <Card className='gallery2-14'> {/*2-10*/}
                                </Card>
                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery2-9'>{/*2-11*/}
                                </Card>

                                <Card className='gallery2-12'>{/*2-12*/}
                                </Card>

                                <Card className='gallery2-15'>{/*2-13*/}
                                </Card>
                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery2-10'>{/*2-14*/}
                                </Card>

                                <Card className='gallery2-13'>{/*2-15*/}
                                </Card>

                                <Card className='gallery2-16'>{/*2-16*/}
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card className='gallery2-17'>
                                </Card>

                                <Card className='gallery2-20'>
                                </Card>
                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery2-18'>
                                </Card>

                                <Card className='gallery2-21'>
                                </Card>

                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery2-19'>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Card>

                <Card className='gallerycard'>
                    <h2>Lawn Services & Maintnence</h2>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card className='gallery3'>
                                </Card>

                                <Card className='gallery3-3'>
                                </Card>
                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery3-1'>
                                </Card>
                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery3-2'>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Card>

                <Card className='gallerycard'>
                    <h2>Trees</h2>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card className='gallery4'>
                                </Card>

                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery4-1'>
                                </Card>
                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery4-2'>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Card>

                <Card className='gallerycard'>
                    <h2>Irrigation</h2>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card className='gallery1'>
                                </Card>
                            </CardGroup>
                        </Col>
                        <Col>
                            <CardGroup>
                                <Card className='gallery1-1'>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Card>

            </Container>
        </div>
    )
};
export default Gallery;
import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'reactstrap';
import { FaWater, FaTree, FaRandom, FaLeaf, FaGripHorizontal, FaAngleDoubleUp } from 'react-icons/fa';


const Services = () => {
    return (
        <div className='servicediv'>
            <br />
            <h1 id='top' className='h1color'>Services Provided</h1>
            <p id='typewriter'></p>

            <Container>
                <Card className='servicepage'>

                    <Col className='serviceicon'>
                        <a href='#irrigation'>
                            <button className='servicebutton'>
                                <FaWater />
                            </button>
                        </a>
                        <h2>Irrigation</h2>
                    </Col>

                    <Col className='serviceicon'>
                        <a href='#trees'>
                            <button className='servicebutton'>
                                <FaTree />
                            </button>
                        </a>
                        <h2>Trees</h2>
                    </Col>

                    <Col className='serviceicon'>
                        <a href='#lawn'>
                            <button className='servicebutton'>
                                <FaLeaf />
                            </button>
                        </a>
                        <h2>Lawn Services</h2>
                    </Col>

                    <Col className='serviceicon'>
                        <a href='#rock'>
                            <button className='servicebutton'>
                                <FaGripHorizontal />
                            </button>
                        </a>
                        <h2>Stone & Gravel</h2>
                    </Col>

                    <Col className='serviceicon'>
                        <a href='#misc'>
                            <button className='servicebutton'>
                                <FaRandom />
                            </button>
                        </a>
                        <h2>Miscellaneous</h2>
                    </Col>

                </Card>
            </Container>
            <h3 >Click a service or scroll down to see what we do!</h3>

            <div className='allservices'>
                

                <Card className='irrigationtest' id='irrigation'>
                    <Container className='testing'>

                        <Col className='irrigationtest1'>
                            <h2 className='htag'>Irrigation</h2>

                            <p className='ptag'>Irrigation System Repairs</p>
                            <p className='ptag'>Irrigation Spring Start-ups </p>
                            <p className='ptag'>Irrigation Winterization </p>
                            <p className='ptag'>New Irrigation System Installs</p>


                            <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>


                        </Col>
                        <Col className='irrigationtest2'>
                            <div ></div>
                        </Col>
                    </Container>
                </Card>


                <Card className='treetest' id='trees'>
                    <Container className='testing'>

                        <Col className='treetest1'>
                            <h2 className='htag'>Tree Services</h2>

                            <p className='ptag'>Tree Trimming Above 8'</p>
                            <p className='ptag'>Selective Tree Removals </p>
                            <p className='ptag'>New Plant/Tree Installation </p>


                            <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>


                        </Col>
                        <Col className='treetest2'>
                            <div ></div>
                        </Col>
                    </Container>
                </Card>


                <Card className='lawntest' id='lawn'>
                    <Container className='testing'>

                        <Col className='lawntest1'>
                            <h2 className='htag'>Lawn Service and Maintenance</h2>

                            <p className='ptag'>Artificial Turf installation</p>
                            <p className='ptag'>Raised Planter Beds </p>
                            <p className='ptag'>Lawn Aeration and Seeding </p>
                            <p className='ptag'>New Sod Installation </p>
                            <p className='ptag'>Spring and Fall Clean-ups</p>
                            <p className='ptag'>Mulching Services</p>
                            <p className='ptag'>Roto-tilling Services</p>
                            <p className='ptag'>Field Cuts</p>
                            <p className='ptag'> Pre & Post Emergent Weed Spray</p>


                            <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>


                        </Col>
                        <Col className='lawntest2'>
                            <div ></div>
                        </Col>
                    </Container>
                </Card>


                <Card className='rocktest' id='rock'>
                    <Container className='testing'>

                        <Col className='rocktest1'>
                            <h2 className='htag'>Stone Work and Gravel</h2>

                            <p className='ptag'>Paver Driveways, Walkways, and Patios</p>
                            <p className='ptag'>Retaining Walls </p>
                            <p className='ptag'>Flagstone Installation </p>
                            <p className='ptag'>Flagstone Grouting Services </p>
                            <p className='ptag'>Gravel Installs</p>
                            <p className='ptag'>Border Edge Stone Installs</p>


                            <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>


                        </Col>
                        <Col className='rocktest2'>
                            <div ></div>
                        </Col>
                    </Container>
                </Card>

                <Card className='misctest' id='misc'>
                    <Container className='testing'>

                        <Col className='misctest1'>
                            <h2 className='htag'>Miscellaneous</h2>

                            <p className='ptag'>Outdoor Fireplaces</p>
                            <p className='ptag'>Gazebo/Pergola Installations </p>
                            <p className='ptag'>Dry River Bed Installations </p>
                            <p className='ptag'>Flag Pole Installations </p>
                            <p className='ptag'>Storm Water Drainage Catchment Systems</p>
                            <p className='ptag'>Single Story Gutter Clean-outs</p>


                            <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>


                        </Col>
                        <Col className='misctest2'>
                            <div ></div>
                        </Col>
                    </Container>
                </Card>
            </div>

        </div>
    )
}
export default Services;
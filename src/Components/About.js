import React from 'react';
import { Card } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';
import { Route, Routes, Link } from 'react-router-dom';
import Services from './Services';

const About = () => {
    return (
        <div className='about'>
            <Card className='aboutcard'>
                <Container>
                <Row>
                    <Col className='aboutcol'>
                        <h2><u>Who We Are and What We Do</u></h2>
                        <br />
                        <h3>LOCAL AND FAMILY OWNED SINCE 1999.</h3>
                        <ul>
                            <li><p className='text'>Licensed, bonded and insured we pride ourselves on being a small local and family owned business. There is a reason that many of our current customers who started with us in the beginning are still with us today. We truly value each and every opportunity we are given to be the landscaper you choose to work with. Contact us today for a free estimate!</p></li>

                            <li><p  className='text'>We specialize in regular yard maintenance, complete yard transformations, new plant and tree installations, new irrigation system installation, repairs and tune-ups to existing irrigation systems, rototilling and prep work for new sod installation, bush and plant removals, tree trimming and smaller tree removals. Click
                            <Link to='/services'><button className='btn' >here</button></Link>
                                <Routes>
                                    <Route exact path='/services' element={<Services/>}/>
                                </Routes>
                                 to see our full list of services.</p></li>
                        </ul>
                        <a href='https://www.bbb.org/us/az/sierra-vista/profile/landscape-contractors/garfields-hunney-dew-lawn-service-1286-20044466/#sealclick%22' target='blank'><button className='BBB'></button></a>
                    </Col>
               
                    <Col>
                        <div >
                            <Card className='aboutcol1'></Card>
                        </div>
                    </Col>
                </Row>
                </Container>

            </Card>
        </div>
    )
}
export default About;
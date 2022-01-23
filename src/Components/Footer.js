import React from 'react';
import { Card } from 'reactstrap';
import { Row, Col, Container } from 'react-grid-system';

const Footer = () => {
    return (
        <div>
            <Card className='footercard'>
                <Container>
                <Row>
                    <Col className='footercol'>
                        <h4><u>Contact information:</u></h4>
                        <a href='mailto:Garfieldslawnservice@cox.net'><p>Garfieldslawnservice@cox.net</p></a>
                        <a href='tel:+1-520-417-1171'>520-417-1171</a>
                        <br/>
                        <a href='tel:+1-520-456-6288'>520-456-6288</a>
                        <br/>
                        <a href='tel:+1-520-559-3211'>520-559-3211</a>

                        {/* <p>520-417-1171</p>
                        <p>520-456-6288</p> */}
                    </Col>
                    <Col className='footercol'>
                    <h4><u>Hours of Operation:</u></h4>
                        <p><b>Mon-Fri:</b> 7:00 AM - 4:00 PM</p>
                        <p><b>Sat-Sun:</b> Closed</p>
                    </Col>
                    <Col className='footercol'>
                        <h4><u>Address</u></h4>
                        <p>P.O. Box 2350</p>
                        <p>Sierra Vista, AZ 85636</p>
                    </Col>
                    <Col className='footercol'>
                        <h4><u>Licensed Bonded & Insured</u></h4>
                        <p>ROC# 306936</p>
                        <p>PDM(OPM) 9681</p>
                        {/* <p>LIC# 00003070</p> */}
                    </Col>
                </Row>
                </Container>
            </Card>
        </div>
    )
}
export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card } from 'reactstrap';

const Title = () => {
    return (
        <div className='titlediv'>
            <Container>
                <Row>
                    <Card className='title'>
                        <Col>
                            <Card className='garfields'>
                                <h1>Garfield's Hunney-Dew Lawn Service LLC</h1>
                            </Card>
                        </Col>
                    </Card>
                </Row>
            </Container>
        </div>
    )
};

export default Title;
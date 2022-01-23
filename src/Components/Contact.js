import React from 'react';
import {Card, Container, Row} from 'reactstrap';

const Contact = () => {
    return(
        <div className='contact'>
            <br/>
            <Container className='contactcontainer'>
                <Row>
            <Card className='contactcard'>
            <h1 className='h1color'>We Would Love to Hear From You!</h1>
            <form action='mailto:Garfieldslawnservice@cox.net' method='post' enctype='text/plain'>
                {/* <p>Now Hiring Groundskeepers!</p> */}
                <h3>Garfieldslawnservice@cox.net</h3>
                <a  href='tel:+1-520-417-1171'><h3 className='contactphone'>520-417-1171</h3></a>
                <a  href='tel:+1-520-456-6288'><h3 className='contactphone'>520-456-6288</h3></a>
                <a href='tel:+1-520-559-3211'> <h3 className='contactphone'>520-559-3211</h3></a>
                <br/>
                <button className='contactbutton' type='submit'>Email Us!</button>
               
            </form>
            </Card>
            </Row>
            </Container>
        </div>
    )
}
export default Contact;
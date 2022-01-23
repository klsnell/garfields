import React from 'react';
import { Card } from 'reactstrap';

const Estimate = () => {
    return (
        <div className='estimate'>
            <br />
            <Card className='estimatecard'>
                <h1 className='h1color'>Schedule a Free Estimate</h1>
                <form action='mailto:Garfieldslawnservice@cox.net' method='post' enctype='text/plain'>
                    <p>If you would like to schedule an estimate, click the button below!</p>
                    <p><u>Please include the following information in your estimate request:</u></p>
                    <Card className='estimatelist'>
                        <ul>
                            <li className='li'>First and Last Name.</li>
                            <li className='li'>How we can contact you(email and phone number).</li>
                            <li className='li'>Address of estimate.</li>
                            <li className='li'>What service(s) you would like us to perform.</li>
                            <li className='li'>The date and time you are requesting the estimate.</li>
                        </ul>
                    </Card>
                    <p><b>Estimates are only performed on Mon, Wed, and Fri between the hours of 9:00 AM and 3:00 PM</b></p>
                    <button className='estimatebutton' type='submit'>Send Request</button>
                </form>
            </Card>
        </div>
    )
}
export default Estimate;
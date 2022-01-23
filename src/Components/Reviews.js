import React from 'react';
import {Card} from 'reactstrap';

const Reviews = () => {
    return(
        <div className='reviewpage'>
            <Card className='reviewcard'>
            <h1>Your feedback is important to us!</h1>
            <form>
                
               <button className='reviewbutton'> <a className='review' href='https://www.google.com/search?hl=en-US&gl=us&q=Garfield%27s+Hunney-Dew,+1927+S+Bowser+Ln,+Sierra+Vista,+AZ+85635&ludocid=8539317709904910133&lsig=AB86z5WEZJacUzALYTagVZ0MLq6X#lrd=0x86d7296af46107f7:0x7681c036c3159735,3' target='blank'>Write a Review</a></button>
                <br/>
               <button className='reviewbutton'> <a className='review' href='https://www.google.com/search?hl=en-US&gl=us&q=Garfield%27s+Hunney-Dew,+1927+S+Bowser+Ln,+Sierra+Vista,+AZ+85635&ludocid=8539317709904910133&lsig=AB86z5WEZJacUzALYTagVZ0MLq6X#lrd=0x86d7296af46107f7:0x7681c036c3159735,1' target='blank'>View All Reviews</a></button>
            </form>
            </Card>
            
            <br/>
        </div>
    )
};
export default Reviews;
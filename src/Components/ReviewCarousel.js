import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Card } from 'reactstrap';
import { FaStar,FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ControlledCarousel = () => {
    return (
        <div className='controlledcarousel'>
            <h4 className='testimonials'>See What People Say About Us!</h4>
            
            <CarouselProvider
                className='reviewcarousel'
                isPlaying={true}
                totalSlides={6}
                interval={5000}
                naturalSlideHeight={100}
                naturalSlideWidth={500}
                orientation={'horizontal'}
                step={1}
                visibleSlides={1}
                infinite={true}
                isIntrinsicHeight={true}
                touchEnabled={true}

            >
                <ButtonBack className='carouselbutton'><FaAngleLeft className='backarrow' /></ButtonBack>
               
                <ButtonNext className='carouselbutton'><FaAngleRight className='frontarrow' /></ButtonNext>

                <Slider>

                    <Slide index={0} className='rslide'>
                        <Card className='rcard'>
                            <h3 className='name'>Eduardo U</h3>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <p  className='text'> <b>"Simply an amazing team! From our first interaction with Rick and Nicole I was very impressed with their professionalism, responsiveness, and honesty. They pride themselves in following through with every commitment. They also have a deep sense of ownership and will ensure that the client is 100% satisfied. Honestly, they did great work and it was a true pleasure to interact with them. We had a big job and we were concerned, given our experience with other organizations, but they put us at ease from day one. We trusted them and they did not let us down. They also made sound recommendations that have made a significant impact in reducing the risk of flooding in our back yard. We highly recommend them and wish all businesses would take this much care with their clients."</b></p>
                        </Card>
                    </Slide>

                    <Slide index={1} className='rslide'>
                        <Card className='rcard'>
                            <h3 className='name'>Kris S</h3>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            
                            <p  className='text'><b> "Rick and Nicole did such am amazing job on our backyard. Anytime we had a question, no matter what it was, they always responded within 24 hours. They are extremely easy to contact and were very prompt with responses. Our backyard is perfect and they even went above and beyond what we wanted by surprising us with an awesome area they made with extra materials. Now we don't have to wait to put in the fire pit! Thank you so very much for our backyard and we will be coming back for any future work."</b></p>
                        </Card>
                    </Slide>

                    <Slide index={2} className='rslide'>
                        <Card className='rcard'>
                            <h3 className='name'>Denise H</h3>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <p  className='text'> <b>"Rick and Nicole were extremely professional and personable. They communicated throughout the project. Nicole and Rick and their crew did a fantastic job making our flagstone path around our back yard. They even finished ahead of schedule. I would certainly recommend them for any landscaping or yard project and will be going with them again in the future." </b></p>
                        </Card>
                    </Slide>

                    <Slide index={3} className='rslide'>
                        <Card className='rcard'>
                            <h3 className='name'>Carol O</h3>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <p  className='text'><b> "Garfield's transformed our yard into an absolutely stunning, low-maintenance, and desert-friendly space. Working with Nicole, Louie, and Rick was a true pleasure, and I am beyond thrilled with the outcome. It looks like a totally different yard! They put an immense amount of thought and effort into their work, and it felt like they worked on our yard as if we were family. Very friendly, professional, and thoughtful. I would (and do) recommend them to everyone."</b></p>
                        </Card>
                    </Slide>

                    <Slide index={4} className='rslide'>
                        <Card className='rcard'>
                            <h3 className='name'>Annette M</h3>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <p  className='text'> <b>"I had gotten to the place where I was too exhausted and worn out to finish my landscaping manicure!  I called for an estimate and KNEW this company was my choice.  Rick listened to my complaints and concerns.  Nicole was there to give me education on what I thought was a weed (Rosemary!)  The job was completed sooner than I imagined and not a twig left behind!!   Looks like I will be calling again for my backyard makeover for me to enjoy in retirement!!  Thank you so much for kindness, quality work and  a great front yard!!"</b></p>
                        </Card>
                    </Slide>

                    <Slide index={5} className='rslide'>
                        <Card className='rcard'>
                            <h3 className='name'>Cosette G</h3>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <p  className='text'> <b>"Garfield's Hunney-Dew is a 10/10, highly recommend. I was pretty desperate and quite stressed out about a leak that I had in my sprinkler system. The leak was at the manifold and quite close to my house foundation. My yard was a swamp. I called around to the "bigger" landscaping companies and received lack-luster, poor communication, and a general lack of concern...until I talked with Rick. He was able to come out the day I called him for an assessment. He fixed the leak two days later. On a weekend.. He arrived when he said he would, he was finished before he said he would be, and he charged less than what he quoted. Amazing from beginning to end. I will use him again and suggest you do too."</b></p>
                        </Card>
                    </Slide>

                </Slider>
            </CarouselProvider>
            <button className='reviewbutton1'> <a className='review' href='https://www.google.com/search?hl=en-US&gl=us&q=Garfield%27s+Hunney-Dew,+1927+S+Bowser+Ln,+Sierra+Vista,+AZ+85635&ludocid=8539317709904910133&lsig=AB86z5WEZJacUzALYTagVZ0MLq6X#lrd=0x86d7296af46107f7:0x7681c036c3159735,3' target='blank'>Write a Review</a></button>


            <button className='reviewbutton1'> <a className='review' href='https://www.google.com/search?hl=en-US&gl=us&q=Garfield%27s+Hunney-Dew,+1927+S+Bowser+Ln,+Sierra+Vista,+AZ+85635&ludocid=8539317709904910133&lsig=AB86z5WEZJacUzALYTagVZ0MLq6X#lrd=0x86d7296af46107f7:0x7681c036c3159735,1' target='blank'>View All Reviews</a></button>
        </div>
    )
}

export default ControlledCarousel;

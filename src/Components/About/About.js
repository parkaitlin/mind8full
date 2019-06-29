import React from 'react';
import { Wrapper } from '../../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

const About = (props)=>{
    return(
        <Wrapper>
            <div className="under-nav about">
                <div className="greeting">
                    <h2 className='welcome'>WELCOME</h2>
                    <h4>to mind<FontAwesomeIcon icon={faInfinity} className="icon"/>full</h4>
                </div>
                <h6 className='about-string'>mindfulness . awareness . <span>meditation</span> . relaxation . stress relief</h6>
                <div className='about-para'>
                    <p>If you visited with any of these in mind or for a mental break, maybe we can help. :)<br/><br/>
                    mind8full hopes to provide a space for personal meditation. We want our visitors to take care of their mental health in the method they see fit. As you may know meditation takes many forms, at mind | full we do it in the form of snacks: gummy bears, cough drops, and some munchies.<br/><br/>
                    Let us explain… the first two are simply sending good vibes depending on what you need in the moment. This usually includes music, a serene backdrop, and a quote to ponder about. Gummy bears are for when you are looking for some inspiration, and cough drops are for those days you need a little mood booster.
                    (I know, I’m sorry there aren’t any real snacks)<br/><br/>
                    The third option, “something to munch on”, is an exercise where we send you a prompt with the option to discuss internally or to write a journal entry. When you create an account you will have a calendar to track your progress and your very own journal to hold your entries.<br/><br/>
                    Using one of these three methods, we encourage you to take a mental break each day. you are doing everything to live your best life and we would like to support you as best as we can. We hope mind | full serves purpose in your journey, so please visit often!</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default About;



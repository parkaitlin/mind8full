import React from 'react';
import { Wrapper } from '../../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

const AboutPage = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    background-image: linear-gradient(to bottom right, #70e1f5, #ffd194);
    animation: focusIn 2s

    h2 {
        font-size: 5em;
        letter-spacing: .08em;
        font-family: 'Quicksand', sans-serif;
        color: rgb(20, 139, 159);
    }
    h4 {
        font-size: 3em;
        letter-spacing: .08em;
        font-family: 'Quicksand', sans-serif;
        color: rgb(20, 139, 159);
        margin-bottom: .5em;
    }
    h6 {
        font-size: 1.5em;
        letter-spacing: .08em;
        font-family: 'Catamaran', sans-serif;
        color: rgb(20, 139, 159);
        margin-bottom: .5em;
        font-weight: 100;
    }
    span {
        font-weight: 700;
    }
    @keyframes focusIn {
        0% {
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }
`

const Paragraph = styled.div`
    margin-top: 1.5em; 
    background-color: rgba(255, 255, 255, 0.7);
    p {
        width: calc(100% - 15em);
        font-family: 'Catamaran', sans-serif;
        color: #535353;
        font-size: 1em;
        font-weight: 400;
        margin: 0 auto;
        padding: 1em 0;
    }
`

const About = (props)=>{
    return(
        <Wrapper>
            <AboutPage>
                    <h2 className='welcome'>WELCOME</h2>
                    <h4>to mind<FontAwesomeIcon icon={faInfinity} className="icon"/>full</h4>
                    <h6 className='about-string'>mindfulness . awareness . <span>meditation</span> . relaxation . stress relief</h6>
                <Paragraph>
                    <p>If you visited with any of these in mind or for a mental break, maybe we can help. :)<br/><br/>
                    mind8full hopes to provide a space for personal meditation. We want our visitors to take care of their mental health in the method they see fit. As you may know meditation takes many forms, at mind8full we do it in the form of snacks: gummy bears, cough drops, and some munchies.<br/><br/>
                    Let us explain… the first two are simply sending good vibes depending on what you need in the moment. This usually includes a serene backdrop and a quote to ponder about. Gummy bears are for when you are looking for some inspiration, and cough drops are for those days you need a little mood booster. The third option, “something to munch on is an exercise where you are given a prompt, which can be focused internally or you have the option to write a journal entry. When you create an account you will have a calendar to track your check-ins and your very own journal to hold your entries.<br/><br/>(I know, I apologize there aren’t any real snacks)
                    Using one of these three methods, we encourage you to take a mental break each day. you are doing everything to live your best life and we would like to support you as best as we can. We hope mind8full serves purpose in your journey, so please visit often!</p>
                </Paragraph>
            </AboutPage>
        </Wrapper>
    )
}

export default About;



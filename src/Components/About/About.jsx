import React from 'react';
import { Wrapper } from '../../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components'

const AboutPage = styled.div`
    padding-top: 5em;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 140vh; */
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
    background-color: rgba(255, 255, 255, 0.7);
    padding: 1.5em 0 0;
    p {
        width: calc(100% - 15em);
        font-family: 'Catamaran', sans-serif;
        color: #535353;
        font-size: 1.1em;
        font-weight: 400;
        margin: 0 auto;
        padding: 1em 0 2em;
    }
    section {
        width: calc(100% - 15em);
        font-family: 'Catamaran', sans-serif;
        color: #535353;
        margin: 1em auto 3em;
        display: flex;
        flex-direction: column;
        > div {
            align-self: center;
            font-size: 1.5em;
            display: flex;
            flex-direction: column;
            align-items: center;
            > a {
                color: blue;
                text-decoration: none;
            }
            > span {
                margin: 1em 0;
            }
        }
        > p {
            padding: 0;
            width: 100%;
            font-size: 1.5em;
            text-align: center;
        }
        > h6 {
            margin-bottom: 1em;
        }
        h5 {
            color: #999;
            font-size: 1.5em;
            letter-spacing: .06em;
            font-family: 'Catamaran', sans-serif;
        }
        .kp-links {
            display: flex;
            flex-direction: row;
            > a {
                color: #fff;
                font-size: 2em;
                margin: .5em;
            }
        }
    }
`

const Footer = styled.footer`
    background-color: rgb(20, 139, 159);
    height: 4em;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3em 0;
    > div {
        color: #fff;
        flex: 1;
        font-family: 'Catamaran', sans-serif;
        padding: 0 1em;
        > a {
            color: #fff;
            font-size: 1.5em;
        }
    }
    .project-link {
        font-size: 1.5em;
        text-align: right;
        border-right: 1px solid #fff
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
                    <section>
                        <h6>This application is powered by</h6>
                        <div>
                            <a href="https://theysaidso.com/">They Said So</a>
                            <span>&</span>
                        </div>
                            <p>Dillard-Wright, David. A Mindful Morning. Massachusetts: Adams Media, 2016.</p>
                    </section>
                    <section>
                        <h6>Creator</h6>
                        <div>
                            <h5>Kaitlin Park</h5>
                            <div className="kp-links">
                                <a href="https://github.com/parkaitlin"><FontAwesomeIcon icon={faGithub} /></a>          
                                <a href="https://www.parkaitlin.com"><FontAwesomeIcon icon={faKaggle} /></a>  
                                <a href="https://www.linkedin.com/in/parkaitlin/"><FontAwesomeIcon icon={faLinkedin} /></a>  
                            </div>
                        </div>
                    </section>
                </Paragraph>
                <Footer>
                    <div className="project-link">View Project on_<a href="https://github.com/parkaitlin"><FontAwesomeIcon icon={faGithub} /></a></div>          
                    <div>Copyright © mind8full 2019.</div>
                </Footer>
            </AboutPage>
        </Wrapper>
    )
}

export default About;



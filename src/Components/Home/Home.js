import React from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import * as routes from '../constants/routes';
import { Wrapper } from '../../style';
import { HomePage, Grid } from './style';

const Home = (props)=>{
    const {registered, logged, name} = props
    return(
        logged
        ? <Wrapper>
            <HomePage>
                <h2 className='welcome'>WELCOME</h2>
                {registered
                ? <h4>{name}</h4>
                : props.logged
                && <h4>back {name}</h4>
                }
                <h6>what would you like?</h6>
                <Grid>
                    <NavLink to={routes.BEAR} onClick={props.getBear}><li className="letter-left letter-one">Gummy<span data-letter="B">B</span>ear</li></NavLink>
                    <NavLink to={routes.DROP}><li className="letter-right letter-two">Cough<span data-letter="D">D</span>rop</li></NavLink>
                    <NavLink to={routes.MUNCH} onClick={props.getMunchie}><li className="letter-left letter-three">Something to<span data-letter="M">M</span>unch on</li></NavLink>
                </Grid>
            </HomePage>
        </Wrapper>
    : <Redirect to={routes.LOGIN} />
    )
}

export default Home;
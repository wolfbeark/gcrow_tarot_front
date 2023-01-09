/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { HorCenterDiv, VerCenterDiv } from '../CommonStyles'
import * as Loader from 'react-spinners'

const ErrorContainer = styled(HorCenterDiv)`
    width: 100vw;
    height: 100vh;
    position: relative;
    justify-content: center;
    background-color: rgba(2, 52, 48, 1);
    padding-left: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-right: 5%;
    font-family: "Anton";
    font-display: swap;
`
const ErrorImg = styled.img`
    width: 35%;
    height: 80%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(243, 254, 233, 1.0);
    margin-right: 10%;
`
const ErrorMessageBox = styled(VerCenterDiv)`
    width: 30%;
    height: 80%;    
    border-radius: 50px;
    justify-content: center;
    padding: 2%;
    background-color: rgba(0, 104, 74, 1);

    
`
const ErrorNameBox = styled(HorCenterDiv)`
    width: 100%;
    height: 10%;
    background-color: rgba(0, 104, 74, 1);
    font-family: inherit;
    font-size: 300%;
    font-weight: 600;
    border-radius: inherit;
    justify-content: left;
    padding-left: 10%;
    margin-bottom: 5%;
`
const ErrorContent = styled(HorCenterDiv)`
    width: 100%;
    height: 10%;
    background-color: rgba(0, 104, 74, 1);

    font-family: inherit;
    font-size: 200%;
    font-weight: 600;
    justify-content: left;
    padding-left: 10%;
    margin-bottom: 5%;

`
const ErrorCotentSecond = styled(motion.p)`
    display: flex;
    width: 100%;
    height: 10%;
    font-family: inherit;
    background-color: rgba(0, 104, 74, 1);
    font-size: 150%;
    font-weight: 600;
    justify-content: left;
    padding-left: 10%;
    margin-bottom: 30%;
`





function NotFound() {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 3000)
    }, [])
  return (
    <ErrorContainer
    >
        <ErrorImg src={`${process.env.PUBLIC_URL}/images/defaultLogo.png`}/>
        <ErrorMessageBox>
            <ErrorNameBox>E R R O R</ErrorNameBox>
            <ErrorContent>
                PAGE NOT FOUND
            </ErrorContent>
            <ErrorCotentSecond>
                You will go to the homepage 
                in 3 seconds.
            </ErrorCotentSecond>
            <Loader.BarLoader
                cssOverride={{
                    width: "80%",
                    backgroundColor:"rgba(0, 150, 80, 1)"
                }}
            ></Loader.BarLoader>
        </ErrorMessageBox>
    </ErrorContainer>
  )
}

export default NotFound
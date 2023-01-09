/* eslint-disable */
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useParams, useMatch } from 'react-router-dom'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { BtnScaleVar, HorCenterDiv, VerCenterDiv } from '../../CommonStyles'
import { useRecoilState } from 'recoil';
import { totalManagerAtom } from '../../recoil/totalManager';

const NavBarContainer = styled(HorCenterDiv)`
    width: 100%;
    height: 8%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: ${(props) => props.theme.navZIndex};
    font-family: "Jua";
    padding: 1%;
    justify-content: flex-start;
`

const PageNameBox = styled(HorCenterDiv)`
  width: 15%;
  height: 100%;
  font-family: inherit;
  color: beige;
  justify-content: left;
  padding: 1%;
`
const ModeNameBox = styled(HorCenterDiv)`
  width: 33%;
  height: 100%;
  font-family: inherit;
  color: beige;
  justify-content: center;
  padding: 1%;
`
const LinkBox = styled(HorCenterDiv)`
  width: 20%;
  height: 100%;
  font-family: inherit;
  color: beige;
  justify-content: center;
  padding: 1%;
`
const LinkBtn = styled(VerCenterDiv)`
  width: 30%;
  height: 100%;
  position: relative;
`
const Circle = styled(motion.span)`
  width: 5px;
  height: 5px;
  position: absolute;
  background-color: red;
  bottom: -15px;
  border-radius: 50%;
  left: 0;
  right:0;
  margin: 0 auto;
`


function TopNavBar() {

  const [totalManager,setTotalManager] = useRecoilState(totalManagerAtom);

  const homeMatch = useMatch("/");
  const singleMatch = useMatch('/playing/single');
  const multiMatch = useMatch('/playing/multi');
  const params = useParams();
  const location = useLocation();
  const {state} = location;

  const modeNameArr : string[] = ["SINGLE", "MULTI"];
  const [isActive, setIsActive] = useState<boolean>(false);
  const [modeName, setModeName] = useState<string>('');
  useEffect(()=>{
    if(state !== null){
      if(state.mode){
        setIsActive(true);
        switch(state.mode){
          case 'single':
            setModeName(modeNameArr[0]);
          break;
          case 'multi':
            setModeName(modeNameArr[1]);
          break;
          default: return;
        }
      }
    }
    else{
      //console.log('없어')
      if(isActive){
        setIsActive(false);
        setModeName('');
      }
    }
  }, [location])
  return (
    <NavBarContainer>
      <PageNameBox>Green Crow #1.0</PageNameBox>
        <LinkBox>
        <LinkBtn
          variants={BtnScaleVar}
          // whileHover={BtnScaleVar.hover}
          whileTap={BtnScaleVar.click}
        >
          <Link to='/'>
            Home
            {homeMatch && <Circle layoutId='headerCircle'/> }
          </Link>
        </LinkBtn>
        <LinkBtn
          variants={BtnScaleVar}
          // whileHover={BtnScaleVar.hover}
          whileTap={BtnScaleVar.click}
        >
          <Link to='playing/single' state={{mode : 'single'}}>
            Single
            {singleMatch && <Circle layoutId='headerCircle'/> }
          </Link>
        </LinkBtn>
        <LinkBtn
          variants={BtnScaleVar}
          // whileHover={BtnScaleVar.hover}
          whileTap={BtnScaleVar.click}
        >
          <Link to="playing/multi" state={{mode : 'multi'}}>
            Multi
            {multiMatch && <Circle layoutId='headerCircle'/> }
          </Link>
        </LinkBtn>
      </LinkBox>
      {/* <ModeNameBox>{modeName}</ModeNameBox> */}

    </NavBarContainer>
  )
}

export default TopNavBar
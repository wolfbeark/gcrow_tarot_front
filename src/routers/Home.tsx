/* eslint-disable */
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled, {keyframes} from 'styled-components'
import { ITotalManagerAtom, totalManagerAtom } from '../recoil/totalManager'
import { IHomeContainer } from '../ref-types/home-types/types-home'
import {AnimatePresence, motion} from 'framer-motion';

import { BtnScaleVar, HorCenterDiv, VerCenterDiv, DefaultModalWrapper } from '../CommonStyles'
import { useNavigate, useParams } from 'react-router-dom'
import { MenuDesContentArr, MenuDesNameArr } from '../DefaultData'

const HomeWrapper = styled(HorCenterDiv)<IHomeContainer>`
  width: 100vw;
  height: ${(props) => props.wheight ? `${props.wheight}px` : `100vh`};
  //background-color: yellow;
  position: relative;
`
const backgroundAni = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.gra1},
    ${(props) => props.theme.gra2},
    ${(props) => props.theme.gra3},
    ${(props) => props.theme.gra4}
  );
  background-size: 500% 500%;
  animation: ${backgroundAni} 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const InHomeContainer = styled(HorCenterDiv)`
  width: 100%;
  height: 92%;
  //background-color: rgba(50, 0, 0, 0.5);
  justify-content: space-between;
  padding: 0.5%;
`

const LeftSidePannel = styled(VerCenterDiv)`
  width: 20%;
  height: 100%;
  background-color: ${(props) => props.theme.homeLeftBackColor};
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  justify-content: flex-start;
  align-items: center;
  padding : 0.5%;
  padding-top: 2%;
`
const MenuBtn = styled(HorCenterDiv)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.homeLeftBtnColor};
  border-radius: inherit;
  font-size: 120%;
  font-family: "Jua";
  display: flex;
  justify-content: left;
  align-items: center;
  color: ${(props) => props.theme.homeLeftBtnTextColor};
  font-weight: 600;
  padding-left: 5%;
`
const MenuBtnBox = styled(HorCenterDiv)`
  width : 93%;
  height: 8%;
  background-color: ${(props) => props.theme.homeLeftBtnBoxColor};
  padding: 1.5%;
  margin-bottom: 5%;
  border-radius: inherit;
  cursor: pointer;
`
const CenterPannel = styled(VerCenterDiv)`
  width: 79%;
  height: 100%;
  background-color: ${(props) => props.theme.homeLeftBackColor};
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  padding: 1%;
  justify-content : space-between;
`
const CenterWelcome = styled(VerCenterDiv)`
  width: 100%;
  height: 55%;
  border-radius: inherit;
  justify-content: space-between;
  
`
const DescriptionBox = styled(VerCenterDiv)`
  width: 100%;
  height: 44%;
  background-color: ${(props) => props.theme.homeCenterContentColor};
  border-radius: inherit;
  padding: 0.5%;
  justify-content: center;
`
const InDesBoxName = styled(HorCenterDiv)`
  width: 100%;
  height: 30%;
  justify-content: left;
  padding-left: 1%;
  padding-left: 5%;
  font-family: "Jua";
  font-weight: 600;
  font-size: 200%;
  border-radius: inherit;


`
const InDesBoxContent = styled(HorCenterDiv)`
  width: 100%;
  height: 59%;
  justify-content: left;
  padding-left: 5%;
  padding-top: 2%;
  align-items: flex-start;

  font-family: "Jua";
  font-weight: 600;
  font-size: 200%;
  border-radius: inherit;

`

const CenterWelcomeContent = styled(VerCenterDiv)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${(props) => props.theme.homeCenterContentColor};
  justify-content: flex-start;
`
const CenterWelcome1 = styled(HorCenterDiv)`
  width: 100%;
  height: 50%;
  border-radius: inherit;
  font-family: "Jua";
  font-size : 400%;
  font-weight: 600;
  justify-content: flex-start;
  padding-left: 5%;
  color: ${(props) => props.theme.homeCenterTextColor1};
`
const CenterWelcome2 = styled(HorCenterDiv)`
  width: 100%;
  height: 50%;
  border-radius: inherit;
  //background-color: ${(props) => props.theme.homeCenterContentColor};
  font-family: "Jua";
  font-size : 300%;
  font-weight: 600;
  justify-content: flex-start;
  padding-left: 5%;
  color: ${(props) => props.theme.homeCenterTextColor1};
`


const TestModalBox = styled(DefaultModalWrapper)`

`
const QuestionThisModeBox = styled(VerCenterDiv)`
  width: 30%;
  height: 50%;
  background-color: whitesmoke;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  padding: 1%;
  //justify-content: space-evenly;
`
const QuestionBox = styled(HorCenterDiv)`
    width: 100%;
    height: 30%;
  background-color: pink;
  font-family: "Jua";
  font-size: 150%;
  margin-bottom: 5%;

`
const QuestionBtnBox = styled(HorCenterDiv)`
  width: 100%;
  height: 20%;
  background-color: pink;
  font-family: "Jua";
  font-size: 150%;
  justify-content: space-evenly;
  padding: 1%;
`
const QuestionBtn = styled(HorCenterDiv)`
  width: 40%;
  height: 100%;
  background-color: skyblue;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  cursor: pointer;
`


function Home() {

  const [totalManager, setTotalManager] = useRecoilState(totalManagerAtom);
  const {totalHeight} = totalManager
  //console.log(totalHeight);
  //const [wHeight, setWHeight] = useState<number>()
  const downBar = useRef() as MutableRefObject<HTMLDivElement>
  const navigate = useNavigate();

  // Custom
  const [hoverType, setHoverType] = useState<number>(-1);
  const [selectType, setSelectType] = useState<number>(-1);
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);


  const menuClickHandler = (e : React.MouseEvent<HTMLDivElement>, i : number) => {
    e.preventDefault();
    if(i !== 2){
      setIsActiveModal(true);
      setSelectType(i);
    }
    // setTimeout(()=>{
    //   setIsActiveModal(false);
    // }, 2000);
  }
  const questionStartHandler = (e : React.MouseEvent<HTMLDivElement>, type : number) => {
    e.preventDefault();
    if(totalManager.isClickedStart === false){
      let _totalManager : ITotalManagerAtom = JSON.parse(JSON.stringify(totalManager));
      _totalManager.isClickedStart = true;
      setTotalManager(_totalManager);
    }
      switch(type){
        case 0 :
          navigate('playing/single',{
            state:{
              mode: 'single'
            }
          })
        break;
        case 1 :
          navigate('playing/multi',{
            state:{
              mode: 'multi'
            }
          })
        break;
      }

  }
  const questionBackHandler = (e : React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsActiveModal(false);
    setSelectType(-1);
  }
  useEffect(()=>{
    let _flag = sessionStorage.getItem("isLogin");
    if(_flag === null){
      navigate('/login');
    }
  }, [])
  
  //MenuDesNameArr
  
  return (
    <HomeWrapper
      wheight={totalHeight}
    >
      <HomeContainer>
        <InHomeContainer>
          <LeftSidePannel>
          {
            MenuDesNameArr.map((a,i) => {

              return(
                <MenuBtnBox
                    key={`homeLeftMenu${i}`}
                    variants={BtnScaleVar}
                    whileHover={BtnScaleVar.hover}
                    whileTap={BtnScaleVar.click}
                    onClick={(e) => {
                      //menuClickHandler(e, i)
                      questionStartHandler(e, i);
                    }}
                    onHoverStart={()=>{
                        setHoverType(i);
                    }}
                    onHoverEnd={()=>{
                      setHoverType(-1);
                    }}
                  >
                    <MenuBtn>
                      {a}
                    </MenuBtn>
                  </MenuBtnBox>
              );
            })
          }
          </LeftSidePannel>
          <CenterPannel>
            <CenterWelcome>
              <CenterWelcomeContent>
                <CenterWelcome1>
                  Welcome!
                </CenterWelcome1>
                <CenterWelcome2>
                  This service is under development.
                </CenterWelcome2>
              </CenterWelcomeContent>
            </CenterWelcome>
            <DescriptionBox>
              {
                hoverType !== -1
                ?
                <AnimatePresence>
                  <InDesBoxName
                    initial={{opacity: 0}}
                    animate={
                      hoverType !== -1
                      ? {opacity: 1}
                      : {opacity: 0}
                    }
                    exit={{opacity: 0}}
                  >
                    {
                      hoverType !== -1 
                      ?
                      MenuDesNameArr[hoverType]
                      : ""
                    }
                  </InDesBoxName>
                </AnimatePresence>
                : null
              }
              {
                hoverType !== -1
                ?
                <AnimatePresence>
                  <InDesBoxContent
                    initial={{opacity: 0}}
                    animate={
                      hoverType !== -1
                      ? {opacity: 1}
                      : {opacity: 0}
                    }
                    exit={{opacity : 0}}
                  >
                    {
                      hoverType !== -1 
                      ?
                      MenuDesContentArr[hoverType]
                      : ""
                    }
                  </InDesBoxContent>
                </AnimatePresence>
                : null
              }
            </DescriptionBox>
          </CenterPannel>
        </InHomeContainer>
      </HomeContainer>
      {/* {
        isActiveModal 
        && <TestModalBox>
          <QuestionThisModeBox>
            <QuestionBox>{MenuDesNameArr[selectType]}를 시작하시겠습니까?</QuestionBox>
            <QuestionBtnBox>
              <QuestionBtn
                onClick={questionStartHandler}
              >
                START
              </QuestionBtn>
              <QuestionBtn
                onClick={questionBackHandler}
              >
                BACK
              </QuestionBtn>
            </QuestionBtnBox>
          </QuestionThisModeBox>
        </TestModalBox>
      } */}
    </HomeWrapper>
  )
}

export default Home
/* eslint-disable */
import React,{Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import {HorCenterDiv, VerCenterDiv} from '../../CommonStyles';

interface ISingleNormalDraw {
  qCountValue : string,
  setQCountValue : Dispatch<SetStateAction<string>>,
}

const DrawContainer = styled(HorCenterDiv)`
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between;
`
const DrawPannel = styled(VerCenterDiv)`
  width: 70%;
  height: 100%;
  background-color: blue;
  justify-content: space-evenly;
`
const DrawTextBox = styled(HorCenterDiv)`
  width: 100%;
  height: 10%;
  background-color: yellow;
  font-family : "Jua";
  font-size : 150%;
  font-weight: 600;
`
const CardSelectPannel = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
  //border-radius: 5px;
  padding: 1.5%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(13%, 1fr));
  grid-template-rows: repeat(auto-fit, minMax(40%, 1fr));
  grid-auto-columns: 13%;
  grid-auto-rows: 40%;
  grid-gap: 3%;
  scroll-behavior: auto;
  overflow: overlay;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 1vw;
  }
  ::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 100px;
  }
`;

const DrawCardTemplate = styled(motion.div)`
  width: 90%;
  height: 100%;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  
  transition: background-color 0.5s ease-in-out;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: orange;
  
  & div {
    &:first-child{
      position: relative;
      background-color: rgba(0, 0, 0, 0);
      color: yellow;
      width: 50%;
      height: 30%;
      top: -5%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Jua";
      font-size: 1em;
      font-weight: 700;
    }
    &:last-child{
      position: relative;
      background-color: rgba(0, 0, 0, 0);
      color: red;
      width: 50%;
      height: 30%;
      top: -10%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Jua";
      font-size: 1em;
      font-weight: 700;
    }
  }
`


const DrawOptionPannel = styled(VerCenterDiv)`
  width: 29%;
  height: 100%;
  background-color: skyblue;
`

function SingleNormalDraw(props : ISingleNormalDraw) {
  let numArr : number[] = Array(78).fill(0).map((a, i) => i + 1);
  //console.log(numArr);
  return (
    <DrawContainer>
      <DrawPannel>
        <DrawTextBox>
          원하는 카드를 선택하십시오
        </DrawTextBox>
        <CardSelectPannel>
          {
            numArr.map((a,i) => {

              return (
                <DrawCardTemplate 
                  key={`testcard${i}`}
                >
                  {a}
                </DrawCardTemplate>
              );
            })
          }
        </CardSelectPannel>
      </DrawPannel>
      <DrawOptionPannel></DrawOptionPannel>
    </DrawContainer>
  )
}

export default SingleNormalDraw
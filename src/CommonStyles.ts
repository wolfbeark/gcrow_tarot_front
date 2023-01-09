
import styled, {keyframes} from "styled-components";
import {motion} from 'framer-motion';

export const HorCenterDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const VerCenterDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const BtnScaleVar  = {
    hover : {
        scale: 1.1,
    },
    click : {
        scale : 1.0
    },
}

export const DefaultModalWrapper = styled(motion.div)`
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: ${(props) => props.theme.modalZIndex};
`

export interface IBtnScaleVar {
    hover : object,
    click : object,
    shadowColor? : object,
    active? : object,
}

const backgroundAni = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;
export const ContainerWithAni = styled(motion.div)`
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

// Create Back Btn
export const BackBtnBox = styled(HorCenterDiv)`
    position: absolute;
    right: 2%;
    top : 5%;
    width: 8%;
    height: 5%;
    background-color: ${(props) => props.theme.homeLeftBtnBoxColor};
    //border-radius: ${(props) => props.theme.defaultBorderRadius};
    border-radius: 5px;
    padding: 0.5%;
    color : ${(props) => props.theme.homeLeftBtnTextColor};
    cursor: pointer;
    & button{
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.homeLeftBtnColor};
        border-radius: 5px;
        font-weight: 600;
        font-size: 120%;
        cursor: pointer;
        color : ${(props) => props.theme.homeLeftBtnTextColor};
    }
`
/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';
import { HorCenterDiv, VerCenterDiv } from '../../CommonStyles';
import {motion} from 'framer-motion';
import SingleCreateNormal from './SingleCreateNormal';
import {oracleNameArr} from '../../DefaultData';

const SingleCreateWrapper = styled(HorCenterDiv)`
    width: 100%;
    height: 100%;
    font-family: "Jua";
`
const QuestionPannel = styled(VerCenterDiv)`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.spreadBackColor};
    border-bottom-right-radius : ${(props) => props.theme.defaultBorderRadius};
    border-bottom-left-radius : ${(props) => props.theme.defaultBorderRadius};
    padding: 1%;
    position: relative;
`

const QuestionText = styled(HorCenterDiv)`
    width: 100%;
    height: 20%;
    font-family: inherit;
    font-size: 150%;
    font-weight: 600;
    margin-bottom: 5%;
    //color: ${(props) => props.theme.loaderColor};
    color: beige;
    text-shadow: 
        -1px 0 ${(props) => props.theme.homeLeftBtnTextColor}, 
        0 1px ${(props) => props.theme.homeLeftBtnTextColor}, 
        1px 0 ${(props) => props.theme.homeLeftBtnTextColor}, 
        0 -1px ${(props) => props.theme.homeLeftBtnTextColor}; 
`
const QuestionTypeBtnBox = styled(HorCenterDiv)`
    width: 100%;
    height: 15%;
    //background-color: ${(props) => props.theme.homeLeftBackColor};
    justify-content: space-evenly;
    padding: 1%;
`
const QuestionTypeBtn = styled(HorCenterDiv)`
    width: 20%;
    height: 100%;
    background-color:  ${(props) => props.theme.homeLeftBtnBoxColor};
    border-radius: ${(props) => props.theme.defaultBorderRadius};
    padding: 0.5%;
    cursor: pointer;
`
const QuestionBtn = styled(HorCenterDiv)`
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.defaultBorderRadius};
    background-color: ${(props) => props.theme.homeLeftBtnColor};
    color : ${(props) => props.theme.homeLeftBtnTextColor};
    font-weight: 600;
    font-size: 120%;
`
const QuestionNormalDeck = styled(motion.div)`
    display: grid;
    padding: 0.5%;
    width: 100%;
    height: 60%;
    grid-template-columns: 20% 20%;
    grid-template-rows: 20% 20%;
    gap: 5%;
    justify-content: center;
    align-content: center;
`
const BackBtnBox = styled(HorCenterDiv)`
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
const BtnVar = {
    hover: {
        scale: 1.05,
        boxShadow: `0 0 10px 5px rgba(34, 166, 179, 1.0)`
    },
    click: {
        scale: 1.0
    }
}

function SingleCreateSpread() {

    const [isSelectType, setIsSelectType] = useState<boolean>(false);
    const [isNormal, setIsNormal] = useState<boolean>(true);
    const [oracleType, setOracleType] = useState<number>(-1);
    const [drawStep, setDrawStep] = useState<boolean>(false);
    // const oracleNameArr : string[] = [
    //     "TAROT",
    //     "LENORMAND",
    //     "ICHING",
    //     "POKER"
    // ]
    const onSelectTypeHandler = (e : React.MouseEvent<HTMLDivElement>, type : boolean) => {
        e.preventDefault();
        if(type !== false){
            setIsSelectType(true);
            setIsNormal(type);
        }
    }

    const onSelectOracleTypeHandler = (e : React.MouseEvent<HTMLDivElement>, type : number) => {
        e.preventDefault();
        if(type === 0){
            setOracleType(type);
            setDrawStep(true);
        }
    }


    const onBackHandler = (e : React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsSelectType(false);
        setOracleType(-1);
    }
  return (
    <SingleCreateWrapper>
        {
            drawStep === false
            ?
            <>
            <QuestionPannel>
            {
                isSelectType === false
                ?
                <>
                <QuestionText>시작할 타입을 선택하세요</QuestionText>
                <QuestionTypeBtnBox>
                    <QuestionTypeBtn
                        variants={BtnVar}
                        whileHover={BtnVar.hover}
                        whileTap={BtnVar.click}
                    >
                        <QuestionBtn
                            onClick={(e)=>{
                                onSelectTypeHandler(e, true)
                            }}
                        >
                            Normal
                        </QuestionBtn>
                    </QuestionTypeBtn>
                    <QuestionTypeBtn
                        variants={BtnVar}
                        whileHover={BtnVar.hover}
                        whileTap={BtnVar.click}
                    >
                        <QuestionBtn
                            onClick={(e)=>{
                                onSelectTypeHandler(e, false)
                            }}
                        >
                            Sandbox
                        </QuestionBtn>
                    </QuestionTypeBtn>
                </QuestionTypeBtnBox>
                </>
                : null
            }
            {
                (isSelectType && isNormal) && oracleType === -1
                ?
                <>
                <QuestionText
                    style={{margin:"0"}}
                >
                    사용할 오라클을 선택하세요
                </QuestionText>
                <QuestionNormalDeck>
                    {
                        oracleNameArr.map((a, i) => {
                            return(
                                <QuestionTypeBtn
                                    key={`singleOracleType${i}`}
                                    style={{width:"100%", padding:"1%"}}
                                    variants={BtnVar}
                                    whileHover={BtnVar.hover}
                                    whileTap={BtnVar.click}
                                >
                                    <QuestionBtn
                                        onClick={(e)=>{
                                            onSelectOracleTypeHandler(e, i);
                                        }}
                                    >
                                        {a}
                                    </QuestionBtn>
                                </QuestionTypeBtn>
                            );
                        })
                    }
                </QuestionNormalDeck>
                </>
                : null
            }
            {
                isSelectType === true
                && 
                <BackBtnBox
                    variants={BtnVar}
                    whileHover={BtnVar.hover}
                    whileTap={BtnVar.click}
                    onClick={(e)=>{
                            onBackHandler(e);
                        }}
                >
                    {/* <button
                        onClick={(e)=>{
                            onBackHandler(e);
                        }}
                    >
                        BACK
                    </button> */}
                    BACK
                </BackBtnBox>
            }
        </QuestionPannel>
            </>
            : null
        }
        {
            drawStep === true
            && isNormal
            ?
            <>
            <SingleCreateNormal 
                oracleType={oracleType}
                setOracleType={setOracleType}
                setDrawStep={setDrawStep}
            />
            </>
            : null
        }
    </SingleCreateWrapper>
  )
}

export default SingleCreateSpread
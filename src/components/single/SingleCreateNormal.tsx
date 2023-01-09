/* eslint-disable */
import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components';
import { HorCenterDiv, VerCenterDiv } from '../../CommonStyles';
import NormalTarotCreate from './NormalTarotCreate';
import { oracleNameArr } from '../../DefaultData';
import{
  BackBtnBox
} from '../../CommonStyles';

interface ISingleCreateNormal {
    oracleType : number,
    setDrawStep : Dispatch<SetStateAction<boolean>>,
    setOracleType : Dispatch<SetStateAction<number>>,
}
const NormalContainer = styled(VerCenterDiv)`
    width: 100%;
    height: 100%;
    //background-color: ${(props) => props.theme.spreadBackColor};
    border-bottom-right-radius : ${(props) => props.theme.defaultBorderRadius};
    border-bottom-left-radius : ${(props) => props.theme.defaultBorderRadius};
    padding: 1%;
    position: relative;
    justify-content: flex-start;
`
const CreateTypeAlertTab = styled(HorCenterDiv)`
    width: 100%;
    height: 10%;
    background-color: whitesmoke;
    justify-content: left;
    padding-left: 2%;
    font-family: "Jua";
    font-size: 130%;
    font-weight: 600;
    position: relative;
`
const TypeBackBtnBox = styled(BackBtnBox)`
    width: 10%;
    height: 60%;
    top: 20%;
    right: 1%;
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


function SingleCreateNormal(props : ISingleCreateNormal) {
    const _oracleType = props.oracleType;
    const setDrawStep = props.setDrawStep;
    const setOracleType = props.setOracleType;

    const activeBackBtn = (e : React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setOracleType(-1);
        setDrawStep(false);
    }
  return (
    <NormalContainer>
        <CreateTypeAlertTab>
           Create Type : {oracleNameArr[_oracleType]}
           <TypeBackBtnBox
            variants={BtnVar}
            whileHover={BtnVar.hover}
            whileTap={BtnVar.click}
            onClick={activeBackBtn}
           >
            BACK
           </TypeBackBtnBox>
        </CreateTypeAlertTab>
        {_oracleType === 0 
        && 
        <NormalTarotCreate 
            setDrawStep={setDrawStep} 
            setOracleType={setOracleType}
        />
        }
    </NormalContainer>
  )
}

export default SingleCreateNormal
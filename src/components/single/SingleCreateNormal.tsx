/* eslint-disable */
import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components';
import { HorCenterDiv, VerCenterDiv } from '../../CommonStyles';
import NormalTarotCreate from './NormalTarotCreate';
import { oracleNameArr } from '../../DefaultData';

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
`


function SingleCreateNormal(props : ISingleCreateNormal) {
    const _oracleType = props.oracleType;
    const setDrawStep = props.setDrawStep;
    const setOracleType = props.setOracleType;
  return (
    <NormalContainer>
        <CreateTypeAlertTab>
           Create Type : {oracleNameArr[_oracleType]}
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
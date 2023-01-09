/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { HorCenterDiv, VerCenterDiv } from '../../CommonStyles';
import {useRecoilState} from 'recoil';
import { singleManagerAtom } from '../../recoil/singleManagerAtom';
import SingleCreateSpread from './SingleCreateSpread';
import SinglePlayingSpread from './SinglePlayingSpread';

const SingleSpreadContainer = styled(VerCenterDiv)`
  width: 79%;
  height: 100%;
  background-color: ${(props) => props.theme.spreadBackColor};
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  //padding: 1%;
`
const SingleTabContainer = styled(HorCenterDiv)`
  width: 100%;
  height: 5%;
  background-color: pink;
  border-radius: 
    ${(props) => props.theme.defaultBorderRadius}
    ${(props) => props.theme.defaultBorderRadius}
    0
    0
  ;
`
const SingleManufacturingTab = styled(HorCenterDiv)`
  width: 100%;
  height: 5%;
  background-color: whitesmoke;
`

function SingleSpreadZone() {

  const [singleManager, setSingleManager] = useRecoilState(singleManagerAtom);
  
  return (
    <SingleSpreadContainer>
      {/* {
        singleManager.isCreated === true
        &&
        <>
        <SingleTabContainer></SingleTabContainer>
        <SingleManufacturingTab></SingleManufacturingTab>
        
        </>
      } */}
      <SingleTabContainer></SingleTabContainer>
      <SingleManufacturingTab></SingleManufacturingTab>
      {
        singleManager.isCreated === false
        ?
        <SingleCreateSpread />
        : 
        <SinglePlayingSpread />
      }
    </SingleSpreadContainer>
  )
}

export default SingleSpreadZone
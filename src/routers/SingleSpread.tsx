/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { ContainerWithAni, HorCenterDiv, VerCenterDiv } from '../CommonStyles'
import SingleSpreadZone from '../components/single/SingleSpreadZone'

const SigleSpreadContainer = styled(HorCenterDiv)`
    width: 100%;
    height: 100%;
    position: relative;
    align-items: flex-end;
`

const SingleSpreadWrapper = styled(HorCenterDiv)`
  width: 100%;
  height: 92%;
  justify-content: space-between;
  padding: 0.5%;
`
const SingleLeftWrapper = styled(VerCenterDiv)`
  width: 20%;
  height: 100%;
  background-color: ${(props) => props.theme.spreadBackColor};
  justify-content: flex-start;
  align-items: center;
  padding : 0.5%;
  padding-top: 2%;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
`

function SingleSpread() {
  return (
    <ContainerWithAni>
        <SigleSpreadContainer>
            <SingleSpreadWrapper>
              <SingleLeftWrapper></SingleLeftWrapper>
              <SingleSpreadZone />
            </SingleSpreadWrapper>
        </SigleSpreadContainer>
    </ContainerWithAni>
  )
}

export default SingleSpread
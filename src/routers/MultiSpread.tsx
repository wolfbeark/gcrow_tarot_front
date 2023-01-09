import React from 'react'
import styled from 'styled-components'
import { ContainerWithAni, HorCenterDiv } from '../CommonStyles'

const MultiSpreadContainer = styled(HorCenterDiv)`
    width: 100%;
    height: 100%;
    position: relative;
`
const MultiSpreadWrapper = styled(HorCenterDiv)`
  width: 100%;
  height: 92%;
  background-color: gray;
  justify-content: space-between;
  padding: 0.5%;
`

function MultiSpread() {
  return (
        <ContainerWithAni>
          <MultiSpreadContainer>
            <MultiSpreadWrapper></MultiSpreadWrapper>
          </MultiSpreadContainer>
        </ContainerWithAni>
  )
}

export default MultiSpread
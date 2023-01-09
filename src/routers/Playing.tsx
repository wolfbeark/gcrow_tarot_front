/* eslint-disable */
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { ContainerWithAni, VerCenterDiv } from '../CommonStyles'
import { totalManagerAtom } from '../recoil/totalManager'
import { IContainer } from '../ref-types/types-common'

const PlayingContainer = styled(VerCenterDiv)<IContainer>`
    width: 100%;
    height: ${(props) => props.totalheight ? `${props.totalheight}px` : `100vh`};
    position: relative;
`

function Playing() {

    const {totalHeight} = useRecoilValue(totalManagerAtom);
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    useEffect(()=>{
        if(!state){
            navigate('/')
        }
    }, [])
  return (
    <PlayingContainer
        totalheight={totalHeight}
    >
        <Outlet />
    </PlayingContainer>
  )
}

export default Playing
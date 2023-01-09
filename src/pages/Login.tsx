import { motion } from 'framer-motion';
import React, { MutableRefObject, useEffect, useRef, useState, SetStateAction, Dispatch } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components';
import { newTestAtom } from '../recoil/newTestAtom';
import { testAtomManager } from '../recoil/testAtom'

interface ITest2Box {
    testit : string
}

const TestBox = styled.div`
    background-color: ${props => props.theme.backGround};
    width: 50px;
    height: 50px;
`
const Test2Box = styled.div<ITest2Box>`
    background-color: ${props => props.theme.backGround};
    background-color: ${props => props.testit === "ha" ? 'blue' : props.theme.backGround};
    width: 50px;
    height: 50px;
`
const TestWithMotion = styled(motion.div)<ITest2Box>`
    background-color: ${props => props.theme.backGround};
    background-color: ${props => props.testit === "ha" ? 'red' : props.theme.backGround};
    width: 50px;
    height: 50px;
`
interface IStateTest {
    stTest: string
    setstTest? : Dispatch<SetStateAction<string>>
}
function Login() {

    
    const testManager = useRecoilValue(testAtomManager);
    const newTest = useRecoilValue(newTestAtom);
    const testme : string = 'ha'
    const testRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [stTest, setstTest] = useState<string>('stateTest');
    useEffect(()=>{
        if(testRef){
            console.log(testRef.current.innerHTML)
        }
    }, [])
    
  return (
    <>
        <div ref={testRef}>{testManager.isTest && 'Done'}</div>
            <div>{newTest}</div>
        <TestBox />
        <Test2Box testit={testme}/>
        <TestWithMotion testit={testme}/>
        <img src={`${process.env.PUBLIC_URL}logo192.png`}/>
        <div></div>
        <PropsTest stTest={stTest} setstTest={setstTest} ></PropsTest>
    </>
  )
}

function PropsTest(props : IStateTest) {
    const test = props.stTest
    useEffect(()=>{
        if(props.setstTest){
            props.setstTest("ho")
        }
    }, []);
    
    return(
        <>
            <div>{props.stTest}</div>
        </>
    )
        
}

export default Login
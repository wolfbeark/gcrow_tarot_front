/* eslint-disable */
import React, {CSSProperties, useEffect, useState} from 'react'
import { useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilValue } from 'recoil'
import styled, { keyframes } from 'styled-components'
import {motion} from 'framer-motion'

import { BtnScaleVar, HorCenterDiv, IBtnScaleVar, VerCenterDiv } from '../CommonStyles'
import { totalManagerAtom } from '../recoil/totalManager'
import { IContainer } from '../ref-types/types-common'

import * as Loader from 'react-spinners';
import { useNavigate } from 'react-router-dom'

const LoginWrapper = styled(HorCenterDiv)<IContainer>`
    width : 100vw;
    height : ${(props) => props.totalheight ? `${props.totalheight}px` : `100vh`};
    position: relative;
`
const backgroundAni = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;
//${props => props.theme.backGround}
const AuthenticationContainer = styled.div`
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
  align-items: center;
`;
const AuthQuestionBox = styled(motion.form)`
  width: 40%;
  height: 60%;
  background-color: ${props => props.theme.authQuestBoxColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const AuthInput = styled(motion.input)`
  width: 80%;
  height: 15%;
  border-radius: 10px;
  margin-bottom : 5%;
  text-align: center;
  font-size: 150%;
  caret-color: gray;
  font-family: "Anton";
`;
const AuthBtn = styled(motion.button)`
  width: 30%;
  height: 15%;
  background-color: gray;
  border-radius: 10px;
  font-family: "Anton";
  cursor: pointer;
`;
const AuthErrorMessage = styled(HorCenterDiv)`
  width: 50%;
  height: 10%;
  font-size: 120%;
  position: absolute;
  bottom: 10%;
  text-align: center;
  font-family: "Jua";
`
const LoaderContainer = styled(VerCenterDiv)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`
const LoaderMessage = styled(HorCenterDiv)`
  width: 100%;
  height: 20%;
  color : rgba(54, 215, 183, 1.0);
  font-family: "Jua";
  font-size: 200%;
`
const QuestionLabel = styled(motion.label)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-family: "Anton";
  font-size: 150%;
  text-align: center;
`

const BtnVar = {
  hover : { 
    scale: 1.1,
    boxShadow : 'inset 0 0 2px rgba(255, 255, 255, 1), 0 0 10px 3px rgba(126, 214, 223,1.0)'
  },
  click : {
    scale : 1.0
  },
  active : {
    backgroundColor : 'rgba(126, 214, 223,1.0)',
    boxShadow : 'inset 0 0 2px rgba(255, 255, 255, 1), 0 0 10px 3px rgba(126, 214, 223,1.0)',
    cursor: 'pointer'
  },
  inactive : {
    cursor : 'auto',
    backgroundColor : 'rgba(83, 92, 104,1.0)'
  }

}


function Login() {

    const {totalHeight} = useRecoilValue(totalManagerAtom);
    const [value, setValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const navigate = useNavigate();

    useEffect(()=>{
      let _flag = sessionStorage.getItem("isLogin");
      if(_flag){
        navigate('/')
      }
    }, []) 
    const passwordValidator = (e : React.MouseEvent<HTMLButtonElement>) : void => {
      e.preventDefault();
      const password = process.env.REACT_APP_DEV_ACCESS_KEY;
      
      if( password !== value) return;
      setIsLoading(true);
      setTimeout(()=>{
        setIsLoading(false);
      }, 3000)
      
    }
 
    

    const validator = () : boolean => {
      const password = process.env.REACT_APP_DEV_ACCESS_KEY;
      if( password !== value) return false;
      return true
    }
    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
      //:  React.ChangeEventHandler<HTMLInputElement>
      if( error === true){
        setError(false);
        setMessage('');
      }
      setValue(e.target.value);
    }

    const onSubmitHandler = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(value.length < 1) return
      let _flag = validator();
      if(_flag){
        setIsLoading(true);
        setTimeout(()=>{
          setIsLoading(false);
          sessionStorage.setItem("isLogin", "true");
          navigate('/');
        }, 3000)
      }
      else{
        setError(true);
        setValue('');
        setMessage('* 접근 키가 유효하지 않습니다');
      }
    }
  return (
    <>
    <LoginWrapper
        totalheight={totalHeight}
    >
        <AuthenticationContainer>
            <AuthQuestionBox
              onSubmit={onSubmitHandler}
            >
              <QuestionLabel htmlFor='accessInput'>
                Please enter your password to activate your access
              </QuestionLabel>
                <AuthInput
                  id='accessInput'
                  value={value} 
                  onChange={onChangeHandler}
                  placeholder='Acess Key' 
                  type="password" 
                />
                <AuthBtn
                    variants={BtnVar}
                    initial={false}
                    whileHover={value.length >= 1 ? BtnVar.hover : {}}
                    whileTap={value.length >= 1 ? BtnVar.click : {}}
                    animate={
                      value.length >= 1
                      ? BtnVar.active
                      : BtnVar.inactive
                    }
                    type="submit"
                >ACCESS</AuthBtn>
                {
                  error &&
                  <AuthErrorMessage>
                  {message}
                  </AuthErrorMessage>
                }
            </AuthQuestionBox>
        </AuthenticationContainer>
        {
          isLoading &&
          <>
            <LoaderContainer>
              <Loader.HashLoader
                //cssOverride={loaderCss}
                color='#36d7b7'
                size={150}
              >
              </Loader.HashLoader>
              <LoaderMessage>
                잠시만 기다려 주세요
              </LoaderMessage>
            </LoaderContainer>
          </>
        }
    </LoginWrapper>
    </>
  )
}

export default Login
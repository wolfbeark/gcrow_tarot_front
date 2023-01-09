/* eslint-disable */
import React, {useState, Dispatch, SetStateAction} from 'react'
import styled from 'styled-components';
import {
  ErrorBottomBox, 
  HorCenterDiv, 
  VerCenterDiv,
  BackBtnBox,
  ErrorBottomVar
} from '../../CommonStyles';
import {motion, AnimatePresence} from 'framer-motion';

import {
  tarotDeckTypeNameArr,
  tarotDeckTypeCountArr,
  errorTypeContentArr
} from '../../DefaultData';
import SingleNormalDraw from './SingleNormalDraw';

interface INormalTarotCreate {
    setDrawStep : Dispatch<SetStateAction<boolean>>,
    setOracleType : Dispatch<SetStateAction<number>>,
}

const TarotCreateContainer = styled(HorCenterDiv)`
  width: 100%;
  height: 90%;
  //position: relative;
  background-color: ${(props) => props.theme.homeCenterContentColor};
`
const QCardCountPannel = styled(VerCenterDiv)`
  width: 50%;
  height: 70%;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  padding: 1%;
`
const QInCardCountPannel = styled(VerCenterDiv)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.homeLeftBackColor};
  border-radius: inherit;
  font-family: "Jua";
  padding: 1%;
`
const QCountLabel = styled(motion.label)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-weight: 600;
  font-size: 130%;
  color: beige;
`
const QCountInputBox = styled(HorCenterDiv)`
  width: 90%;
  height: 15%;
  padding: 1%;
  justify-content: space-evenly;
  position: relative;
`
const QCountDeckTypeBox = styled(HorCenterDiv)`
  width: 30%;
  height: 100%;
  background-color: ${(props) => props.theme.homeLeftBtnBoxColor};
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  position: relative;
  cursor: pointer;
  justify-content: flex-start;
  font-weight: 600;
  padding-left: 1%;
`
const ModeModal = styled(VerCenterDiv)`
  width: 100%;
  height: 300%;
  border-radius: 10px;
  background-color: rgba(125, 125, 125, 0.8);
  //background-color: red;
  position: absolute;
  justify-content: flex-start;
  top: 101%;
  scroll-behavior: auto;
  overflow: overlay;
  overflow-x: hidden;
  padding: 1%;
  z-index: 2;
  ::-webkit-scrollbar {
    display: block;
    width: 0.5vw;
  }
  ::-webkit-scrollbar-thumb {
    //background-color: hsla(0, 0%, 42%, 0.49);
    background-color: ${(props) => props.theme.homeLeftBtnBoxColor};
    border-radius: 100px;
  }
`;
const ModeBtn = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
  width: 50%;
  height: 25%;
  min-width: 50%;
  min-height: 25%;
  background-color: ${(props) => props.theme.homeLeftBtnBoxColor};
  font-weight: 600;
  font-size: 120%;
  border-radius: inherit;
  cursor: pointer;
  position: relative;
  & span{
    display: inherit;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
  }
`
const CurrentPoint = styled(motion.div)`
  display: inherit;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  left: 5%;
  height: 50%;
  color: red;
`

const QCountInput = styled(motion.input)`
  text-align: center;
  width: 60%;
  height: 100%;
  background-color: whitesmoke;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  font-size: 120%;
  font-weight: 600;
`
const QCountPreviewBox = styled(HorCenterDiv)`
  width: 60%;
  height: 100%;
  justify-content: space-between;
`
const PreviewBtn = styled(HorCenterDiv)`
  width: 40%;
  height: 90%;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  font-weight: 600;
  cursor: pointer;
`
const CustomBorderLine = styled(motion.div)`
  width: 1%;
  height: 70%;
  background-color: ${(props) => props.theme.homeLeftBtnBoxColor};
`

const NextBtn = styled(BackBtnBox)`
  width: 30%;
  height: 15%;
  font-weight: 600;
  position: relative;
`

const ErorrPanel = styled(HorCenterDiv)`
  width: 50%;
  height: 15%;
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  background-color: ${(props) => props.theme.homeLeftBackColor};
  position: absolute;
  left: 25%;
  bottom: 5%;
`


const PreviewBtnVar = {
  active:{
    backgroundColor: `rgba(126, 214, 223, 1)`
  },
  inactive:{
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  hover: {
    scale: 1.05,
    boxShadow: `0 0 2px 1px rgba(34, 166, 179, 1.0)`,
  },
  click: {
    scale: 1,
    boxShadow: `0 0 2px 1px rgba(34, 166, 179, 1.0)`,
  }
}
const BtnVar = {
    hover: {
        scale: 1.05,
        boxShadow: `0 0 10px 5px rgba(34, 166, 179, 1.0)`
    },
    click: {
        scale: 1.0
    }
}
function NormalTarotCreate(props : INormalTarotCreate) {

  // Flag
  const [firstOver, setFirstOver] = useState<boolean>(false);
  const [secondOver, setSecondOver] = useState<boolean>(false);

  // Values
  const [qCountValue, setQCountValue] = useState<string>('');
  const [deckType, setDeckType] = useState<number>(0);

  // Option
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [isSelectPreview, setIsSelectPreview] = useState<boolean>(true);

  const [errorType, setErrorType] = useState<number>(-1);
  const [errMessage, setErrMessage] = useState<string>("");

  const onActiveModal = (e : React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActiveModal((prev) => !prev);
  }
  const onChangeCountHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    let _value = e.target.value.replace(/[^0-9]/g, "").replace(/(\..*)\./g, "$1");
    if(_value.length > 2) return;
    setQCountValue(_value);
  }
  const onChangeDeckType = (e : React.MouseEvent<HTMLButtonElement>, type : number) => {
    e.preventDefault();
    setDeckType(type);
    setQCountValue(String(tarotDeckTypeCountArr[type]));
    setActiveModal(false);
  }

  const activeBackBtn = (e : React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.setOracleType(-1);
    props.setDrawStep(false);
  }

  const freeValidator = () : boolean => {
    let _value = Number(qCountValue);
    if(_value <= 0 || _value > 78) return false;
    return true;
  }

  const activeNextBtn = (e : React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    let _flag : boolean = freeValidator();
    if(!_flag){
      setErrorType(0);
      setErrMessage(errorTypeContentArr[0]);
      setQCountValue('');
      setTimeout(()=>{
        setErrorType(-1);
        setErrMessage("");
      }, 2000)
      return;
    }
      setFirstOver(true);
  }
  return (
    <TarotCreateContainer>
      {
        firstOver === false
        &&
        <QCardCountPannel>
          <QInCardCountPannel>
            <QCountLabel>원하시는 숫자를 입력하세요</QCountLabel>
            <QCountInputBox>
              <QCountDeckTypeBox
                variants={PreviewBtnVar}
                initial={false}
                whileHover={PreviewBtnVar.hover}
                whileTap={PreviewBtnVar.click}
                onClick={onActiveModal}
              >
                {tarotDeckTypeNameArr[deckType]}
              </QCountDeckTypeBox>
              <QCountInput
                type="text"
                placeholder='1 - 78'
                maxLength={2}
                min={1}
                max={78}
                value={qCountValue}
                onChange={onChangeCountHandler}
                readOnly={
                  deckType !== 0
                  ? true
                  : false
                }
              />
                {
                  activeModal === true 
                  && 
                  <ModeModal>
                    {
                      tarotDeckTypeNameArr.map((a,i) => {
                        return(
                          <ModeBtn
                            key={`normalTarotDeckTypeBtn${i}`}
                            onClick={(e) => {
                              onChangeDeckType(e, i)
                            }}
                          >
                            {
                              deckType === i
                              &&
                              <CurrentPoint>
                                *
                              </CurrentPoint>
                            }
                            <span>{a}</span>
                          </ModeBtn>
                        );
                      })
                    }
                  </ModeModal>
                }
            </QCountInputBox>
            <QCountInputBox>
              <QCountDeckTypeBox
                style={{cursor:"auto"}}
              >PREVIEW 3 CARDS</QCountDeckTypeBox>
              <QCountPreviewBox>
                <PreviewBtn
                  variants={PreviewBtnVar}
                  initial={false}
                  animate={isSelectPreview === true ? PreviewBtnVar.active : PreviewBtnVar.inactive}
                  whileHover={PreviewBtnVar.hover}
                  whileTap={PreviewBtnVar.click}
                  onClick={()=>{
                    if(isSelectPreview === true) return;
                    setIsSelectPreview(true);
                  }}
                >
                  ON
                </PreviewBtn>
                <CustomBorderLine />
                <PreviewBtn
                  variants={PreviewBtnVar}
                  initial={false}
                  animate={isSelectPreview === false ? PreviewBtnVar.active : PreviewBtnVar.inactive}
                  whileHover={PreviewBtnVar.hover}
                  whileTap={PreviewBtnVar.click}
                  onClick={()=>{
                    if(isSelectPreview === false) return;
                    setIsSelectPreview(false);
                  }}
                >
                  OFF
                </PreviewBtn>
              </QCountPreviewBox>
            </QCountInputBox>
            <NextBtn
              variants={BtnVar}
              whileHover={BtnVar.hover}
              whileTap={BtnVar.click}
              onClick={activeNextBtn}
            >
              NEXT
            </NextBtn>
          </QInCardCountPannel>
        </QCardCountPannel>
      }
      {
        (firstOver
        && secondOver === false)
        &&
        <SingleNormalDraw 
          qCountValue={qCountValue}
          setQCountValue={setQCountValue}
        />
      }
      {
        errorType !== -1
        &&
        <AnimatePresence>
          <ErrorBottomBox
            variants={ErrorBottomVar}
            initial={ErrorBottomVar.initial}
            animate={ErrorBottomVar.animate}
            exit={ErrorBottomVar.end}
          >
            {errMessage}
          </ErrorBottomBox>        
        </AnimatePresence>
      }
    </TarotCreateContainer>
  )
}

export default React.memo(NormalTarotCreate)
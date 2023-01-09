/* eslint-disable */
import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import {Routes, Route, useParams, useLocation, Outlet} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import './App.css'

import { darkTheme, whiteTheme } from './theme';
import { ITotalManagerAtom, totalManagerAtom } from './recoil/totalManager';

import Home from './routers/Home';
import Login from './routers/Login';
import CreateAccount from './pages/CreateAccount';
import TopNavBar from './components/global-items/TopNavBar';
import Playing from './routers/Playing';
import SingleSpread from './routers/SingleSpread';
import MultiSpread from './routers/MultiSpread';

interface IAppContainer {
  wheight : number
}
const AppContainer = styled(motion.div)<IAppContainer>`
  width: 100vw;
  //height: ${(props) => props.wheight ? `${props.wheight}px` : `100vh`};
  height: auto;
  //background-color : blue;
  overflow: hidden;
  position: relative;
  font-display: swap;

`

const HoverTest = styled(motion.div)`
  width : 100px;
  height: 100px;
  background-color: tomato;
`

const hoverTestVar = {
  initial:{},
  hover:{
    scale: 1.1
  },
  click:{
    scale: 0.95
  }
}


function App() {

  const [totalManager, setTotalManager] = useRecoilState(totalManagerAtom);
  const wHeight = window.innerHeight;
  //const params = useParams();
  const location = useLocation();
  //console.log(params);
  //console.log(location.pathname);

  useEffect(()=>{
    let _totalManager : ITotalManagerAtom = JSON.parse(JSON.stringify(totalManager));
    _totalManager.totalHeight = window.innerHeight;
    setTotalManager(_totalManager);
  }, [])


  // return (
  //   <ThemeProvider theme={whiteTheme}>
  //     <AppContainer wheight={totalManager.totalHeight}>
  //       {
  //         location.pathname !== "/login" 
  //         && <TopNavBar />
  //       }
  //     <Routes>
  //       <Route path='/' element={<Home />}/>
  //       <Route path='/login' element={<Login />} />
  //       <Route path='/create' element={<CreateAccount />}/>
  //       <Route path='/playing/*' element={<Playing />}>
  //         <Route path='single' element={<SingleSpread />} />
  //         <Route path='multi' element={<MultiSpread />} /> 
  //       </Route>
  //     </Routes>
  //     </AppContainer>
  //   </ThemeProvider>
  // );
  return(
    <ThemeProvider theme={whiteTheme}>
      <AppContainer wheight={totalManager.totalHeight}>
        {
          location.pathname !== "/login" 
          && <TopNavBar />
        }
        <Outlet />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

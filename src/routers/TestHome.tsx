

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';

function TestHome() {
  return (
    <Router>
        <Routes>
            <Route path='/test' element={<Login />}></Route>
            <Route path='/create-account' element={<CreateAccount />}></Route>
        </Routes>
    </Router>
    )
}

export default TestHome
/* eslint-disable */
import {BrowserRouter , Route, Routes, createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from './Home';
import Login from './Login';
import MultiSpread from './MultiSpread';
import NotFound from './NotFound';
import Playing from './Playing';
import SingleSpread from './SingleSpread';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "playing",
                element: <Playing />,
                children: [
                    {
                        path: "single",
                        element: <SingleSpread />
                    },
                    {
                        path: "multi",
                        element: <MultiSpread />
                    }
                ]
            }
        ],
        errorElement: <NotFound />
    }
])

export default router
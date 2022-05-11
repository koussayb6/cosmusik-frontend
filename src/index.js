import React from "react";
import ReactDOM from "react-dom";

import './main.scss';
import Login from './pages/Login';
import Register from './pages/Register';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {App} from "./App";
import {ToastContainer} from "react-toastify";
import EmailVerify from "./pages/EmailVerify";
import {ToastProvider} from "react-toast-notifications";
import Otp from "./pages/Otp";
import Allchats from "./pages/Allchats";
import Groups from "./pages/Groups";

function Root () {
        return (
            <>
            <Router basename={'/'}>

                <Routes>
                    <Route exact path='/login' element={<Login/> } />
                    <Route exact path='/otp' element={<Otp/> } />
                    <Route exact path='/register' element={<Register /> }/>
                    <Route exact path={`${process.env.PUBLIC_URL}/verify/:code`} element={<EmailVerify /> }/>
                    <Route exact path="/chat" element={<Allchats />} />
                    <Route exact path="/groups" element={<Groups />} />
                    <Route exact path='*' element={<App />} />

                </Routes>


            </Router>
    <ToastContainer />
            </>
)

}

ReactDOM.render(<Provider store={store}>
    <ToastProvider >
        <Root /></ToastProvider>
</Provider>, document.getElementById('root'));
serviceWorker.register();

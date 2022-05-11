import React, {Component, Fragment, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {reset, verify} from "../features/auth/authSlice";


function EmailVerify() {
    const {code}= useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }



        dispatch(verify(code))

    }, [isError, isSuccess, message, navigate, dispatch])

    return (
            <Fragment>

                <div className="main-wrapper">




                    <div className="main-content bg-lightblue theme-dark-bg ">

                        <div className="middle-sidebar-bottom">
                            <div className="middle-sidebar-left">
                                <div className="middle-wrap">
                                    <div className="card w-100 border-0 bg-white shadow-md p-0 mb-4">
                                        <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                                            <Link to="/defaultsettings" className="d-inline-block mt-2"><i className="ti-check font-sm text-white"></i></Link>
                                            <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">Account verified successfully</h4>
                                        </div>
                                        <div className="card-body p-lg-5 p-4 w-100 border-0">
                                            <div className="row">
                                                <div className="col-lg-12 mb-0">
                                                    <Link to="../" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block">Go to home page</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </Fragment>
        );

}

export default EmailVerify;

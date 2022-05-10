import React, {Component, Fragment, useEffect, useState} from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {getinteractivecourses, reset} from "../features/interactivecourse/interactivecourseSlice";
import Oneinteractivecourse from "../components/Oneinteractivecourse";
import AddInt from "../components/AddInt";



function ShopThree (){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { interactivecourses, isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.interactivecourses
    )
    //const [interactivecourses, setVideocourses] = useState({})
    //const { user } = useSelector((state) => state.auth)
    useEffect(() => {
        if (isError) {
            console.log(message)
        }


        dispatch(getinteractivecourses())
        console.log(interactivecourses)
        return () => {
            dispatch(reset())
        }
    }, [navigate, isError, message, dispatch])

        return (
            <Fragment>
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content bg-white right-chat-active">

                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="row">
                                <div className="col-xl-12 col-xxl-12 col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card p-md-5 p-4 bg-primary-gradiant rounded-3 shadow-xss bg-pattern border-0 overflow-hidden">
                                                <div className="bg-pattern-div">
                                                <AddInt interactivecourses={interactivecourses}/>
                                                </div>
                                                <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0">Interactive Courses <span className="fw-700 ls-3 text-grey-200 font-xsssss mt-2 d-block">{interactivecourses.length} INTERACTIVE COURSES FOUND</span></h2>
                                            </div>
                                        </div>
                                       

                                        <div className="col-lg-8 mt-4">
                                            <div className="row">
                                                {interactivecourses.length > 0 ? (
                                                    <div className="interactivecourses">
                                                        {interactivecourses.map((interactivecourse) => (
                                                            <Oneinteractivecourse key={interactivecourse._id} interactivecourse={interactivecourse} />
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <h3>You have not set any video course</h3>
                                                )}

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <Popupchat />
                <Appfooter />
            </Fragment>
        );

}

export default ShopThree;

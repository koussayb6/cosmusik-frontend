import React, {Component, Fragment, useEffect, useState} from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {getvideocourses, reset} from "../features/videocourse/videocourseSlice";
import Onevideocourse from "../components/Onevideocourse";



function ShopTwo (){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { videocourses, isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.videocourses
    )
    //const [videocourses, setVideocourses] = useState({})
    //const { user } = useSelector((state) => state.auth)
    useEffect(() => {
        if (isError) {
            console.log(message)
        }


        dispatch(getvideocourses())
        console.log(videocourses)
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
                                            <div className="bg-pattern-div"></div>
                                            <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0">Shop <span className="fw-700 ls-3 text-grey-200 font-xsssss mt-2 d-block">{videocourses.length} PRODUCTS FOUND</span></h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-4">
                                        <div className="card w-100 p-4 border-0 bg-lightblue">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group mb-0">
                                                        <label htmlFor="Search"
                                                               className="fw-600 text-grey-900 font-xsss">Categories</label>
                                                    </div>
                                                    <ul className="recent-post mt-2">
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Drress</a>
                                                        </li>
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Shirt</a>
                                                        </li>
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Jacket</a>
                                                        </li>
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Jean</a>
                                                        </li>
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Men</a>
                                                        </li>
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Shorts</a>
                                                        </li>
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Swimwear</a>
                                                        </li>
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Tousers</a>
                                                        </li>
                                                        <li className="mb-0"><a href="#"
                                                                                className="fw-600 font-xssss">Jumper
                                                            Cardigans</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-12 pe-4">
                                                    <div className="form-group mb-0">
                                                        <label htmlFor="Search"
                                                               className="fw-600 text-grey-900 font-xsss">Brand</label>
                                                    </div>
                                                    <div className="form-group mb-2 mt-2">
                                                        <div
                                                            className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                            <input type="radio" className="custom-control-input"
                                                                   id="customRadio1" name="Depart" value="customEx"
                                                                   checked=""/>
                                                            <label
                                                                className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block"
                                                                htmlFor="customRadio1">Addidas<span
                                                                className="float-right fw-600 text-grey-600 font-xssss mt-1">12</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <div
                                                            className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                            <input type="radio" className="custom-control-input"
                                                                   id="customRadio5" name="Depart" value="customEx"/>
                                                            <label
                                                                className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block"
                                                                htmlFor="customRadio5">Levis <span
                                                                className="float-right fw-600 text-grey-600 font-xssss mt-1">15</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <div
                                                            className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                            <input type="radio" className="custom-control-input"
                                                                   id="customRadio3" name="Depart" value="customEx"/>
                                                            <label
                                                                className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block"
                                                                htmlFor="customRadio3">Cape Town <span
                                                                className="float-right fw-600 text-grey-600 font-xssss mt-1">7</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <div
                                                            className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                            <input type="radio" className="custom-control-input"
                                                                   id="customRadio4" name="Depart" value="customEx"/>
                                                            <label
                                                                className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block"
                                                                htmlFor="customRadio4">Nikes <span
                                                                className="float-right fw-600 text-grey-600 font-xssss mt-1">34</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-2 mt-2">
                                                        <div
                                                            className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                            <input type="radio" className="custom-control-input"
                                                                   id="customRadio1" name="Depart" value="customEx"
                                                                   checked=""/>
                                                            <label
                                                                className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block"
                                                                htmlFor="customRadio1">Addidas<span
                                                                className="float-right fw-600 text-grey-600 font-xssss mt-1">12</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <div
                                                            className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                            <input type="radio" className="custom-control-input"
                                                                   id="customRadio5" name="Depart" value="customEx"/>
                                                            <label
                                                                className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block"
                                                                htmlFor="customRadio5">Levis <span
                                                                className="float-right fw-600 text-grey-600 font-xssss mt-1">15</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <div
                                                            className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                            <input type="radio" className="custom-control-input"
                                                                   id="customRadio3" name="Depart" value="customEx"/>
                                                            <label
                                                                className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block"
                                                                htmlFor="customRadio3">Cape Town <span
                                                                className="float-right fw-600 text-grey-600 font-xssss mt-1">7</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <div
                                                            className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                            <input type="radio" className="custom-control-input"
                                                                   id="customRadio4" name="Depart" value="customEx"/>
                                                            <label
                                                                className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block"
                                                                htmlFor="customRadio4">Nikes <span
                                                                className="float-right fw-600 text-grey-600 font-xssss mt-1">34</span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group mb-0">
                                                        <label htmlFor="Search"
                                                               className="fw-600 text-grey-900 font-xsss">Size</label>
                                                    </div>
                                                    <ul className="list-inline mt-2">
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">XS</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">S</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">SM</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">M</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">L</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">XL</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">XS</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">S</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">SM</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">M</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">L</a>
                                                        </li>
                                                        <li className="list-inline-item me-0 mb-2"><a href="#"
                                                                                                      className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">XL</a>
                                                        </li>
                                                    </ul>

                                                    <div className="form-group mb-0 mt-4">
                                                        <label htmlFor="Search"
                                                               className="fw-600 text-grey-900 font-xsss">Color</label>
                                                    </div>
                                                    <ul className="list-inline mt-2">
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#ff3b30"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#4cd964"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#132977"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#ff2d55"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#ffcc00"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#ff9500"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#8e8e93"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#D2691E"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#228B22"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#FFC0CB"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#5f9ea0"}}></a>
                                                        </li>
                                                        <li className="list-inline-item me-0"><a href="#"
                                                                                                 className="btn-round-sm"
                                                                                                 style={{backgroundColor: "#9932cc"}}></a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group mb-0 mt-0">
                                                        <label htmlFor="Search"
                                                               className="fw-600 text-grey-900 font-xsss">Price</label>
                                                    </div>
                                                    <div className="form-group mt-3 mb-0">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div id="slider-range"
                                                                     className="mb-2 noUi-target noUi-ltr noUi-horizontal noUi-background">
                                                                    <div className="noUi-base">
                                                                        <div className="noUi-origin noUi-connect"
                                                                             style={{left: "9.09091%"}}>
                                                                            <div
                                                                                className="noUi-handle noUi-handle-lower"></div>
                                                                        </div>
                                                                        <div className="noUi-origin noUi-background"
                                                                             style={{left: "79.798%"}}>
                                                                            <div
                                                                                className="noUi-handle noUi-handle-upper"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row slider-labels">
                                                            <div className="col-6 caption">
                                                                    <span id="slider-range-value1"
                                                                          className="font-xsssss fw-600 text-grey-600">$1,000</span>
                                                            </div>
                                                            <div className="col-6 text-right caption">
                                                                    <span id="slider-range-value2"
                                                                          className="font-xsssss fw-600 text-grey-600">$8,000</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <form>
                                                                    <input type="hidden" name="min-value" value=""/>
                                                                    <input type="hidden" name="max-value"
                                                                           value=""/>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-0 mt-3">
                                                        <label htmlFor="Search"
                                                               className="fw-600 text-grey-900 font-xsss">Tag</label>
                                                    </div>
                                                    <ul className="list-inline mt-2">
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Drress</a>
                                                        </li>
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Shirt</a>
                                                        </li>
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Jacket</a>
                                                        </li>
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Jean</a>
                                                        </li>
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Men</a>
                                                        </li>
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Shorts</a>
                                                        </li>
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Swimwear</a>
                                                        </li>
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Tousers</a>
                                                        </li>
                                                        <li className="m-0 list-inline-item mb-2"><a href="#"
                                                                                                     className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Jumper
                                                            Cardigans</a></li>
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 mt-4">
                                        <div className="row">
                                            {videocourses.length > 0 ? (
                                                <div className="videocourses">
                                                    {videocourses.map((videocourse) => (
                                                        <Onevideocourse key={videocourse._id} videocourse={videocourse} />
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

export default ShopTwo;

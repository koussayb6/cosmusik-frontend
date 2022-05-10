import React, {Component, Fragment, useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import {useDispatch, useSelector} from "react-redux";
import {reset, verify, logout, otp} from "../features/auth/authSlice";
import axios from "axios";
import {useToasts} from "react-toast-notifications";
import Modal from 'react-modal';
import Spinner from "../components/Spinner";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

function Settings() {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [formData, setFormData] = useState({
        token: ''
    })
    const { token } = formData
    const { user,twoFactor, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )
    const { addToast, removeToast } = useToasts();

    const disc=()=>{
        dispatch(logout())
        navigate('/login')
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        if(user?.twoFactor){
            addToast("2FA activated", { appearance: 'success' ,autoDismiss: true});

        }else setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }
    const activate2fa=async ()=>{
        const response = await axios.get('/api/users/2fa/'+user._id)
        console.log(response.data)
        addToast("paste this code in your authenticator :"+response.data.tempSecret, { appearance: 'success'});

    }
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            token, name: user.name
        }

        dispatch(otp(userData))
        closeModal()
    }
    useEffect(() => {
        if (isError) {
            addToast(message, { appearance: 'error' ,autoDismiss: true});

        }
        if ( user.twoFactor) {
            addToast("2FA activated", { appearance: 'success' ,autoDismiss: true});
        }

    }, [user,twoFactor, isError, isSuccess, message, navigate, dispatch])

    function copy() {
        navigator.clipboard.writeText(user.otp);
        addToast("code copied", { appearance: 'success', autoDismiss:true});

    }
    if (isLoading) {
        return <Spinner/>
    }
        return (
            <Fragment>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <button onClick={closeModal} className="float-right btn btn-close"></button>
                    <h2>Activate 2 factor authentication</h2>
                    <div>Scan the QR or paste the code in your authenticator. <br/>then enter your token</div>
                    <img className="img-fluid m-3" src={''+user?.otpQR}/>
                    <div className="color-theme-blue">Or click to copy</div>
                    <div onClick={copy} ><h6> {user.otp}</h6></div>

                    <form onSubmit={onSubmit} id="f">

                        <div className="form-group icon-input mb-3">
                            <i className="font-sm ti-key text-grey-500 pe-0"></i>
                            <input type="text"
                                   className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                   id='email'
                                   name='token'
                                   value={token}
                                   placeholder='Enter your token'
                                   onChange={onChange} />
                        </div>


                    </form>

                    <div className="col-sm-12 p-0 text-left">
                        <div className="form-group mb-1"><button type="submit" form="f" className="form-control text-center style2-input text-white fw-600 bg-cyan border-0 p-0 ">Activate</button></div>
                    </div>
                </Modal>

                <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="middle-wrap">
                                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                    
                                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="mb-4 font-xxl fw-700 mont-font mb-lg-5 mb-4 font-md-xs">Settings</h4>
                                                <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">Genaral</div>
                                                <ul className="list-inline mb-4">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/accountinformation" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-primary-gradiant text-white feather-home font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Acount Information</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li onClick={openModal} className="list-inline-item d-block border-bottom me-0"><a href="#" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-primary-gradiant text-white feather-anchor font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Activate two factor Authentication</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></a></li>
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/contactinformation" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Saved Address</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block me-0"><Link to="/socialaccount" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-red-gradiant text-white feather-twitter font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Social Acount</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                </ul>

                                                <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">Acount</div>
                                                <ul className="list-inline mb-4">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/payment" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">My Cards</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block  me-0"><Link to="/password" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Password</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    
                                                </ul>

                                                <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">Other</div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/defaultnoti" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-gold-gradiant text-white feather-bell font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Notification</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block border-bottom me-0"><a href="/helpbox" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-primary-gradiant text-white feather-help-circle font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Help</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></a></li>
                                                    <li onClick={disc} className="list-inline-item d-block me-0"><a href="" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-red-gradiant text-white feather-lock font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0" >Logout</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></a></li>

                                                </ul>
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

export default Settings;

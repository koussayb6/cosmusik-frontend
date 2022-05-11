import React, {Component, Fragment, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {register, reset} from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import {useToasts} from "react-toast-notifications";


function Register() {
    const { addToast, removeToast } = useToasts();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    const [formClass, setFormClass] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            addToast(message, { appearance: 'error',autoDismiss: true });
        }

        if (isSuccess) {
            addToast(message, { appearance: 'success' });
        }
        if(user) navigate('/')

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        if(e.target.checkValidity()){
            setFormClass((prevState) => ({
                ...prevState,
                [e.target.name]: 'is-valid',
            }))
        }else{
            setFormClass((prevState) => ({
                ...prevState,
                [e.target.name]: 'is-invalid',
            }))
        }
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (password !== password2) {
            addToast("passwords must match", { appearance: 'error' ,autoDismiss: true});
        } else {
            const userData = {
                name,
                email,
                password,
            }

            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }
        return (
            <Fragment> 
                <div className="main-wrap">
                    <div className="nav-header bg-transparent shadow-none border-0">
                        <div className="nav-top w-100">
                            <a href="/"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Sociala. </span> </a>
                            <button className="nav-menu me-0 ms-auto"></button>
            
                            <a href="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
                            <a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                        style={{backgroundImage: `url("https://via.
                        placeholder.com/800x950.png")`}}></div>
                        <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                            <div className="card shadow-none border-0 ms-auto me-auto login-card">
                                <div className="card-body rounded-0 text-left">
                                    <h2 className="fw-700 display1-size display2-md-size mb-4">Create <br />your account</h2>
                                    <form onSubmit={onSubmit} id="f">

                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                            <input type="text"
                                                   className={`style2 - input  ps-5 form-control text-grey-900 font-xsss fw-600 ${formClass.name}`}
                                                   id='name'
                                                   name='name'
                                                   value={name}
                                                   placeholder='Enter your name'
                                                   onChange={onChange} required minLength="3"/>
                                            <div className="invalid-feedback">
                                                invalid name
                                            </div>
                                        </div>
                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                            <input type="email"
                                                   className={`style2 - input  ps-5 form-control text-grey-900 font-xsss fw-600 ${formClass.email}`}
                                                   id='email'
                                                   name='email'
                                                   value={email}
                                                   placeholder='Enter your email'
                                                   onChange={onChange} required/>
                                            <div className="invalid-feedback">
                                                invalid email
                                            </div>
                                        </div>
                                        <div className="form-group icon-input mb-3">
                                            <input type="Password"
                                                   className={`style2 - input  ps-5 form-control text-grey-900 font-xsss fw-600 ${formClass.password}`}
                                                   id='password'
                                                   name='password'
                                                   value={password}
                                                   placeholder='Enter password'
                                                   onChange={onChange} required minLength="6"/>
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                            <div className="invalid-feedback">
                                                password must at least be 6 characters
                                            </div>
                                        </div>
                                        <div className="form-group icon-input mb-1">
                                            <input type="Password"
                                                   className={`style2 - input  ps-5 form-control text-grey-900 font-xsss fw-600 ${formClass.password2}`}
                                                   id='password2'
                                                   name='password2'
                                                   value={password2}
                                                   placeholder='Confirm password'
                                                   onChange={onChange} required minLength="6"/>
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                            <div className="invalid-feedback">
                                                password confirmation is required
                                            </div>
                                        </div>

                                    </form>
                                    
                                    <div className="col-sm-12 p-0 text-left">
                                        <div className="form-group mb-1"><button type="submit"  form="f" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Register</button></div>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Already have account <a href="/login" className="fw-700 ms-1">Login</a></h6>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );

}

export default Register;

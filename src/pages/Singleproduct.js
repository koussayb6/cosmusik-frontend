import React, {Component, Fragment, useEffect, useState} from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import Slider from "react-slick";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getoneinteractivecourse, getinteractivecourses, reset} from "../features/interactivecourse/interactivecourseSlice";
import Oneinteractivecourse from "../components/Oneinteractivecourse";
import Oneweek from "../components/Oneweek";
import {forEach} from "react-bootstrap/ElementChildren";


const slideList = [
    {
        imageUrl: 'product.png',
        name: 'product-image ',
    },
    {
        imageUrl: 'product.png',
        name: 'product-image ',
    },
    {
        imageUrl: 'product.png',
        name: 'product-image ',
    },
    {
        imageUrl: 'product.png',
        name: 'product-image ',
    },

]


function Singleproduct () {
    //const [videoCors,setVideoCors] = useState();
    let {id} = useParams();
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


        dispatch(getoneinteractivecourse(id))
        console.log(interactivecourses)
        return () => {
            dispatch(reset())
        }
    }, [navigate, isError, message, dispatch])
    const weeks = [];
    weeks.push(interactivecourses.weeks)
    console.log(interactivecourses.weeks)

    const hotelsettings = {
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: false,

        };
        return (
            <Fragment>
                <Header />
                <Leftnav />
                    <div className="main-content right-chat-active">
                        <div className="middle-sidebar-bottom">
                            <div className="middle-sidebar-left pe-0">
                                <div className="col-lg-12">
                                    <div className="main-wraper">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="course-details">
                                                    <ul className="rating-stars">
                                                        <li><i className="icofont-star"></i></li>
                                                        <li><i className="icofont-star"></i></li>
                                                        <li><i className="icofont-star"></i></li>
                                                        <li><i className="icofont-star"></i></li>
                                                        <li><i className="icofont-star"></i></li>
                                                        <li><span>4.5</span></li>
                                                    </ul>
                                                    <h4>{interactivecourses.title}</h4>
                                                    <span className="course-price">${interactivecourses.price}<del>29.99</del></span>
                                                    <p>
                                                        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                        condimentum rhoncus, sem quam semper libero, eget dui. Etiam
                                                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                                                        quam semper libero.
                                                    </p>
                                                    <div className="create-by">
                                                        <figure><img src={`images/resources/user1.jpg`} alt=""/></figure>
                                                        <div>
                                                            <span>Kim Carter</span>
                                                            <em>Last Update: Aug, 27 2021</em>
                                                        </div>
                                                    </div>
                                                    <a href="#" title="">Follow</a>
                                                    <ul className="statistic">
                                                        <li><i className="icofont-eye-alt"></i> 1450</li>
                                                        <li><i className="icofont-thumbs-up"></i> 200</li>
                                                        <li><i className="icofont-thumbs-down"></i> 80</li>
                                                        <li><i className="icofont-share-alt"></i> Share</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5">
                                                <div className="course-video">
                                                    <figure>
                                                        <img src={`assets/images/course-2.jpg`} alt=""/>
                                                            <a className="play-btn" data-fancybox=""
                                                               href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title"><i
                                                                className="icofont-play"></i></a>
                                                    </figure>
                                                    <a className="main-btn" href="#" title=""><i
                                                        className="icofont-play"></i> Start</a>
                                                    <a className="wish-btn" href="#" title=""><i
                                                        className="icofont-heart"></i> Add to Wishlist</a>
                                                    <span>30 days money back gurantee</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="desc-course">
                                                    <h4 className="main-title">Description:</h4>
                                                    <p>Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                        condimentum rhoncus, sem quam semper libero, eget dui. Etiam
                                                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                                                        quam semper libero.</p>
                                                    <p>
                                                        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                        condimentum rhoncus, sem quam semper libero, eget dui. Etiam
                                                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                                                        quam semper libero.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="desc-course">
                                                    <h4 className="main-title">Curriculum</h4>
                                                    <div className="question-collaps">
                                                            <div className="interactivecourses" id="accordion">
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header" id="headingOne">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link collapsed"
                                                                                data-toggle="collapse"
                                                                                data-target="#collapseOne"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseOne">
                                                                            1- Basic Html
                                                                            Introduction <span>03 videos</span>
                                                                        </button>
                                                                    </h5>
                                                                </div>

                                                                <div id="collapseOne" className="collapse"
                                                                     aria-labelledby="headingOne"
                                                                     data-parent="#accordion" >
                                                                    <div className="card-body">
                                                                        <ul className="video-lecture">
                                                                            <li>
                                                                                <i className="icofont-play-alt-1"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Html
                                                                                    Intro Lecture</a>
                                                                                <span>29min</span>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icofont-play-alt-1"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Html
                                                                                    Basic Lecture</a>
                                                                                <span>45min</span>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icofont-lock"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Html
                                                                                    Tags Lecture</a>
                                                                                <span>20min</span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header" id="headingTwo">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link"
                                                                                data-toggle="collapse"
                                                                                data-target="#collapseTwo"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseTwo">
                                                                            Css3 Advanced Lectures
                                                                            <span>10 videos</span>
                                                                        </button>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapseTwo" className="collapse show"
                                                                     aria-labelledby="headingTwo"
                                                                     data-parent="#accordion" >
                                                                    <div className="card-body">
                                                                        <ul className="video-lecture">
                                                                            <li>
                                                                                <i className="icofont-play-alt-1"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Css3
                                                                                    Intro Lecture</a>
                                                                                <span>29min</span>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icofont-lock"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Css3
                                                                                    Basic Lecture</a>
                                                                                <span>45min</span>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icofont-lock"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Css3
                                                                                    Tags Lecture</a>
                                                                                <span>20min</span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header" id="headingThree">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link collapsed"
                                                                                data-toggle="collapse"
                                                                                data-target="#collapseThree"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseThree">
                                                                            JQuery Advance Lectures
                                                                            <span>20 videos</span>
                                                                        </button>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapseThree" className="collapse"
                                                                     aria-labelledby="headingThree"
                                                                     data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        <ul className="video-lecture">
                                                                            <li>
                                                                                <i className="icofont-play-alt-1"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Html
                                                                                    Intro Lecture</a>
                                                                                <span>29min</span>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icofont-play-alt-1"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Html
                                                                                    Basic Lecture</a>
                                                                                <span>45min</span>
                                                                            </li>
                                                                            <li>
                                                                                <i className="icofont-play-alt-1"></i>
                                                                                <a className="play-btn" data-fancybox=""
                                                                                   href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">Html
                                                                                    Tags Lecture</a>
                                                                                <span>20min</span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="incldes">
                                                    <h4 className="main-title">This Course Include:</h4>
                                                    <ul>
                                                        <li>
                                                            <i className="icofont-play"></i>
                                                            <span>28 Hours Video</span>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-certificate-alt-1"></i>
                                                            <span>Certificate</span>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-file-alt"></i>
                                                            <span>12 Article</span>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-video-cam"></i>
                                                            <span>Watch Offline</span>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-clock-time"></i>
                                                            <span>Life Time Access</span>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-dollar"></i>
                                                            <span>Paid</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <h4 className="main-title">Feedback</h4>
                                                <div className="course-ratings row merged-10">
                                                    <div className="rating-column col-lg-3 col-md-3 col-sm-3">
                                                        <div className="inner-column">
                                                            <div className="total-rating">4.2</div>
                                                            <div className="rating">
                                                                <span className="icofont-star"></span>
                                                                <span className="icofont-star"></span>
                                                                <span className="icofont-star"></span>
                                                                <span className="icofont-star"></span>
                                                                <span className="icofont-star"></span>
                                                            </div>
                                                            <span>Course Rating</span>
                                                        </div>
                                                    </div>
                                                    <div className="graph-column col-lg-6 col-md-6 col-sm-6">
                                                        <div className="skills">
                                                            <div className="bar">
                                                                <div className="bar-outer">
                                                                    <div className="bar-inner ht"
                                                                         style={{width: "78%"}}></div>
                                                                </div>
                                                            </div>
                                                            <div className="bar">
                                                                <div className="bar-outer">
                                                                    <div className="bar-inner sk"
                                                                         style={{width: "45%"}}></div>
                                                                </div>
                                                            </div>
                                                            <div className="bar">
                                                                <div className="bar-outer">
                                                                    <div className="bar-inner ph"
                                                                         style={{width: "25%"}}></div>
                                                                </div>
                                                            </div>
                                                            <div className="bar">
                                                                <div className="bar-outer">
                                                                    <div className="bar-inner il"
                                                                         style={{width: "15%"}}></div>
                                                                </div>
                                                            </div>
                                                            <div className="bar">
                                                                <div className="bar-outer">
                                                                    <div className="bar-inner in"
                                                                         style={{width: "5%"}}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="stars-column col-lg-3 col-md-3 col-sm-3">

                                                        <div className="rating">
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <i>78%</i>
                                                        </div>

                                                        <div className="rating">
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <i>60%</i>
                                                        </div>

                                                        <div className="rating">
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <i>45%</i>
                                                        </div>

                                                        <div className="rating">
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <i>15%</i>
                                                        </div>

                                                        <div className="rating">
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <span className="icofont-star"></span>
                                                            <i>1%</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="main-wraper">
                                                <div className="comment-area product">
                                                    <h4 className="comment-title">03 Feedback</h4>
                                                    <ul className="comments">
                                                        <li>
                                                            <div className="comment-box">
                                                                <div className="commenter-photo">
                                                                    <img alt="" src={`images/resources/commenter-1.jpg`}/>
                                                                </div>
                                                                <div className="commenter-meta">
                                                                    <div className="comment-titles">
                                                                        <h6>willimes doe</h6>
                                                                        <span>12 june 2017</span>
                                                                        <ins><i className="icofont-star"></i> 4.5</ins>
                                                                    </div>
                                                                    <p>
                                                                        Quis autem velum iure reprehe nderit. Lorem
                                                                        ipsum dolor sit amet adipiscing egetmassa
                                                                        pulvinar eu aliquet nibh dapibus.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comment-box">
                                                                <div className="commenter-photo">
                                                                    <img alt="" src={`images/resources/commenter-2.jpg`}/>
                                                                </div>
                                                                <div className="commenter-meta">
                                                                    <div className="comment-titles">
                                                                        <h6>Qlark Jack</h6>
                                                                        <span>22 july 2017</span>
                                                                        <ins><i className="icofont-star"></i> 4.5</ins>
                                                                    </div>
                                                                    <p>
                                                                        Quis autem velum iure reprehe nderit. Lorem
                                                                        ipsum dolor sit amet adipiscing egetmassa
                                                                        pulvinar eu aliquet nibh dapibus.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comment-box">
                                                                <div className="commenter-photo">
                                                                    <img alt="" src={`images/resources/commenter-3.jpg`}/>
                                                                </div>
                                                                <div className="commenter-meta">
                                                                    <div className="comment-titles">
                                                                        <h6>Olivia Take</h6>
                                                                        <span>15 jan 2016</span>
                                                                        <ins><i className="icofont-star"></i> 4.5</ins>
                                                                    </div>
                                                                    <p>
                                                                        Quis autem velum iure reprehe nderit. Lorem
                                                                        ipsum dolor sit amet adipiscing egetmassa
                                                                        pulvinar eu aliquet nibh dapibus.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="add-comment mt-5">
                                                        <span>Give Your Reviews</span>
                                                        <ul className="stars">
                                                            <li><i className="icofont-star"></i></li>
                                                            <li><i className="icofont-star"></i></li>
                                                            <li><i className="icofont-star"></i></li>
                                                            <li><i className="icofont-star"></i></li>
                                                            <li><i className="icofont-star"></i></li>
                                                        </ul>
                                                        <form method="post" className="c-form">
                                                            <input type="text" placeholder="Name"/>
                                                                <input type="text" placeholder="Email"/>
                                                                    <textarea rows="4"
                                                                              placeholder="Write Something"></textarea>
                                                                    <button className="main-btn" type="submit">Add
                                                                        Review
                                                                    </button>
                                                        </form>
                                                    </div>
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

export default Singleproduct;

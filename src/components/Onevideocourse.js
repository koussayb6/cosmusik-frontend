import React from "react";
import {Link, useNavigate} from "react-router-dom";


function Onevideocourse({videocourse}){
    const navigate = useNavigate()
    const video = ()=>{
        navigate('../singleCourse/'+videocourse._id)
        console.log(videocourse)
    }
    let videonumber = 0;
    let courselength = 0;
    videocourse.sections.map((section) => (
            videonumber+=section.videos.length
    ));
    videocourse.sections.map((section) => (
        section.videos.map((video)=>(
            courselength+=video.length )

    )));
    courselength=Math.round(courselength/60);
    return(

        <div className="col-lg-6 col-md-6">
            <div className="course">
                <figure>
                    <img src={`assets/images/course-5.jpg`} alt=""/>
                    <span className="rate-result"><i
                        className="icofont-star"></i> {videocourse.views}</span>
                </figure>
                <div className="course-meta">
                    <div className="post-by">
                        <figure><img src={`assets/images/user1.jpg`} alt=""/>
                        </figure>
                        <div className="course-cat">
                            <span>By: {videocourse.user.name} </span>
                            <Link to={`/singleCourse/${videocourse._id}`}>{videocourse.title}</Link>

                        </div>
                    </div>
                    <div className="prise">
                        <span><i className="icofont-cart-alt"></i> {videocourse.price}</span>
                    </div>
                    <h5 className="course-title">
                        <a href="/singleproduct" title=""></a>{videocourse.language}</h5>
                    <div className="course-info">
                        <span className="lecturez"><i className="icofont-film"></i> {videonumber} Lectures</span>
                        <span className="time"><i
                            className="icofont-clock-time"></i> {courselength}Hrs</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Onevideocourse;

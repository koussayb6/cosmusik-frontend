import React from "react";
import {useNavigate} from "react-router-dom";


function Oneinteractivecourse({interactivecourse}){
    const navigate = useNavigate()
    const lesson = ()=>{
        navigate('../singleproduct/'+interactivecourse._id)
        console.log(interactivecourse)
    }
    let lessonnumber = 0;
    let courselength = 0;
    interactivecourse.weeks.map((week) => (
            lessonnumber+=week.lessons.length
    ));
    interactivecourse.weeks.map((week) => (
        week.lessons.map((lesson)=>(
            courselength+=lesson.length )

    )));
    courselength=Math.round(courselength/60);
    return(

        <div className="col-lg-6 col-md-6">
            <div className="course">
                <figure>
                    <img src={`assets/images/course-5.jpg`} alt=""/>
                    <span className="rate-result"><i
                        className="icofont-star"></i> {interactivecourse.views}</span>
                </figure>
                <div className="course-meta">
                    <div className="post-by">
                        <figure><img src={`assets/images/user1.jpg`} alt=""/>
                        </figure>
                        <div className="course-cat">
                            <span>By: {interactivecourse.user.name} </span>
                            <a title="" onClick={lesson}>{interactivecourse.title}</a>
                        </div>
                    </div>
                    <div className="prise">
                        <span><i className="icofont-cart-alt"></i> {interactivecourse.price}</span>
                    </div>
                    <h5 className="course-title">
                        <a href="/singleproduct" title=""></a>{interactivecourse.language}</h5>
                    <div className="course-info">
                        <span className="lecturez"><i className="icofont-film"></i> {lessonnumber} Lectures</span>
                        <span className="time"><i
                            className="icofont-clock-time"></i> {courselength}Hrs</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Oneinteractivecourse;

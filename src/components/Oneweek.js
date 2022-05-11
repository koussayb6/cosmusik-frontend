import React from "react";
import {useNavigate} from "react-router-dom";
import Oneinteractivecourse from "./Oneinteractivecourse";


function Onesection({section}){

    return(
        <div className="onesection">
        {section.map((sec) => (
        <div className="card">
            <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne">
                        1- Basic Html
                        Introduction <span>10 videos</span>
                    </button>
                </h5>
            </div>
            {sec.map((video) => (


            <div id="collapseOne" className="collapse"
                 aria-labelledby="headingOne"
                 data-parent="#accordion" >
                <div className="card-body">
                    <ul className="video-lecture">
                        <li>
                            <i className="icofont-play-alt-1"></i>
                            <a className="play-btn" data-fancybox=""
                               href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title">{video.title}</a>
                            <span>{video.length}min</span>
                        </li>
                    </ul>
                </div>
            </div>
            ))}
        </div>))}
        </div>


    )
}
export default Onesection;

import React from "react";

function AllRequests() {

    //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });

  const fetchRequests = async () => {
    const { data } = await axios.get("/api/group/");
    setGroups(data);
  };
  return (
    <div className="row ps-2 pe-1">
                                        {badgeList.map((value , index) => (

                                        <div key={index} className="col-md-4 col-sm-6 pe-2 ps-2">
                                            <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                                <div className="card-body d-block w-100 p-4 text-center">
                                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1"><img src={`assets/images/${value.imageUrl}`} alt="avater" className="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                                    <div className="clearfix"></div>
                                                    <h4 className="fw-700 font-xss mt-3 mb-0">{value.name} </h4>
                                                    <p className="fw-500 font-xssss text-grey-500 mt-0 mb-3">{value.email}</p>
                                                    <ul className="d-flex align-items-center justify-content-center mt-1">
                                                        <li className="m-2"><h4 className="fw-700 font-sm">{value.connections} <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                                        <li className="m-2"><h4 className="fw-700 font-sm">{value.follower} <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                                        <li className="m-2"><h4 className="fw-700 font-sm">{value.following} <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                                    </ul>
                                                    <ul className="d-flex align-items-center justify-content-center mt-1">
                                                        {value.badge1 ? <li className="m-1"><img src={`assets/images/${value.badge1}`} alt="icon" /></li> : ''}
                                                        {value.badge2 ? <li className="m-1"><img src={`assets/images/${value.badge2}`} alt="icon" /></li> : ''}
                                                        {value.badge3 ? <li className="m-1"><img src={`assets/images/${value.badge3}`} alt="icon" /></li> : ''}
                                                        {value.badge4 ? <li className="m-1"><img src={`assets/images/${value.badge4}`} alt="icon" /></li> : ''}
                                                    </ul>
                                                    <a href="#follow" className="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                                                </div>
                                            </div>
                                        </div>

                                        ))}

                                        
                                    </div>
                                </div>               
                            </div>
                        </div>
                        
                    </div>
                </div>
  );
}

export default AllRequests;

import React, { Component, Fragment, useEffect, useState } from "react";

import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";

import Friends from "../components/Friends";
import Contacts from "../components/Contacts";
import Group from "../components/Group";
import Events from "../components/Events";
import Createpost from "../components/Createpost";
import Memberslider from "../components/Memberslider";
import Friendsilder from "../components/Friendsilder";
import Storyslider from "../components/Storyslider";
import Postview from "../components/Postview";
import Load from "../components/Load";
import Profilephoto from "../components/Profilephoto";
import { useDispatch, useSelector } from "react-redux";
import { getposts } from "../features/posts/postSlice";
import { reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  //const [posts, setPosts] = useState([{}]);
  const API_URL = "/api/posts/";

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getposts());
    /*const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const fetchPosts = async () => {
    const response = await axios.get(API_URL, config) ;
      console.log(response.data);
      setPosts(response.data);
    };

    
   fetchPosts();*/
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="row feed-body">
              <div className="col-xl-8 col-xxl-9 col-lg-8">
                <h1>{user && user.name}</h1>
                <Storyslider />
                <Createpost />

                {posts.map((post) => {
                  return (
                    <Postview
                      key={post._id}
                      post={post}
                      postimage="post.png"
                      avater="user.png"
                      user="Surfiya Zakir"
                      time="22 min ago"
                      des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                    />
                  );
                })}

                <Memberslider />
                <Friendsilder />
                <Load />
              </div>
              <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                <Friends />
                <Contacts />
                <Group />
                <Events />
                <Profilephoto />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popupchat />
      <Appfooter />
    </>
  );
};

export default Home;

import React from "react";
import './PostCard.css'

import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'
import { BiBookmark } from 'react-icons/bi'

function PostCard(props) {
  return (
    <div className="post-box">
      <div className="post-head">
        <div id="post-head-profile">{props.profile}</div>
        <div id="post-head-info">
          <div id="post-head-id">{props.id}</div>
          <div id="post-head-location">{props.location}</div>
        </div>
      </div>
      <div className="post-body">
        <div id="post-body-photo">{props.photo}</div>
      </div>
      <div className="post-bottom-icon">
        <AiOutlineHeart id="heart-button"/>
        <IoChatbubbleOutline id="chat-button"/>
        <FiSend id="send-button"/>
        <div id="blank"/>
        <BiBookmark id="bookmark-button"/>
      </div>
      <div className="post-bottom-like">
        <div className="post-bottom-like-text">
          <Link to={"/"}>
            좋아요  
          </Link>
        </div>
      </div>
      <div className="post-bottom-text">
        <div id="post-head-id">{props.id}</div>
      </div>
    </div>
  )
}

export default PostCard
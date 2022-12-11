import React from "react";
import './PostCard.css'

import { Link } from "react-router-dom"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { AiOutlineHeart } from 'react-icons/ai'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'
import { BiBookmark } from 'react-icons/bi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

function PostCard(props) {
  return (
    <div className="post-box">
      <div className="post-head">
        <div id="post-head-profile">{props.profile}</div>
        <div id="post-head-info">
          <div id="post-id-location">
            <div id="post-id">{props.id}</div>
            <div id="post-head-location">{props.location}</div>
          </div>
        </div>
        <div id="blank" />
        <HiOutlineDotsHorizontal id="more-icon" />
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
        <div id="post-id">{props.id}</div>
      </div>
      <div className="post-bottom-comment">
        <div id="post-bottom-comment">댓글 {props.count_comment}개 모두 보기</div>
      </div>
      <div className="post-bottom-date">
        <div id="post-bottom-date">{props.date}일 전</div>
      </div>
      <div className="post-reaction">
        <HiOutlineEmojiHappy id="reaction" />
        <input type="text" id="reaction-text" placeholder="댓글 달기..." />
        <div id="post-button">
          게시
        </div>
      </div>
    </div>
  )
}

export default PostCard
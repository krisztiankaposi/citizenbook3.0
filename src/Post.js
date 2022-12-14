import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import {ExpandMoreOutlined} from "@material-ui/icons";

function Post({profilePic,image,username,timestamp,message}){
    return(
        <div className="post">
        <div className="post__top">
            <Avatar src={profilePic}
            className="post__avatar"/>
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>
                   timestamp
                </p>
            </div>
        </div>

<div classname="post__bottom">
    <p>{message}</p>
</div>
<div className="post__image">
<img src={image} alt=""/>

</div>

<div className="post__options">
    <div className="post__option">
        <ThumbUpIcon />
        <p>like</p>
    </div>

    <div className="post__option">
        <ChatBubbleOutlineIcon />
        <p>Comment</p>
    </div>

    <div className="post__option">
        <NearMeIcon />
        <p>share</p>
    </div>

    <div className="post__option">
        <AccountCircleIcon />
        <ExpandMoreOutlined/>
    </div>




</div>
        </div>
    );
}

export default Post;
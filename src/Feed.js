import React from 'react';
import  "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed () {
    return (
        <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        <Post
       
        profilePic="https://www.thesprucepets.com/thmb/kbAjTHH-uDkwm54YapeY5vuHImo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/icelandic-horse-1178169612-bb949fbfde104e5182b30c829d57de17.jpg"
        message="wow this works"
        timestamp="timestamp"
        username='krisz'
        image="https://starcitizen.tools/images/f/fc/Starfarer_-_Flying_over_Lorville_with_traffic.jpg"
        
            />
        <Post 
profilePic="https://www.thesprucepets.com/thmb/kbAjTHH-uDkwm54YapeY5vuHImo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/icelandic-horse-1178169612-bb949fbfde104e5182b30c829d57de17.jpg"
        message="wow this works"
        timestamp="timestamp"
        username='krisz'
        image=""
        

        />

        
        <Post/>

        </div>
    )
}

export default Feed;
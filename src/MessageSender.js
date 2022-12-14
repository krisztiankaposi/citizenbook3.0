import React , {useState} from 'react';

import "./MessageSender.css";
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";


function MessageSender(){
    const [input,setInput] = useState('');
    const [imageUrl, setImageUrl] =useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();


        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="messageSender__input"
                    placeholder={`whats up`}
                    />
                    <input
                    value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)}
                     placeholder="image URL (optional)"/>
                <button onclick={handleSubmit} type="submit">
                    hidden submit
                </button>
                
                </form>
            </div>
<div className="messageSender__bottom">
    <div className="messageSender__option">
        <VideocamIcon style={{color:"red"}}/>
        <h3>Live video</h3>
    </div>

    <div className="messageSender__option">
        <PhotoLibraryIcon style={{color:"green"}}/>
        <h3>Photo/video</h3>
    </div>

    <div className="messageSender__option">
        <InsertEmoticonIcon style={{color:"orange"}}/>
        <h3>feeling/activity</h3>
    </div>


    
</div>
        </div>
    );

    
    }
export default MessageSender;
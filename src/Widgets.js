import React from 'react'
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">

        <iframe
        src="https://www.erkul.games/live/calculator"
        width="340"
        height="100%"
        style={{border:"none",overflow:"hidden"}}
        
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        ></iframe>
    </div>
  )
}

export default Widgets
import React from "react";
import './App.css';
import Header from "./Header";
import Snowfall from 'react-snowfall';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";


function App() {
  return (
    <div className="app">
    <Snowfall 
      style={
        {
          position:'fixed',
          width:'100vw',
          height:'100vh'
        }
      }
snowFlakeCount={10}

    />
      
    <Header/>

<div className="app__body">
<Sidebar/>
<Feed/>
<Widgets/>

</div>


    </div>
  );
}

export default App;

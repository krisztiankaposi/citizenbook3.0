import React from "react";
import './App.css';
import Header from "./Header";
import Snowfall from 'react-snowfall';

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
snowFlakeCount={80}

    />
      
    <Header/>
    </div>
  );
}

export default App;

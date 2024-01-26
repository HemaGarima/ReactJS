import React , { useState } from 'react';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const[mode , setmode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(15, 33, 68)';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container">
        <TextForm heading = "Enter the text to analyze below" mode = {mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
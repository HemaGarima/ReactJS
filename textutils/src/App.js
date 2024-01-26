import React , { useState } from 'react';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';

function App() {
  const[mode , setmode] = useState('light'); // Whether dark mode is enabled or not
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({msg:message , type : type})
    setTimeout(()=>{
      setAlert(null);
    },1300);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(15, 33, 68)';
      showAlert("Dark mode has been enabled" , "success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success")
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading = "Enter the text to analyze below" mode = {mode} showAlert={showAlert}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
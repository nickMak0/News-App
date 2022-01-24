import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About.js';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


// import About from './components/About';

function App() {
  const [mode,setMode] = useState("light")//wheather the dark mode enable or note
  const [alert, setAlert] = useState(null)


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("dark mode enable","success");
      document.title="TextUtil -Darkmode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode enable","success");
      document.title="TextUtil -Lightmode";
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" AboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    


    </>
    
  );
}

export default App;

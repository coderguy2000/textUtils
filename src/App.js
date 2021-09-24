import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar";
import Form from './components/form';
import {useState} from "react";
import Alert from "./components/alert";
import About from "./components/about";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#4d4a4a";
      document.body.style.color="white";
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }

  return (
      <>
        <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <Form showAlert={showAlert}/> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </Router>
        
      </>
  );
}

export default App;

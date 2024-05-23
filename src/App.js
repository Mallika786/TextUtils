
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const [mode,setmode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggle=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled","success");
      // document.title="TextUtils- Dark mode"
      // setTimeout(() => {
      //   document.title="i am amzing"
      // }, 2000);
      // setTimeout(() => {
      //   document.title="he is amzing"
      // }, 1000);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
      // document.title="TextUtils- Light mode"
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" about="About" mode={mode} togglemode={toggle} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
          <TextForm togglemode={toggle} mode={mode} showalert={showAlert}/>
          </Route>
        </Switch> 
          </div>
           </Router> 
    </>
  );
}

export default App;

import React,{useState} from 'react';
import './scss/main.scss';
import {Welcome, Theory, Coral} from './screens';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App=()=>{
	const [screen, setScreen]=useState(0);
  switch(screen){
  	case 0:
  		return <Welcome setScreen={setScreen}/>
  		break;
  	case 1:
  		return <Theory setScreen={setScreen}/>
  		break;
  	case 2:
  		return <Coral setScreen={setScreen}/>
  		break;
  }
 
}

export default App;

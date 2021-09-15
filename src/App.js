import React, { useState } from 'react';
import './scss/main.scss';
import { Welcome, Theory, Coral, Test, Video } from './screens';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './screens/Home'
import MenuAll from './screens/MenuAll'
const App = () => {
	const [screen, setScreen] = useState(0);

	return <>
		<MenuAll setScreen={setScreen}/>
		<Home screen={screen} setScreen={setScreen} />
	</>

}

export default App;

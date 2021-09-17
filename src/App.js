import React, { useState } from 'react';
import './scss/main.scss';
import { Welcome, Theory, Coral, Test, Video } from './screens';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './screens/Home'
import MenuAll from './screens/MenuAll'
const App = () => {
	const [screen, setScreen] = useState(0);
	const [alias, setAlias] = useState("");
	// alias bu ozin uchun qoladigan text 
	// masalan test 1 va content qo'yasan
	return <>
		<MenuAll alias={alias} setAlias={setAlias} setScreen={setScreen}/>
		<Home alias={alias} setAlias={setAlias} screen={screen} setScreen={setScreen} />
	</>

}

export default App;

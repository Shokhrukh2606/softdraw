import React from 'react'
import { useState } from 'react/cjs/react.development';
import { Coral, Test, Theory, Video, Welcome } from './index';
const Home = ({screen,setScreen}) => {
	
	switch (screen) {
		case 0:
			return <Welcome setScreen={setScreen} />
			break;
		case 1:
			return <Theory setScreen={setScreen} />
			break;
		case 4:
			return <Video setScreen={setScreen} />
			break;
		case 2:
			return <Coral setScreen={setScreen} />
			break;
		case 3:
			return <Test setScreen={setScreen} />
			break;
	}
}
export default Home;
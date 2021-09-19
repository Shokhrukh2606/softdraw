import React, { useState } from "react";
import '../assets/animations.css';
import Any from "./Lectures/Any"
import dataset from '../coreldata';

const Coral = ({ setScreen }) => {
	const [step, setStep] = useState(0);
	const [menuActive, setMenuActive] = useState(false);
	var videos = dataset.map(video => <Any key={video.title} video={video.video} setStep={setStep} step={step} title={video.title} />)
	videos[dataset.length] = <div className="d-flex align-items-center justify-content-center flex-column px-5"><h1>Siz barcha videolarni ko'rdindiz. E'tiboringiz uchun rahmat! </h1><button className="btn btn-info" onClick={e => setStep(0)}>Boshidan boshlash</button></div>
	return (
		<div className="app">
			<div className="pt-5">
				<br />
				{videos[step]}
			</div>

		</div>
	)
}
export default Coral;
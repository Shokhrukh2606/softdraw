import React, { useState } from "react";
import '../assets/animations.css';
import Any from "./Lectures/Any"
import dataset from '../coreldata';

const Coral = ({ setScreen }) => {
	const [step, setStep] = useState(0);
	const [menuActive, setMenuActive] = useState(false);
	var videos = dataset.map(video => <Any key={video.title} video={video.video} setStep={setStep} step={step} title={video.title} />)
	videos[dataset.length] = <h1>Tugadi, <button onClick={e => setStep(0)}>Boshidan</button></h1>
	return (
		<div className="app">
			<nav>
				<div className="burger-btn" onClick={(e) => { e.preventDefault(); setMenuActive(!menuActive) }}>
					<span />
				</div>
				<div>
					<div
						className={menuActive ? "menu active" : "menu"}
						onClick={(e) => { e.preventDefault(); setMenuActive(false) }}
					>
						<div className="blur" />
						<div />
						<div className="menu__content" onClick={e => e.stopPropagation()}>
							<div className="menu__header">
								<h1>Bo'limlar</h1>
							</div>
							<ul className="menu__list w-100">
								<li className="w-100">
									<button onClick={() => setScreen(1)}>
										<div>Teoriyalar</div>
									</button>
									<button onClick={() => setScreen(4)}>
										<div>Video darslar</div>
									</button>
									<button onClick={() => setScreen(2)}>
										<div>Animatsiyalashtirilgan darslar</div>
									</button>
									<button onClick={() => setScreen(3)}>
										<div>Test savollari</div>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div className="pt-5">
				<br />
				{videos[step]}
			</div>

		</div>
	)
}
export default Coral;
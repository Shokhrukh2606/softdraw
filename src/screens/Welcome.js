import React, {useState, useEffect} from 'react';
import animate1 from '../assets/gif/g1.gif';
import animate2 from '../assets/gif/g3.gif';
const Welcome = (props) => {
	const [animate, setAnimate]=useState(animate1);
	useEffect(() => {
		var myinterval=setInterval(()=>{
			if(animate==animate1){
				setAnimate(animate2)
			}else{
				setAnimate(animate1)
			}
		},16000)
		return ()=>{
			clearInterval(myinterval);
		}
	}, [])
	return (
		<div className="container-fluid welcome">
			<div className="row">
				<div className="col-md-7 d-flex align-items-center p-5">
					<h1>
						Immitatsion modellar asosida <br/>
						kompyuter grafikasi <br />
						mavzularini o'rgatish dasturi
					</h1>
				</div>
				<div className="col-md-5 d-flex align-items-center">
					<img src={animate} />
				</div>
			</div>
		</div>
	)
}

export default Welcome;
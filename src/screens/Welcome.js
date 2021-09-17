import React from 'react';
import animate from './animate.svg'
const Welcome = (props) => {
  return (
    <div className="container-fluid welcome">
    	<div className="row">
    		<div className="col-md-9">
    			<h1>
    				CORAL DRAW va AUTOCAD dasturlarini <br/>o'rganish darslariga xush kelibsiz
    			</h1>
    			<button className="btn btn-info" onClick={()=>props.setScreen(1)}>
    				Nazariy darslar
    			</button>
				<button className="btn btn-info mb-3" onClick={()=>props.setScreen(4)}>
    				Video darslar
    			</button>
    			<button className="btn btn-info mb-3" onClick={()=>props.setScreen(2)}>
    				Animatsiyalashtirilgan darslar
    			</button>
				<button className="btn btn-info mb-3" onClick={()=>props.setScreen(3)}>
    				Test savollari
    			</button> */}
				</div>
				<div className="col-md-3 d-flex align-items-center justify-content-center">
					<object type="image/svg+xml" data={animate} />
				</div>
			</div>
		</div>
	)
}

export default Welcome;
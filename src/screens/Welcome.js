import React from 'react';

const Welcome = (props) => {
  return (
    <div className="container-fluid welcome">
    	<div className="row">
    		<div className="col-md-9">
    			<h1>
    				Immitatsion modellar <br/>asosida kompyuter grafikasi<br/> mavzularini o'rgatish dasturi 
    			</h1>
    			{/* <button className="btn btn-info mb-3" onClick={()=>props.setScreen(1)}>
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
    		<div className="col-md-3">
    			
    		</div>
    	</div>
    </div>
  )
}

export default Welcome;
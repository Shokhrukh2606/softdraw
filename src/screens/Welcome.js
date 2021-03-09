import React from 'react';

const Welcome = (props) => {
  return (
    <div className="container-fluid welcome">
    	<div className="row">
    		<div className="col-md-9">
    			<h1>
    				Welcome to drawing tutorial
    			</h1>
    			<button className="btn btn-info" onClick={()=>props.setScreen(1)}>
    				Theory
    			</button>
                
    			<button className="btn btn-success" onClick={()=>props.setScreen(2)}>
    				Animated lectures
    			</button>
    		</div>
    		<div className="col-md-3">
    			
    		</div>
    	</div>
    </div>
  )
}

export default Welcome;
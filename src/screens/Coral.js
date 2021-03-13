import React, {useState} from "react";
import Rectangle from './Lectures/Rectangle';
import Circle from './Lectures/Circle';
import Rgb from './Videos/Rgb';
import RgbCircle from './Videos/RgbCircle';
const Coral = () => {
	  const [step, setStep]=useState(0);	  
    return (
    		<div>
    		{step===0&&<Rectangle next={()=>setStep(1)}/>}
    		{step===1&&<Circle next={()=>setStep(2)}/>}
    		{step===2&&<Rgb next={()=>setStep(3)}/>}
    		{step===3&&<RgbCircle next={()=>setStep(4)}/>}
			{step===4&&<div>
    		  <h1>FINISH</h1>
    			<button onClick={()=>setStep(0)}>GO AGAIN</button>
    		</div>
    		}
    		</div>
    	)
}
export default Coral; 
import React, {useState} from "react";
import Rectangle from './Lectures/Rectangle';
import Circle from './Lectures/Circle';
import Square from './Lectures/Square';
import ConcreteCircle from './Lectures/ConcreteCircle';
import Rgb from './Videos/Rgb';
import RgbCircle from './Videos/RgbCircle';
const Coral = () => {
	const [step, setStep]=useState(0);	  
    return (
    		<div>
    		{step===0&&<Rectangle next={()=>setStep(1)}/>}
    		{step===1&&<Circle next={()=>setStep(2)}/>}
    		{step===2&&<Square next={()=>setStep(3)}/>}
    		{step===3&&<ConcreteCircle next={()=>setStep(4)}/>}
    		{step===4&&<Rgb next={()=>setStep(5)}/>}
    		{step===5&&<RgbCircle next={()=>setStep(6)}/>}
			{step===6&&<div>
    		  <h1>Darsimiz tugadi</h1>
    			<button onClick={()=>setStep(0)}>Boshidan boshlash</button>
    		</div>
    		}
    		</div>
    	)
}
export default Coral; 
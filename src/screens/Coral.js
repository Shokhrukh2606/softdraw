import React, {useState} from "react";
import Rectangle from './Lectures/Rectangle';
import Circle from './Lectures/Circle';

const Coral = () => {
	const [step, setStep]=useState(0);	  
    return (
    		<div>
    		{step===0&&<Rectangle next={()=>setStep(1)}/>}
    		{step===1&&<Circle next={()=>setStep(2)}/>}
    		{step===2&&<div>
    		  <h1>Siz darslarni yakunladingiz</h1>
    			<button onClick={()=>setStep(0)}>Qaytadan o'tish</button>
    		</div>
    		}
    		</div>
    	)
}
export default Coral; 
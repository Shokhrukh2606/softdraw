import React, {useState} from "react";
import '../assets/animations.css';
import Any from "./Lectures/Any"
import dataset from '../coreldata';

const Coral = () => {
	const [step, setStep]=useState(0);
  	var videos = dataset.map(video=><Any key={video.title} video = {video.video} setStep={setStep} step = {step} title={video.title}/>)
   	videos[dataset.length] = <h1>Tugadi, <button onClick={e=>setStep(0)}>Boshidan</button></h1>
    return (
    		<div>
    		  {videos[step]}
    		</div>
    )
}
export default Coral; 
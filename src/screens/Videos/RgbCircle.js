import React from "react";
import rgb_circle from "../../assets/videos/RGB_CIRCLE.mp4";
const RgbCircle = (props) => {
    return <div style={{position:'relative'}}>
        <div className="notification">
            	<button onClick={()=>props.next()}>NEXT</button>
            </div>
        <video style={{width:'100%',
        //  marginLeft:'auto', marginRight:'auto',
          display:'block'}} controls>
            <source src={rgb_circle} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
}
export default RgbCircle;
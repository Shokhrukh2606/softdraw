import React from "react";
import rgb from "../../assets/videos/RGB.mp4";
const Rgb = (props) => {
    return <div style={{ position: 'relative' }}>
        <div className="notification">
            <button onClick={() => props.next()}>Davom etish</button>
        </div>
        <video style={{ width: '100%', 
        // marginLeft: 'auto', marginRight: 'auto', display:'block'
         }} controls>
            <source src={rgb} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
}
export default Rgb;
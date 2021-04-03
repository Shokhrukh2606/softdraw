import React, {useRef, useState} from 'react';



const Any = (props) => {
  const [count, setCount] = useState(1)

  const videoRef=useRef(null)
  const playornext = () =>{
    if(count == 2){
        props.setStep(props.step+1)
        return;
    }
    
    videoRef.current.play()
    setCount(2)
  }

  return (
    <div>
        <div className="notification">
            <h4>{props.title}</h4>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text.</p>
            <button className={count>1?"btn btn-info btn-danger ":"btn btn-info"} onClick={playornext}>
                {count == 1 && "Tushunarli"}
                {count == 2 && "Keyingisi"}
            </button>
        </div>
        <video ref={videoRef} >
            <source src={props.video}/>
        </video>
    </div>
  )
}

export default Any;
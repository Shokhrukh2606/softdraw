import React, {useState} from "react";
import '../../assets/animations.css';
import first from '../../assets/icons/first.svg'
import second from '../../assets/icons/second.svg'
import third from '../../assets/icons/third.svg'
import fourth from '../../assets/icons/fourth.svg'
import fifth from '../../assets/icons/fifth.svg'
import sixth from '../../assets/icons/sixth.svg'
import seventh from '../../assets/icons/seventh.svg'
import eigth from '../../assets/icons/eigth.svg'

const Circle = (props) => {
	  const [notify, setNotify]=useState(0);
	  const [animateRect, setRectAnimate]=useState(false);
	  const [mig, setMig]=useState(false);
	  const animateCircle=(step)=>{
	  	switch(step){
	  		case 0:
	  			setMig(true);
	  			setNotify(1);
	  			break;
	  		case 1:
	  			setNotify(2);
	  			setRectAnimate(true);
	  			setMig(false);
	  			break;
	  		case 2:
	  			setNotify(3);
	  			break;	
	  	}
	  }
    return <div className="app-wrapper">
        <div className="app-header">
            <h3>Darslar</h3>
        </div>
        <div className="app-sidebar">
            <ul className="instruments">
                <li>
                    <img src={first} />
                </li>
                <li>
                    <img src={second} />
                </li>
                <li>
                    <img src={third} />
                </li>
                <li>
                    <img src={fourth} />
                </li>
                <li>
                    <img src={fifth} />
                </li>
                <li>
                    <img src={sixth} />
                </li>
                <li >
                    <img src={seventh} />
                </li>
                <li className={mig?"mig":""}>
                    <img src={eigth} />
                </li>
            </ul>
        </div>
        <div className="app-container">
            <div className='ruler'>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                    <div className='mm'></div>
                </div>
                <div className='cm'></div>
            </div>
            <div className={animateRect?"animated-circle":""}>
            </div>
            {notify===0
            	&&
            <div className="notification">

            	Hozir biz oval shaklini chizishni o'rganamiz
            	<button onClick={()=>animateCircle(0)}>OK</button>
            </div>
            }
            {notify===1
            	&&
            <div className="notification">
            	 Chap tomondagi instrumentlar panelidan doira shaklini bosing
            	<button onClick={()=>animateCircle(1)}>OK</button>
            </div>
            }
            {notify===2
            	&&
            <div className="notification">
            	Kursorni bo'sh joyga bosgan holda chizing
            	<button onClick={()=>props.next()}>NEXT</button>
            </div>
          	}
        </div>
    </div>
}
export default Circle; 
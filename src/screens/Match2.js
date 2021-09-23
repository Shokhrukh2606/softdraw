import React, {useState, useEffect} from 'react'
import Match from './Match.js';

const Match2=(props)=>{
    const [index, setIndex]=useState(0);
    const [mistakeCount,setMisCount]=useState([]);
    const questions=[
        {
            options1:[
                '1',
                '2',
                '3',
                '4'
            ],
            options2:[
                'Two',
                'One',
                'Four',
                'Three'
            ],
            answers:[1, 0, 3, 2]
        },
        {
            options1:[
                '5',
                '6',
                '7',
                '8'
            ],
            options2:[
                'Olti',
                'Besh',
                'Sakkiz',
                'Yetti'
            ],
            answers:[1, 0, 3, 2]
        }
    ]
    const calcScore=(mistakeCount)=>{
        switch(true){
            case mistakeCount/(questions.length*4)<=0.54:
                return 'Bahoyingiz 2. Qayta urinib ko\'ring';
            case mistakeCount/(questions.length*4)<=0.70:
                return 'Bahoyingiz 3. Qoniqarli';
            case mistakeCount/(questions.length*4)<=0.85:
                return 'Bahoyingiz 4. Yaxshi';
                                        
            default:
                return "Bahoyingiz 5. A'lo";

        }
    }
    var realMistakeCount=0;
    for(let i=0;i<mistakeCount.length; i++){
        realMistakeCount+=mistakeCount[i];
    }
    const reset=()=>{
        setMisCount([]);
        setIndex(0);
    }
    const calcMisc=(mistakes)=>{
        var temp=[...mistakeCount];
        temp[index]=mistakes;
        setMisCount(temp);
    }
    return (
        <>
            {index!=questions.length&&
                <Match options1={questions[index].options1} options2={questions[index].options2} 
                    answers={questions[index].answers} setIndex={setIndex} index={index}
                    questions={questions}
                    calcMisc={calcMisc}
                />
            }
            {
                index==questions.length &&
                <div className="centered-xy">
                     <h3>Umumiy xatolar soni: {realMistakeCount}. Umumiy to'g'ri javoblar soni: {questions.length*4-realMistakeCount}</h3>
                     <h2>{calcScore(questions.length*4-realMistakeCount, )}</h2>
                     <button onClick={reset} className="btn btn-success">Qayta urinib ko'rish</button>
                </div>
            }
        </>
    );
}
export default Match2;
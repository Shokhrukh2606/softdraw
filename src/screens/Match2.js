import React, {useState, useEffect} from 'react'
import Match from './Match.js';

const Match2=(props)=>{
    const [index, setIndex]=useState(0)
    const questions=[
        {
            options1:[
                'One',
                'Two',
                'Three',
                'Four'
            ],
            options2:[
                'Zwei',
                'Eins',
                'Vier',
                'Drei'
            ],
            answers:[1, 0, 3, 2]
        },
        {
            options1:[
                'One',
                'Two',
                'Three',
                'Four'
            ],
            options2:[
                'Zwei',
                'Eins',
                'Vier',
                'Drei'
            ],
            answers:[1, 0, 3, 2]
        }
    ]
    return (
        <>
            <Match options1={questions[index].options1} options2={questions[index].options2} 
                    answers={questions[index].answers} setIndex={setIndex} index={index}
                    questions={questions}
                />
           
        </>
    );
}
export default Match2;

import React, {useState, useEffect} from 'react'

const Match=(props)=>{
    const colors=['blue','green', 'red', 'gold'];
    const [trueAnswers, setTrueAnswers]=useState([]);
    const [mistakes, setMistakes]=useState('');
    const [answer, setAnswers]=useState([[0], [1], [2], [3]]);
    const [open, setOpen]=useState(-1);
    const [update, force]=useState();
    
    useEffect(()=>{
        setOptions1(props.options1);
        setOptions2(props.options2);
        setTrueAnswers(props.answers);
        setAnswers([[0], [1], [2], [3]]);
        setOpen(null);
        setMistakes("");
        
    }, [props.answers])
    const [options1, setOptions1]=useState([
            '1',
            '2',
            '3',
            '4'
    ]);
    const [options2, setOptions2]=useState([
        'Two',
        'Eins',
        'Vier',
        'Drei'
    ]);
    const reset=()=>{
        setOptions1(props.options1);
        setOptions2(props.options2);
        setTrueAnswers(props.answers);
        setAnswers([[0], [1], [2], [3]]);
        setOpen(null)
    }
    const checkAnswers=()=>{
        var misCount=0;
       
        for(let i=0; i<answer.length; i++){
            if(answer[i][1]!=trueAnswers[i]){
                misCount++;
            }
        }
        
        alert("To'g'ri javoblar: "+(4-misCount)+". Noto'g'ri javoblar: "+misCount);
        props.calcMisc(misCount);
    }

    const setAnswer2=(index)=>{
        console.log(trueAnswers)
        var temp=answer;
        temp[open][1]=index;
        setAnswers(temp);
        force({});
    }
    const deepSearch=(index)=>{
        for(let i=0; i<answer.length;i++){
            if(answer[i][1]==index){
                return answer[i];
            }
        }
        return false;
    }
    const options1HTML=options1.map((item, index)=>{
        return <button onClick={()=>setOpen(index)} className={index==open || answer[index].length==2?colors[index]:'' }>{item}</button>
    })
    const options2HTML=options2.map((item, index)=>{
        return <button onClick={()=>setAnswer2(index)}className={deepSearch(index)?colors[deepSearch(index)[0]]:'' }>{item}</button>
    })
    return (
        <div className="centered-xy match-quiz">
             <h1>Nostandard testlar</h1>
            <h4>{mistakes}</h4>
            <h5>{props.index+1} - test </h5>
            <div className={'row '}>
            
                <div className="col-md-6">
                    <div>
                       {options1HTML}
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                       {options2HTML}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>checkAnswers()}>Tekshirish</button>
            </div>
            <div className="row">
                {props.index!=0 && <button onClick={()=>props.setIndex(props.index-1)}>Ortga</button>}
                {props.questions.length!=props.index && <button onClick={()=>props.setIndex(props.index+1)}>Oldinga</button>}
            </div>
        </div>
    )
}
export default Match
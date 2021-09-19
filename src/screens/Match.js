
import React, {useState, useEffect} from 'react'

const Match=(props)=>{
    const [options, setTry]=useState([])
    const [result, setResult]=useState('');
    const [mistakeCount, setMistakeCount]=useState(0)
    const [options1, setOptions1]=useState([
        {
            index: 0,
            value:'One'
        },
        {
            index: 1,
            value:'Two'
        }
    ]);
    const [options2, setOptions2]=useState([
        {
            index: 0,
            value:'Zwei'
        },
        {
            index: 1,
            value:'Eins'
        }
    ]);
    useEffect(()=>{
        if(options.length==2 && options[0]!=undefined){
            check();
        }
    }, [options]);
    const setOption=async (index, value)=>{
        if(index==1){
            var temp=[...options]
            temp[0]=value;
            setTry(temp)
        }
        if(index==2){
            var temp=[...options]
            temp[1]=value;
            setTry(temp)
        }       
    }
    const check=()=>{
        const matches={
            0:1,
            1:0
        }
        if(matches[options[0]]==options[1]){
            setResult('correct');
            var temp1=[...options1];
            var temp2=[...options2];
            temp1=temp1.filter((item)=>{
                return item.index!=options[0]
            })
            temp2=temp2.filter((item)=>{
                return item.index!=options[1]
            })
            setOptions1(temp1);
            setOptions2(temp2);
            setTry([])
        }else{
            setResult('incorrect');
            setMistakeCount(mistakeCount+1);
        }
    }
    const options1HTML=options1.map((item, index)=>{
        return <button className={options[0]==item.index?'selected-1':''} onClick={()=>setOption('1', item.index)}>{item.value}</button>
    })
    const options2HTML=options2.map((item, index)=>{
        return <button className={options[1]==item.index?'selected-2':''} onClick={()=>setOption('2', item.index)}>{item.value}</button>
    })
    return (
        <div className="centered-xy match-quiz">
            <h4>Jami xatolar: {mistakeCount}</h4>
            <div className={'row '+result}>
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
        </div>
    )
}
export default Match
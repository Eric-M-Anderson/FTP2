import React, {useState} from 'react';
import Button1 from './1coreui/buttons/button1.js';
import Index from './comp1.js';
import './1coreui/buttons/button1.scss';

const Name = () => {
    const [count, setCount] = useState(() => {return <div></div>});
    const [state, setState] = useState(() => {return "Show Date"});

    /*function decrementCount(){
        console.log(<div>1</div>);
        console.log(count);
        console.log(count == <div>1</div>);
        setCount(() => {return <div>1</div>})
        //setCount(prevCount => prevCount - 1)
    }

    function incrementCount(){
        
        //setCount(prevCount => prevCount + 1)
    }*/

    function setSTATE(){
        if(state == "Show Date")
        {
            setState(() => {return "Hide Date"});
            setCount(() => {return <div><Index/></div>});
        }
        else if(state == "Hide Date"){
            setState(() => {return "Show Date"})
            setCount(() => {return <div></div>});
        }
    }

    return (
        <div>
            <Button1 functions={setSTATE} text={state}/>
            <span>{count}</span>
        </div>
    );
};

export default Name;
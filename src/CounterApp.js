import { useState } from 'react';
import './App.css'

function CounterApp(){
    // let count=0;
    let [count,setCounter ] = useState(0)
    return(
        <div className="Wrapper">
            
            <button onClick={()=>{

                if(count >0){
                    
                    setCounter(count-1) 
                }

            }}>-</button>
            <p>{count}</p>
            <button onClick={()=>{
                if(count <10){
                    setCounter(count+1)
                }
            }}>+</button>
            
        </div>
    )

}

export default CounterApp;
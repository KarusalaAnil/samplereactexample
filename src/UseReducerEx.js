import { useReducer } from "react"

function callingReducer(state,value){
    if(state.type==='INC')
        return state-1;
    else
    return state+1;

}


export default function UseReducerEx() {
    const [counter,dispatch] = useReducer(callingReducer,0)
    return (

        <div>
            
            <button onClick={()=>dispatch({type:'INC'})}>-</button>{
            counter}
            <button onClick={()=>dispatch({type:'INC'})}>+</button>
        </div>

    )
}
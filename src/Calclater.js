import { useState } from "react";
import Keypad from "./Keypad";

function Calclater() {
    let [input,updateNumber]=useState("");

    function handlerClick(value){

        updateNumber(input+value);

    }
    function calclateFun(value){
        let va = eval(input)
        updateNumber(va);

    }

    return(
        <>
        <h2>Calclater App</h2>
        <input type="text" value={input} >
                </input><br></br>
        <Keypad handlerClick={handlerClick} calclateFun={calclateFun}/>
        
        </>

    )
}
export default Calclater;
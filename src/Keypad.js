function Keypad({handlerClick, calclateFun}){

    return(
        <>

        <button onClick={()=>{handlerClick("2")}}>2</button>
        <button onClick={()=>{handlerClick("3")}}>3</button>
        <button onClick={()=>{handlerClick("4")}}>4</button><br/>
        <button onClick={()=>{handlerClick("+")}}>+</button>
        <button onClick={()=>{handlerClick("-")}}>-</button>
        <button onClick={()=>{handlerClick("*")}}>*</button><br></br>
        <button onClick={calclateFun}>=</button>
        </>
    )

}
export default Keypad;
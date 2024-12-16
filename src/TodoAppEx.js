import { useState } from "react";

function TodoAppEx(){
    let [textValue,updateValue]=useState("Hello")
    let [tableList,updatetableList] = useState(["All","How are you"]);

    function addNewTodo() {
        // alert(''+textValue);
        if(textValue){
            let newTodo =  [
                ...tableList,
                textValue            
            ]            
            updateValue("");   
            updatetableList(newTodo);
        }
    }
    function removeTodo(index){
        // alert(index);
        let newTodo =  [
            ...tableList,
                  
        ]
        newTodo.splice(index,1);
        console.log(newTodo);
        updatetableList(newTodo);

    }
    return(
        <>
            <input type="text" value={textValue} onChange={(e)=>{
                updateValue(e.target.value)
            }}/> 
            {/* <button onClick={addNewTodo}>Add</button> */}
            <button onClick={()=>{addNewTodo()}}>Add</button>
            <br></br>
            <h1>Enter value : {textValue}</h1>
            <table>
                <thead></thead>
                <tbody>
                {
                    tableList.map((data,i)=>{
                        return(
                            <tr key={i}>
                                <td>{data}</td>
                                <td><button onClick={()=>removeTodo(i)}>close</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot></tfoot>
            </table>       
        </>
    )
}

export default TodoAppEx;
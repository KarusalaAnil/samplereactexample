import { useRef } from "react";

export default function Inventory_v1(){
    const pRef = useRef(null);
    return (

        <>
        <h1>This Is Inventory Component</h1>
        <p ref={pRef}>This is Anil</p>
        <button onClick={()=>{
            pRef.current.innerHTML = "Hello Anil Karusala";

        }}>Check Use Ref</button>
        </>
    )
}
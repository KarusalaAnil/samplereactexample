import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export function Inventory(){
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
export function Sales(){
    return (

        <>
        <h1>This Is Sales Component</h1>
        <h1>This Is Sales Component</h1>
        </>
    )
}

export function Parent_rship(){

    return(
        <>

           <h2> This is Parent Component</h2>
           <Child_rship></Child_rship>

        </>

    )

}
export function Child_rship(){

    return(
        <>
            <h2> This is Child Component</h2>
        </>

    )

}

function Orders() {
    return (
        <>
            <div>
                <button><Link to="inventory_v1">Inventory</Link></button>
                <button><Link to="sales">sales</Link></button>
            </div>
            <h1>This Is Home Component</h1>
            
            <h3>This nexsted Component</h3>

            <Outlet/>
        </>

    )
}
export default Orders;
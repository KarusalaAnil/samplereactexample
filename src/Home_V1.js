// import { useLocation, useParams } from "react-router-dom";
import Product_List from "./Product_List";
import { createContext } from "react";
// import {Person_v1} from './Person_v1'

export const context  = createContext();



function Home_V1() {

    let Product = {
        productName:'mobile',
        price:20000,
        availableStatus:false,

    }

    // let myObj:Person_v1={
    //     name:''
    // }
    // Person_v1 p = new Person_v1();
    
    
    return (
        <>
        <h1>This Is Home_V1 Component</h1>
        <context.Provider value={Product}>

        <Product_List ></Product_List>

        </context.Provider>
        
        </>

    )
}
export default Home_V1;
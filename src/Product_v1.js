import { useContext, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
import {context} from './Home_V1';

function Product_v1() {

    const value = useContext(context);
    console.log(value);
    return (
        
        <>
        <h1>This Is Product_v1 Component</h1>
        <h2>this Prodct Name data=  {value.productName}</h2>
        <h2>this Prodct price =  {value.price}</h2>
        <h2>this Prodct Availability =  {value.availableStatus ? 'Yes' : 'No'}</h2>
        </>

    )
}
export default Product_v1;
import { useEffect, useState } from "react";
import ProductCard from "./Product-card";
import './App.css'

function Product(){

    const [productList,updateProductList] = useState([]);

    useEffect(
        ()=>{
            getProducts()
        },[]
    )
    async function getProducts() {
        const res =  await fetch('https://fakestoreapi.com/products');
        let pList = await res.json();
        console.log(pList)

        updateProductList(pList);
    }
    if(productList.length === 0){
       return  <h2>Hello World</h2>

    }
    return (
        <>
        <h2>Welcome to Product List</h2>
        <div className="card-list">

            {
                // console.log(productList)
                productList.map((p,i) =><ProductCard key={i} {...p}></ProductCard>)
                // productList.map()

            }
        </div>
        
        </>
    )

}
export default Product;
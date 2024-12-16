import { useEffect, useMemo, useState } from "react"

function UseMemmo_v1(){


    const [searchText,setSearchText] = useState('')
    const [productList,setProductList] = useState([
        {productName:'ear phones',price:1500,productId:'1'},
        {productName:'Mobile',price:25000,productId:'2'},
        {productName:'Id Card',price:500,productId:'3'},
        {productName:'Charger',price:700,productId:'4'}
    ]);

    const [time,setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[]);
    

    // console.log(productList);

//     const filterProductList = filterProduct(productList,searchText)

//    function filterProduct (productList,searchText){

//         return productList.filter(data=>{
//             return data.productName.toLowerCase().includes(searchText.toLowerCase())
//         })
//    } 

    const filterProductList = useMemo(
            ()=>{

                //  (productList,searchText){

                         return productList.filter(data=>{
                            console.log(data);
                                return data.productName.toLowerCase().includes(searchText.toLowerCase())
                            })
                    //    } 
                   

            },[productList,searchText]
   
        )
    

    return (
        <>
        <h3>{time}</h3>
        <input type="text" onChange={(e)=>{
                setSearchText(e.target.value)
        }} value={searchText}></input>
        <table>
            <thead></thead>
                <tbody>
                    
                    <tr>
                            <td>Sno</td>
                            <td>Product Name</td>
                            <td>Price</td>
                    </tr>
                    {
                        filterProductList.map(data=>{                            
                           return (
                                <tr key={data.productId}> 
                                        <td>{data.productId}</td>
                                        <td>{data.productName}</td>
                                        <td>{data.price}</td>
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
export default UseMemmo_v1;
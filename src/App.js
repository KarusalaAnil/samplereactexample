import './App.css'
// import Header from './header';
// import User from './User'
// import {myObjCSS} from './text'
import React ,{ lazy, Suspense, useState } from 'react';
// import Login from './Login';
// import Orders from './Orders';
// const lazy =
const Login = lazy(()=>import('./Login'));

function App() {
    const [show,setShow]=useState(false)
    
    // let [testName,displayMessage] = useState("Anil");
    let [product,updateProduct]=useState({
        pname:"Moto Mobile",
        price :10000
    })
    

    return (
       <>
       {/* <Login></Login> */}
        <h2>Product Name  : {product.pname}</h2>
        <p>Product Price  : {product.price}</p>
        <h2>{JSON.stringify(product)}</h2>

        <input id='priceId'/>

        <button onClick={()=>{

            let mprice = document.getElementById("priceId").value;
            // updateProduct(price);
            updateProduct({
                ...product,
                price:mprice
            })

            }}>Click</button>

            <button onClick={()=>{setShow(true)}}>Show Login component</button>

            {
                show == true && (
                    <Suspense>
                        <Login/>
                    </Suspense>
                
            )

            }


       </>
    )
    

    // function updatedCounter(){
    //     counter++;
    //     console.log(counter);

    // }
    
}
export default App;



 /* <p>Counter Value  = {counter}</p>
            <button onClick={()=>{
                updatedCounter(++counter)
            }}>click</button> 
 <button onClick={updatedCounter1('')}>click</button> */
            
// let App = ()=>{
//     return (
//                 <div>
//                      <h1 >Hello this is H1 tag</h1>
//                 </div>
//             )
// }




// expor





// export let person = {
//     name:"anil",
//     password:"anil",
//     age:24
// }

// export let x = 40;


/* <div>
            <User name='Lakshmi' age='29' location='Hyd'/>
            <User name='Anil karusala' age='24' location='Hyd'/>
            <Header/>
            <h1 >Hello this is H1 tag</h1>
            <h2 style={myObjCSS}>Hello this is H2 tag</h2>

        </div> */

        // let usersList = [{id :35 ,name:'anil',location:'hyd',age:'33'},{id :37 ,name:'sunel',location:'hyd',age:'35'},{id :38 ,name:'mahesh',location:'rvn',age:'23'}]
    
        // return (
        //     <div>
        //         {
        //             usersList.map((x)=>{
        //                 return <User name={x.name}  location={x.location} age={x.age} id = {x.id} key = {x.id} />
        //             })
               
        //         }
                
    
        //     </div>
        // )
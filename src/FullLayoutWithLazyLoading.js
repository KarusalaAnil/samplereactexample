import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
// import Home from "./ContactUs";
// import Login from "./Login";
// import Orders, { Inventory, Sales } from "./Orders";
import { lazy, Suspense } from "react";
import { Inventory, Sales } from "./Orders";

const About = lazy(()=>import('./About'));
const Home = lazy(()=>import('./Home'));
const ContactUs = lazy(()=>import('./ContactUs'));
const Login = lazy(()=>import('./Login'));
const Orders = lazy(()=>import('./Orders'));
const Inventory_v1 = lazy(()=>import('./Inventory_v1'));


function Header_v2(){
    return(
        <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li><Link to="/login/1">Login</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                
        </ul>

    )
}
export function ErrorPge_v2() {
    return (
        <>
        <h2>404 Error</h2>
        </>
    )
}

function FullLayoutWithLazyLoading() {
    return (
     
        <>             
            <BrowserRouter>
                <Header_v2/>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="about" element={<About/>}></Route>
                        <Route path="contact" element={<ContactUs/>}></Route>
                        <Route path="login/:id" element={<Login/>}></Route>
                        <Route path="orders" element={<Orders/>}>
                                <Route path="inventory_v1" element={<Inventory_v1/>}></Route>
                                <Route path="sales" element={<Sales/>}></Route> 
                        </Route>
                        <Route path="*" element={<ErrorPge/>}></Route>
                    </Routes>
                </Suspense>
            
            </BrowserRouter>
        </>

    )
}
export default FullLayoutWithLazyLoading;
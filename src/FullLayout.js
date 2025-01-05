import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

import Login from "./Login";
import Orders, { Inventory, Sales } from "./Orders";
import ContactUs from "./ContactUs";
import { useSelector } from "react-redux";
import BarcodeGenerator from "./barcode";
import BarcodeGenerator1 from "./barcode1";
import PDFPage from "./pdfpage";
import ReceiptGenerator from "./report";


function Header(){
    return(
        <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li><Link to="/login/1">Login</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/borcode">borcode</Link></li>
                <li><Link to="/pdf">pdf</Link></li>
                <li><Link to="/report">pdf</Link></li>
                
        </ul>

    )
}
export function ErrorPge() {
    return (
        <>
        <h2>404 Error</h2>
        </>
    )
}

function FullLayout() {

    const data = useSelector((state)=>{
        return state;
    })
    console.log(data);
    
    return (
     
        <>             
            <BrowserRouter>
                <Header/>
                
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="about" element={<About/>}></Route>
                        <Route path="contact" element={<ContactUs/>}></Route>
                        <Route path="login/:id" element={<Login/>}></Route>
                        <Route path="borcode" element={<BarcodeGenerator1/>}></Route> {/*included Font Adjectmenets */}
                        <Route path="pdf" element={<PDFPage/>}></Route> {/*included Font Adjectmenets */}
                        <Route path="report" element={<ReceiptGenerator/>}></Route> {/*included Font Adjectmenets */}
                        <Route path="orders" element={<Orders/>}>
                            <Route path="inventory" element={<Inventory/>}></Route>
                            <Route path="sales" element={<Sales/>}></Route>
                            
                        </Route>
                        <Route path="*" element={<ErrorPge/>}></Route>
                    </Routes>
                
            
            </BrowserRouter>
        </>

    )
}
export default FullLayout;
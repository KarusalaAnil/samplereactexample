import React from 'react';
import ReactDOM from 'react-dom/client';
// import Product from './Product';
import FullLayout from './FullLayout';
import './App.css';
import { Provider } from 'react-redux';

// import UseReducerEx from './UseReducerEx';
// import Orders from './Orders';
// import Home_V1 from './Home_V1';
// import UseMemmo_v1 from './UseMemo_v1';
// import UseMemmo_v1 from './UseMemo_v1';
// import Calclater from './Calclater';
// import CounterApp from './CounterApp';
// import TodoAppEx from './TodoAppEx'

// import variable,{xyz}  from './text'

// first letter must be capital
// import App from './App'
// import FullLayout from './FullLayout';
// import ModalEx from './ModalEx';
// import Product_List from './Product_List';
// import ContactUs from './ContactUs';
// import Login from './Login';
import store from './store'
import AccessibleDropdown from './menu';


// import {person , x} from './App'

// import JenkinsAppsFile from './JenkinsAppsFile';

// let h1 = React.createElement('h1',{},"This is Anil");

let root = ReactDOM.createRoot(document.getElementById('root'));


// jsx
// root.render(
// <JenkinsAppsFile/>
  
// );

root.render(
    <Provider store={store}>
        <FullLayout />        

    </Provider>
    // <AccessibleDropdown></AccessibleDropdown>
    );
    










/** Values imports */
// function Menu() {
//   console.log(person);
//   console.log(x);
//   return (
//     <h1>Helow</h1>
//   )
// }


/**  functional component:*/

// function Header(){
//   const menu = ["Home","About","Contact us"];
//   return ( <header>
//     <ul>
//       <li>{menu[0]}</li>
//       <li>{menu[1]}</li>
//       <li>{menu[2]}</li>
//     </ul>
//   </header>)
// }
/**
 * render is method 
 * and it is extends from react component*/

// class Menu extends React.Component{
  
//   render() {

//   let menus = ["Home","About","Contact us"];

//       return ( <header>
//     <ul>
//       <li>{menus[0]}</li>
//       <li>{menus[1]}</li>
//       <li>{menus[2]}</li>
//     </ul>
//   </header>)

//   }

// }

// /**function component */
// function Menu() {

//   return (
//   <div>
//     <h1>h1</h1>
//     <ul>
//       <li>Test</li>
//     </ul>
//   </div>
//   )
// }
// /**Classs  component */
// class Header extends React.Component {

//   render() {

//     return (
//       <div>
//       <h1>This is Headding tag</h1>
//       <ul>
//         <li>fun</li>
//       </ul>
//     </div>
//     )
//   }
// }

// function Menu() {

//   console.log(xyz);
//   console.log(variable);
//   return (
//     <h1>this is Heading</h1>
//   )
// }

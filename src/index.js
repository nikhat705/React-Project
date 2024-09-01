import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import Navbar from "./Component/landing_page/home/Navbar";
import HomePage from "./Component/landing_page/home/HomePage";
import AboutPage from "./Component/landing_page/AboutPage";
import ProductPage from "./Component/landing_page/products/ProductPage";
import PricingPage from "./Component/landing_page/pricing/PricingPage";
import SupportPage from "./Component/landing_page/support/SupportPage";
import Footer from "./Component/Footer";
import NotFound from './Component/NotFound';
import App from './App';
import Form from './Component/landing_page/Form';
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser"
import UserInfo from './Component/UserInfo';
import Register from './Component/Register';
import LogIn from './Component/LogIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>

  <Navbar/>
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/EditUser" element={<EditUser/>}/>
<Route path="/Form" element={<Form/>}/>
<Route path="/UserInfo" element={<UserInfo/>}/>
<Route path="/logIn" element={<LogIn/>} />
<Route path="/expense" element={<App/>} />
<Route path="/about" element={<AboutPage/>} />
<Route path="/Products" element={<ProductPage/>} />
<Route path="/Pricing" element={<PricingPage/>}/>
<Route path="/Support" element={<SupportPage/>}/>
<Route path="*" element={<NotFound/>}/>

</Routes>

<Footer/>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

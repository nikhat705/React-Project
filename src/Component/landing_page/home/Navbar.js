import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
         
         <nav class="navbar navbar-expand-lg bg-white border-bottom">
  <div class="container p-3">
    <Link class="navbar-brand" area-current="page" to="/">
        <img src="logo.svg" style={{width:"25%"}} alt="logo"/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Link class="nav-link active" area-current="page" to="/register">Register</Link>
      <Link class="nav-link active" area-current="page" to="/UserInfo">userInfo</Link>
          <Link class="nav-link active" area-current="page" to="/logIn">LogIn</Link>
        <li class="nav-item">
          <Link class="nav-link active" area-current="page" to="/about">about</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" area-current="page" to="/expense">Expense</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" area-current="page" to="/Products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" area-current="page" to="/Pricing">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" area-current="page" to="/Support">Support</Link>
        </li>
       
        
      </ul>
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
        
    )
}
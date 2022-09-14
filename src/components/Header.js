import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import AuthGoogle from '../api/AuthGoogle';
import SideBar from "./SideBar";
// import $ from 'jquery';

const Header = () => {
    const [isActive, setIsActive]=useState(false);
    console.log(isActive);
    return (
         
        <div style={{width: "100%"}}>
        {/* <SideBar /> */}
        
        <nav className="row mr-2 py-1 navbar navbar-white bg-white fixed-top">
            <button className="btn btn-lg mx-3 circle"><i className="fa-solid fa-bars"></i></button>
            <a className={`navbar-brand ${isActive ? "d-none" : ""}`} href="/"><img alt="logo" src="logo.png" height={"42px"}></img></a>
            
            <SearchBar collapse={setIsActive}/>
            
            <button className={`btn btn-lg mr-3 ${isActive ? "d-none" : ""} `}><i style={{color:"#707070"}} class="fa-solid fa-ellipsis-vertical"></i></button>
            
            <AuthGoogle />
        </nav>
        
        </div>
    )
}

export default Header;
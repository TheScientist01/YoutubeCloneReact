import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
// import $ from 'jquery';

const Header = () => {
    const [isActive, setIsActive]=useState(false);
    console.log(isActive);
    return (
        // <nav className="navbar navbar-expand-lg navbar-white bg-light">
        //     <a className="navbar-brand" href="#"><img src="logo.png" height={"40px"}></img></a>
        //     <div className="row">
        //         <SearchBar /> 
        //         {/* <button className="btn btn-lg bg-light">S</button> */}
        //         <div class="navbar-nav ml-auto">
        //             <button className="btn btn-primary bg-white text-primary" style={{fontSize:"17px"}}><i class="fa-regular fa-user mx-2"></i>SIGN IN</button>    
        //         </div>
        //     </div>
        // </nav>
        <nav className="row mx-2 navbar navbar-white" style={{borderBottom: "2px solid #e5e5e5"}}>
            <button className={`btn voice mr-2 ${isActive ? "d-none" : ""}`}><i class="fa-solid fa-bars"></i></button>
            <a className={`navbar-brand ${isActive ? "d-none" : ""}`} href="/"><img alt="logo" src="logo.png" height={"42px"}></img></a>
            
            <SearchBar collapse={setIsActive}/>
            {/* <div className="ml-auto"><i class="fa-solid fa-microphone"></i></div> */}
            <button className={`btn btn-lg mr-3 ${isActive ? "d-none" : ""} `}><i style={{color:"#707070"}} class="fa-solid fa-ellipsis-vertical"></i></button>
            <button className={`btn btn-primary bg-white text-primary ${isActive ? "d-none" : ""} `} style={{ fontSize: "17px" }}><i class="fa-regular fa-user mx-2"></i>SIGN IN</button>

        </nav>

    )
}

export default Header;
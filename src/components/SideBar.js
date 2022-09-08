import React, { useState } from "react";

const SideBar=()=>{
    const [isActive, setIsActive]=useState(true);


    return(
        <div className="text-center" id="sidebar">
            <ul className="list-group">
                <button className="btn btn-lg my-2"><i className="fa-solid fa-bars"></i></button>
                <li ><button className="btn btn-lg"><i className="fa-solid fa-house"></i><br></br>Home</button></li>
                <li ><button className="btn btn-lg"><i className="fa-regular fa-compass"></i><br></br>Explore</button></li>
                <li ><button className="btn btn-lg"><i className="fa-solid fa-play"></i><br></br>Shorts</button></li>
                <li ><button className="btn btn-lg"><i class="fa-solid fa-book-medical"></i><br></br>Subscriptions</button></li>
                <li ><button className="btn btn-lg"><i class="fa-solid fa-play"></i><br></br>Library</button></li>
            </ul>
        </div>
    )
}

export default SideBar;
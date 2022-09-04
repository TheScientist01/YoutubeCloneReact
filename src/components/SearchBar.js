import React, { useEffect, useState } from "react";
import {  videos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { youtube } from "../api/youtubeAPI";




const SearchBar = ({ collapse }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    
    const list=useSelector(state=>state.videos.videoList);

    const search = async (term, maxResults) => {
        const response = await youtube(maxResults).get('/search', {
            params: {
                q: term
            }
        }); 
        dispatch(videos(response.data.items));
    };

    // useEffect(() => {
    //     search("",12);
    // });

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);

    }, [width])


    const onSubmit=(event)=>{
        event.preventDefault();
        search(event.target.value, 5);
    }

    const onCollapse=(b)=>{
        collapse(b);
        setIsActive(b);
    }


    if (width < 650) {
        
        if (isActive) {
            return(<div className="row col-12"><button className="btn" onClick={()=>onCollapse(false)}><i class="fa-solid fa-arrow-left"></i></button><div className="row bg-dark ml-4 pl-2 pr-0 mx-auto col-10 bg-white search"> <input className="my-auto" style={{ margin: "auto 0", outline: "none", border: "none", fontSize: "17px", width: "calc(100% - 80px)" }} placeholder="Search"></input> <button onClick={(e)=>onSubmit(e)} className="btn" style={{ width: "80px" }}> <i class="fa-solid fa-magnifying-glass"></i> </button></div></div>)
        }
        else {
            
            return (<div><button onClick={() => onCollapse(true)} className="btn" style={{ width: "80px" }}> <i class="fa-solid fa-magnifying-glass"></i> </button></div>);
        }
    }
    else {
        // collapse(false);
        // onCollapse(false);   
        if(isActive){
            onCollapse(false);    
        }
        return (<div className="row ml-4 pl-2 pr-0 mx-auto col-4 col-lg-5 bg-white search"> <input className="my-auto" style={{ margin: "auto 0", outline: "none", border: "none", fontSize: "17px", width: "calc(100% - 80px)" }} placeholder="Search"></input> <button onClick={(e)=>onSubmit(e)} className="btn" style={{ width: "80px" }}> <i class="fa-solid fa-magnifying-glass"></i> </button></div>);
    }
}


export default SearchBar;
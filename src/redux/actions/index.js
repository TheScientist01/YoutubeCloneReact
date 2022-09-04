export const videos=(list)=>{
    return({
        type: "VIDEO_SEARCH",
        payload: {videoList:list}
    });
};

export const searchActive=()=>{
    return({
        type: "ACTIVATE"
    });    
}

export const searchDeactive=()=>{
    return({
        type: "DEACTIVATE"
    });    
}
const videoReducer=(state={videoList:[]},action)=>{
    switch (action.type) {
        case "VIDEO_SEARCH":
            return {...state, videoList: action.payload.videoList};
        default:
            return state;
    }
}

export default videoReducer;
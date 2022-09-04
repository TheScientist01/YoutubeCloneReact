const searchReducer=(state={isActive: false},action)=>{
    switch (action.type) {
        case "ACTIVATE":
            return {...state, isActive:true}
        case "DEACTIVATE":
            return {...state, isActive:false}
        default:
            return state;
    }
}

export default searchReducer;
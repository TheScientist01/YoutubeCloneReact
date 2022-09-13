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

export const signIn = (user) => {
    // console.log(user);
    return {
        type: 'SIGN_IN',
        payload: {userId: user.getId(), mail: user.Tv, name:user.gZ, surname: user.tX, pp:user.gO}
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

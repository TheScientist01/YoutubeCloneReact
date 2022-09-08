import { combineReducers } from "redux";
import videoReducer from "./videoReducer";
import searchReducer from "./searchReducer";
import authReducer from "./authReducer";

export const reducers=combineReducers(
    {videos: videoReducer, search: searchReducer, auth: authReducer}
);
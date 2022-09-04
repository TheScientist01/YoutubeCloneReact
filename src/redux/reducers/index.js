import { combineReducers } from "redux";
import videoReducer from "./videoReducer";
import searchReducer from "./searchReducer";

export const reducers=combineReducers(
    {videos: videoReducer, search: searchReducer}
);
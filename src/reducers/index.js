import updatePlaceData from "./placeDataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    place:updatePlaceData
})


export default rootReducer;
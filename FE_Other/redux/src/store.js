import {createStore} from "redux";
import {clickerReducer} from "./clickerReducer";

export const store = createStore(clickerReducer)
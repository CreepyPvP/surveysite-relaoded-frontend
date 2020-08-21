import { createStore } from "redux";
import mainReducer from "../reducer/MainReducer";

export default createStore(mainReducer);
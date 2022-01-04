import rootReducer from "./Combine";
import { createStore } from "redux";

const MainStore=createStore(rootReducer)
export default MainStore
import { createStore } from "redux";
import { mainReducer } from "./reducer";

export const mainStore = createStore(mainReducer);

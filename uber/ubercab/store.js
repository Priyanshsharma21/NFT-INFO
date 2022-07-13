import { configureStore } from "@reduxjs/toolkit";
//use to setup that data layer
import navReducer from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import ownerSlice from "./ownerSlice"
import mapSlice from "./mapSlice"
export const store=configureStore({ // basicaly user or sabka data store karane ke liye 
    reducer:{
        user:userSlice,
        owner:ownerSlice,
        map:mapSlice
    }
})
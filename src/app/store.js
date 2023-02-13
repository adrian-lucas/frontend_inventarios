import { configureStore } from "@reduxjs/toolkit";
import loginState from "./features/loginState";
export default configureStore({
    reducer:{
        loginState:loginState,
    },
})
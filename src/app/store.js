import { configureStore } from "@reduxjs/toolkit";
import loginInfo from "./features/loginInfo";
export default configureStore({
    reducer:{
        loginInfo:loginInfo,
    },
})
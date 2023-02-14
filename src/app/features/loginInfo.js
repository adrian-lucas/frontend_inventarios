import { createSlice } from "@reduxjs/toolkit";
export const loginInfo = createSlice({
    name:'loginInfo',
    initialState:{
        session:false,
        userInfo:{},
    },
    reducers:{
        login:(state)=>{state.session=true},
        logout:(state)=>{state.session=false},
        setUserInfo:(state,data)=>{
            console.log('Object data proveniente del  stado loginInfo',data);
            state.userInfo.nombres = data.payload.nombres;
            state.userInfo.username = data.payload.username;
            state.userInfo.role = data.payload.role;
        }
    },

})
export const {login,logout,setUserInfo} = loginInfo.actions
export default loginInfo.reducer
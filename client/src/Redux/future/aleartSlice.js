import { createSlice} from '@reduxjs/toolkit'

export const alertSlice=createSlice({
    name:"alert",
    initialState:{
        loding:false
    },
    reducers:{
        showLoding: state=>{
            state.loding=true
        },
        hideLoding:state=>{
            state.loding=false
        }
    } 
})

export const {showLoding,hideLoding}=alertSlice.actions
import {configureStore} from '@reduxjs/toolkit'
import { alertSlice } from './future/aleartSlice'
import { userSlice } from './future/user.Slice'


export default configureStore ({
    reducer:{
alerts:alertSlice.reducer,
users:userSlice.reducer
    }
})





import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import userPostReucer from './userPost'
import userDeletReducer from './userDelet'
import userPutReducer from './userPut'
import userGetByIdReducer from './userGetById'
import userGetByIdHomeReducer from './userGetByIdHome'

export const store = configureStore({
    reducer: {
        users: userReducer,
        userPost: userPostReucer,
        usersDelet: userDeletReducer,
        usersPut: userPutReducer,
        userGetById: userGetByIdReducer,
        userGetByIdHome: userGetByIdHomeReducer
    }
})
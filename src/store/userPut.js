import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchUser = createAsyncThunk(
//     'users/fetchUser',
//     async (thunkAPI) => {
//         const res = await axios.get('http://localhost:5000/users')
//             .then(
//                 (respons) => respons.data
//             );
//         return res
//     }
// )
export const fetchUserPut = createAsyncThunk(
    'usersPut/fetchUserPut',
    async (obj, thunkAPI) => {
        const res = await axios.put(`http://localhost:5000/users/${obj.id}`, { name: obj.userName, age: obj.age, email: obj.email, password: obj.password })
            .then(
                (respons) => respons.data
            );
        return res
    }
)

export const userSlice = createSlice({
    name: 'usersPut',
    initialState: {
        putLoad: false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPut.pending, (state, action) => {
                state.putLoad = true
            })
            .addCase(fetchUserPut.fulfilled, (state, action) => {
                state.putLoad = false
                console.log('fulfilled--fetchUserPut', action.payload);

            })
            .addCase(fetchUserPut.rejected, (state, action) => {
                console.log('rejected--fetchUserPut');
            })
    }
});
export default userSlice.reducer
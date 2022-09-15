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
export const fetchUserPost = createAsyncThunk(
    'usersPost/fetchUserPost',
    async (obj, thunkAPI) => {
        const res = await axios.post('http://localhost:5000/users', { name: obj.userName, age: obj.age, email: obj.email, password: obj.password })
            .then(
                (respons) => respons.data
            );
        return res
    }
)

export const userSlice = createSlice({
    name: 'usersPost',
    initialState: {
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPost.pending, (state, action) => {
                console.log('pending--userPost');
            })
            .addCase(fetchUserPost.fulfilled, (state, action) => {
                console.log('fulfilled--userPost', action.payload);

            })
            .addCase(fetchUserPost.rejected, (state, action) => {
                console.log('rejected--userPost');
            })
    }
});
export default userSlice.reducer
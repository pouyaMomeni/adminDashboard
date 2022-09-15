import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (thunkAPI) => {
        const res = await axios.get('http://localhost:5000/users')
            .then(
                (respons) => respons.data
            );
        return res
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        loading: false,
        login: false
    },
    reducers: {
        changeLog: (state) => {
            state.login = !state.login
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false
                state.list = action.payload;

            })
            .addCase(fetchUser.rejected, (state, action) => {
                console.log('rejected');
            })
    }
});
export default userSlice.reducer
export const { changeLog } = userSlice.actions
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDelet = createAsyncThunk(
    'usersDelet/fetchUserDelet',
    async (obj, thunkAPI) => {
        const res = await axios.delete(`http://localhost:5000/users/${obj.id}`)
            .then(
                (respons) => respons.data
            );
        return res
    }
)

export const userSlice = createSlice({
    name: 'usersDelet',
    initialState: {
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDelet.pending, (state, action) => {
                console.log('pending--userPost');
            })
            .addCase(fetchUserDelet.fulfilled, (state, action) => {
                console.log('fulfilled--userPost', action.payload);

            })
            .addCase(fetchUserDelet.rejected, (state, action) => {
                console.log('rejected--userPost');
            })
    }
});
export default userSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserGetByIdHome = createAsyncThunk(
    'userGetByIdHome/fetchUserGetByIdHome',
    async (obj, thunkAPI) => {
        const res = await axios.get(`http://localhost:5000/users/${obj.id}`)
            .then(
                (respons) => respons.data
            );
        return res
    }
)

export const userSlice = createSlice({
    name: 'userGetByIdHome',
    initialState: {
        listByIdHome: [],
        numberSolidHome: 0,
        loading: false
    },
    reducers: {
        getNumberHome: (state, action) => {
            state.numberSolidHome = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserGetByIdHome.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchUserGetByIdHome.fulfilled, (state, action) => {
                state.loading = false
                state.listByIdHome = action.payload
            })
            .addCase(fetchUserGetByIdHome.rejected, (state, action) => {
                console.log('rejected');
            })
    }
});
export default userSlice.reducer
export const { getNumberHome } = userSlice.actions
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserGetById = createAsyncThunk(
    'users/fetchUserGetById',
    async (obj, thunkAPI) => {
        const res = await axios.get(`http://localhost:5000/users/${obj.id}`)
            .then(
                (respons) => respons.data
            );
        return res
    }
)

export const userSlice = createSlice({
    name: 'userGetById',
    initialState: {
        listById: [],
        numberSolid: 0,
        loading: false
    },
    reducers: {
        getNumber: (state, action) => {
            state.numberSolid = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserGetById.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchUserGetById.fulfilled, (state, action) => {
                state.loading = false
                state.listById = action.payload
            })
            .addCase(fetchUserGetById.rejected, (state, action) => {
                console.log('rejected');
            })
    }
});
export default userSlice.reducer
export const { getNumber } = userSlice.actions
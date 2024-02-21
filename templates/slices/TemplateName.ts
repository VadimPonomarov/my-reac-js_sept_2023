import {buildCreateSlice, asyncThunkCreator} from "@reduxjs/toolkit";

import {initialState} from "./constants";


const createSliceWithThunks = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator}
});


export const templateName = createSliceWithThunks({
    name: "templateName",
    initialState,
    selectors: {
        templateNameState: state => state
    },
    reducers: create => ({
        someActionName: create.reducer((state, action) => {
        }),
        someAsyncThunkName: create.asyncThunk(
            async (_, thunkAPI) => {
                const res = await fetch("");
                if (!res.ok) {
                    return thunkAPI.rejectWithValue("Error message !");
                }
                return (await res.json());
            },
            {
                pending: state => {
                    state.loading = true;
                    state.error = null;
                },
                rejected: (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || null;
                },
                fulfilled: (state, action) => {
                    state.loading = false;
                    state.error = null;
                },
                settled: (state, action) => {
                    state.loading = false;
                }
            }
        )
    }),
});


export const {
    someActionName, someAsyncThunkName
} = templateName.actions;
export const {templateNameState} = templateName.selectors;
export default templateName;

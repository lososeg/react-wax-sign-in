import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    loaded: false,
}

export const initialize = createAsyncThunk(
    'app/initialize',
    async (/*_, {dispatch}*/) => {
        await Promise.all([
//            dispatch(getReferrer()),
        ])
        return true
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
/*
        setLoaded: (state, action) => {
            state.loaded = action.payload
        },
*/
    },
    extraReducers: (builder) => {
        builder.addCase(initialize.fulfilled, (state, action) => {
            state.loaded = action.payload
        })
    },
})

export const getLoaded = (state) => state.app.loaded

//export const {setLoaded} = appSlice.actions

export default appSlice.reducer

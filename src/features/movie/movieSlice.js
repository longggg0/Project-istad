import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieAction";

const initialState = {
    data:{},
    status:"",
    error:{}
}

export const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchMovies.pending, (state,action) =>{
            //TODO
            state.status = "PENDING"
        })
        .addCase(fetchMovies.fulfilled, (state,action) =>{
            //TODO
            state.status = "SUCCEED"
            state.data = action.payload // Payload from API
        })
        .addCase(fetchMovies.rejected, (state,action) =>{
            //TODO
            state.status = "ERROR"
            state.error =  action.error
        })
    }
})
export default movieSlice.reducer
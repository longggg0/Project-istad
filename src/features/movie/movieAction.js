import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('/product/fetch',
    async ()=>{
        try{
            let responce = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=958d6a01f70bdd2609e4e773318aa457`)
            let json =  await responce.json()
            console.log(json)
            return json
        }catch{
            return Promise(error)
        }
})
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import loading from "daisyui/components/loading";

export const fetchKepek=createAsyncThunk('kepek/fetchkepek',async()=>{
    const res=await fetch('https://rickandmortyapi.com/api/character');
    return await res.json();
})

const kepekSlice=createSlice({
    name:"kepek",
    initialState:{
        kepekList:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchKepek.pending,(state)=>{
            state.loading=true,
            state.error=null
        })
        .addCase(fetchKepek.fulfilled,(state,action)=>{
            state.loading=false,
            state.kepekList=action.payload.results
        })
        .addCase(fetchKepek.rejected,(state)=>{
            state.loading=false,
            state.error='Hiba'
        })
    }
});

export default kepekSlice.reducer;
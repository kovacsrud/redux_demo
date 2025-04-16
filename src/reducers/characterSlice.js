import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import loading from "daisyui/components/loading";

export const fetchCharacters=createAsyncThunk('characters/fetchcharacters',async()=>{
    const res=await fetch('https://rickandmortyapi.com/api/character');
    return await res.json();
})

const characterSlice=createSlice({
    name:"characters",
    initialState:{
        characterList:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCharacters.pending,(state)=>{
            state.loading=true,
            state.error=null
        })
        .addCase(fetchCharacters.fulfilled,(state,action)=>{
            state.loading=false,
            state.characterList=action.payload.results
        })
        .addCase(fetchCharacters.rejected,(state)=>{
            state.loading=false,
            state.error='Hiba'
        })
    }
});

export default characterSlice.reducer;
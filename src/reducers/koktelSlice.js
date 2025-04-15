import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchkoktel = createAsyncThunk("/koktelok/koktel", async(url)=>{
    const res = await fetch(url);
    //console.log("Fetch státusz: ", res.status)
    /*
    if(!res.ok)
        throw new error("Lekérés közben hiba történt.");
    */
    const adat = await res.json();
    //console.log("Fetch adat: ",adat)
    return adat
});
//-----
export const fetchAlapanyag = createAsyncThunk("/koktelok/alapanyagok",
    async() =>
    {
      const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
      const adat = await res.json();
      return adat.drinks.map((anyag) => anyag.strIngredient1);
    });
//-----
export const fetchRandomKoktel = createAsyncThunk("/koktelok/random", async() => {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const adat = await res.json();
    return adat.drinks[0];
});
//-----
const koktelSlice = createSlice({
    name:"koktelok",
    initialState:{
        alapanyagok:[],
        randomkoktel:[],
        kivAlapanyag: null,
        koktelList:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
        builder
        .addCase(fetchkoktel.pending || fetchAlapanyag.pending || fetchRandomKoktel.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchkoktel.fulfilled, (state, action)=>{
            state.loading = false;
            state.koktelList = action.payload.drinks;
        })
        .addCase(fetchAlapanyag.fulfilled, (state, action)=>{
            state.loading = false;
            state.alapanyagok = action.payload;
        })
        .addCase(fetchRandomKoktel.fulfilled, (state, action)=>{
            state.loading = false;
            state.randomkoktel = action.payload;
        })
        .addCase(fetchkoktel.rejected || fetchAlapanyag.rejected || fetchRandomKoktel.rejected, (state)=>{
            state.loading = false;
            state.error = "Hiba a koktélok letöltés során.";
        });
    }
});
export default koktelSlice.reducer;
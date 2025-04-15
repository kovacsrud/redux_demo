import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktail = createAsyncThunk(
  "cocktail/fetchcocktail",
  async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    return await res.json();
  }
);

const CocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    cocktailList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktail.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchCocktail.fulfilled, (state, action) => {
        (state.loading = false), (state.cocktailList = action.payload.drinks);
      })
      .addCase(fetchCocktail.rejected, (state) => {
        (state.loading = false), (state.error = "Hiba a letöltés során");
      });
  },
});

export default CocktailSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlcohol = createAsyncThunk(
  "alcohol/fetchalcohol",
  async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    );
    return await res.json();
  }
);

const AlcoholSlice = createSlice({
  name: "alcohol",
  initialState: {
    alcoholList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlcohol.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchAlcohol.fulfilled, (state, action) => {
        (state.loading = false), (state.alcoholList = action.payload.drinks);
      })
      .addCase(fetchAlcohol.rejected, (state) => {
        (state.loading = false), (state.error = "Hiba a letöltés során");
      });
  },
});

export default AlcoholSlice.reducer;

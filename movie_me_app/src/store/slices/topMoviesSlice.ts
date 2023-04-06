import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchTopMovies = createAsyncThunk(
  "topMovies/fetchTopMovies",
  async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2468e0513amsheb6ff72fcd44999p151290jsnafd75bae0c41",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const response = await fetch(
      "https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_250&limit=10",
      options
    ).catch((err) => console.error(err));

    if (!response) {
      throw new Error("Response is not valid");
    }

    const data = await response.json();
    return data.results;
  }
);

const topMoviesSlice = createSlice({
  name: "topMovies",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopMovies.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchTopMovies.rejected, (state, action) => {
        console.log("Error while fetching data...");
        return state;
      });
  },
});

export { fetchTopMovies };
export default topMoviesSlice.reducer;

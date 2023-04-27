import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blockService from "./blockService";

const initialState = {
  loading: false,
  blocksData: [],
  filteredBlocks: [],
  error: false,
  success: false,
  searchTerm: "",
  message: "",
};

export const printBlocks = createAsyncThunk("blocks", async (_, thunkAPI) => {
  try {
    return await blockService.getBlocks();
  } catch (error) {
    const message = (error.response && error.response.data) || error.message;

    return thunkAPI.rejectWithValue(message);
  }
});

export const blockSlice = createSlice({
  name: "block",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    // filterByName: (state, action) => {
    //   const filteredResult = state.blocksData.filter(
    //     (block) =>
    //       block.title.toLowerCase().includes(action.payload.toLowerCase()) ||
    //       block.description.toLowerCase().includes(action.payload.toLowerCase())
    //   );
    //   return {
    //     ...state,
    //     filteredBlocks:
    //       action.payload.length > 0 ? filteredResult : [...state.blocksData],
    //   };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(printBlocks.pending, (state) => {
        state.loading = true;
      })
      .addCase(printBlocks.fulfilled, (state, action) => {
        state.loading = false;
        state.blocksData = action.payload;
        state.success = true;
      })
      .addCase(printBlocks.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.blocksData = [];
      });
  },
});

export const { reset, setSearchTerm, filterByName } = blockSlice.actions;
export default blockSlice.reducer;

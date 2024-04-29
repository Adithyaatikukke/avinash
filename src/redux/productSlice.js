import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./productApi";
export const getProductsAsync = createAsyncThunk("/ptroduct/get", async () => {
  const response = await getProducts();
  return response.data;
});

const initialState = {
  products: [],
  fetching: false,
  toggle: false,
  page: "Dashboard",
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setPage: (state, action) => {
      const { page } = action.payload;
      state.page = page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state, action) => {
        state.fetching = true;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.fetching = false;
        state.products = action.payload;
      })
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.fetching = false;
      });
  },
});

export const { setPage } = ProductSlice.actions;

export const products = (state) => state.product.products;
export const page = (state) => state.product.page;

export default ProductSlice.reducer;

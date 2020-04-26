import { createSlice } from '@reduxjs/toolkit'

export const product = createSlice({
  name: 'product',
  initialState: {
    product: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload
    }
  }
})

export const fetchProduct = (barcode) => {
  const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`

  return (dispatch) => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
      });
  }
}
import { createSlice } from '@reduxjs/toolkit'
import { ui } from "./ui"

const initialState = {
  product: []
}

export const product = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload
    },
    return: () => {
      return initialState
    }
  }
})

export const fetchProduct = (barcode) => {
  const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))

    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        dispatch(product.actions.addProduct(json))
        dispatch(ui.actions.setLoading(false))
      });
  }
}
import React from "react";
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { product } from "./reducers/product"
import { ui } from "./reducers/ui"
import { ProductInformation } from "components/ProductInformation";
import { LoadingIndicator } from "components/LoadingIndicator";


const reducer = combineReducers({
  product: product.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <ProductInformation />
    </Provider>
  );
};

//Style scanner in BarcodeScanner

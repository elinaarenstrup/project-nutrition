import React from "react";
import { BarcodeScanner } from "components/BarcodeScanner";
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { FetchProductButton } from "./components/FetchProductButton"
import { product } from "./reducers/product"

const reducer = combineReducers({
  product: product.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (

    <Provider store={store}>
      {/* <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
      </label>
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p> */}
      <BarcodeScanner /* onDetected={onDetected} */></BarcodeScanner>
      <FetchProductButton></FetchProductButton>
    </Provider>
  );
};

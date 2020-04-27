import React from "react";
import styled from "styled-components"
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { product } from "./reducers/product"
import { ui } from "./reducers/ui"
import { ProductInformation } from "components/ProductInformation";
import { LoadingIndicator } from "components/LoadingIndicator";
import { Header } from "components/Header"

const Wrapper = styled.div`
margin: auto;

@media (min-width: 400px) {  
background-color: #f64c73;
border-radius: 20px;
width: 375px;
height: 812px;
margin-top: 50px;
}
`

const reducer = combineReducers({
  product: product.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <LoadingIndicator />
        <ProductInformation />
      </Wrapper>
    </Provider>
  );
};

//Style scanner in BarcodeScanner

import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Scanner } from "./Scanner";
import { StyledButton } from "./StyledButton"
import { product } from "../reducers/product"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 266 auto;
  justify-content: center;
  margin: 50px auto;
  padding: 0 40px;
`

export const ProductInformation = () => {
  const dispatch = useDispatch()
  const scannedProduct = useSelector((store) => store.product.product)

  if (scannedProduct.status === 1) {
    return (
      <Wrapper>
        <h2>{scannedProduct.product.product_name}</h2>
        <h2>{scannedProduct.product.brands}</h2>
        <p>{scannedProduct.product.ingredients_text}</p>
        <p>Produced in {scannedProduct.product.manufacturing_places}</p>
        <StyledButton onClick={() => dispatch(product.actions.return())} />
      </Wrapper>
    )
  } else if (scannedProduct.status === 0) {
    return (
      <Wrapper>
        <h2>Product not found</h2>
        <StyledButton onClick={() => dispatch(product.actions.return())} />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Scanner />
      </Wrapper>
    )
  }
};
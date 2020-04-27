import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Scanner } from "./Scanner";
import { StyledButton } from "./StyledButton"
import { product } from "../reducers/product"
import styled from "styled-components/macro"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 300px 100px;
  justify-content: center;
  width: 295px;
  margin: 50px auto;
  padding: 0 40px;
`

const ProductName = styled.h2`
  margin-top: 55px;
  color: #fff;
`

const Brands = styled.h3`
  color: #fff;
  margin: 0;
`

const Text = styled.p`
  color: #fff;
  font-size: 18px;
`

export const ProductInformation = () => {
  const dispatch = useDispatch()
  const scannedProduct = useSelector((store) => store.product.product)

  if (scannedProduct.status === 1) {
    return (
      <Wrapper>
        <div>
          <ProductName>{scannedProduct.product.product_name}</ProductName>
          <Brands>{scannedProduct.product.brands}</Brands>
          <Text>{scannedProduct.product.ingredients_text}</Text>
          {scannedProduct.product.manufacturing_places && <Text>Produced in {scannedProduct.product.manufacturing_places}</Text>}
        </div>
        <StyledButton buttonText="Go back" onClick={() => dispatch(product.actions.return())} />
      </Wrapper>
    )
  } else if (scannedProduct.status === 0) {
    return (
      <Wrapper>
        <ProductName>Product not found</ProductName>
        <StyledButton buttonText="Go back" onClick={() => dispatch(product.actions.return())} />
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
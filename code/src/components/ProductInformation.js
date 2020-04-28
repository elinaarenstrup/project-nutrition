import React from "react"
import styled from "styled-components/macro"
import { useDispatch, useSelector } from "react-redux"
import { product } from "../reducers/product"
import { StyledButton } from "./StyledButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { Scanner } from "./Scanner"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 300px 100px;
  justify-content: center;
  margin: 50px auto;
  padding: 0 40px;
`

const ProductName = styled.h2`
  margin-top: 55px;
  color: #fff;
  text-align: center;
`

const Icon = styled.p`
  margin: 50px 0;
  color: #fff;
  font-size: 90px;
  text-align: center;
`

const Brands = styled.h3`
  color: #fff;
  margin: 0;
  text-align: center;
`

const Text = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
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
        <div>
          <ProductName>Product not found</ProductName>
          <Icon><FontAwesomeIcon icon={faExclamationCircle} /></Icon>
        </div>
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
}
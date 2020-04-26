import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Scanner } from "./Scanner";
import { StyledButton } from "./StyledButton"
import { product } from "../reducers/product"

export const ProductInformation = () => {
  const dispatch = useDispatch()
  const scannedProduct = useSelector((store) => store.product.product)

  if (scannedProduct.status === 1) {
    return (
      <div>
        <h2>{scannedProduct.product.product_name}</h2>
        <h2>{scannedProduct.product.brands}</h2>
        <p>{scannedProduct.product.ingredients_text}</p>
        <p>Produced in {scannedProduct.product.manufacturing_places}</p>
        <StyledButton onClick={() => dispatch(product.actions.return())} />
      </div>
    )
  } else if (scannedProduct.status === 0) {
    return (
      <div>
        <h2>Product not found</h2>
        <StyledButton onClick={() => dispatch(product.actions.return())} />
      </div>
    )
  } else {
    return (
      <Scanner />
    )
  }
};
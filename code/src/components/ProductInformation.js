import React from "react";
import { useSelector } from "react-redux"
import { Scanner } from "./Scanner";

export const ProductInformation = () => {
  const scannedProduct = useSelector((store) => store.product.product)

  if (scannedProduct.status === 1) {
    return (
      <div>
        <h2>{scannedProduct.product.product_name}</h2>
      </div>
    )
  } else if (scannedProduct.status === 0) {
    return (
      <div>
        <h2>Product not found</h2>
      </div>
    )
  } else {
    return (
      <Scanner />
    )
  }
};
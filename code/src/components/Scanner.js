import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { BarcodeScanner } from "components/BarcodeScanner";
import { StyledButton } from "./StyledButton"
import { fetchProduct } from "../reducers/product"

export const Scanner = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  return (
    <div>
      {showScanner && <BarcodeScanner onDetected={(barcode) => {
        setShowScanner(false)
        console.log(barcode)
        dispatch(fetchProduct(barcode))
      }}></BarcodeScanner>}
      {!showScanner && <StyledButton onClick={() => {
        setShowScanner(true)
      }} />}
    </div>
  )
};
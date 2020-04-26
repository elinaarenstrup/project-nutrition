import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { BarcodeScanner } from "components/BarcodeScanner";
import { ScannerButton } from "./ScannerButton"
import { fetchProduct } from "../reducers/product"

export const Scanner = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  return (
    <>
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
      {showScanner && <BarcodeScanner onDetected={(barcode) => {
        setShowScanner(false)
        console.log(barcode)
        dispatch(fetchProduct(barcode))
      }}></BarcodeScanner>}
      {!showScanner && <ScannerButton onClick={() => {
        setShowScanner(true)
      }} />}
    </>
  );
};
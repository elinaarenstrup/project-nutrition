import React, { useState } from "react";
import styled from "styled-components/macro"
import { useDispatch } from "react-redux"
import { BarcodeScanner } from "components/BarcodeScanner";
import { StyledButton } from "./StyledButton"
import { fetchProduct } from "../reducers/product"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarcode } from "@fortawesome/free-solid-svg-icons"

export const Scanner = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  return (
    <ScanGrid>
      {showScanner && <BarcodeScanner onDetected={(barcode) => {
        setShowScanner(false)
        console.log(barcode)
        dispatch(fetchProduct(barcode))
      }}></BarcodeScanner>}

      {!showScanner &&
        <>
          <IconWrapper>
            <FontAwesomeIcon icon={faBarcode} />
          </IconWrapper>
          <StyledButton buttonText="Start scanner" onClick={() => {
            setShowScanner(true)
          }} />
        </>
      }
    </ScanGrid>
  )
};

const ScanGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  margin: auto;
  padding: 0 40px;
`

const IconWrapper = styled.p`
  font-size: 200px;
  color: #fff;
  margin: 0;
`
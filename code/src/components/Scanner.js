import React, { useState } from "react"
import styled from "styled-components/macro"
import { useDispatch, useSelector } from "react-redux"
import { BarcodeScanner } from "components/BarcodeScanner"
import { StyledButton } from "./StyledButton"
import { fetchProduct } from "../reducers/product"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarcode } from "@fortawesome/free-solid-svg-icons"
import { Puff } from "svg-loaders-react"

const ScanGrid = styled.div`
  display: grid;
  grid-template-rows: 300px 0 100px;
  justify-content: center;
  margin: auto;
  padding: 0 40px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 300px;
  font-size: 200px;
  color: #fff;
  margin: 0;
  text-align: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Scanner = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <ScanGrid>
      {showScanner &&
        <>
          <BarcodeScanner onDetected={(barcode) => {
            setShowScanner(false)
            console.log(barcode)
            dispatch(fetchProduct(barcode))
          }}></BarcodeScanner>
          <StyledButton buttonText="Go back" onClick={() => {
            setShowScanner(false)
          }} />
        </>
      }

      {!showScanner &&
        <>
          <IconWrapper>
            {isLoading && <Puff />}
            {!isLoading && <FontAwesomeIcon icon={faBarcode} />}
          </IconWrapper>
          <StyledButton buttonText="Start scanner" onClick={() => {
            setShowScanner(true)
          }} />
        </>
      }
    </ScanGrid>
  )
}
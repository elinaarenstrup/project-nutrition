import React, { useRef, useState, useLayoutEffect } from "react"
import styled from "styled-components"
import Quagga from "quagga"
import { Puff } from "svg-loaders-react"

const Scan = styled.div`
  margin: auto;

  > video {
    position: absolute;
    top: 250px;
    right: 50%;
    width: 300px;
    height: 200px;
    margin-right: -150px;
  }

  > canvas {
    width: 0;
    height: 0;
  }
`

const StyledLoader = styled(Puff)`
  margin: auto;
`

export const BarcodeScanner = ({ onDetected }) => {
  const [initializing, setInitializing] = useState(true)
  const cameraDivRef = useRef()

  Quagga.onDetected((data) => {
    onDetected(data.codeResult.code)
  })

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: cameraDivRef.current,
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error("Failed to initialize reader", err)
          return
        }
        Quagga.start()
        setInitializing(false)
      }
    )

    return () => {
      Quagga.stop()
    }
  }, [])

  return (
    <>
      {initializing &&
        <StyledLoader
          stroke="#fff"
          strokeOpacity=".125" />
      }
      <Scan ref={cameraDivRef} />
    </>
  )
}

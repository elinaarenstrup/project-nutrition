import React, { useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components"
import Quagga from "quagga";
import Loader from "react-loader-spinner"

const Scan = styled.div`
  margin: auto;

  > video {
    width: 300px;
    height: 200px;
    margin-top: 33px;
  }

  > canvas {
    width: 0;
    height: 0;
  }
`

export const BarcodeScanner = ({ onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();

  Quagga.onDetected((data) => {
    onDetected(data.codeResult.code);
  });

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
          console.error("Failed to initialize reader", err);
          return;
        }
        Quagga.start();
        setInitializing(false);
      }
    );

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <>
      {initializing &&
        <Loader
          type="Puff"
          color="#fff"
          height={50}
          width={50} />
      }
      <Scan ref={cameraDivRef} />
    </>
  );
};

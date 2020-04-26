import React from "react"
import styled from "styled-components"

export const Button = ({ onClick, buttonText }) => {
  return (
    <Button type="button" onClick={onClick}>
      {buttonText}
    </Button>
  )
}

const Button = styled.button`
background: red;
width: 30px;
height: 30px;
`

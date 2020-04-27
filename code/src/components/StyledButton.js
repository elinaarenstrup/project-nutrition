import React from "react"
import styled from "styled-components"

export const StyledButton = ({ onClick, buttonText }) => {
  return (
    <Button type="button" onClick={onClick}>
      {buttonText}
    </Button>
  )
}

const Button = styled.button`
  background: none;
  padding: 5px 25px;
  border: 2px solid #fff;
  border-radius: 4px;
  font-size: 24px;
  color: #fff;
`

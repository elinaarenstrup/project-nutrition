import React from "react"
import styled from "styled-components"

export const StyledButton = ({ onClick, buttonText }) => {
  return (
    <Button type="button" onClick={onClick}>
      {buttonText}
    </Button>
  )
}

//La till width/height för att minska strul med styling på alla ställen
//grid-row för att styra knappen till rätt rad

const Button = styled.button`
  grid-row-start: 2;
  grid-row-end: 3;
  width: 295px;
  height: 50px;
  background: none;
  margin: 20px 0;
  padding: 5px 25px;
  border: 2px solid #fff;
  border-radius: 4px;
  font-size: 24px;
  color: #fff;
`

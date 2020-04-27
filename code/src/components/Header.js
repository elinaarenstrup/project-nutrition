import React from "react";
import styled from "styled-components"

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: -25px; */
  /* padding-top: 25px; */
  background-color: none;
  /* border-bottom: 2px solid #fff; */
  height: 100px;
`

const Text = styled.h1`
color: #fff;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Text>What's in your fridge?</Text>
    </StyledHeader>
  )
}


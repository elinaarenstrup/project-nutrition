import React from "react"
import styled from "styled-components/macro"

const StyledHeader = styled.div`
  padding: 50px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
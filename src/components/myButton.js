import React from "react"
import { Button } from "rebass"
import theme from "./structure/theme"
import styled from "styled-components"

const ButtonStyled = styled(Button)`
  position: relative;
  z-index: 1;
  outline: none;
  border: none;
  overflow: hidden;
  transition: color 0.3s ease-in-out;
  font-family: ${theme.fonts.quicksand};

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 101%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.color.cream};
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: ${theme.color.black};

    &:before {
      transform-origin: center left;
      transform: ${props =>
        props.variant === "link" ? "scaleX(0)" : "scaleX(1)"};
    }
  }
`

const MyButton = props => {
  return (
    <ButtonStyled
      mt={[3]}
      mr={[4, 5, 6]}
      ml={[4, 5, 6]}
      mb={[0]}
      px={[8]}
      py={["10px", 3]}
      fontSize={[2]}
      {...props}
      variant={props.variant}
    />
  )
}

export default MyButton

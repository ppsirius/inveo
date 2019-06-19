import { Link } from "gatsby"
import { Box } from "rebass"
import styled from "styled-components"
import theme from "./structure/theme"

export const MenuLinkStyled = styled(Link)`
  position: relative;
  padding: 10px 0;
  margin-right: ${theme.space[7]}px;
  text-decoration: none;
  font-weight: 700;
  color: ${theme.color.blackBg};
  font-size: ${theme.fontSizes[1]}px;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${theme.color.cream};
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  &.active {
    &:before {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
`

export const MenuLinkWrapperStyled = styled(Box)`
  display: none;

  @media (min-width: ${theme.breakpoints[1]}) {
    display: block
  }
`
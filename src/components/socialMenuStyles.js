import styled from "styled-components"
import theme from "./structure/theme"
import Logo from "../images/inveo_logo_cream.inline.svg"

export const MenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${theme.color.cream};
  color: ${theme.color.black};
  width: 100vw;
  height: 100vh;
  transform: ${props =>
    props.socialMenuActive ? "translateX(0)" : "translateX(100vw)"};
  opacity: ${props => (props.socialMenuActive ? 1 : 0)};
  transition: all 0.2s ease-in;
  z-index: 100;
`

export const MenuListElementStyled = styled("a")`
  display: inline-block;
  width: 100%;
  margin-bottom: 26px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  text-align: center;
  font-weight: 700;
  letter-spacing: 5px;
  color: ${theme.color.black};
  font-size: ${theme.fontSizes[6]}px;
  font-family: ${theme.fonts.quicksand};
  cursor: pointer;
`

export const StyledLogo = styled(Logo)`
  position: relative;
  width: 160px;
`